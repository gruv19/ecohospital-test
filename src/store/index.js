import { createStore } from 'vuex'
import FingerprintJS from '@fingerprintjs/fingerprintjs';

export default createStore({
  state: {
    imei: '',
    tk: '',
    idLogin: '',
  },
  getters: {
  },
  mutations: {
    setImei(state, imei) {
      state.imei = imei;
    },
    setTk(state, tk) {
      state.tk = tk;
    },
    setIdLogin(state, idLogin) {
      state.idLogin = idLogin;
    }
  },
  actions: {
    async getFingerPrint({ commit }) {
      const fpPromise = FingerprintJS.load();
      const fp = await fpPromise
      const result = await fp.get();
      commit('setImei', result.visitorId);
    },
    async login(context, info) {
      const { login, password } = info;
      if (!context.state.imei) {
        await context.dispatch('getFingerPrint');
      }
      const body = JSON.stringify({
        login,
        password,
        'IMEI': context.state.imei,
        Name_app: 'connect',
      });
      const url = new URL('https://host1.medsafe.tech:40443/api/client_login');
      url.searchParams.set('json', body);
      const resp = await fetch(url);
      const data = await resp.json();
      if (data[0].id_login) {
        context.commit('setIdLogin', data[0].id_login);
        context.commit('setTk', data[0].TK);
        return;
      } else {
        alert('Неверный логи или пароль!');
      }
    },
    async getDocumentList(context) {
      const body = JSON.stringify({
        id_login: context.state.idLogin,
        id_people: context.state.idLogin,
        'TK': context.state.tk,
        'IMEI': context.state.imei,
        Name_app: 'connect',
        Name_event: 'list_load',
      });
      const url = new URL('https://host1.medsafe.tech:40443/api/test');
      url.searchParams.set('json', body);
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      return data.body;
    },
    async getDocument(context, info) {
      const { id, type } = info;
      const body = JSON.stringify({
        id_login: context.state.idLogin,
        id_people: context.state.idLogin,
        'TK': context.state.tk,
        'IMEI': context.state.imei,
        Name_app: 'connect',
        Name_event: 'get_pic_path',
        id_document: id,
        doc_type: type,
      });
      const url = new URL('https://host1.medsafe.tech:40443/api/test');
      url.searchParams.set('json', body);
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      return data.body[0];
    }
  },
  modules: {
  }
})
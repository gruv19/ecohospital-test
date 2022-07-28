import { createStore } from 'vuex'
import FingerprintJS from '@fingerprintjs/fingerprintjs';

export default createStore({
  state: {
    imei: '',
  },
  getters: {
  },
  mutations: {
    setImei(state, imei) {
      state.imei = imei;
    }
  },
  actions: {
    async getFingerPrint({ commit }) {
      const fpPromise = FingerprintJS.load();
      const fp = await fpPromise
      const result = await fp.get();
      commit('setImei', result.visitorId);
    }
  },
  modules: {
  }
})

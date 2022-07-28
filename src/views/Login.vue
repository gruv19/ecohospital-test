<template>
  <form action="#" @submit.prevent="authenticate">
    <input type="text" name="login" placeholder="Логин..." v-model="login">
    <input type="password" name="password" placeholder="Пароль..." v-model="password">
    <button type="submit">Войти</button>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    async authenticate() {
      const loginResult = await this.$store.dispatch('login', { login: this.login, password: this.password });
      if (loginResult.id_login) {
        this.$store.commit('setIdLogin', loginResult.id_login);
        this.$store.commit('setTk', loginResult.TK);
        this.$router.push('/');
        return;
      } else {
        alert('Неверный логи или пароль!');
      }
    }
  },
}
</script>
<template>
  <main class="login">
    <section class="login__overlay">
      <header class="login__header">
        <img :src="require('@/assets/logo.png')" class="login__logo">
        <h1 class="login__title">Личный кабинет</h1>
        <p class="login__text">Используйте логин и пароль из&nbsp;памятки</p>
      </header>
      <form class="login__form" action="#" @submit.prevent="authenticate">
        <input class="login__input" type="text" name="login" placeholder="Логин..." v-model="login">
        <input class="login__input login__input--password" type="password" name="password" placeholder="Пароль..." v-model="password">
        <button class="login__button" type="submit">Войти</button>
      </form>
    </section>
  </main>
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

<style lang="scss" scoped>
.login {
  min-width: 320px;
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login__overlay {
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1), 0px 8px 53px rgba(0, 105, 171, 0.25);
  padding: 40px;
  max-width: 420px;
}
.login__header {
  position: relative;
  text-align: center;
}
.login__logo {
  width: 150px;
}
.login__title {
  color: rgb(0, 105, 171);
  margin-top: 40px;
  font-size: 32px;
}
.login__text {
  margin-top: 20px;
  font-size: 16px;
  line-height: 28px;
  color: #797979;
}
.login__form {
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login__input {
  border: none;
  border-bottom: 1px solid #797979;
  border-radius: 0;
  padding: 7px 0;
  outline: none;
  width: 240px;
  font-size: 18px;
  line-height: 24px;
  color: #797979;
  &::placeholder {
    color: rgba(#797979, 0.4);
    font-size: 18px;
    line-height: 24px;
  }
  &:focus {
    border-bottom: 1px solid rgb(0, 105, 171);
  }
}
.login__input {
  &--password {
    margin-top: 40px;
  }
}
.login__button {
  margin-top: 40px;
  width: 240px;
  font-size: 18px;
  line-height: 24px;
  padding: 10px;
  color: rgb(0, 105, 171);
  border: 1px solid rgb(0, 105, 171);
  background-color: rgba(0, 105, 171, 0.2);
  font-weight: bold;
  border-radius: 8px;
}
</style>
<template>
  <form class="form" action="#" @submit.prevent="authenticate">
    <input class="form__input" type="text" name="login" placeholder="Логин..." v-model="login">
    <input class="form__input form__input--password" type="password" name="password" placeholder="Пароль..." v-model="password">
    <button class="form__button" type="submit">Войти</button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
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
        this.$emit('auth', true);
        return;
      } else {
        this.$emit('auth', false);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form__input {
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
    padding: 7px 0 6px;
    border-bottom: 2px solid rgb(0, 105, 171);
  }
}
.form__input {
  &--password {
    margin-top: 40px;
  }
}
.form__button {
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
  outline: none;
  &:hover {
    background-color: rgba(0, 105, 171, 0.4);
    transition: 0.2s;
    cursor: pointer;
  }
  &:focus {
    padding: 9px;
    border: 2px solid rgb(0, 105, 171);
    background-color: rgba(0, 105, 171, 0.4);
  }
}
</style>
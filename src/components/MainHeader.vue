<template>
  <header class="main-header">
    <img :src="require('@/assets/logo.png')" class="main-header__logo">
    <h1 class="main-header__title">Личный кабинет</h1>
    <div class="main-header__user">
      <p class="main-header__username">Ваш логин: {{ idLogin }}</p>
      <a class="main-header__logout" href="#" @click.prevent="logout">Выйти</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  computed: {
    idLogin() {
      return this.$store.state.idLogin;
    }
  },
  methods: {
    logout() {
      this.$store.commit('setIdLogin', '');
      this.$store.commit('setTk', '');
      this.$router.push('/login');
    },
  },
}
</script>

<style lang="scss" scoped>
.main-header {
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  justify-items: end;
  align-items: center;
}
.main-header__logo {
  width: 150px;
  margin: 0 auto;
  display: block;
}
.main-header__title {
  color: rgb(0, 105, 171);
  font-size: 20px;
  @media (min-width: 720px) {
    font-size: 36px;
  }
}
.main-header__user {
  grid-column: 2/3;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  font-size: 14px;
  @media (min-width: 720px) {
    font-size: 18px;
    margin-top: 10px;
  }
}
.main-header__username {
  margin-right: 20px;
  color: rgba(#797979, 0.7);
  @media (min-width: 720px) {
    margin-right: 30px;
  }
}
.main-header__logout { 
  color: rgba(#797979, 0.7);
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #797979;
  }
}
</style>
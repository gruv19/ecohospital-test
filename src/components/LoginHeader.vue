<template>
  <header class="login-header">
    <img :src="require('@/assets/logo.png')" class="login-header__logo">
    <h1 class="login-header__title">Личный кабинет</h1>
    <p class="login-header__text">Используйте логин и пароль из&nbsp;памятки</p>
  </header>
</template>

<style lang="scss" scoped>
.login-header {
  position: relative;
  text-align: center;
}
.login-header__logo {
  width: 150px;
}
.login-header__title {
  color: rgb(0, 105, 171);
  margin-top: 40px;
  font-size: 32px;
}
.login-header__text {
  margin-top: 20px;
  font-size: 16px;
  line-height: 28px;
  color: #797979;
}
</style>
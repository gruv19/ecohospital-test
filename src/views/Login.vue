<template>
  <form action="#" @submit.prevent="login">
    <input type="text" name="login" placeholder="Логин...">
    <input type="password" name="password" placeholder="Пароль...">
    <button type="submit">Войти</button>
  </form>
</template>

<script>
export default {
  name: 'Login',

}
</script>
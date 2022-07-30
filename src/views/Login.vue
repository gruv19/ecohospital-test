<template>
  <main class="login">
    <section class="login__overlay">
      <LoginHeader />
      <div class="login__form">
        <LoginForm @auth="authenticate"/>
      </div>
    </section>
  </main>
</template>

<script>
import LoginHeader from '@/components/LoginHeader.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: { LoginHeader, LoginForm },
  methods: {
    authenticate(result) {
      if (result) {
        this.$router.push('/');
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
.login__form {
  margin-top: 30px;
}
</style>
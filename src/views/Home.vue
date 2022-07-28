<template>
  <main>
    <a href="#" @click.prevent="logout">Выйти</a>
  </main>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout() {
      this.$store.commit('setIdLogin', '');
      this.$store.commit('setTk', '');
      this.$router.push('/login');
    }
  },
}
</script>
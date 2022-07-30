<template>
  <main class="not-found-page">
    <div class="not-found-page__error">
      <span class="not-found-page__num">4</span>
      <img :src="require('@/assets/logo-img.png')" class="not-found-page__logo">
      <span class="not-found-page__num">4</span>
    </div>
    <p class="not-found-page__text">Страница не найдена</p>
    <router-link class="not-found-page__link" to="/">Вернуться на гравную страницу</router-link>
  </main>
</template>

<style lang="scss" scoped>
.not-found-page {
  width: 100%;
  height: 100vh;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.not-found-page__error {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: rgb(0, 105, 171);
}
.not-found-page__logo {
  margin: 0 10px;
}
.not-found-page__text {
  color: #797979;
  font-size: 32px;
  margin-top: 15px;
  text-align: center;
}
.not-found-page__link {
  color: rgba(#797979, 0.7);
  font-size: 18px;
  margin-top: 30px;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: #797979;
  }
}
</style>
<template>
  <main class="home">
    <MainHeader />
    <section class="home__documents">
      <h2 class="home__section-title">Ваши документы</h2>
      <Loading v-if="loaderState" />
      <DocList v-else :docs="documents" />
    </section>
  </main>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import Loading from '@/components/Loading.vue';
import DocList from '@/components/DocList.vue';

export default {
  name: 'Home',
  components: { MainHeader, Loading, DocList },
  data() {
    return {
      documents: [],
      loaderState: true,
    };
  },
  async mounted() {
    this.documents = await this.$store.dispatch('getDocumentList');
    this.loaderState = false;
  },
}
</script>

<style lang="scss" scoped>
.home {
  min-width: 320px;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 40px 10px 0;
}
.home__documents {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 720px) {
    margin-top: 60px;
  }
}
.home__section-title {
  text-align: center;
  color: #797979;
  font-size: 28px;
  @media (min-width: 720px) {
    font-size: 44px;
  }
}
</style>
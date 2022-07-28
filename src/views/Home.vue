<template>
  <main>
    <div>
      <a href="#" @click.prevent="logout">Выйти</a>
    </div>
    <ul v-if="documents.length">
      Документы
      <li v-for="doc in documents" :key="doc.id_document">
        {{ doc.doc_name }}
        <a 
          href="#" 
          @click.prevent="download(doc.id_document, doc.doc_type)" 
        >
          Скачать
        </a>
      </li>
    </ul>
  </main>
</template>

<script>
import { BASE_API } from '../consts.js';

export default {
  name: 'Home',
  data() {
    return {
      documents: [],
    };
  },
  methods: {
    logout() {
      this.$store.commit('setIdLogin', '');
      this.$store.commit('setTk', '');
      this.$router.push('/login');
    },
    async download(id, type) {
      const document = await this.$store.dispatch('getDocument', { id, type });
      const tempLink = window.document.createElement('a');
      tempLink.href = `${BASE_API}${document.hash}`;
      tempLink.setAttribute('download', '');
      tempLink.click();
      tempLink.remove();
    }
  },
  async mounted() {
    this.documents = await this.$store.dispatch('getDocumentList');
  },
}
</script>
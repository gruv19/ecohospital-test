<template>
  <div class="doc-list doc-list--empty" v-if="!docs.length">Данных для отображения нет</div>
  <ul class="doc-list" v-else>
    <li v-for="doc in docs" :key="doc.id_document" class="doc-list__item">
      <a 
        href="#" 
        @click.prevent="download(doc.id_document, doc.doc_type)"
        class="doc-list__download"
      >
        <svg class="doc-list__download-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
          <path d="M24 24v4H8v-4H6v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4Z"/>
          <path d="m21 21l-1.414-1.414L17 22.172V14h-2v8.172l-2.586-2.586L11 21l5 5l5-5zm7-17V2h-6v10h2V8h3V6h-3V4h4zm-11 8h-4V2h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3zm-2-2h2a1.001 1.001 0 0 0 1-1V5a1.001 1.001 0 0 0-1-1h-2zM9 2H4v10h2V9h3a2.003 2.003 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2zM6 7V4h3l.001 3z"/>
        </svg>
      </a>
      <span class="doc-list__doc-name">{{ doc.doc_name }} от {{ doc.date_doc }}</span>
    </li>
  </ul>
</template>

<script>
import { BASE_API } from '../consts.js';

export default {
  name: 'DocList',
  props: {
    docs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    async download(id, type) {
      const document = await this.$store.dispatch('getDocument', { id, type });
      const tempLink = window.document.createElement('a');
      tempLink.href = `${BASE_API}${document.hash}`;
      tempLink.setAttribute('download', '');
      tempLink.click();
      tempLink.remove();
    }
  },
}
</script>

<style lang="scss" scoped>
.doc-list {
  margin-top: 30px;
  font-size: 15px;
  color: rgba(#797979, 0.7);
  @media (min-width: 720px) {
    font-size: 20px;
    margin-top: 50px;
  }
}
.doc-list--empty {
  margin-top: 50px;
  font-size: 15px;
  color: rgba(#797979, 0.7);
  @media (min-width: 720px) {
    font-size: 20px;
    margin-top: 60px;
  }
}
.doc-list__item {
  display: flex;
  align-items: center;
  & + & {
    margin-top: 20px;
  }
}
.doc-list__doc-name {
  margin-left: 10px;
  font-size: 15px;
  color: rgba(#797979, 0.7);
  @media (min-width: 720px) {
    font-size: 20px;
    margin-left: 20px;
  }
}
.doc-list__download-icon {
  width: 30px;
  height: 30px;
  fill: rgb(229, 99, 83);
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 720px) {
    width: 36px;
    height: 36px;
  }
}
</style>
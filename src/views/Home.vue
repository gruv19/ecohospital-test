<template>
  <main class="home">
    <header class="home__header">
      <img :src="require('@/assets/logo.png')" class="home__logo">
      <h1 class="home__title">Личный кабинет</h1>
      <div class="home__user">
        <p class="home__username">Ваш логин: {{ idLogin }}</p>
        <a class="home__logout" href="#" @click.prevent="logout">Выйти</a>
      </div>
    </header>
    <section class="home__documents">
      <h2 class="home__section-title">Ваши документы</h2>
      <div class="home__loading" v-if="!documents.length">
        <svg class="home__loading-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <g transform="rotate(0 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(30 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(60 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(90 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(120 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(150 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(180 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(210 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(240 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(270 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(300 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(330 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#0069ab">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
            </rect>
          </g>
        </svg>
      </div>
       <ul v-else class="home__doc-list">
        <li v-for="doc in documents" :key="doc.id_document" class="home__doc-item">
          <a 
            href="#" 
            @click.prevent="download(doc.id_document, doc.doc_type)"
            class="home__download"
          >
            <svg class="home__download-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
              <path d="M24 24v4H8v-4H6v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4Z"/>
              <path d="m21 21l-1.414-1.414L17 22.172V14h-2v8.172l-2.586-2.586L11 21l5 5l5-5zm7-17V2h-6v10h2V8h3V6h-3V4h4zm-11 8h-4V2h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3zm-2-2h2a1.001 1.001 0 0 0 1-1V5a1.001 1.001 0 0 0-1-1h-2zM9 2H4v10h2V9h3a2.003 2.003 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2zM6 7V4h3l.001 3z"/>
            </svg>
          </a>
          <span class="home__doc-name">{{ doc.doc_name }} от {{ doc.date_doc }}</span>
        </li>
      </ul>
    </section>
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
    console.log(this.documents);
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
.home__header {
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  justify-items: end;
  align-items: center;
}
.home__logo {
  width: 150px;
  margin: 0 auto;
  display: block;
}
.home__title {
  color: rgb(0, 105, 171);
  font-size: 20px;
  @media (min-width: 720px) {
    font-size: 36px;
  }
}
.home__user {
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
.home__username {
  margin-right: 20px;
  color: rgba(#797979, 0.7);
  @media (min-width: 720px) {
    margin-right: 30px;
  }
}
.home__logout { 
  color: rgba(#797979, 0.7);
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #797979;
  }
}
.home__documents {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home__section-title {
  text-align: center;
  color: #797979;
  font-size: 28px;
  @media (min-width: 720px) {
    font-size: 44px;
  }
}
.home__loading {
  margin-top: 20px;

}
.home__loading-icon {
  width: 150px;
  height: 150px;
  @media (min-width: 720px) {
    width: 200px;
    height: 200px;
  }
}
.home__doc-list {
  margin-top: 30px;
  @media (min-width: 720px) {
    margin-top: 30px;
  }
}
.home__doc-item {
  display: flex;
  align-items: center;
  & + & {
    margin-top: 20px;
  }
}
.home__doc-name {
  margin-left: 10px;
  font-size: 15px;
  color: rgba(#797979, 0.7);
  @media (min-width: 720px) {
    font-size: 20px;
    margin-left: 20px;
  }
}
.home__download-icon {
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
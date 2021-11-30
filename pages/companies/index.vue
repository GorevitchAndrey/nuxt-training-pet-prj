<template>
  <div class="content companies-container layout">
    <div class="companies">
      <div class="companies__directory">
        <div class="search">
          <p class="search__title big-title">Каталог компаний</p>
          <div class="search__container">
            <div class="search__block">
              <svg-search />
              <input
                type="text"
                v-model="search"
                placeholder="Поиск..."
                @keyup.enter="searchCardInList()"
                class="search__input"
              >
              <button class="search__button" @click="searchCardInList()">
                <div>Найти</div>
              </button>
            </div>
          </div>
        </div>

        <a v-for="companies of companyList" :key="companies.id">
          <div class="companies__card" @click="openCard(companies)">
            <div class="product-card__logo">
              <img class="product-card__image icon" :src="companies.picture">
            </div>
            <div class="product-card__content">
              <div class="product-card__title">{{ companies.title }}</div>
              <div class="product-card__description">{{ companies.description_short }}</div>
              <div
                class="product-card__industry"
              >
                <div
                  class="specialization grid"
                  v-for="specialization of companies.companySpecializations"
                  :key="specialization.id"
                >
                  <span class="specialization__card">{{ specialization.title }}</span>
                </div>
                
              </div>
            </div>
            <div class="product-card__open-card">
              <svg-arrow fill='#EF3E4A'/>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/svg/Logo.vue';
import SvgArrow from '@/components/svg/Arrow.vue';
import SvgSearch from '@/components/svg/Search.vue';

export default {
  name: 'Companies',

  components: {
    Logo,
    SvgArrow,
    SvgSearch,
  },

  async asyncData({$axios}) {
    const company = await $axios.$get('http://api-test.duotek.ru/companies');
    return {company: company.data};
  },

  data() {
    return {
      search: '',
      searchResult: '',
      selectedType: null,
      types: [],
    }
  },

  computed: {
    companyList() {
      return this.company.filter(item => item.title.toUpperCase().indexOf(this.searchResult.toUpperCase()) !== -1);
    },
  },

  methods: {
    openCard(companies) {
      this.$router.push('/companies/' + companies.id);
    },

    searchCardInList() {
      this.searchResult = this.search;
    },
  },

  watch: {
    search(val) {
      if (val === '') {
        this.searchCardInList();
      }
    }
  }
}
</script>

<style lang="scss" scope>
.companies-container {
  .companies {
    display: flex;

    &__card {
      display: flex;
      justify-content: flex-start;
      position: relative;
      padding: 30px;
      border-radius: 8px;
      cursor: pointer;
      transition: transparent;

      &:hover {
        background-color: rgba(3, 9, 83, 0.03);
        transition: background-color .5s ease;

        .product-card__title {
          color: #EF3E4A;
          transition: color .1s ease;
        }

        .specialization {
          background-color: #fff;
          transition: background-color .1s ease;
        }

        .product-card__open-card {
          visibility: visible;
        }
      }
    }

    &__filter {
      width: 264px;
      height: 204px;
      order: 2;
      flex-grow: 0;
      flex-shrink: 0;
      background-color: #F7F7F7;
    }
  }
}

.search {
  padding: 0 36px;
  width: 100%;

  &__container {
    width: 720px;
    margin-bottom: 20px;
  }

  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
  }

  &__input {
    border: none;
    outline:none;
    width: 100%;
  }

  &__button {
    height: 100%;
    padding: 6px 24px;
    cursor: pointer;
    color: #fff;
    background: #030953;
    border-radius: 0 4px 4px 0;
    border: none;

    &:hover {
      opacity: 0.3;
    }
  }
}

.product-card {
  font-style: normal;
  font-weight: normal;

  &__logo {
    width: 165px;
    padding-right: 20px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  &__image {
    max-width: 100%;
    max-height: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-right: 38px;
  }

  &__title {
    font-size: 24px;
    line-height: 100%;
    color: #030953;
    margin-bottom: 16px;
  }
  &__description {
    font-size: 14px;
    line-height: 150%;
    text-align: left;
    color: #333333;
    margin-bottom: 16px;
  }

  &__industry {
    display: flex;
    color: #333333;
    margin-right: 4px;
    flex-wrap: wrap;
  }

  &__open-card {
    visibility: hidden;
    transform: rotate(180deg);
    display: block;
    position: absolute;
    bottom: 16px;
    right: 23px;
  }
}

.specialization {
  display: block;
  width: fit-content;
  background-color: #F7F7F7;
  border-radius: 200px;
  margin-top: 10px;
  margin-right: 10px;

    &__card {
      display: block;
      padding: 5px 10px;
      flex-shrink: 0;
      flex-grow: 0;
      position: relative;
    }
}
</style>
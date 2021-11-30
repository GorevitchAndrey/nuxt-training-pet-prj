<template>
  <div class="header-container">
    <div class="header">
      <div class="header__logo">
        <nuxt-link to="/">
          <logo></logo>
        </nuxt-link>
        
      </div>
      <div class="header__center">
        <ul class="header__list">
          <li class="header__item" v-for="item in navigationList" :key="item.id">
            <nuxt-link active-class="active-link" :to="item.link">
              {{ item.title }}
            </nuxt-link>
            
          </li>
        </ul>
      </div>
      <div class="header__login">
        Вход и регистрация
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './svg/Logo.vue';

export default {
  name: 'Navbar',

  components: {
    Logo,
  },

  data() {
    return {
      navigationList: [
        { title: 'Тендеры', link: '/tender' },
        { title: 'Компании', link: '/companies' },
        { title: 'Продукты', link: '/product' },
        { title: 'Кейсы', link: '/cases' },
        { title: 'Блог', link: '/blog' },
      ],
    }
  },
}
</script>

<style lang="scss">
.header-container {
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #030953;
  border-bottom: 1px solid #F2F2F2;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 96px;
    width: 100%;
    margin: 0 100px;
    padding: 0 36px;

    &__list {
      display: flex;
      list-style-type: none;
      padding: 0;
    }

    &__item {
      margin-right: 40px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__item,
    &__login {
      cursor: pointer;

      &:hover {
        color: #030953;
        opacity: 0.3;
      }
    }
  }
}
</style>
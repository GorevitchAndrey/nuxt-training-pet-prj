<template>
  <section class="error-block">
    <h1 class="error-block__title">Error 404</h1>
    <nuxt-link to="/companies" class="error-block__come-back">Вернуться к выбору компании</nuxt-link>
  </section>
</template>

<style lang="scss">
.error-block {
  width: 600px;
  margin: 0 auto;
  text-align: center;
  padding-top: 10rem;

  &__title {
    color: rgb(247, 115, 115);
  }

  &__come-back {
    color: #030953;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
<template>
  <div class="company layout content">
    <div class="back-company-list">
      <nuxt-link class="back-company-list__link" to="/companies">
        <svg-arrow />
        <span>Компании</span>
      </nuxt-link>
    </div>

    <div class="company__title big-title">
      {{ company.title }}
    </div>

    <div class="company__body">
      <div class="company__left-block">
        <div class="company__description">
          <div class="description__wrap">
            <div class="cell">
              <div class="cell-row">
                <div class="cell-row__value">{{ company.age }}</div>
                <div class="cell-row__title">лет</div>
              </div>
            </div>
            <div class="cell">
              <div class="cell-row">
                <div class="cell-row__value">{{ company.staff }}</div>
                <div class="cell-row__title">человек</div>
              </div>
            </div>
          </div>
          <div class="description__short">
            {{ company.description_short }}
          </div>
          <div class="description__basic">
            {{ company.description_full }}
          </div>
        </div>

        <div class="company__specialization">
          <div class="specialization__title">
            Проектная специализация
          </div>
          <div class="specialization__list">
            <div
              class="specialization grid"
              v-for="specialization of company.companySpecializations"
              :key="specialization.id"
            >
              <span class="specialization__card">{{ specialization.title }}</span>
            </div>
          </div>
        </div>

        <div class="company__specialization">
          <div class="specialization__title">
            Технологии
          </div>
          <div class="specialization__list">
            <div
              class="specialization grid"
              v-for="specialization of company.industries"
              :key="specialization.id"
            >
              <span class="specialization__card">{{ specialization.title }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="company__right-block">
        <div class="contacts">
          <img width="140" :src="company.picture" class="icon">
        </div>
        <div class="contacts-row">
          <div class="secondary-info">
            <div class="secondary-info__title">Сайт:</div>
            <div class="secondary-info__value">
              {{ company.url }}
            </div>
          </div>
        </div>
        <div class="contacts-row">
          <div class="secondary-info">
            <div class="secondary-info__title">Город:</div>
            <div class="secondary-info__value">
              {{ company.city.title }}
            </div>
          </div>
        </div>
        <div class="contacts-row">
          <div class="secondary-info">
            <div class="secondary-info__title">E-mail:</div>
            <div class="secondary-info__value">
              {{ company.contact_email }}
            </div>
          </div>
        </div>
        <div class="contacts-row">
          <div class="secondary-info">
            <div class="secondary-info__title">Телефон:</div>
            <div class="secondary-info__value">
              {{ company.contact_phone }}
            </div>
          </div>
        </div>
        <div class="contacts-row">
          <div class="secondary-info">
            <div class="secondary-info__title">Whatsapp:</div>
            <div class="secondary-info__value">
              {{ company.contact_whatsapp || '-' }}
            </div>
          </div>
        </div>
        <div class="contacts-row">
          <div class="secondary-info">
            <div class="secondary-info__title">Skype:</div>
            <div class="secondary-info__value">
              {{ company.contact_skype || '-' }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({$axios, params}) {
    const company = await $axios.$get('http://api-test.duotek.ru/companies/info?id=' + params.id);
    return {company: company.data};
  },
}
</script>

<style lang="scss" scoped>
.company {
  &__body {
    display: flex;
  }

  &__right-block {
    order: 2;
    flex-grow: 0;
    flex-shrink: 0;
    width: 264px;
    margin-left: 120px;
  }

  &__specialization {
    margin-top: 40px;
  }
}

.back-company-list {
  position: absolute;
  top: 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #030953;

  &__link {
    display: flex;
    align-items: center;

    .arrow {
      margin-right: 14px;
    }
  }

  &:hover {
    opacity: 0.3;
  }
}

.description {
  color: #333333;

  &__wrap {
    display: flex;
    margin-top: 18px;
  }

  &__short {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;
    margin-top: 10px;
  }

  &__basic {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    margin-top: 24px;
  }
}

.cell-row {
  display: flex;

  &:first-child {
    margin-right: 20px;
  }

  &__value {
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 110%;
    color: #EF3E4A;
  }

  &__title {
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #333333;
  }
}

.contacts-row {
  margin-top: 20px;
}

.specialization {
  &__title {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 100%;
    color: #000000;
  }

  &__list {
    display: flex;
  }
}

.secondary-info {
  &__title {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #808080;
  }
}
</style>

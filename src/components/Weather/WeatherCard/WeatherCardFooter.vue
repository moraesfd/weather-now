<template>
  <div class="weather-card-footer">
    <div class="weather-card-footer__top" v-if="active">
      <div class="left">
        <h4 class="title">Humidity</h4>
        <h4 class="info">{{ info.humidity + '%' }}</h4>
      </div>
      <div class="right">
        <h4 class="title">Pressure</h4>
        <h4 class="info">{{ info.pressure + 'hPa' }}</h4>
      </div>
    </div>
    <div class="weather-card-footer__bottom">
      <h5 class="updated">
        Updated at {{ new Date(updatedAt).toLocaleTimeString('en-US') }}
      </h5>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WeatherCardFooter',
  props: {
    active: Boolean,
    info: Object
  },
  computed: {
    ...mapGetters({ updatedAt: 'getUpdatedAt' })
  }
}
</script>

<style lang="scss">
.weather-card-footer {
  padding: 10px 0;
  background-color: rgba(241, 241, 241, 0.5);

  &__top {
    display: flex;
    justify-content: space-evenly;
    padding-top: 10px;

    .title {
      font-size: 12px;
      font-weight: 400;
      color: $color-light-gray;
      text-transform: uppercase;
      letter-spacing: 0.2px;
    }

    .info {
      font-size: 16px;
      font-weight: 400;
      color: $color-dark-gray;
      letter-spacing: 0.2px;
      padding-top: 5px;
    }
  }

  &__bottom {
    font-size: 10px;
    text-align: center;
    font-weight: 400;
    color: $color-light-gray;
    padding: 10px 0;
  }
}
</style>

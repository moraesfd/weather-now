<template>
  <div class="weather-card-header">
    <h3 class="weather-card-header__text">{{ headerText }}</h3>
  </div>
</template>

<script>
export default {
  name: 'WeatherCardHeader',
  props: {
    headerText: String
  }
}
</script>

<style lang="scss">
.weather-card-header {
  display: block;
  padding: 15px 0;
  border-bottom: 1px solid $color-divider;

  &__text {
    color: $color-dark-gray;
    font-weight: 400;
    font-size: 18px;
  }
}
</style>

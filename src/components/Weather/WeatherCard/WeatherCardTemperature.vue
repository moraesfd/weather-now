<template>
  <div class="weather-card-temperature">
    <h3 class="weather-card-temperature__text">
      <span class="weather-card-temperature__text--blue">
        {{ temperature }}
      </span>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'WeatherCardTemperature',
  props: {
    temperature: String
  }
}
</script>

<style lang="scss">
.weather-card-temperature {
  display: block;
  padding: 20px 0;

  &__text {
    font-size: 84px;
    font-weight: 400;

    &--blue {
      color: $color-blue;
    }

    &--orange {
      color: $color-orange;
    }

    &--red {
      color: $color-red;
    }
  }
}
</style>

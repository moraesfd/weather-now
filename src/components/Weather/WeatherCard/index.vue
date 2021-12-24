<template>
  <div
    class="weather-card"
    @mouseover="activeExtraInfo = true"
    @mouseleave="activeExtraInfo = false"
  >
    <WeatherCardHeader :headerText="'Nuuk, GL'" />
    <WeatherCardTemperature :temperature="'-4º'" />
    <WeatherCardFooter :active="activeExtraInfo" />
  </div>
</template>

<script>
import WeatherCardFooter from './WeatherCardFooter.vue'
import WeatherCardHeader from './WeatherCardHeader.vue'
import WeatherCardTemperature from './WeatherCardTemperature.vue'

export default {
  name: 'WeatherCard',
  data() {
    return {
      activeExtraInfo: false
    }
  },
  components: {
    WeatherCardHeader,
    WeatherCardTemperature,
    WeatherCardFooter
  }
}
</script>

<style lang="scss">
.weather-card {
  width: 100%;
  max-width: 260px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 0 5px rgba(51, 51, 51, 0.1);
  cursor: pointer;

  @include breakpoint(xs) {
    background-color: blue;
  }

  &.active {
    max-height: 320px;
  }
}
</style>

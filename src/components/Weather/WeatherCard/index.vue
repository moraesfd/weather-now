<template>
  <div class="weather-card">
    <WeatherCardHeader :headerText="'Nuuk, GL'" />
    <WeatherCardTemperature :temperature="'-4º'" />
    <WeatherCardFooter />
  </div>
</template>
<script>
import WeatherCardFooter from './WeatherCardFooter.vue'
import WeatherCardHeader from './WeatherCardHeader.vue'
import WeatherCardTemperature from './WeatherCardTemperature.vue'

export default {
  name: "WeatherCard",
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
  height: 100%;
  max-width: 280px;
  max-height: 280px;
  background-color: white;
  border-radius: 10px;
  margin: 15px;
}
</style>

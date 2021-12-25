<template>
  <section class="weather-component">
    <WeatherCard
      v-for="(weatherLocation, index) in weatherList"
      :key="index"
      :weather-location="weatherLocation"
    />
  </section>
</template>

<script>
import WeatherCard from './WeatherCard'
export default {
  name: 'WeatherComponent',
  components: {
    WeatherCard
  },
  props: {
    weatherList: Array
  },
  data() {
    return {
      counter: 3
    }
  }
}
</script>

<style lang="scss">
.weather-component {
  width: 100%;
  height: 100%;
  min-height: 800px;
  background-color: $color-bg-default;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 60px;
}
</style>

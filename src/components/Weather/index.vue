<template>
  <section class="weather-component">
    <WeatherCard
      v-for="(weatherLocation, index) in weatherList"
      :key="index"
      :weather-location="weatherLocation"
    />
    <h1>{{ weatherList }}</h1>
  </section>
</template>

<script>
import WeatherCard from './WeatherCard'
export default {
  name: 'WeatherComponent',
  components: {
    WeatherCard
  },
  data() {
    return {
      listWeatherCities: ['Nuuk, GL', 'Urubici, BR', 'Nairobi, KE']
    }
  },
  mounted() {
    this.$store.commit('updateListWeatherCities', this.listWeatherCities)
    this.$store.dispatch('getWeatherList')
  },
  computed: {
    weatherList() {
      return this.$store.getters.weatherList
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

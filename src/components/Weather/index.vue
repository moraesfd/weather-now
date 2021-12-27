<template>
  <section class="weather-component">
    <WeatherCard
      v-for="(weatherLocation, index) in orderedWeatherList"
      :key="index"
      :weather-location="weatherLocation[0]"
      :weather-header="listWeatherCities[index]"
    />
  </section>
</template>

<script>
import WeatherCard from './WeatherCard'
import { mapActions, mapGetters } from 'vuex'
import Utils from '@/services/utils'

export default {
  name: 'WeatherComponent',
  components: {
    WeatherCard
  },
  data() {
    return {
      listWeatherCities: ['Nuuk, GL', 'Urubici, BR', 'Nairobi, KE'],
      minutesToUpdateWeather: 10
    }
  },
  mounted() {
    this.$store.commit('setListWeatherCities', this.listWeatherCities)
    this.loadOrUpdateWeatherData(this.updatedAt, this.minutesToUpdateWeather)
    setInterval(() => {
      this.loadOrUpdateWeatherData(this.updatedAt, this.minutesToUpdateWeather)
    }, 1000)
  },
  methods: {
    ...mapActions(['setWeatherList']),
    loadOrUpdateWeatherData(date, minutes) {
      if (!date) {
        this.setWeatherList()
      }
      let lastUpdate = new Date(date)
      let nextUpdate = new Date()
      const minutesToAdd = minutes * 60 * 1000
      nextUpdate.setTime(lastUpdate.getTime() + minutesToAdd)
      if (nextUpdate <= new Date()) {
        this.setWeatherList()
      }
    }
  },
  computed: {
    ...mapGetters({ weatherList: 'getWeatherList', updatedAt: 'getUpdatedAt' }),
    orderedWeatherList() {
      return Utils.orderListByArray(this.weatherList, this.listWeatherCities)
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

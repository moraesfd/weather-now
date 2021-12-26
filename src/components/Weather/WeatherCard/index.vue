<template>
  <div
    class="weather-card"
    @mouseover="activeExtraInfo = true"
    @mouseleave="activeExtraInfo = false"
  >
    <WeatherCardHeader
      :header-text="weatherLocation.location ? weatherLocation.location : ''"
    />
    <div v-if="loadingStatus" class="loading">
      <Spinner />
    </div>
    <div v-else class="content">
      <WeatherCardTemperature
        :temperature="
          weatherLocation.weather.temp ? weatherLocation.weather.temp : ''
        "
      />
      <WeatherCardFooter
        :active="activeExtraInfo"
        :info="weatherLocation.weather ? weatherLocation.weather : ''"
        :updated-at="
          weatherLocation.updated_at ? weatherLocation.updated_at : ''
        "
      />
    </div>
  </div>
</template>

<script>
import WeatherCardFooter from './WeatherCardFooter.vue'
import WeatherCardHeader from './WeatherCardHeader.vue'
import WeatherCardTemperature from './WeatherCardTemperature.vue'
import Spinner from 'vue-simple-spinner'

export default {
  name: 'WeatherCard',
  props: {
    weatherLocation: Object
  },
  data() {
    return {
      activeExtraInfo: false
    }
  },
  components: {
    WeatherCardHeader,
    WeatherCardTemperature,
    WeatherCardFooter,
    Spinner
  },
  computed: {
    loadingStatus() {
      return this.$store.getters.loadingStatus
    }
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

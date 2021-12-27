<template>
  <div
    class="weather-card"
    @mouseover="activeExtraInfo = true"
    @mouseleave="activeExtraInfo = false"
  >
    <WeatherCardHeader :header-text="weatherHeader" />
    <div v-if="loadingStatus" class="loading">
      <Spinner
        size="50"
        line-size="7"
        line-fg-color="white"
        line-bg-color="#737C84"
      />
    </div>
    <div v-else class="content">
      <WeatherCardTemperature
        :temperature="weatherLocation ? weatherLocation.weather.temp : ''"
      />
      <WeatherCardFooter
        :active="activeExtraInfo"
        :info="weatherLocation ? weatherLocation.weather : ''"
      />
    </div>
  </div>
</template>

<script>
import WeatherCardFooter from './WeatherCardFooter.vue'
import WeatherCardHeader from './WeatherCardHeader.vue'
import WeatherCardTemperature from './WeatherCardTemperature.vue'
import Spinner from 'vue-simple-spinner'
import { mapGetters } from 'vuex'

export default {
  name: 'WeatherCard',
  props: {
    weatherLocation: Object,
    weatherHeader: String
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
    ...mapGetters({ loadingStatus: 'getLoadingStatus' })
  }
}
</script>

<style lang="scss">
.weather-card {
  width: 100%;
  max-width: 260px;
  min-height: 223px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 0 5px rgba(51, 51, 51, 0.1);
  cursor: pointer;
  position: relative;

  @include breakpoint(xs) {
    background-color: blue;
  }

  &.active {
    max-height: 320px;
  }

  .loading {
    width: 100%;
    top: 0;
    left: 0;

    div {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
    }
  }
}
</style>

<template>
  <section class="weather-component">
    <WeatherCard v-for="index in 3" :key="index" />
  </section>
</template>
<script>
import WeatherCard from './WeatherCard'
export default {
  name: "WeatherComponent",
  components: {
    WeatherCard
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
  padding: 50px 0;
  background-color: $color-bg-default;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>

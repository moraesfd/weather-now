<template>
  <div class="weather-card-temperature">
    <h3>{{ temperature }}</h3>
  </div>
</template>
<script>
export default {
  name: "WeatherCardTemperature",
  props: {
    temperature: String
  }
}
</script>

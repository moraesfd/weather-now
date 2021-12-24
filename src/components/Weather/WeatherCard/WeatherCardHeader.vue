<template>
  <div class="weather-card-header">
    <h3>{{ headerText }}</h3>
  </div>
</template>
<script>
export default {
  name: "WeatherCardHeader",
  props: {
    headerText: String
  }
}
</script>

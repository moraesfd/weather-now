<template>
  <div class="home">
    <HeaderComponent />
    <WeatherComponent />
    <p>
      {{ weatherFromApi }}
    </p>
    <FooterComponent
      info="Weather Now - Uma aplicação teste que mostra a temperatura agora. 2021."
    />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header'
import WeatherComponent from '@/components/Weather'
import FooterComponent from '@/components/Footer'
import ApiService from '../services/api.js'

export default {
  name: 'HomePage',
  data() {
    return {
      weatherFromApi: null
    }
  },
  metaInfo() {
    return {
      title: 'Weather Now',
      meta: [
        {
          name: 'description',
          content:
            'Weather Now - Uma aplicação teste que mostra a temperatura agora'
        },
        {
          property: 'og:title',
          content: 'Weather Now'
        },
        { property: 'og:site_name', content: 'Weather Now' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  },
  components: {
    HeaderComponent,
    WeatherComponent,
    FooterComponent
  },
  mounted() {
    this.getDataFromApi()
  },
  methods: {
    async getDataFromApi() {
      this.weatherFromApi = await ApiService.getWeatherByCity('Nuuk')
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>

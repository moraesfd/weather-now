<template>
  <div class="home">
    <HeaderComponent />
    <WeatherComponent :weather-list="weatherFromApi" />
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
  data() {
    return {
      listWeatherCities: ['Nuuk, GL', 'Urubici, BR', 'Nairobi, KE'],
      weatherFromApi: []
    }
  },
  components: {
    HeaderComponent,
    WeatherComponent,
    FooterComponent
  },
  mounted() {
    this.weatherFromApi = this.getWeatherListDataFromApi(this.listWeatherCities)
    window.setInterval(() => {
      this.weatherFromApi = this.getWeatherListDataFromApi(
        this.listWeatherCities
      )
    }, 10000)
  },
  methods: {
    getWeatherListDataFromApi(list) {
      let listWeatherResponse = []
      list.map(async (city) => {
        let weatherCity = {
          location: city,
          weather: await ApiService.getWeatherByCity(city),
          updated_at: new Date()
        }
        console.log(weatherCity)
        listWeatherResponse.push(weatherCity)
      })
      return listWeatherResponse
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

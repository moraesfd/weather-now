import axios from 'axios'

export default {
  baseUrl: 'http://api.openweathermap.org/data/2.5/weather',
  getUrl() {
    return this.baseUrl
  },
  async getWeatherByCity(city) {
    return await axios
      .get(this.getUrl(), {
        params: {
          q: city,
          appid: process.env.VUE_APP_API_KEY,
          units: 'metric'
        }
      })
      .then((response) => {
        return response.data.main
      })
  }
}

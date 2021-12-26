import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '@/services/api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    weatherList: [],
    loadingStatus: false,
    listWeatherCities: []
  },
  mutations: {
    updateWeatherList(state, weatherData) {
      state.weatherList = weatherData
    },
    updateLoadingStatus(state, newLoadingStatus) {
      state.loadingStatus = newLoadingStatus
    },
    updateListWeatherCities(state, listCities) {
      state.listWeatherCities = listCities
    }
  },
  actions: {
    getWeatherList({ commit }) {
      commit('updateLoadingStatus', true)
      let listWeatherResponse = []
      this.getters.listWeatherCities.map(async (city) => {
        let weatherCity = {
          location: city,
          weather: await ApiService.getWeatherByCity(city),
          updated_at: new Date()
        }
        console.log(weatherCity)
        listWeatherResponse.push(weatherCity)
      })
      commit('updateWeatherList', listWeatherResponse)
      setInterval(function () {
        commit('updateLoadingStatus', false)
      }, 3000)
    }
  },
  getters: {
    weatherList(state) {
      return state.weatherList
    },
    loadingStatus(state) {
      return state.loadingStatus
    },
    listWeatherCities(state) {
      return state.listWeatherCities
    }
  }
})

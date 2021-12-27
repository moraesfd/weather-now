import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import ApiService from '@/services/api'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  key: 'weather-vuex',
  storage: window.localStorage
})

export const store = new Vuex.Store({
  state: {
    weatherList: [],
    loadingStatus: false,
    listWeatherCities: [],
    updatedAt: null
  },
  mutations: {
    setWeatherList(state, weatherData) {
      state.weatherList = weatherData
    },
    setLoadingStatus(state, newLoadingStatus) {
      state.loadingStatus = newLoadingStatus
    },
    setListWeatherCities(state, listCities) {
      state.listWeatherCities = listCities
    },
    setUpdatedAt(state, newDate) {
      state.updatedAt = newDate
    }
  },
  actions: {
    setWeatherList({ commit }) {
      commit('setLoadingStatus', true)
      let listWeatherResponse = []
      this.getters.getListWeatherCities.map(async (city) => {
        let weatherCity = {
          location: city,
          weather: await ApiService.getWeatherByCity(city)
        }
        listWeatherResponse.push(weatherCity)
      })
      commit('setWeatherList', listWeatherResponse)
      commit('setUpdatedAt', new Date())
      setTimeout(function () {
        commit('setLoadingStatus', false)
      }, 2000)
    }
  },
  getters: {
    getWeatherList: (state) => state.weatherList,
    getLoadingStatus: (state) => state.loadingStatus,
    getListWeatherCities: (state) => state.listWeatherCities,
    getUpdatedAt: (state) => state.updatedAt
  },
  plugins: [vuexLocal.plugin]
})

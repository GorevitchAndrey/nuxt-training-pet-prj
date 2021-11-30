import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      industry: [],
      specialization: [],
    },
    mutations: {


      savevIndustry(state, industry) {
        state.industry = industry;
      },
      pushIndustry(state, industry) {
          state.industry.unshift(industry);
      }
    },
    getters: {
      getIndustry: state => {
        return state.industry;
      }
    },
  })

export default store
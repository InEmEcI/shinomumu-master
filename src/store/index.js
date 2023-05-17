import Vue from 'vue'
import Vuex from 'vuex'

import user from "./user";
import subsidiaries from "./subsidiaries";


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    subsidiaries,
  },

  strict: process.env.DEV
})

export default store;

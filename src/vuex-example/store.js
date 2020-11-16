import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  // State values
  state: {
    countries: [],
  },
  // State mutation methods
  mutations: {
    setCountries: (state, items) =>
      state.countries.splice(0, state.countries.length, ...items),
    removeItem: (state, item) => {
      let index = state.countries.indexOf(item);
      if (index > -1) {
        state.countries.splice(index, 1);
      }
    },
  },
  // Side-effect related methods
  actions: {
    load: async ({ commit }) => {
      let result = await axios.get("https://restcountries.eu/rest/v2/all");
      commit("setCountries", result.data);
    },
  },
});

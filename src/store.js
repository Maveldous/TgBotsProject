import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    databot: [

    ]
  },
  getters: {
    GET_DATA(state) {
      return state.databot;
    }
  },
  mutations: {
    ADD_DATA_ELEM(state, payload) {
      state.databot.push(payload)
    }
  },
  actions: {
    ADD_DATA_ELEM({ commit }, payload) {
      commit("ADD_DATA_ELEM", payload);
    }
  }
});

export default store;

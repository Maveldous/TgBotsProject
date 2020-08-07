import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    databot: [
      {
        name: "name"
      }
    ]
  },
  getters: {
    GET_DATA(state) {
      return state.databot;
    }
  },
  mutations: {
    CHANGE_STATE_TRUE(state) {
      state.state = !state.state;
    }
  },
  actions: {
    TOGGLE_STATE_TRUE({ commit }) {
      commit("CHANGE_STATE_TRUE");
    }
  }
});

export default store;

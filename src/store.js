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
    },
    REPLACE_DATA_ELEM(state, obj, index) {
      state.databot.splice(index, 1, obj);
    },
    DELETE_DATA_ELEM(state, index){
      state.databot.splice(index, 1);
    }
  },
  actions: {
    ADD_DATA_ELEM({ commit }, payload) {
      commit("ADD_DATA_ELEM", payload);
    },
    REPLACE_DATA_ELEM({ commit }, obj, index){
      commit("REPLACE_DATA_ELEM", obj, index)
    },
    DELETE_DATA_ELEM({ commit }, index){
      commit("DELETE_DATA_ELEM", index)
    }
  },
});

export default store;

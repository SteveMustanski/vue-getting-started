import Vue from 'vue';
import Vuex from 'vuex';
import { dataService } from '../shared';
import { GET_HEROES } from './mutation-types';

Vue.use(Vuex);

const state = {
  heroes: [],
};
const mutations = {
  [GET_HEROES](state, heroes) {
    state.heroes = heroes;
  },
};
const actions = {
  async getHeroesAction({ commit }) {
    const heroes = await dataService.getHeroes();
    commit(GET_HEROES, heroes);
  },
};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

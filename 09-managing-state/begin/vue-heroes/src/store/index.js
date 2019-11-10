import Vue from 'vue';
import Vuex from 'vuex';
import { dataService } from '../shared';
import {
  GET_HEROES,
  ADD_HERO,
  DELETE_HERO,
  UPDATE_HERO,
} from './mutation-types';

Vue.use(Vuex);

const state = {
  heroes: [],
};
const mutations = {
  [GET_HEROES](state, heroes) {
    state.heroes = heroes;
  },
  [ADD_HERO](state, hero) {
    state.heroes.push(hero);
  },
  [DELETE_HERO](state, hero) {
    state.heroes = [...state.heroes.filter(h => h.id != hero.id)];
  },
  [UPDATE_HERO](state, hero) {
    const index = state.heroes.findIndex(h => h.id === hero.id);
    state.heros.splice(index, 1, hero);
  },
};
const actions = {
  async getHeroesAction({ commit }) {
    const heroes = await dataService.getHeroes();
    commit(GET_HEROES, heroes);
  },
};

const getters = {
  getHeroById: state => id => state.heroes.find(h => h.id === id),
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'production',
  state,
  mutations,
  actions,
  getters,
});

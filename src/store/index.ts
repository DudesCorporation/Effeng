import { createStore } from 'vuex';
import words from './words';

export class RootState {}

export default createStore({
  state: new RootState(),
  mutations: {},
  actions: {},
  modules: {
    words,
  },
});

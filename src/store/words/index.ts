import { Module } from 'vuex';
import type { RootState } from '@/store';
import { request } from '@/axios';

export class State {}

const wordsModule: Module<State, RootState> = {
  namespaced: true,
  state() {
    return new State();
  },
  actions: {
    async getWordById(_, id) {
      const { data } = await request.get(`/words/${id}`);
      return data;
    },
  },
};

export default wordsModule;

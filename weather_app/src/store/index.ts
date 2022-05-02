import { MutationTree, createStore } from 'vuex';
import { City }                      from '@/moels/city';


export type State = {favorite: Array<City>; activCity: City};
const state:State = {favorite: [], activCity:{} as City};

export enum MutationsType {
  SET_ACTIVE  = "SET_ACTIVE",
  ADD_FAVORITE = "ADD_FAVORITE",
  DELETE_FAVORITE = "DELETE_FAVORITE",
}
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

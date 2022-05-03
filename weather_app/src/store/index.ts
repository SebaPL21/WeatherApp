import {
  ActionContext,
  ActionTree,
  CommitOptions,
  createStore,
  DispatchOptions,
  GetterTree,
  MutationTree,
  Store as VuexStore,
} from "vuex";
import { City } from '@/moels/city';


export type State = {favorite: Array<City>; activCity: City};
//const state :State = {favorite: []};

export enum MutationsType {
  ADD_FAVORITE = "ADD_FAV",
  DELETE_FAVORITE = "DELETE_FAV",
}
export enum ActionType{
  ADD_FAVORITE = "ADD_FAV",
  DELETE_FAVORITE = "DELETE_FAV",
}
//modules
// const mutations: MutationTree<State> & Mutations 
// export function useStore(){
//   return store as Store;
// }
// //mutations type 
// export type Mutations<S=State>={
//   [MutationsType.ADD_FAV](state: S, payload:City){

//   }
// }
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

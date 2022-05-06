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
import { City }    from '@/moels/city';
import { Options } from "vue-class-component";

export type State = {
  favorite: Array<City>; 
  activCity: City
};
const state :State = {
  favorite: [],
  activCity: {} as City 
  };
//mutations
export enum MutationsType {
  ADD_FAVORITE = "ADD_FAVORITE",
  DELETE_FAVORITE = "DELETE_FAVORITE",
  SET_ACTIVE = "SET_ACTIVE",
}
//mutations type 
export type Mutations<S=State>={
  [MutationsType.ADD_FAVORITE](state: S, payload:City):void;
  [MutationsType.DELETE_FAVORITE](state: S, payload:City):void;
  [MutationsType.SET_ACTIVE](state: S, payload:City):void;

}
export const mutations: MutationTree<State> & Mutations ={
  [MutationsType.ADD_FAVORITE](state, item:City){  
    state.favorite.push(item);
  },
  [MutationsType.DELETE_FAVORITE](state,item:City){
    state.favorite.splice(state.favorite.indexOf(item),1)
  },
  [MutationsType.SET_ACTIVE](state, item:City){
    state.activCity = item;
  }
};
//actions https://www.youtube.com/watch?v=EeaYWLNXAwQ  tutorial
export enum ActionType{
  ADD_FAVORITE = "ADD_FAV",
  DELETE_FAVORITE = "DELETE_FAV",
  SET_ACTIVE = "SET_ACTIVE",
}

type ActionArguments = Omit<ActionContext<State,State>,'commit'> &{
  commit<K extends keyof Mutations>(
    key: K,
    payload:Parameters<Mutations[K]>[1]
  ):ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionType.ADD_FAVORITE](context: ActionArguments, payload:City):void;
  [ActionType.DELETE_FAVORITE](context: ActionArguments, payload:City):void;
  [ActionType.SET_ACTIVE](context: ActionArguments, payload:City):void;
}
export const actions: ActionTree<State, State> & Actions = {
  async [ActionType.ADD_FAVORITE]({commit}, payload:City){  
    commit(MutationsType.ADD_FAVORITE, payload);
  },
  async [ActionType.DELETE_FAVORITE]({commit}, payload:City){
    commit(MutationsType.DELETE_FAVORITE, payload);
  },
  async [ActionType.SET_ACTIVE]({commit}, payload:City){
    commit(MutationsType.SET_ACTIVE, payload);
  }
};
//geters
export type Getters = {
  getCity(state:State):City;
  getFavCity(state:State):City[];
 }
 export const getters: GetterTree<State,State> & Getters = {
   getCity(state){
     return state.activCity;
   },
   getFavCity(state){
     return state.favorite;
   }
 }
export type Store = Omit<
  VuexStore<State>, 
  'getters'|'commit'|'dispatch'> & {
     commit<K extends keyof Mutations, P extends keyof Parameters<Mutations[K]>[1]>(
       key:K,
       peyload: P,
       options?: CommitOptions
     ):ReturnType<Mutations[K]>;
    } & {
      dispatch<K extends keyof Actions>(
        key:K,
        peyload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
      ):ReturnType<Actions[K]>;
    } & {
      getters:{
        [K in keyof Getters]:ReturnType<Getters[K]>
      };
    }
    export const store = createStore<State>({
      state,
      mutations,
      actions,
      getters,
    })
export function useStore(){
  return store as Store;
}
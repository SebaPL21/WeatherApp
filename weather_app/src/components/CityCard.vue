<template>
<div>  
    <div class="temp">
    <ul>
        <li v-for="city in cities"
            :key="city.name"
            @click="setActive(city);
            $parent.changeCityContent(city);
            ">
            {{city.name}}
            x
        </li>
    </ul>
    </div>
</div>
</template>
<script lang="ts">
import {Options, Vue, setup}                from "vue-class-component";

import {MutationsType, useStore}            from '@/store'
import {City}                               from "@/moels/city";

export default class CityCard extends Vue {
    store = useStore();
    cities = this.store.getters.getFavCity; 
    setActive(city:City){
      //console.log(city);
        this.store.commit(MutationsType.SET_ACTIVE, city); 
      //console.log("active "+this.store.state.activCity.name );
    }
}
</script>

<style scoped>
ul{
  list-style:none;
  background-color: rgba(255, 255, 255, 0.719);
  border-radius: 30px;
  height: 35px;
}
li{
  display:inline;
  font-size: 20px;
  padding: 20px;
}
li:hover{
  font-size: 23px;
  cursor: pointer;
  padding: 20px;
}
</style>

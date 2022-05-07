<template>
    <div class="cityFinderInput">
   <input
        class="inputCity"
        type="text"
        id="search"
        placeholder="Znajdź swoje miasto"
        v-model="context.searchForCity"
      />
       <ul v-if="context.searchCities.length" class="search-hints">
        <li
          v-for="city in context.searchCities"
          :key="city.name"
          @click="context.selected(city);">
          {{ city.name }}
        </li>
    </ul>

    </div>
</template>
<style scoped>
ul{
  margin-top: 20px;
  list-style:none;
  background-color: rgba(255, 255, 255, 0.719);
  border-radius: 30px;
  width: 300px;
}
li{
  text-align:center;
  font-size: 18px;
}
li:hover{
  font-size: 20px;
  cursor: pointer;
}
.inputCity{
  border-radius:30px;
  height: 40px;
  width:100%;
  font-size: 20px;
  text-align: center;
  border:none;
}
.cityFinderInput{
  text-align: start;
  margin: 30px 
}
</style>
<script lang="ts">
import {Options, Vue, setup}                                                   from "vue-class-component";
import cities                                                                  from '@/assets/data/city.test.list.json';
import {ref, computed, watch, reactive }                                       from 'vue';
import {City}                                                                  from "@/moels/city"
import {MutationsType, useStore}                                               from '@/store/index'
import Panel                                                                   from '@/views/Panel.vue'


export default class FindFavCity extends Vue {
 
  store= useStore();
  context = setup(() => {
    let searchForCity = ref("");
    const searchCities = computed(() => {
      if (searchForCity.value === "") {
        return [];
      }
      let matches = 0;
      return cities.filter((city: City) => {
        if (
          city.name.toLowerCase().includes(searchForCity.value.toLowerCase()) &&
          matches < 5
        ) {
          matches++;
          return city;
        }
      });
    });
    const selected = (city:City) =>{
     //console.log(city);
     if(this.store.state.favorite.length < 5){
      this.store.commit(MutationsType.ADD_FAVORITE, city);
     }
     else{
       alert("Mozna mieć tylko 5 miast na lisście");
     }
     searchForCity.value = "";
     
   // console.log(this.store.getters.getFavCity);
    }
    return {
      cities,
      selected,
      searchForCity,
      searchCities,
    };
  });
}

</script>

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
          @click="context.selected(city)"
        >
          {{ city.name }}, {{ city.country }}
        </li>
    </ul>

    </div>
</template>
<style scoped>
ul{
  list-style:none;
}
li{
  text-align:start;
  font-size: 18px;
}
.inputCity{
  border-radius:30px;
  height: 40px;
  width:300px;
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

export default class FindFavCity extends Vue {
 
  store= useStore();
  context = setup(() => {
    let searchForCity = ref("");
    const searchCities = computed(() => {
      if (searchForCity.value === "") {
        return [];
      }
      let matches = 0;
      return cities.filter((city:City) => {
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
     console.log(city);
     this.store.commit(MutationsType.ADD_FAVORITE, city);
     console.log(this.store.getters.getFavCity);
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

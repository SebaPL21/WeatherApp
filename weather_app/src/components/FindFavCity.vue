<template>
    <div class="cityFinderInput">
        <!-- <imput type="text" id="findCity" placeholder="Znajdź miasto" v-model="context.serchingCity"/> -->
        <h1>Szukajka</h1>
        <!-- <input v-model="context.serchingCity" placeholder="Znajdź miasto"> -->
   <input
        type="text"
        id="search"
        placeholder="Find location"
        v-model="context.searchTerm"
      />
       <ul v-if="context.searchCities.length" class="search-hints">
      <li
        v-for="city in context.searchCities"
        :key="city.name"
        @click="context.selectCity(city)"
      >
        {{ city.name }}, {{ city.country }}
      </li>
    </ul>

    </div>
</template>
<script lang="ts">
import {Options, Vue, setup}                     from "vue-class-component";
import cities                                    from '@/assets/data/city.list.json';
import {ref, computed, watch, reactive }         from 'vue';
import { useStore }                              from 'vuex';
import {City}                                    from "@/moels/city"



export default class FindFavCity extends Vue {
  // store = useStore()

    
    // context=setup(()=>{
    //     let serchingCity = ref("");
    //     const serch = computed(() =>{
    //         if(serchingCity.value === ""){
    //             return [];
    //         }
    //         let mathingCity = 0;
            
    //         return cities.filter((city:City) =>{
    //             if( city.name.toLowerCase().includes(serchingCity.value.toLowerCase()) && mathingCity <5 ){
    //                 mathingCity ++;
    //                 return city;
    //             }
    //         });
    //     });
    // }
    // );
  context = setup(() => {
    let searchTerm = ref("");
    const searchCities = computed(() => {
      if (searchTerm.value === "") {
        return [];
      }
      let matches = 0;
      return cities.filter((city: City) => {
        if (
          city.name.toLowerCase().includes(searchTerm.value.toLowerCase()) &&
          matches < 5
        ) {
          matches++;
          return city;
        }
      });
    });
    let selectedCity = ref("");
    return {
      cities,
      searchTerm,
      searchCities,
    };
  });
}

</script>
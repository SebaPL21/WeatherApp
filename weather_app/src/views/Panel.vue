<template>
<b-container>
 <b-row class="panel">
    <b-col cols="8">
      
      <h1>Miasta</h1>
   
      <h4 >Sprawdź pogodę dla twojego miasta</h4>
      <!-- <button @click="getTemp"></button>  -->
      <!-- przycisk tymczasowy do sprawdzamnia api -->   
      <find-fav-city/>  
     <ul>
      <li>
      <div>
        <b-card 
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM01Ky5GTzZhKDxvSVaLC65MmTaYbvV2jk5oqliLSTjhk1XMRc5iLan5n7z3Cp2U5ST5I&usqp=CAU"
          img-alt="Image"
          style="max-width: 10rem;" >
         Błażowa
        </b-card>
     </div> 
     </li>
     </ul>
     <!-- <div>
      <b-table striped hover :items="items"></b-table>
     </div> -->
    </b-col>
    <b-col cols="4" class="user">
      <div>
        <weather-info /> 
      </div>
    </b-col>
  </b-row>
</b-container>
 

</template>

<script lang="ts">
import { Options, Vue,setup }    from "vue-class-component";
import VueAxios                  from 'vue-axios';
import axios                     from 'axios';
import cities                    from '@/assets/data/city.list.json';
import {City}                    from "@/moels/city";
import WeatherInfo               from '@/components/WeatherInfo.vue';
import FindFavCity               from '@/components/FindFavCity.vue';
import {Weather}                 from '@/moels/wather';
import {WeatherMock}             from '@/mock/WeatherMock'



  @Options({
    components:{WeatherInfo,FindFavCity}
  })
export default class Panel extends Vue {
  // private weather: Weather = WeatherMock; 
  
  // public async data(): Promise<void> {
  //   await this.loadData();
  // }
 //Api
 //await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=49.885208&lon=22.10037&appid=d5f968fb949c510e71da65a7e6878221&units=metric&lang=pl');
  //  async getWeather(city:City):Promise<Weather>{
  //       return(
  //         await this.axios.get<Weather>(
  //           process.env.API_WEATHER +
  //           `weather?lat=${city.cord.lat}&lon=${city.cord.lon}&appid=`+
  //           process.env.API_KEY
  //         ).data;
  //       ) 
    }

  // public getHours(startDate: Date, index: number): number[] {
  //   let hours = [];
  //   let currDay = new Date();
  //   currDay.setTime(currDay.getTime()+index *60 *60 *1000);
  //   let currHour = currDay.getHours();
  //   hours.push(currHour);
  //   return hours;
  // }

// export default defineComponent({
//     data() {
     
//       return{
//         testingdata: undefined,
//         result: {},
//         result2: '',
//         items: [
//           { Day: 'sat', clouds: 'Dickerson', temp: 23 },
               
//         ]
//       }
//     },
//    setup() {
      
//   },
//   methods: {
//     async getTemp(){
//       try{
//         const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=49.885208&lon=22.10037&appid=d5f968fb949c510e71da65a7e6878221&units=metric&lang=pl');
//         this.result = response.data;
//         this.result2 = response.data.main;
        
//       }
//       catch (error){
//         console.log(error);
//       }
//     },
//   },        
// })
</script>

<style scoped>

.panel{
  margin-top: 40px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.664);
}
.user{
  background-color: rgba(238, 79, 127, 0.568);
  border-radius: 30px;
}
li{
  list-style: none;
}
</style>

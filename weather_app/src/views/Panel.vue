<template>
    
<div class="container">
 <div class="row panel">
    <div class="col-8">
      <div class="empty"
        v-if="this.store.state.favorite.length == 0">
       <h1>Doadaj swoje miasta do listy</h1>
      </div>
      <div class="ntEmpty" v-if="this.store.state.favorite.length > 0">
        <h1>Sprawdź prognozę dla twoich miast</h1>
    <CityCard/>
       <WeatherInfo 
        :name="weather.name"
        :temp="weather.main.temp"
        :desc="weather.weather[0].description"/>
         <!-- <weather-info /> -->
      </div>
    </div>
    <div  class="col-4 user">
      <div class="searchCities">

        <find-fav-city/> 
        <side-panel />
      </div>  
    </div>
  </div>
</div>
</template>

<style scoped>
.panel{
  height: 800px;
}
.empty{
  margin: 30px;
}
.ntEmpty{
  margin: 30px;
  
}
.searchCities{
  width: 100%;
  float:left;
}
h4{
  margin: 30px;
}
</style>

<script lang="ts">
import { Options, Vue,setup }                             from "vue-class-component";
import cities                                             from '@/assets/data/city.test.list.json';
import WeatherInfo                                        from '@/components/WeatherInfo.vue';
import {City}                                             from "@/moels/city";
import FindFavCity                                        from '@/components/FindFavCity.vue';
import {Weather}                                          from '@/moels/weather';
import {WeatherMock}                                      from '@/mock/WeatherMock'
import CityCard                                           from '@/components/CityCard.vue'
import {MutationsType,useStore}                           from '@/store'
import SidePanel                                          from '@/components/SidePanel.vue'


@Options({
    components:{WeatherInfo,FindFavCity,CityCard,SidePanel}
  })
export default class Panel extends Vue { 
  store = useStore();
  public async data():Promise<void>{
    await this.allData();
  }
  private favs : City[] = [];
  private weather: Weather = WeatherMock; 
  public async getWeather(city: City): Promise<Weather> {
    return (
        await this.axios.get<Weather>( //"https://api.openweathermap.org/data/2.5/weather?lat=49.885208&lon=22.10037&appid=d5f968fb949c510e71da65a7e6878221&units=metric"
          process.env.VUE_APP_API_WEATHER+
          `/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=`+
          process.env.VUE_APP_API_KEY 
       )
    ).data;
  }
  public async changeCityContent(city: City){
    console.log(city);
    try { 
      this.weather = await this.getWeather(this.store.state.activCity);
      console.log(this.weather);

      console.log("doszło");
    } catch {
      console.log("Error");
    }
  }
    public async allData(): Promise<void> {
    try{
      if(this.store.state.favorite.length == 0 ){
        this.store.getters.getFavCity;
        this.favs = await this.store.state.favorite;
      }
      else {
        this.favs = await this.store.state.favorite;
      }
      //this.store.commit(MutationsType.SET_ACTIVE, this.favs[0]);
      this.weather = await this.getWeather(this.store.state.activCity);
      
      console.log(this.store.state.activCity);
      console.log(this.weather);

    } catch(e){
      console.log(e);
    }
  }
}
</script>

<style scoped>

.panel{
  margin-top: 40px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.664);
}
.user{
  background-color: rgba(97, 222, 253, 0.548);
  border-radius: 30px;
}
li{
  list-style: none;
}
</style>

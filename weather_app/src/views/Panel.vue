<template>
<b-container>
 <b-row class="panel">
    <b-col cols="8">
      <div class="empty"
        v-if="this.store.state.favorite.length == 0">
       <h1>Doadaj swoje miasta do listy</h1>
      </div>
      <div class="ntEmpty" v-if="this.store.state.favorite.length > 0">
        <h1 >Sprawdź prognozę dla twoich miast</h1>
      <city-card/>
       <weather-info 
        :name="sus"
        :temp="3"
        :desc="weather.weather[0].description"/>
         <!-- <weather-info /> -->
      </div>
    </b-col>
    <b-col cols="4" class="user">
      <div class="searchCities">
        <find-fav-city/> 
        <side-panel :activeCity="this.store.state.activCity"/>
      </div>  
    </b-col>
  </b-row>
</b-container>
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
  marign-bottom: 30px;
}
</style>

<script lang="ts">
import { Options, Vue,setup }                             from "vue-class-component";
import cities                                             from '@/assets/data/city.list.json';
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
        await this.axios.get<Weather>(
        process.env.API_WEATHER +
        `/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=` +
        process.env.API_KEY
      )
    ).data;
  }
  public async changeContent(city: City) {
    try {
      this.store.commit(MutationsType.SET_ACTIVE, city);
      this.weather = await this.getWeather(this.store.state.activCity);
      //this.forecast = await this.getForecast(this.store.state.activeCity);
    } catch {
      console.log("Error");
    }
  }
    public async allData(): Promise<void> {
    try{
      if(this.store.state.favorite.length == 0 ){
        this.store.getters.getCity;
        this.favs = await this.store.state.favorite;
      }
      else {
        this.favs = await this.store.state.favorite;
      }
      //this.store.commit(MutationsType.SET_ACTIVE, this.favs[0]);
      this.weather = await this.getWeather(this.store.state.activCity);
      
      console.log("miesto "+this.store.state.activCity);
      console.log(this.weather);

    } catch(e){
      console.log("Error" + e);
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
  background-color: rgba(238, 79, 127, 0.568);
  border-radius: 30px;
}
li{
  list-style: none;
}
</style>

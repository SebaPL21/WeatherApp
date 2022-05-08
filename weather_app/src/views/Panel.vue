<template> 
<div class="container">
 <div class="row panel">
    <div class="col-8">
      <div class="empty d-flex align-items-center "
        v-if="this.store.state.favorite.length == 0">
        <h1>Doadaj swoje miasta do listy</h1>
      </div>
      <div class="ntEmpty" v-if="this.store.state.favorite.length > 0">
        <h1>Sprawdź prognozę dla twoich miast</h1>
    <CityCard/>
    <CityWeather
    v-if="this.store.state.favorite.length > 0"
    :forecast="forecast"
    />
    <CityWeatherHourly
    v-if="this.store.state.favorite.length > 0"
    :forecast="forecast"/>
      </div>
    </div>
    <div  class="col-4 user">
      <div class="searchCities">
        <find-fav-city/>
        <div class="clock">{{lastCheckForUpdate}}</div> 
        <side-panel /> 
        <WeatherInfo 
        :name="weather.name"
        :temp="weather.main.temp"
        :desc="weather.weather[0].description"
        :wind="weather.wind" 
        :humidity="weather.main.humidity"/>
      </div>  
    </div>
  </div>
</div>
</template>



<script lang="ts">
import { Options, Vue,setup }                               from "vue-class-component";
import WeatherInfo                                          from '@/components/WeatherInfo.vue';
import {City}                                               from "@/moels/city";
import FindFavCity                                          from '@/components/FindFavCity.vue';
import {Weather}                                            from '@/moels/weather';
import {WeatherMock}                                        from '@/mock/WeatherMock'
import CityCard                                             from '@/components/CityCard.vue'
import {MutationsType,useStore}                             from '@/store'
import SidePanel                                            from '@/components/SidePanel.vue'
import {Forecast}                                           from '@/moels/Forecast'
import {ForecastMock}                                       from '@/mock/ForecastMock'
import CityWeather                                          from '@/components/CityWeather.vue'
import CityWeatherHourly                                    from "@/components/CityWeatherHourly.vue"


@Options({
    components:{WeatherInfo,FindFavCity,CityCard,SidePanel,CityWeather,CityWeatherHourly}
  })
export default class Panel extends Vue { 
  private favs : City[] = [];
  private weather: Weather = WeatherMock; 
  private forecast: Forecast = ForecastMock;

  public lastCheckForUpdate = this.setDateTime();
  public mounted(){
    setInterval(() =>{
      this.lastCheckForUpdate =this.setDateTime();
    }, 60000)
  }
  store = useStore();
  public async data():Promise<void>{
    await this.allData();
  }
  
  public async getWeather(city: City): Promise<Weather> {
    return (
        await this.axios.get<Weather>( 
          process.env.VUE_APP_API_WEATHER+
          `/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=`+
          process.env.VUE_APP_API_KEY +`&units=metric&lang=pl`
       )
    ).data;
  } 
   public async getForecast(city: City): Promise<Forecast> {
    return (
        await this.axios.get<Forecast>( 
          process.env.VUE_APP_API_WEATHER_HOURLY+
          `?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=`+
          process.env.VUE_APP_API_KEY
       )
    ).data;
  }
  public async changeCityContent(city: City){
    console.log(city);
    try { 
      this.weather = await this.getWeather(this.store.state.activCity);
      console.log(this.weather);
      this.forecast = await this.getForecast(this.store.state.activCity);
      console.log(this.forecast);
    } 
    catch {
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
      this.forecast = await this.getForecast(this.store.state.activCity);
      
      console.log(this.store.state.activCity);
      console.log(this.weather);

    } catch(e){
      console.log(e);
    }
  }
   setDateTime() {
      const date = new Date();
      let time;
      if (date.getHours()< 10 )
      {
        time = "0"+date.getHours() +":"+ date.getMinutes();
        console.log( time);
      }
      else if(date.getMinutes()<10){
        time = date.getHours() +":0"+ date.getMinutes();
         console.log( time);
      }
      else if(date.getHours()< 10 &&date.getMinutes()<10 ){
        time = "0"+date.getHours() +":0"+ date.getMinutes();
         console.log( time)
      }
      else{
         time = date.getHours() +":"+ date.getMinutes();
          console.log( time)
      }
      return time;
    }
      
}
</script>

<style scoped>

.panel{
  height: 100%;
  margin-top: 40px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.664);
}
.user{
  background-color: rgba(97, 211, 240, 0.685);
  border-radius: 30px;
}
li{
  list-style: none;
}
.panel{
  height: 800px;
}
.empty{
  height: 80%;
  text-align: center;
  margin-left:100px;
}
.ntEmpty{
  margin: 30px;
  
}
.searchCities{
  width: 100%;
  float:left;
}
.clock{
  font-size: 45px;
  font-weight: bold;
}
h4{
  margin: 30px;
}
</style>
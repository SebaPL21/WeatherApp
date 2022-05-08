<template>
    <h3>{{name}}</h3>
      <div class="desc">
      <p> Temperatura: {{temp}} &deg C</p>   
      <p> Zachmurzenie: {{desc}} </p>  
      <p> Siła wiatru: {{wind.speed}} m/s </p>  
      <p> Kierunek wiatru: {{wind.deg}}&deg </p>  
      <p> Wilgotnośc: {{humidity}}%</p>  
    </div>
</template>
<style scoped>
P{margin-top: 30px;
font-size: 25px; 
}
</style>
<script setup lang="ts">
  interface Props {
  name: string;
  desc: string;
  temp: number;
  wind: {
    speed: number;
    deg:number
  };
  humidity:number;
}
const props = withDefaults(defineProps<Props>(), {
  name: "Name",
  desc: "Desc",
  temp: 0,
  humidity:0,
  wind: {speed: 0,
    deg:0}
});
</script>
<script lang="ts">
import { Options, Vue }                     from 'vue-class-component';

export default class WeatherInfo extends Vue {

 }
</script>

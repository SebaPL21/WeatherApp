<template>
<h2>Prognoza godzinowa</h2>
<div v-for="(item, index) in forecast.hourly.slice(0, 6)"
    :class="{ active: index === 0 }"
    :key="item">
   <div class="forseed">
   Za {{ index+1 }} h <span class="temp">{{ item.temp }}°C</span> {{ item.weather[0].description }} Ciśnienie: {{item.pressure }} hpa
    
    </div>
</div>
</template>

<script setup lang="ts">
import {defineProps, withDefaults}from 'vue'
import { Forecast }      from "@/moels/Forecast";
interface Props{
    forecast: Forecast;
}
const props = withDefaults(defineProps<Props>(),{
    forecast: {} as Forecast,
});
</script>
<script lang="ts">
import { Vue }           from "vue-class-component";


export default class CityWeatherHoutry extends Vue {}
</script>

<style scoped>
.forseed{
    font-size: 25px;
    text-align: left;
}
.temp{
    color: rgba(255, 0, 0, 0.726);
}
</style>

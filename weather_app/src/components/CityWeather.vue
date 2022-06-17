<template>
<h2>Prognoza tygoniowa</h2>
<div v-for="(item, index) in forecast.daily.slice(0, 6)"
    :class="{ active: index === 0 }"
    :key="item">
   <div class="forseed">  
   Za {{ index+1 }} dni <span class="temp">{{ item.temp.day }}°C</span> {{ item.weather[0].description }} Ciśnienie: {{item.pressure }} hpa
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


export default class CityWeather extends Vue {}
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

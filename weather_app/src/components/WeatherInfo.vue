<template>
    <div>
     <div class="date-hours"> 12,sep 
        <h3>12:23</h3> 
     </div>
    </div>

      <h3>nazwa miejscowości</h3>

    <div class="act_temp">temperatuta aktualna
      <div class="fell_temp">temperatuta odczuwalna </div> 
    </div>

    <div class="desc">
      <p> ćiśnienie</p>   
      <p> wilgotność</p>   
      <p> wiatr</p>
    </div>
</template>
<!-- <script setup() lang="ts">
import {defineProps}    from 'vue-class-component';

defineProps<{
  activeCity: City;
}>();
</script> -->
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {City}           from '@/moels/city';

export default class WeatherInfo extends Vue { }
</script>

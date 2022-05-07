<template>
    <h3>{{name}}</h3>
      <div class="desc">
      <p> {{temp}} temp</p>   
      <p> {{desc}} </p>  
    </div>
</template>

<script setup lang="ts">
import {defineProps, withDefaults}          from 'vue'
interface Props {
  name: string;
  desc: string;
  temp: number;
  }
const props = withDefaults(defineProps<Props>(), {
  name: "Name",
  desc: "Desc",
  temp: 0,
  
});
</script>
<script lang="ts">
import { Options, Vue }                     from 'vue-class-component';
import {City}                               from '@/moels/city';
import {useStore}                           from '@/store'
import {Weather}                            from '@/moels/weather';
export default class WeatherInfo extends Vue {
  //store = useStore();
  
 }
</script>

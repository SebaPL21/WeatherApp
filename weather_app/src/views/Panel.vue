<template>
<b-container>
 <b-row class="panel">
    <b-col cols="8">
      <h1>Miasta</h1>
      <h4 >Sprawdź pogodę dla twojego miasta</h4>
      <button @click="getTemp"></button>
      {{result}} 
      {{result2}} 
    </b-col>
    <b-col cols="4" class="user"><h2>Użytkownika</h2> </b-col>
  </b-row>
</b-container>
 

</template>

<script lang="ts">
import Vue, { onMounted, ref }                    from "vue";
import { defineComponent }                        from 'vue'
import VueAxios                                   from 'vue-axios'
import axios                                      from 'axios'

export default defineComponent({
    data() {
     
      return{
        testingdata: undefined,
        result: '',
        result2: '',
      }
    },
   setup() {
      
    // onMounted(async () => {
    //   await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d5f968fb949c510e71da65a7e6878221')
    //  .then((res)=> {
    //    this.result = res.data.main;
    //    console.log(res.data);
    //   })
    // })
    // return {result}
  },
  methods: {
    async getTemp(){
      try{
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=49.885208&lon=22.10037&appid=d5f968fb949c510e71da65a7e6878221');
        this.result = response.data.name;
        this.result2 = response.data.main;
      }
      catch (error){
        console.log(error);
      }
    },
  },        
})
</script>

<style scoped>

.panel{
  margin-top: 40px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.664);
}
.user{
  background-color: rgb(236, 110, 148);
  border-radius: 30px;
}
</style>

<template>
<div > 
  <p> {{TodayDate}}</p>
</div>

</template>
<style scoped>
.clock{
    font-size: 40px;
    font: bold;   
  }
p{
  font-size: 30px;
  font-weight: bold;
} 
</style>
<script lang="ts">
import { Options, Vue,setup }                             from "vue-class-component";
const date = new Date();

export default class Panel extends Vue { 
  public TodayDate = this.setDate();
  setDate() {
    console.log(date.getMonth())
      let days;
      if (date.getDate() < 10 )
      {
        days = "0"+date.getDate() +"."+ date.getMonth() +"."+date.getFullYear();
        console.log(days);
      }
      else if(date.getMonth() < 10){
        days = date.getDate() +".0"+ date.getMonth()+"."+date.getFullYear();
         console.log(days);
      }
      if(date.getDate() < 10 && date.getMonth()<10 ){
        days = "0"+date.getDate() + ".0" + date.getMonth()+"."+date.getFullYear();
         console.log(days)
      }
      else{
         days = date.getDate() +"."+ date.getMonth()+"."+date.getFullYear();
          console.log(days)
      }
      return days;
    }
};
</script>

<template>
<div > 
  
  <div class="clock">{{ dateTime.hours }}:{{ dateTime.minutes }}</div>
  <div class="clock">{{ dateTime.day }}.{{ dateTime.month }}.{{dateTime.year}} </div>
</div>

</template>
<style scoped>

.clock{
    font-size: 40px;
    font: bold;
    
}
</style>

<script lang="ts">

const date = new Date();
export default {
  data() {
    return {
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getFullYear(),
        ///sec: date.getSeconds(),
      },
      timer: undefined,
    };
  },
  methods: {
    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),// połącz w jedną zmienną i wyświetl
        //sec: date.getSeconds(),
        day: date.getDay(),                                         // dopisz if'a z sprawdzaniem czy wartości mniejsze od 0
        month: date.getMonth(),
        year: date.getFullYear(),// połącz w jedną zmienną i wyświetl
        
      };
    },
  },
  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },

 
};
</script>

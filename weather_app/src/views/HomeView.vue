<template>
<b-container>
 <b-row class="bg-page">
    <b-col cols="8">
      <h1>Miasta</h1>
      <h4>Sprawdź pogodę dla twojego miasta</h4>


    </b-col>
    <b-col cols="4"><h2>Użytkownika</h2> </b-col>
  </b-row>
</b-container>
 

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  components: {
   
  },
})
export default class HomeView extends Vue {}
</script>
<style scoped>

.bg-page{
  margin-top: 40px;
  border-radius: 30px;
  background-color: aliceblue;
}
</style>

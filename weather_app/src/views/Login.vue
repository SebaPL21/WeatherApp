<template>
    <div class="cont"> 
        <b-card class="test">
            <h2>Cześć</h2>
            <b-form >
                <b-form-input class="my-3" v-model="login" placeholder="Podaj login"/>
                <b-form-input v-model="password" type="password" placeholder="Podaj hasło"/>
                <b-alert class="mt-3" variant="danger" >Błędny login lub hasło.</b-alert>
                <div>
                    <b-button class="mb-2 mt-3 logBtn" @click="check">Zaloguj się </b-button> 
                </div>
                
            </b-form>
            <a href="#">Nie pamiętasz hasła? Zmień je.</a>
        </b-card> 
    </div> 
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import HomeView            from '../views/HomeView.vue'

export default defineComponent({
    name: "Login",
    data(){
        return{
            login: '',
            password: '',
            logErr: true,
        }
    },
    components:{
        HomeView,
    },
    methods: {
       check(){
           if(this.login == 'admin' && this.password == 'admin'){
               console.log("brawo debilu");
               this.$router.replace({path: '/home'})  
           }
           else{
                alert("admin admin")
           }
       }, 
    },
})
</script>
<style scoped>
.test{
    border-radius: 40px;
    width: 500px;
    background-color: rgba(255, 255, 255, 0.459);
}
.cont{
    margin-top: 20%;
}
a{
    text-decoration: none;
    font-size: 15px;
    color: rgb(59, 59, 61);
    }
.logBtn{
    background-color: #7076c8b0;
    border: 0;
    border-radius: 30px;
    color: rgb(59, 59, 61);
    font-size: 20px;
}
</style>
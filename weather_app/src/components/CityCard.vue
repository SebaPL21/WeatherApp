<template>
<div class="">  
    <ul>
        <li> 
            <div>
                <b-card 
                    img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM01Ky5GTzZhKDxvSVaLC65MmTaYbvV2jk5oqliLSTjhk1XMRc5iLan5n7z3Cp2U5ST5I&usqp=CAU"
                    img-alt="Image"
                    style="max-width: 10rem;" >
                        {{CityName}}
                    </b-card>
                </div> 
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import {Options, Vue, setup} from "vue-class-component";
import {useStore}            from '@/store'

export default class CityCard extends Vue {
    store = useStore();
    CityName = this.store.getters.getFavCity;
   
}
</script>
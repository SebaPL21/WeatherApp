import { createApp }   from 'vue'
import App             from './App.vue'
import router          from './router'
import {store}         from './store'
import BootstrapVue3   from 'bootstrap-vue-3' 
import * as Vue        from 'vue' 
import axios           from 'axios'
import VueAxios        from 'vue-axios'

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';



createApp(App).use(store).use(router).use(BootstrapVue3).use(VueAxios, axios).mount('#app')

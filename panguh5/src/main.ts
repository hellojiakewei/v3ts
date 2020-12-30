import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { NavBar} from 'vant'
createApp(App)
.use(store)
.use(router)
.use(NavBar)
.mount('#app')

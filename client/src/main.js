import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)   // [1]
 .use(store)    // [2]
 .use(router)   // [3]
 .mount('#app') // [4]
 
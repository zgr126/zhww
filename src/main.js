import { createApp } from 'vue'
import './style.styl'
import App from './App.vue'
import router from './router'
// import {register} from './utils/common'

const app = createApp(App)
app.use(router)
// app.use(register)
app.mount('#app')

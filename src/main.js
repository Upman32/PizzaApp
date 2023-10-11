import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 

const app = createApp(App)
app.config.globalProperties.filters= {
  formatMoney(value) {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(value);
  }
}

app.use(router)

app.mount('#app')

import 'tdesign-vue-next/es/style/index.css';
import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';
import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(router)
app.use(TDesign)

app.mount('#app')

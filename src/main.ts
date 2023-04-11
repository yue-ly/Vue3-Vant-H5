import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.less'   // less 预处理器
import router from './router'   // 引入路由

const app = createApp(App)

app
  .use(router)
  
app.mount('#app')

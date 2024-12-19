import 'bulma/css/bulma.css'
import '@oruga-ui/theme-oruga/dist/oruga.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Autocomplete, Sidebar } from '@oruga-ui/oruga-next';


const app = createApp(App)
.use(Autocomplete)
.use(Sidebar);
app.use(router)

app.mount('#app')

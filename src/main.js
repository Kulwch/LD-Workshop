import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
library.add(fas, fab)
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).component('fa', FontAwesomeIcon).use(router).mount('#app')

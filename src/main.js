import {createApp} from 'vue'
import './style.css'
import App from './App.vue'


import * as icons from '@devheniik/icons'

const app = createApp(App)


Object.entries(icons).forEach(([componentName, component]) => {
    if (componentName !== 'default') {
        app.component(String(componentName), component)
    }
})


app.mount('#app')

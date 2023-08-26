import { createApp } from 'vue'
import App from './App.vue'

import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-vue'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

// Vue.config.productionTip = false

createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import AmplifyVue from '@aws-amplify/ui-vue';
// import { Amplify } from 'aws-amplify';
// import awsConfig from './aws-exports';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


// Amplify.configure(awsConfig);

createApp(App).use(Quasar, quasarUserOptions).use(VueSweetalert2).use(router).mount('#app')

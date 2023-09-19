import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AmplifyVue from '@aws-amplify/ui-vue';
import {Amplify} from 'aws-amplify';
import awsConfig from './aws-exports'; // Path to your AWS Amplify configuration file

Amplify.configure(awsConfig);

 createApp(App).use(router).use(AmplifyVue).mount('#app')

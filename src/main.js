import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'

var firebaseConfig = {
  apiKey: "AIzaSyD2B_ACTu_5sx5EXDpmJsE6SVm1THz-3xU",
  authDomain: "blogue-3b04f.firebaseapp.com",
  databaseURL: "https://blogue-3b04f-default-rtdb.firebaseio.com",
  projectId: "blogue-3b04f",
  storageBucket: "blogue-3b04f.appspot.com",
  messagingSenderId: "551177590669",
  appId: "1:551177590669:web:c86d881398ccfed7c64fc4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let app;
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = createApp(App).use(router).mount('#app');
  }
})

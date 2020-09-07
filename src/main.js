import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import * as fb from 'firebase'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    fb.initializeApp ({
      apiKey: "AIzaSyBZM0VQY1C-1jFjNo_iASFTRQeZBkZT3sg",
      authDomain: "app-vuetify-a947a.firebaseapp.com",
      databaseURL: "https://app-vuetify-a947a.firebaseio.com",
      projectId: "app-vuetify-a947a",
      storageBucket: "app-vuetify-a947a.appspot.com",
      messagingSenderId: "456109728203",
      appId: "1:456109728203:web:530bf32bc53bbb4a9c564e"
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')

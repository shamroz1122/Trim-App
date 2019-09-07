import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
//window.$ = window.jquery = require('jquery')

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {


        if(to.matched.some(record => record.meta.is_admin))
        {
                if( store.getters.loggedInPUserType == 1 ){
                  next();
                }else{
                  next({
                    name: 'booking',
                  })
                }

                if( store.getters.loggedInPUserType == 2 ){
                  next({
                    name: 'bookings',
                  })
                }

                if( store.getters.loggedInPUserType == 3 ){
                  next({
                    name: 'discover',
                  })
                }
        }

        if(to.matched.some(record => record.meta.is_barber))
        {
              if( store.getters.loggedInPUserType == 1 ){
                next({
                  name: 'booking',
                })
              }

              if( store.getters.loggedInPUserType == 2 ){
                next();
              }else{
                next({
                  name: 'bookings',
                })
              }

              if( store.getters.loggedInPUserType == 3 ){
                next({
                  name: 'discover',
                })
              }
        }

        if(to.matched.some(record => record.meta.is_client))
        {
              if( store.getters.loggedInPUserType == 1 ){
                next({
                  name: 'booking',
                })
              }

              if( store.getters.loggedInPUserType == 2 ){
                next({
                  name: 'bookings',
                })
              }

              if( store.getters.loggedInPUserType == 3 ){
                next();
              }else{
                next({
                  name: 'discover',
                })
              }
        }


    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
  
        if(store.getters.loggedInPUserType==1)
        {
            next({
              name: 'booking',
            })

        }else if(store.getters.loggedInPUserType==2)
        {
          next({
            name: 'bookings',
          })

        }else if(store.getters.loggedInPUserType==3)
        {
          next({
            name: 'discover',
          })

        }


    } else {
      next()
     }
    } else {

    next()

    }
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

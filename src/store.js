import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCAwX5DJjr0fC7_vp6_WVO6Ut16hXTuK1g',
    libraries: "places" 
  }
}); 


Vue.use(Vuex)
axios.defaults.baseURL = 'https://shm.ranksol.com/app/public/api'
//axios.defaults.baseURL = 'https://shm.shopeziaa.com/app/public/api'
//axios.defaults.baseURL = 'http://trim-app.vue/public/api'
//axios.defaults.baseURL = 'http://localhost/trimapp/public/api'
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
//axios.defaults.headers.common['Content-Type'] = "text/plain"
//axios.defaults.headers.common['Access-Control-Allow-Methods'] = "GET, PUT, POST, DELETE, OPTIONS"
export default new Vuex.Store({
  state: {
        token: localStorage.getItem('access_token') || null,
        userType: localStorage.getItem('user_type') || null,
        userId: localStorage.getItem('user_id') || null,
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },
    loggedInPUserType(state) {
      return state.userType
    },
    loggedInUserId(state) {
      return state.userId
    }
  },
  mutations: {
    retrieveToken(state, token) {
     state.token = token
   },
   retrieveUserType(state, user_type){
     state.userType = user_type
   },
   retrieveUserId(state, user_id){
     state.userId = user_id
   },
   destroyToken(state) {
      state.token = null
      state.userType = null
      state.userId = null
   }
  },
  actions: {

     register(context, data) {
        return new Promise((resolve, reject) => {
          var config = {
              headers: {"content-type":"application/json"}
          };
          axios.post('/register', {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
            user_type: data.user_type,
            created_by: data.created_by,
          },config)
            .then(response => {
              resolve(response)
            })
            .catch(error => {
              reject(error.response)
            })
        })
      },
      changePassword(context, credentials) {
          var token_bearer =  context.state.token
          var data = new FormData()
          data.append("user_id",credentials.user_id)
          data.append("current_password",credentials.current_password)
          data.append("password",credentials.password)
          data.append("password_confirmation",credentials.password_confirmation)

         return new Promise((resolve, reject) => {

             axios.post('/changePassword?token='+token_bearer, data)
             .then(response => {

               if(response.data.status!=undefined && response.data.status=='Token is Expired')
               {
                 localStorage.removeItem('access_token')
                 localStorage.removeItem('user_type')
                 localStorage.removeItem('user_id')
                 context.commit('destroyToken')
               }
                 resolve(response)

             })
             .catch(error => {
               reject(error.response)
             })
         })
       },
      numberVerification(context, data) {
           return new Promise((resolve, reject) => {
           axios.post('/numberVerification', {
             phone_number: data.phone_number,
             user_id: data.user_id,
           })
             .then(response => {
               resolve(response)
             })
             .catch(error => {
               reject(error.response)
             })
         })
       },
       CodeVerification(context, data) {
            return new Promise((resolve, reject) => {
            axios.post('/codeVerification', {
              phone_number: data.phone_number,
              user_id: data.user_id,
              verification_code: data.verification_code,
            })
              .then(response => {
                resolve(response)
              })
              .catch(error => {
                reject(error.response)
              })
          })
        },
      retrieveToken(context, credentials) {

         return new Promise((resolve, reject) => {
           axios.post('/login', {
             email: credentials.email,
             password: credentials.password,
           })
             .then(response => {
               const token = response.data.token
               const user_type = response.data.user.user_type
               const user_id = response.data.user.id

               localStorage.setItem('access_token', token)
               context.commit('retrieveToken', token)

               localStorage.setItem('user_type', user_type)
               context.commit('retrieveUserType', user_type)

               localStorage.setItem('user_id', user_id)
               context.commit('retrieveUserId', user_id)

               resolve(response)
             })
             .catch(error => {
               reject(error)
             })
           })
   },
     destroyToken(context) {
     axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
     if (context.getters.loggedIn) {
       return new Promise((resolve, reject) => {
         axios.get('/logout')
           .then(response => {
             localStorage.removeItem('access_token')
             localStorage.removeItem('user_type')
             localStorage.removeItem('user_id')
             context.commit('destroyToken')
             resolve(response)
             // console.log(response);
             // context.commit('addTodo', response.data)
           })
           .catch(error => {
             localStorage.removeItem('access_token')
             localStorage.removeItem('user_type')
             localStorage.removeItem('user_id')
             context.commit('destroyToken')
             reject(error)
           })
       })
     }
   },
   saloonSaveBasicInfo(context, credentials) {
       //axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            var token_bearer =  context.state.token
       if (context.getters.loggedIn) {
         return new Promise((resolve, reject) => {

           var data = new FormData()
           data.append('phone',credentials.phone_number)
           data.append('name',credentials.name)
           data.append('address',credentials.address)
           data.append('latitude',credentials.latitude)
           data.append('longitude',credentials.longitude)
           data.append('shopName',credentials.shopName)
           data.append('openingHours',credentials.openingHours)
           data.append('category',credentials.category)
           data.append('user_id',credentials.user_id)

           axios.post('/saloonSaveBasicInfo?token='+token_bearer,data)
             .then(response => {
               if(response.data.status!=undefined && response.data.status=='Token is Expired')
               {
                 localStorage.removeItem('access_token')
                 localStorage.removeItem('user_type')
                 localStorage.removeItem('user_id')
                 context.commit('destroyToken')
               }
               resolve(response)
             })
             .catch(error => {
               reject(error)
             })
         })
       }
 },
 saloonSaveBarber(context, credentials) {
  //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

     var token_bearer =  context.state.token

     if (context.getters.loggedIn) {
       return new Promise((resolve, reject) => {
         var data = new FormData()
         data.append('user_id',credentials.user_id)
         data.append('phone',credentials.phone_number)
         data.append('name',credentials.name)
         data.append('pin_code',credentials.pin_code)
         data.append('email',credentials.email)
         data.append('password',credentials.password)
         data.append('image_file',credentials.ImageFile)

         axios.post('/saloonSaveBarber?token='+token_bearer, data)
           .then(response => {
             if(response.data.status!=undefined && response.data.status=='Token is Expired')
             {
               localStorage.removeItem('access_token')
               localStorage.removeItem('user_type')
               localStorage.removeItem('user_id')
               context.commit('destroyToken')
             }
             resolve(response)
           })
           .catch(error => {
             reject(error.response)
           })
       })
     }
},
SaveService(context, credentials) {
 //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        var data = new FormData()
        data.append('user_id',credentials.user_id)
        data.append('name',credentials.name)
        data.append('duration',credentials.duration)
        data.append('price',credentials.price)
        data.append('description',credentials.description)
        data.append('service_id',credentials.service_id)

        axios.post('/SaveService?token='+token_bearer, data)
          .then(response => {
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
            }
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
},
saveWorkingHours(context, credentials) {
 //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        var data = new FormData()
        data.append('user_id',credentials.user_id)
        data.append('start_at',credentials.start_at)
        data.append('close_at',credentials.close_at)
        data.append('day',credentials.day)
        data.append('hour_id',credentials.hour_id)

        axios.post('/saveWorkingHours?token='+token_bearer, data)
          .then(response => {
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
            }
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
},
saveBarberWorkingHours(context, credentials) {
  //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
 
     var token_bearer =  context.state.token
 
     if (context.getters.loggedIn) {
       return new Promise((resolve, reject) => {
         var data = new FormData()
         data.append('user_id',credentials.user_id)
         data.append('start_at',credentials.start_at)
         data.append('close_at',credentials.close_at)
         data.append('day',credentials.day)
         data.append('hour_id',credentials.hour_id)
 
         axios.post('/saveBarberWorkingHours?token='+token_bearer, data)
           .then(response => {
             if(response.data.status!=undefined && response.data.status=='Token is Expired')
             {
               localStorage.removeItem('access_token')
               localStorage.removeItem('user_type')
               localStorage.removeItem('user_id')
               context.commit('destroyToken')
             }
             resolve(response)
           })
           .catch(error => {
             reject(error.response)
           })
       })
     }
 },

 getSaloonBasicInfo(context, credentials) {
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
    var data = new FormData()
    data.append("user_id",credentials.user_id)
    var token_bearer =  context.state.token

     if (context.getters.loggedIn) {
       return new Promise((resolve, reject) => {
         axios.post('/getSaloonBasicInfo?token='+token_bearer,data)
           .then(response => {
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
                localStorage.removeItem('access_token')
                localStorage.removeItem('user_type')
                localStorage.removeItem('user_id')
                context.commit('destroyToken')
            }

             resolve(response)
           })
           .catch(error => {

             reject(error)

           })
       })
     }
},
getBarberBasicInfo(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getBarberBasicInfo?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getClientBasicInfo(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getClientBasicInfo?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getBarbers(context, credentials) {
   // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
   var data = new FormData()
   data.append("user_id",credentials.user_id)
   var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post('/getBarbers?token='+token_bearer,data)
          .then(response => {
           if(response.data.status!=undefined && response.data.status=='Token is Expired')
           {
               localStorage.removeItem('access_token')
               localStorage.removeItem('user_type')
               localStorage.removeItem('user_id')
               context.commit('destroyToken')
           }

            resolve(response)
          })
          .catch(error => {

            reject(error)
 
          })
      })
    }
},

getSaloons(context, data) {
   return new Promise((resolve, reject) => {
     var config = {
         headers: {"content-type":"application/json"}
     };
     axios.post('/getSaloons', {
       user_id: data.user_id,
       latitude: this.latitude,
       longitude: this.longitude,
     },config)
       .then(response => {
         resolve(response)
       })
       .catch(error => {
         reject(error.response)
       })
   })
 },

getServices(context, credentials) {
   // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
   var data = new FormData()

   data.append("user_id",credentials.user_id)
   var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post('/getServices?token='+token_bearer,data)
          .then(response => {
           if(response.data.status!=undefined && response.data.status=='Token is Expired')
           {
               localStorage.removeItem('access_token')
               localStorage.removeItem('user_type')
               localStorage.removeItem('user_id')
               context.commit('destroyToken')
              }
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
},

matchDate(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()

  data.append("user_id",credentials.user_id)
  data.append("date",credentials.date)
  data.append("barberId",credentials.barberId)
  data.append("seriveId",credentials.seriveId)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/matchDate?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
             }
           resolve(response)
         })
         .catch(error => {
           reject(error)
         })
     })
   }
},
saveFeeback(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()

  data.append("user_id",credentials.user_id)
  data.append("rating",credentials.rating)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/saveFeedback?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
             }
           resolve(response)
         })
         .catch(error => {
           reject(error)
         })
     })
   }
},
clientBookingHistory(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()

  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/clientBookingHistory?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
             }
           resolve(response)
         })
         .catch(error => {
           reject(error)
         })
     })
   }
},
getClients(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()

  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getClients?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
             }
           resolve(response)
         })
         .catch(error => {
           reject(error)
         })
     })
   }
},

getWorkingHours(context, credentials) {
   // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
   var data = new FormData()
   data.append("user_id",credentials.user_id)
   var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post('/getWorkingHours?token='+token_bearer,data)
          .then(response => {
           if(response.data.status!=undefined && response.data.status=='Token is Expired')
           {
               localStorage.removeItem('access_token')
               localStorage.removeItem('user_type')
               localStorage.removeItem('user_id')
               context.commit('destroyToken')
           }

            resolve(response)
          })
          .catch(error => {

            reject(error)

          })
      })
    }
},
appointmentCreation(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()

    data.append("user_id",credentials.user_id)
    data.append("barberId" , credentials.barberId)
    data.append("servicePrice" , credentials.servicePrice)
    data.append("serviceId" , credentials.serviceId)
    data.append("continue" , credentials.continue)
    data.append("date" , credentials.date)
    data.append("time" , credentials.time) 
    data.append("saloonId" , credentials.saloonId)
    var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/appointmentCreation?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }
            resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},


clientBookings(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/clientBookings?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }
           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},

getPaymentStatusClient(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("barberId" , credentials.barberId)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getPaymentStatusClient?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }
           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getPaymentStatus(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("barberId" , credentials.barberId)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getPaymentStatus?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }
           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getBarberWorkingHours(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id) 
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getBarberWorkingHours?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
CancelBooking(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id" , credentials.user_id)
  data.append("date" , credentials.date)
  data.append("time" , credentials.time)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/CancelBooking?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getSingleService(context, credentials) {
   // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
   var data = new FormData()
   data.append("service_id",credentials.service_id)
   var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post('/getSingleService?token='+token_bearer,data)
          .then(response => {
           if(response.data.status!=undefined && response.data.status=='Token is Expired')
           {
               localStorage.removeItem('access_token')
               localStorage.removeItem('user_type')
               localStorage.removeItem('user_id')
               context.commit('destroyToken')
           }

            resolve(response)
          })
          .catch(error => {

            reject(error)

          })
      })
    }
},
showAllBooking(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token
  
   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/showAllBooking?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response) 
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
addFavourites(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("saloon_id",credentials.saloon_id)
  var token_bearer =  context.state.token
  
   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/addFavourites?token='+token_bearer,data)
         .then(response => { 
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response) 
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
checkAppointment(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("date",credentials.date)
  data.append("barberId",credentials.barberId)
  var token_bearer =  context.state.token
  
   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/checkAppointment?token='+token_bearer,data)
         .then(response => { 
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response) 
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},   
showFavourites(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token
  
   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/showFavourites?token='+token_bearer,data)
         .then(response => { 
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response) 
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},   
statusMasterInfo(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token
  
   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/statusMasterInfo?token='+token_bearer,data)
         .then(response => { 
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response) 
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getFeedbacks(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("saloon_id",credentials.saloon_id)
  var token_bearer =  context.state.token
  
   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getFeedbacks?token='+token_bearer,data)
         .then(response => { 
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response) 
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
oneKm(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("currentLat",credentials.currentLat)
  data.append("currentLong",credentials.currentLong)
  data.append("km",credentials.km)
  var token_bearer =  context.state.token
  
   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/oneKm?token='+token_bearer,data)
         .then(response => { 
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response) 
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
removeFavourites(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("saloon_id",credentials.saloon_id)
  var token_bearer =  context.state.token
  
   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/removeFavourites?token='+token_bearer,data)
         .then(response => { 
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response) 
         })
         .catch(error => {

           reject(error)

         })
     })
   }
}, 
getfavrotites(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("saloon_id",credentials.saloon_id)
  var token_bearer =  context.state.token
  
   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getfavrotites?token='+token_bearer,data)
         .then(response => { 
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response) 
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
showBooking(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token
  
   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/showBooking?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response) 
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
adminNotifications(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("day",credentials.day)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/adminNotifications?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},

savebarberNotification(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("notification",credentials.notification)
  data.append("user_id",credentials.user_id)
  data.append("clientId",credentials.clientId) 
  data.append("date",credentials.date) 
  data.append("time",credentials.time) 
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/savebarberNotification?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
}, 

getServiceName(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("serviceId",credentials.serviceId)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getServiceName?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
completeAppointment(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("barberId",credentials.barberId)
  data.append("time",credentials.time)
  data.append("date",credentials.date)
  
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/completeAppointment?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
}, 
savepaypalSetting(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("emailLive",credentials.emailLive)
  data.append("status",credentials.status)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/savepaypalSetting?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
savepaypalSetting1(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("emailSandbox",credentials.emailSandbox)
  data.append("status",credentials.status)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/savepaypalSetting1?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getPaypalSetting(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("barberId",credentials.barberId)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getPaypalSetting?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},  

getPaypalSettingAdmin(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getPaypalSettingAdmin?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
}, 

savepaypalSettingAdmin(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/savepaypalSettingAdmin?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
selectedBarber(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("id",credentials.id)
  data.append("date",credentials.date)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/selectedBarber?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getAllBarbers(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getAllBarbers?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getNotifications(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("date",credentials.date)
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getNotifications?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getSaloonId(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("barberId",credentials.barberId)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getSaloonId?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken') 
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
showCalenderBookingsAdmin(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("date",credentials.date)
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/showCalenderBookingsAdmin?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
showCalenderBookings(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("date",credentials.date)
  data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/showCalenderBookings?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getSingleBarberWorkingHour(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("hour_id",credentials.hour_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getSingleBarberWorkingHour?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
getSingleWorkingHour(context, credentials) {
   // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
   var data = new FormData()
   data.append("hour_id",credentials.hour_id)
   var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post('/getSingleWorkingHour?token='+token_bearer,data)
          .then(response => {
           if(response.data.status!=undefined && response.data.status=='Token is Expired')
           {
               localStorage.removeItem('access_token')
               localStorage.removeItem('user_type')
               localStorage.removeItem('user_id')
               context.commit('destroyToken')
           }

            resolve(response)
          })
          .catch(error => {

            reject(error)

          })
      })
    }
},
changeServiceStatus(context, credentials) {
   // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
   var data = new FormData()
   data.append("service_id",credentials.service_id)
   data.append("status",credentials.status)

   var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post('/changeServiceStatus?token='+token_bearer,data)
          .then(response => {
           if(response.data.status!=undefined && response.data.status=='Token is Expired')
           {
               localStorage.removeItem('access_token')
               localStorage.removeItem('user_type')
               localStorage.removeItem('user_id')
               context.commit('destroyToken')
           }

            resolve(response)
          })
          .catch(error => {

            reject(error)

          })
      })
    }
},

changeBarberServiceStatus(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("user_id",credentials.user_id)
  data.append("service_id",credentials.service_id)
  data.append("status",credentials.status)

  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/changeBarberServiceStatus?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }
           resolve(response)
         })
         .catch(error => {
           reject(error)

         })
     })
   }
},

changeWorkingHoursStatus(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("day",credentials.day)
  data.append("status",credentials.status)
  data.append("user_id",credentials.user_id)


  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/changeWorkingHoursStatus?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)

         })
     })
   }
},
BarberCompletedAppointment(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("date",credentials.date)
  data.append("time",credentials.time)
  data.append("category",credentials.category)
  data.append("barberId",credentials.barberId)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/BarberCompletedAppointment?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }
            resolve(response)
         })
           .catch(error => {
            reject(error)
         })
     })
   }
},
showBookedClientDetail(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  // axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  data.append("clientId",credentials.clientId)

  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/showBookedClientDetail?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }
            resolve(response)
         })
           .catch(error => {
            reject(error)
         })
     })
   }
},
changeBarberWorkingHoursStatus(context, credentials) {
   // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
   var data = new FormData()
   data.append("day",credentials.day)
   data.append("status",credentials.status)
   data.append("user_id",credentials.user_id)


   var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post('/changeBarberWorkingHoursStatus?token='+token_bearer,data)
          .then(response => {
           if(response.data.status!=undefined && response.data.status=='Token is Expired')
           {
               localStorage.removeItem('access_token')
               localStorage.removeItem('user_type')
               localStorage.removeItem('user_id')
               context.commit('destroyToken')
           }

            resolve(response)
          })
          .catch(error => {

            reject(error)

          })
      })
    }
},
sendFeedback(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()

  data.append("user_id",credentials.user_id)
  data.append("rating",credentials.rating)
  data.append("comment",credentials.comment)

  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/sendFeedback?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)
       })
     })
   }
},
savePaymentStatus(context, credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()

  data.append("status",credentials.status)
  data.append("user_id",credentials.user_id)

  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/savePaymentStatus?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
          }

           resolve(response)
         })
         .catch(error => {

           reject(error)
       })
     })
   }
},
getSingleBarber(context, credentials) {
   // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
   var data = new FormData()
   data.append("user_id",credentials.user_id)
   var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post('/getBarber?token='+token_bearer,data)
          .then(response => {
           if(response.data.status!=undefined && response.data.status=='Token is Expired')
           {
               localStorage.removeItem('access_token')
               localStorage.removeItem('user_type')
               localStorage.removeItem('user_id')
               context.commit('destroyToken')
           }

            resolve(response)
          })
          .catch(error => {

            reject(error)

          })
      })
    }
},
deleteBarber(context, credentials) {
   // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
   var data = new FormData()
   data.append("user_id",credentials.user_id)
   var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post('/deleteBarber?token='+token_bearer,data)
          .then(response => {
           if(response.data.status!=undefined && response.data.status=='Token is Expired')
           {
               localStorage.removeItem('access_token')
               localStorage.removeItem('user_type')
               localStorage.removeItem('user_id')
               context.commit('destroyToken')
           }

            resolve(response)
          })
          .catch(error => {

            reject(error)

          })
      })
    }
},
saveSaloonImages(context, credentials) {
  //  axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //var data = new FormData()
  //data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        var data = new FormData()
        data.append('user_id',credentials.user_id)
        data.append('image_file',credentials.ImageFile)


        axios.post('/saveSaloonImages?token='+token_bearer, data)
        .then(response => {
         if(response.data.status!=undefined && response.data.status=='Token is Expired')
         {
             localStorage.removeItem('access_token')
             localStorage.removeItem('user_type')
             localStorage.removeItem('user_id')
             context.commit('destroyToken')
         }

          resolve(response)
        })
        .catch(error => {

          reject(error)

        })
      })
    }
},
barberImages(context, credentials) {
  //  axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //var data = new FormData()
  //data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        var data = new FormData()
        data.append('user_id',credentials.user_id)
        data.append('image_file',credentials.ImageFile)

        axios.post('/barberImages?token='+token_bearer, data)
        .then(response => {
         if(response.data.status!=undefined && response.data.status=='Token is Expired')
         {
             localStorage.removeItem('access_token')
             localStorage.removeItem('user_type')
             localStorage.removeItem('user_id')
             context.commit('destroyToken')
         }

          resolve(response)
        })
        .catch(error => {

          reject(error)

        })
      })
    }
},
saveBarberProfile(context, credentials) {
  //  axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //var data = new FormData()
  //data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        var data = new FormData()
        data.append('user_id',credentials.user_id)
        data.append('image_file',credentials.ImageFile)


        axios.post('/saveBarberProfile?token='+token_bearer, data)
        .then(response => {
         if(response.data.status!=undefined && response.data.status=='Token is Expired')
         {
             localStorage.removeItem('access_token')
             localStorage.removeItem('user_type')
             localStorage.removeItem('user_id')
             context.commit('destroyToken')
         }

          resolve(response)
        })
        .catch(error => {

          reject(error)

        })
      })
    }
},
saveClientProfile(context, credentials) {
  //  axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //var data = new FormData()
  //data.append("user_id",credentials.user_id)
  var token_bearer =  context.state.token

    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        var data = new FormData()
        data.append('user_id',credentials.user_id)
        data.append('image_file',credentials.ImageFile)
        axios.post('/saveClientProfile?token='+token_bearer, data)
        .then(response => {
         if(response.data.status!=undefined && response.data.status=='Token is Expired')
         {
             localStorage.removeItem('access_token')
             localStorage.removeItem('user_type')
             localStorage.removeItem('user_id')
             context.commit('destroyToken')
         }

          resolve(response)
        })
        .catch(error => {

          reject(error)

        })
      })
    }
},
resetPassword(context, credentials) {
  return new Promise((resolve, reject) => {
    axios.post('/resetPassword', {
      email: credentials.email,
    })
      .then(response => {

        resolve(response)

      })
      .catch(error => {

        reject(error)

      })
    })
 },

 getbarberServices(context , credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()
  // data.append("service_id",credentials.service_id)
  data.append("user_id",credentials.user_id)
  data.append("service_id",credentials.service_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getbarberServices?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
             }
           resolve(response)
         })
         .catch(error => {
           reject(error)
         })
     })
   }
},
getServiceBarbers(context , credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()

  data.append("serviceId",credentials.serviceId)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getServiceBarbers?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
             }
           resolve(response)
         })
         .catch(error => {
           reject(error)
         })
     })
   }
} ,
getClientSaloon(context , credentials) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  //axios.defaults.headers.common['content-type'] = 'multipart/form-data'
  var data = new FormData()

  data.append("saloon_id",credentials.saloon_id)
  var token_bearer =  context.state.token

   if (context.getters.loggedIn) {
     return new Promise((resolve, reject) => {
       axios.post('/getClientSaloon?token='+token_bearer,data)
         .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_type')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
             }
           resolve(response)
         })
         .catch(error => {
           reject(error)
         })
     })
   }
} 

  }
})

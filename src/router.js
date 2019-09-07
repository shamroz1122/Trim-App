import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DefaultContainer from './views/dashboard/defaultLayout.vue'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DefaultContainer,
      children: [
          {
           path: 'client/discover',
           name: 'discover',
           redirect: 'client/discover/home',
           // route level code-splitting
           // this generates a separate chunk (about.[hash].js) for this route
           // which is lazy-loaded when the route is visited.
           component:{
             render (c) { return c('router-view') }
           },
           children:[
             {
                   path: 'home',
                   name: 'DiscoverHome',
                   component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/discover/Discover.vue')
                   // route level code-splitting
                   // this generates a separate chunk (about.[hash].js) for this route
                   // which is lazy-loaded when the route is visited.
             },
             {
                    path: 'looking-for',
                    name: 'Discoverlookingfor',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/discover/LookingFor.vue')
              },
              {
                path: 'find',
                name: 'Discoverfind',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/discover/Find.vue')
              },
              {
                path: 'distance-calculation',
                name: 'DiscoverDistanceCal',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/discover/DistanceCalculation.vue')
              },
              {
                path: 'saloon-detail/:SaloonId',
                name: 'DiscoverSaloonDetail',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/discover/SaloonDetails.vue')
              },
              {
                path: 'select-barber/:serviceId/:servicePrice',
                name: 'DiscoverSelectBbarber',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/discover/SelectBarberOne.vue')
              },
              {
                path: 'appointment/:serviceId/:barberId/:servicePrice/:continue',
                name: 'DiscoverAppointment',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/discover/Appointment.vue')
              },
              {
                path: 'select-package/:serviceId/:barberId/:servicePrice',
                name: 'DiscoverSelectPackage',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/discover/SelectPackage.vue')
              },
              {
                path: 'payment/:serviceId/:barberId/:servicePrice/:continue/:date/:time',
                name: 'DiscoverPayment',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/discover/Payment.vue')
              },
              {
                path: 'congrats/:saloonid/:serviceId/:barberId/:servicePrice/:continue/:date/:time',
                name: 'DiscoverCongrats',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/discover/Congrats.vue')
              },
              {
                path: 'congrats-paypal',
                name: 'DiscoverCongratsPaypal',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/discover/paypalCongrats.vue')
              }
           ],
           meta: {
              is_client: true
           }

         },
         {
          path: 'client/near-by',
          name: 'near-by',
          redirect: 'client/near-by/home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component:{
            render (c) { return c('router-view') }
          },
          children:[
            {
              path: 'home',
              name: 'NearByHome',
              component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/nearBy/NearBy.vue')
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
            },
            {
              path: 'google-map',
              name: 'googleMap',
              component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/nearBy/findLocation.vue')
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
            },
          ],
          meta: {
             is_client: true
          }
        },
        {
         path: 'client/my-booking',
         name: 'my-booking',
         redirect: 'client/my-booking/home',
         // route level code-splitting
         // this generates a separate chunk (about.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component:{
           render (c) { return c('router-view') }
         },
         children:[
           {
             path: 'home',
             name: 'MyBookingHome',
             component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/myBooking/MyBooking.vue')
             // route level code-splitting
             // this generates a separate chunk (about.[hash].js) for this route
             // which is lazy-loaded when the route is visited.
           },
           {
             path: 'confirm-appointment/:barberId/:barberName/:saloonName/:time/:date/:picture',
             name: 'MyBookingConfirmAppointment',
             // route level code-splitting
             // this generates a separate chunk (about.[hash].js) for this route
             // which is lazy-loaded when the route is visited.
             component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/myBooking/ConfirmAppointment.vue')
           }

           ],
           meta: {
              is_client: true
           }

         },
         {
           path: 'client/favorites',
           name: 'favorites',
           // route level code-splitting
           // this generates a separate chunk (about.[hash].js) for this route
           // which is lazy-loaded when the route is visited.
           component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/favorite/Favorites.vue'),
           meta: {
              is_client: true
           }
         },
         {
          path: 'client/profile',
          name: 'profile',
          redirect: 'client/profile/home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component:{
            render (c) { return c('router-view') }
          },
          children:[
            {
              path: 'home',
              name: 'ProfileHome',
              component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/Profile/MyProfile.vue')
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
            },
            {
              path: 'booking-history',
              name: 'ProfileBookingHistory',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/Profile/BookingHistory.vue')
            },
            {
              path: 'change-password',
              name: 'ProfileChangePassword',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/Profile/ResetPassword.vue')
            },
            {
              path: 'invite-barber',
              name: 'ProfileInviteBarber',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/Profile/InviteBarbers.vue')
            },
            {
              path: 'feedback',
              name: 'ProfileFeedback',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/Profile/Feedback.vue')
            },
            {
              path: 'offers',
              name: 'ProfileOffers',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Client/Profile/Offers.vue')
            }

            ],
            meta: {
               is_client: true
            } 
          },
            //end of client routes
          {
           path: 'barber/bookings',
           name: 'bookings',
           redirect: 'barber/bookings/home/:complete?',
           // route level code-splitting
           // this generates a separate chunk (about.[hash].js) for this route
           // which is lazy-loaded when the route is visited.
           component:{
             render (c) { return c('router-view') }
           },
           children:[
               {
                 path: 'home',
                 name: 'BookingsHome',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Bookings/Bookings.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'bookings-all',
                 name: 'BookingsAll',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Bookings/Bookings2.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'client/:completed/:clientId/:date/:time/:category/:barber/:price/:barberId',  
                 name: 'BookingsClient',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Bookings/Client.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               }
             ],
             meta: {
                is_barber: true
             }
           },
           {
             path: 'barber/notifications',
             name: 'BarberNotifications',
             // route level code-splitting
             // this generates a separate chunk (about.[hash].js) for this route
             // which is lazy-loaded when the route is visited.
             component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Notifications/Notification.vue'),
             meta: {
                  is_barber: true
             }
           },
           {
             path: 'barber/all-clients',
             name: 'BarberAllClients',
             // route level code-splitting
             // this generates a separate chunk (about.[hash].js) for this route
             // which is lazy-loaded when the route is visited.
             component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Clients/AllClients.vue'),
             meta: {
                  is_barber: true
             }
           },
           {
            path: 'barber/settings',
            name: 'BarberSettings',
            redirect: 'barber/settings/home',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component:{
              render (c) { return c('router-view') }
            },
            children:[
                {
                  path: 'home',
                  name: 'SettingsHome',
                  component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Settings/Settings.vue')
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                },
                {
                  path: 'feedback',
                  name: 'SettingsFeedback',
                  component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Settings/Feedback.vue')
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                },
                {
                  path: 'invite-clients',
                  name: 'SettingsInviteClients',
                  component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Settings/InviteClients.vue')
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                },
                {
                  path: 'chnage-password',
                  name: 'SettingsChangePassword',
                  component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Settings/ChangePassword.vue')
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                },
                {
                  path: 'services',
                  name: 'SettingsServices',
                  component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Settings/Services.vue')
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                },
                {
                  path: 'working-hours',
                  name: 'SettingsWorkingHours',
                  component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Settings/WorkingHours.vue')
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                },
                {
                  path: 'profile',
                  name: 'SettingsProfile',
                  component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Settings/BarberProfile.vue')
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                },
                {
                  path: 'pick-time/:userId/:day/:hourId?',
                  name: 'BarberSettingsPickTime',
                  component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Settings/TimePicker.vue')
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                },
                {
                  path: 'break-lunch',
                  name: 'SettingsBreakLunch',
                  component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Barber/Settings/BreakLunch.vue')
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                }
              ],
              meta: {
                 is_barber: true
              }
            },
            //end of barber routes
            {
             path: 'admin/booking',
             name: 'booking',
             redirect: 'admin/booking/home',

             // route level code-splitting
             // this generates a separate chunk (about.[hash].js) for this route
             // which is lazy-loaded when the route is visited.
             component:{
               render (c) { return c('router-view') }
             },
             children:[
                 {
                   path: 'home',
                   name: 'AdminBookingsHome',
                   component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Bookings/Bookings.vue')
                   // route level code-splitting
                   // this generates a separate chunk (about.[hash].js) for this route
                   // which is lazy-loaded when the route is visited.
                 },
                 {
                   path: 'admin-client/:completed/:clientId/:date/:time/:category/:barber/:price/:barberId',
                   name: 'AdminClient',
                   component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Bookings/Client.vue')
                   // route level code-splitting
                   // this generates a separate chunk (about.[hash].js) for this route
                   // which is lazy-loaded when the route is visited.
                 }
               ],
               meta: {
                  is_admin: true
               }
             },
             {
               path: 'admin/notifications',
               name: 'AdminNotifications',
               // route level code-splitting
               // this generates a separate chunk (about.[hash].js) for this route
               // which is lazy-loaded when the route is visited.
               component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Notifications/Notification.vue'),
               meta: {
                  is_admin: true
               }
             },
             {
              path: 'admin/settings',
              name: 'AdminSettings',
              redirect: 'admin/settings/home',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component:{
                render (c) { return c('router-view') }
              },
              children:[
                  {
                    path: 'home',
                    name: 'AdminSettingsHome',
                    component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/Settings.vue')
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    },
                  {
                    path: 'saloon-information',
                    name: 'SettingsSaloonInformation',
                    component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/MasterInformation.vue')
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                  },
                  {
                    path: 'add-barber',
                    name: 'SettingsAddBarber',
                    component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/AddBarber.vue')
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    },
                  {
                 path: 'barber-shop-profile',
                 name: 'BarberShopProfile',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/BarberShopProfile.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'working-hours',
                 name: 'WorkingHour',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/WorkingHours.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'pick-time/:userId/:day/:hourId?',
                 name: 'AdminSettingsPickTime',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/TimePicker.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'service',
                 name: 'Service',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/Services.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'add-service/:serviceId?',
                 name: 'AddService',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/AddService.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'password-change',
                 name: 'PasswordChange',
                 component: () => import(
                   /* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/ChangePassword.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'clients-invite',
                 name: 'ClientsInvite',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/InviteClients.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'master-feedback',
                 name: 'MasterFeedback',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/Feedback.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'staff',
                 name: 'Staffs',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/Staffs.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'delete-barber/:userId',
                 name: 'DeleteBarber',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/DeleteProfile.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               },
               {
                 path: 'payment-status',
                 name: 'paymentStatus',
                 component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Admin/Settings/paymentSetting.vue')
                 // route level code-splitting
                 // this generates a separate chunk (about.[hash].js) for this route
                 // which is lazy-loaded when the route is visited.
               }
                ],
                meta: {
                   is_admin: true
                }
              }
      ],
      meta: { requiresAuth: true }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
         requiresVisitor: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
         requiresVisitor: true,
      }
    },
    {
      path: '/main',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Main.vue'),
      meta: {
         requiresVisitor: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
      meta: {
         requiresVisitor: true,
      }
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ResetPassword.vue'),
      meta: {
         requiresVisitor: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue'),
      meta: {
         requiresVisitor: true,
      }
    },
    {
      path: '/number-verification/:userId',
      name: 'number-verification',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/NumberVerification.vue'),
      meta: {
         requiresVisitor: true,
      }
    },
    {
      path: '/mobile-number-verification/:userId/:phone',
      name: 'mobile-number-verification',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/MobileNumberVerification.vue'),
      meta: {
         requiresVisitor: true,
      }
    },
    {
      path: '/change-password',
      name: 'change-password',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ChangePassword.vue'),
      meta: {
         requiresVisitor: true,
      }
    }

  ]


})

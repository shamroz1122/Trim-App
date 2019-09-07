<template>
 <div class="main">

     <v-container fluid style="background-color:#FCD675;" >

           <v-layout row wrap text-xs-center>
             <v-flex  xs12 md12 sm12 >
                <span class="clients">Settings</span> <br />
             </v-flex>
           </v-layout>

      </v-container>
      <v-container fluid class="pa-0">

          <v-layout row wrap justify-center class="pt-2">
            <v-flex xs12 md6 sm10>
                 <router-link :to="{ name: 'BarberShopProfile', params: {} }" style="text-decoration:none;">
                     <v-layout row wrap class="pa-3">
                       <v-flex xs2 md1 sm1>
                          <font-awesome-icon size="2x" color="#FCD675" :icon="['fas','user-alt']"/>
                       </v-flex>
                       <v-flex xs9 md10 sm10>
                        <span class="title">  Profile </span>
                       </v-flex>
                       <v-flex xs1 md1 sm1>
                        <span class="title"><font-awesome-icon size="1x" :icon="['fas','chevron-right']"/>    </span>
                       </v-flex>
                     </v-layout>
                       <v-divider></v-divider>
                  </router-link>

                     <router-link :to="{ name: 'Staffs', params: {} }" style="text-decoration:none;">
                      <v-layout row wrap class="pa-3">
                        <v-flex xs2 md1 sm1>
                         <font-awesome-icon size="2x" color="#FCD675" :icon="['fas','users']"/>
                        </v-flex>
                        <v-flex xs9 md10 sm10>
                         <span class="title">  Staff </span>
                        </v-flex>
                        <v-flex xs1 md1 sm1>
                         <span class="title"><font-awesome-icon size="1x" :icon="['fas','chevron-right']"/>    </span>
                        </v-flex>
                      </v-layout>
                     </router-link>
                      <v-divider></v-divider>

                      <router-link :to="{ name: 'paymentStatus', params: {} }" style="text-decoration:none;">
                      <v-layout row wrap class="pa-3">
                        <v-flex xs2 md1 sm1>
                         <font-awesome-icon size="2x" color="#FCD675" :icon="['fas','credit-card']"/>
                        </v-flex>
                        <v-flex xs9 md10 sm10>
                         <span class="title">  Payment Setting </span>
                        </v-flex>
                        <v-flex xs1 md1 sm1>
                         <span class="title"><font-awesome-icon size="1x" :icon="['fas','chevron-right']"/>    </span>
                        </v-flex>
                      </v-layout>
                     </router-link>
                      <v-divider></v-divider>

                    <router-link :to="{ name: 'WorkingHour', params: {} }" style="text-decoration:none;">
                       <v-layout row wrap class="pa-3">
                         <v-flex xs2 xs1 sm1>
                            <font-awesome-icon size="2x" color="#FCD675" :icon="['fas','clock']"/>
                         </v-flex>
                         <v-flex xs9 md10 sm10>
                          <span class="title">  Working Hours </span>
                         </v-flex>
                         <v-flex xs1 md1 sm1>
                          <span class="title"><font-awesome-icon size="1x" :icon="['fas','chevron-right']"/>    </span>
                         </v-flex>
                       </v-layout>
                   </router-link>

                   <v-divider></v-divider>
                      <router-link :to="{ name: 'Service', params: {} }" style="text-decoration:none;">
                       <v-layout row wrap class="pa-3">
                         <v-flex xs2 md1 sm1>
                          <font-awesome-icon size="2x" color="#FCD675" :icon="['fas','cut']"/>
                         </v-flex>
                         <v-flex xs9 md10 sm10>
                          <span class="title" >  Services </span>
                         </v-flex>
                         <v-flex xs1 md1 sm1>
                          <span class="title"><font-awesome-icon size="1x" :icon="['fas','chevron-right']"/>    </span>
                         </v-flex>
                       </v-layout>
                      </router-link>
                       <v-divider></v-divider>


                    <router-link :to="{ name: 'PasswordChange', params: {} }" style="text-decoration:none;">
                       <v-layout row wrap class="pa-3">
                         <v-flex xs2 md1 sm1>
                          <font-awesome-icon size="2x" color="#FCD675" :icon="['fas','key']"/>
                         </v-flex>
                         <v-flex xs9 md10 sm10>
                          <span class="title"> Change Password </span>
                         </v-flex>
                         <v-flex xs1 md1 sm1>
                          <span class="title"><font-awesome-icon size="1x" :icon="['fas','chevron-right']"/>    </span>
                         </v-flex>
                       </v-layout>
                    </router-link>

                     <v-divider></v-divider>
                     <router-link :to="{ name: 'SettingsSaloonInformation', params: {} }" style="text-decoration:none;">
                       <v-layout row wrap class="pa-3">
                         <v-flex xs2 md1 sm1>
                          <font-awesome-icon size="2x" color="#FCD675" :icon="['fas','info-circle']"/>
                         </v-flex>
                         <v-flex xs9 md10 sm10>
                          <span class="title"> Saloon Information </span>
                         </v-flex>
                         <v-flex xs1 md1 sm1>
                          <span class="title"><font-awesome-icon size="1x" :icon="['fas','chevron-right']"/>    </span>
                         </v-flex>
                       </v-layout>
                     </router-link>
                      <v-divider></v-divider>

                     <!-- <router-link :to="{ name: 'ClientsInvite', params: {} }" style="text-decoration:none;">
                       <v-layout row wrap class="pa-3">
                         <v-flex xs2 md1 sm1>
                          <font-awesome-icon size="2x" color="#FCD675" :icon="['fas','user-plus']"/>
                         </v-flex>
                         <v-flex xs9 md10 sm10>
                          <span class="title">  Invite Clients </span>
                         </v-flex>
                         <v-flex xs1 md1 sm1>
                          <span class="title"><font-awesome-icon size="1x" :icon="['fas','chevron-right']"/>    </span>
                         </v-flex>
                       </v-layout>
                    </router-link> -->

                       <v-divider></v-divider>
                     <router-link :to="{ name: 'MasterFeedback', params: {} }" style="text-decoration:none;">
                       <v-layout row wrap class="pa-3">
                         <v-flex xs2 md1 sm1>
                          <font-awesome-icon size="2x" color="#FCD675" :icon="['fas','star']"/>
                         </v-flex>
                         <v-flex xs9 md10 sm10>
                          <span class="title">  Feedback </span>
                         </v-flex>
                         <v-flex xs1 md1 sm1>
                          <span class="title"><font-awesome-icon size="1x" :icon="['fas','chevron-right']"/>    </span>
                         </v-flex>
                       </v-layout>
                    </router-link>
                       <v-divider></v-divider>


                           <v-layout @click="logout" row wrap class="pa-3">
                             <v-flex xs2 md1 sm1>
                              <font-awesome-icon size="2x" color="#FCD675" :icon="['fas','power-off']"/>
                             </v-flex>
                             <v-flex xs9 md10 sm10>
                             <span class="title">  Logout </span>
                             </v-flex>
                             <v-flex xs1 md1 sm1>
                              <span class="title"><font-awesome-icon size="1x" :icon="['fas','chevron-right']"/>    </span>
                             </v-flex>
                           </v-layout>

            </v-flex>
          </v-layout>

      </v-container>

</div>
</template>
<script>

  export default {
    data () {
      return {
      }
    },
    mounted (){

    var interval =   setTimeout(function(){

      var el = document.getElementById('app')
      el.classList.remove('grey-color')
      el.classList.add('white-color')
      clearTimeout(interval);
    }, 100);

    },
    methods: {
      logout(){
        this.$store.dispatch('destroyToken')
          .then(response => {
            response.status
            this.$router.push({ name: 'login' })
          })
      }
    }
  }
</script>

<style scoped="">
.clients{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
      text-align: justify !important;
      color: #484848 !important;
}
.text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
      text-align: justify !important;
      color: #484848 !important;
}
.title{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 18px !important;
    color: #484848;
}
.text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: 300 !important;
      line-height: normal !important;
      font-size: 12px !important;
      color: #484848 !important;
}
</style>

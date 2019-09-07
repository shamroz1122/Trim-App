<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'SettingsWorkingHours', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> Monday </span>
           </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-xs,sm,md,lg,xl>
          <v-layout row wrap justify-center>
             <v-flex sm12 md10 sm10>
               <v-card class="card">
                  <v-card-text>
                      <v-layout justify-center ow wrap class="pb-2">
                        <v-flex xs12 md11 sm10>
                           <span class="title"> Start From </span>
                        </v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                      <v-layout justify-center text-xs-center row wrap class="pt-3">
                        <v-flex xs2 md2 sm2 class="py-2 ">
                          <span class="time-fade">7 </span>
                        </v-flex>
                        <v-flex xs1 md1 sm1 class="ml-1 py-2" >
                          <span >  </span>
                        </v-flex>
                        <v-flex xs2 sm2 md2 class="ml-2 py-2 " >
                          <span class="time-fade"> 29 </span>
                        </v-flex>
                        <v-flex xs2 sm2 md2 class="ml-2 py-2 ">
                        <span>   </span>
                        </v-flex>
                      </v-layout>
                        <v-layout justify-center text-xs-center row wrap class="pt-3">
                          <v-flex xs2 sm2 md2 class="py-2 time-settings ">
                            <span class="time">8 </span>
                          </v-flex>
                          <v-flex xs1 sm1 md1 class="ml-1 py-2" >
                            <span class="time"> : </span>
                          </v-flex>
                          <v-flex xs2 sm2 md2 class="ml-2 py-2 time-settings" >
                            <span class="time"> 30 </span>
                          </v-flex>
                          <v-flex xs2 md2 sm2 class="ml-2 py-2 time-settings">
                          <span class="time">  AM </span>
                          </v-flex>
                        </v-layout>
                        <v-layout justify-center text-xs-center row wrap class="pt-3">
                          <v-flex xs2 sm2 md2 class="py-2">
                            <span class="time-fade">8 </span>
                          </v-flex>
                          <v-flex xs1 sm1 md1 class="ml-1 py-2" >
                            <span class="time">  </span>
                          </v-flex>
                          <v-flex xs2 sm2 md2 class="ml-2 py-2" >
                            <span class="time-fade"> 30 </span>
                          </v-flex>
                          <v-flex xs2 sm2 md2 class="ml-2 py-2">
                          <span class="time-fade">  PM </span>
                          </v-flex>
                        </v-layout>
                  </v-card-text>
               </v-card>
             </v-flex>
          </v-layout>

          <v-layout row wrap justify-center class="pt-2">
             <v-flex sm12 md10 sm10>
               <v-card class="card">
                  <v-card-text>
                      <v-layout row wrap justify-center class="pb-2">
                        <v-flex xs12 md11 sm10>
                           <span class="title"> Close At </span>
                        </v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                      <v-layout justify-center text-xs-center row wrap class="pt-3">
                        <v-flex xs2 sm2 md2 class="py-2 ">
                          <span class="time-fade">7 </span>
                        </v-flex>
                        <v-flex xs1 sm1 md1 class="ml-1 py-2" >
                          <span >  </span>
                        </v-flex>
                        <v-flex xs2 sm2 md2 class="ml-2 py-2 " >
                          <span class="time-fade"> 29 </span>
                        </v-flex>
                        <v-flex xs2 sm2 md2 class="ml-2 py-2 ">
                        <span>   </span>
                        </v-flex>
                      </v-layout>
                        <v-layout justify-center text-xs-center row wrap class="pt-3">
                          <v-flex xs2 sm2 md2 class="py-2 time-settings ">
                            <span class="time">8 </span>
                          </v-flex>
                          <v-flex xs1 sm1 md1 class="ml-1 py-2" >
                            <span class="time"> : </span>
                          </v-flex>
                          <v-flex xs2 sm2 md2 class="ml-2 py-2 time-settings" >
                            <span class="time"> 30 </span>
                          </v-flex>
                          <v-flex xs2 sm2 md2 class="ml-2 py-2 time-settings">
                          <span class="time">  AM </span>
                          </v-flex>
                        </v-layout>
                        <v-layout justify-center text-xs-center row wrap class="pt-3">
                          <v-flex xs2 sm2 md2 class="py-2">
                            <span class="time-fade">8 </span>
                          </v-flex>
                          <v-flex xs1 md1 sm1 class="ml-1 py-2" >
                            <span class="time">  </span>
                          </v-flex>
                          <v-flex xs2 md2 sm2 class="ml-2 py-2" >
                            <span class="time-fade"> 30 </span>
                          </v-flex>
                          <v-flex xs2 sm2 md2 class="ml-2 py-2">
                          <span class="time-fade">  PM </span>
                          </v-flex>
                        </v-layout>
                  </v-card-text>
               </v-card>
             </v-flex>
          </v-layout>

          <v-layout row wrap justify-center class="pt-2">
            <v-flex xs12 md10 sm10>
             <v-btn class="login-btn" :to= "{name:'SettingsBreakLunch',params:{ }}" block depressed> Update </v-btn>
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
    }
  }
</script>

<style scoped="">
.find-text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
      text-align: justify !important;
      color: #484848 !important;
    }
.back-link{
      font-style: normal !important;
      font-weight: normal !important;
      line-height: normal !important;
      font-size: 18px !important;
      text-align: justify !important;
      color: black !important;
}
.title{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 16px !important;
    text-align: justify !important;
    color: #484848 !important;
}
.time{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 18px !important;
    text-align: justify !important;
    color: #000000 !important;
}
.time-settings{
    border-top:1px solid black;
    border-bottom:1px solid black;
}
.time-fade{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 18px !important;
  text-align: justify !important;
  color: #C4C4C4 !important;
}
.card{
  border-radius:8px;
}
.login-btn{
     font-family: Montserrat;
     font-style: normal;
     font-weight:bold !important;
     line-height: normal;
     font-size: 14px;
     background: #FCD675 !important;
     color: #484848;
     text-transform: capitalize;
   }
</style>

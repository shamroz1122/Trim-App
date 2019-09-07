<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap>
            <v-flex  xs2 md3 sm3>
            <router-link  :to="{ name: 'BarberSettings', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs9 md9 sm9>
             <span class="find-text">Invite Clients</span>
           </v-flex>
        </v-layout>
      </v-container>

      <v-container>
        <v-layout row wrap text-xs-center>
           <v-flex xs12 md10 sm10>
              <span class="title"> Invite Clients </span>
              <p class="text"> Invite your Clients to Trim community and earn more with us!</p>
           </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid class="pa-0">
        <v-layout row wrap justify-center class="pt-2">
           <v-flex xs12 md10 sm12>
               <v-card class="card">
               <v-card-text>

            <v-layout row wrap class="pb-2">
                <v-flex xs3 md2 sm2>
                  <span>
                      <div style="width: 61px; height: 61px; border-radius:70px; background-color:#FCD675">
                         <font-awesome-icon size="5x" color="black" style=" padding-left:20px;" :icon="['fab','facebook-f']"/>
                      </div>
                  </span>
                </v-flex>
                <v-flex xs8 md8 sm8 class="pt-2">
                <span class="fb"> Facebook </span>
                <p class="text"> Invite Barbers from Facebook </p>
                </v-flex>
                <v-flex xs1 md2 sm2 class="pt-2">
                 <font-awesome-icon size="3x" color="black" :icon="['fas','caret-right']"/>
                </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-layout row wrap class="pt-2 pb-2">
                <v-flex xs3 md2 sm2>
                  <span>
                      <div style="width: 61px; height: 61px; border-radius:70px; background-color:#FCD675">
                         <font-awesome-icon size="2x" style="margin-top:15px; margin-left:15px;" color="black" :icon="['fab','twitter']"/>
                      </div>
                  </span>
                </v-flex>
                <v-flex xs8 md8 sm8 class="pt-2">
                <span class="fb"> Twitter </span>
                <p class="text"> Invite Barbers from Twitter </p>
                </v-flex>
                <v-flex xs1 md2 sm2 class="pt-2">
                 <font-awesome-icon size="3x" color="black" :icon="['fas','caret-right']"/>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>

            <v-layout row wrap class="pt-2 pb-2">
                <v-flex xs3 md2 sm2>
                  <span>
                      <div style="width: 61px; height: 61px; border-radius:70px; background-color:#FCD675">
                         <font-awesome-icon size="4x" style="padding-left:12px; padding-top:7px;" :icon="['fab','whatsapp']"/>
                      </div>
                  </span>
                </v-flex>
                <v-flex xs8 md8 sm8 class="pt-2">
                <span class="fb"> Whatsapp </span>
                <p class="text"> Invite Barbers from Whatsapp </p>
                </v-flex>
                <v-flex xs1 md2 sm2 class="pt-2">
                 <font-awesome-icon size="3x" color="black" :icon="['fas','caret-right']"/>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>

            <v-layout row wrap class="pt-2 pb-2">
                <v-flex xs3 md2 sm2>
                  <span>
                      <div style="width: 61px; height: 61px; border-radius:70px; background-color:#FCD675">
                         <font-awesome-icon size="3x" style="padding-left:15px; padding-top:14px;" color="black" :icon="['fas','phone']"/>
                      </div>
                  </span>
                </v-flex>
                <v-flex xs8 md8 sm8 class="pt-2">
                <span class="fb"> Contacts </span>
                <p class="text"> Invite Barbers from Contacts </p>
                </v-flex>
                <v-flex xs1 md2 sm2 class="pt-2">
                 <font-awesome-icon size="3x" color="black" :icon="['fas','caret-right']"/>
                </v-flex>
                </v-layout>

                </v-card-text>
                </v-card>

              </v-flex>
              </v-layout>

         </v-container>

  </div>
  </template>
  <style scoped="">
  .find-text{
        font-family: Montserrat !important;
        font-style: normal !important;
        font-weight: bold !important;
        line-height: normal !important;
        font-size: 14px !important;
        text-align: justify !important;
        color: #484848 !important;
      }
  .back-link{
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 18px;
        text-align: justify;
        color: black;
  }
  .title{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 24px !important;
      color: #484848 !important;
  }
  .text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: 300 !important;
      line-height: normal !important;
      font-size: 12px !important;

      color: #484848 !important;
  }
.fb{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
      text-align: center !important;
      color: #484848 !important;
  }
  </style>

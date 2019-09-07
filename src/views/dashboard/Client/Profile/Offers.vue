<template>
 <div class="main">
       <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap>
            <v-flex  xs2 md3 sm3>
            <router-link  :to="{ name: 'profile', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs9 md9 sm9>
             <span class="find-text">Offers</span>
           </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-xs,sm,md,lg,xl style="background-color:#ffffff;">
         <v-layout row wrap>
            <v-flex xs12 md8 sm8>
                <span class="title"> Get a free Trim when you refer a friend </span>
            </v-flex>
         </v-layout>
         <v-layout row wrap justify-center>
            <v-flex xs10 md6 sm6 class="pt-4">
              <v-responsive>
                <v-img
                  :src="require('../../../../assets/refer-a-friend.png')"
                  contain
                ></v-img>
              </v-responsive>
            </v-flex>
         </v-layout>
         <v-layout row wrap justify-center>
            <v-flex xs12 md8 sm8 class="pt-4">
              <span class="text">Your Invitation Code</span>
            </v-flex>
         </v-layout>
         <v-layout row wrap justify-center>
            <v-flex xs12 md8 sm8 class="pt-2">
              <v-text-field
              label="Zxt875PPt"
              single-line
              color="dark"
              suffix="Copy"
              class="invite"
            ></v-text-field>
            </v-flex>
         </v-layout>
         <v-layout row wrap justify-center>
            <v-flex xs12 md8 sm8 class="pt-1">
              <v-layout row wrap justify-center class="pt-2">
                <v-flex xs12 md8 sm8>
                 <v-btn class="login-btn" block depressed> Invite Friends </v-btn>
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
  }
}
</script>


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
  font-weight: 300 !important;
  line-height: normal !important;
  font-size: 14px !important;
  text-align: justify !important;
  color: #000000 !important;
 }
 .text{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: 300 !important;
  line-height: normal !important;
  font-size: 14px !important;
  text-align: justify !important;
  color: #484848 !important;
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
.invite{
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold !important;
      line-height: normal;
      font-size: 14px;
      text-align: justify;
      color: #484848;

}
 </style>

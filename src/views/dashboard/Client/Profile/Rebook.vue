<template>
 <div class="main">

    <v-container fluid style="background-color:#FCD675;">
      <v-layout row wrap>
          <v-flex  xs2 md3 sm3>
          <router-link  :to="{ name: 'main', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
         </v-flex>
         <v-flex xs9 md9 sm9>
           <span class="find-text">Rebook</span>
         </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="pa-0 pt-2">
    <v-layout justify-center row wrap>
      <v-flex xs12 md8 sm8>
          <v-card class="card">
            <v-card-title>
              <v-layout row wrap justify-center>
                 <v-flex xs3 md2 sm3>
                   <v-responsive>
                     <v-img
                       :src="require('../../../../assets/barber2.png')"
                       contain
                     ></v-img>
                   </v-responsive>
                 </v-flex>
                 <v-flex xs7 md6 sm8 class="pt-3 pl-3" text-md-center>
                     <h2 class="title">Amanda Cerny</h2>
                     <h5 class="text"> Barber at <span style="color:#FCD675;"> Stylish Salon </span> </h5>
                 </v-flex>
              </v-layout>
            </v-card-title>
          </v-card>
      </v-flex>
    </v-layout>

    </v-container>

    <v-container fluid class="pa-0">
      <v-layout row wrap justify-center class="pt-2">
         <v-flex xs12 md8 sm8>
             <v-card class="card">
             <v-card-text>

          <v-layout row wrap>
              <v-flex xs6 md6 sm6>
                <span class="text">  Date </span>
              </v-flex>

          </v-layout>

          <v-layout row wrap>
              <v-flex xs6 md6 sm6>
                <span class="current-date">  OCT 06, 2018 </span>
              </v-flex>

          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
              <v-flex xs6 md6 sm6>
                <span class="text">  Time </span>
              </v-flex>

          </v-layout>

          <v-layout row wrap>
              <v-flex xs6 md6 sm6>
                <span class="current-date">  OCT 06, 2018 </span>
              </v-flex>

          </v-layout>
           <v-divider></v-divider>
           <v-layout row wrap>
               <v-flex xs6 md6 sm6>
                 <span class="text">  Category </span>
               </v-flex>

           </v-layout>

           <v-layout row wrap>
               <v-flex xs6 md6 sm6>
                 <span class="current-date">  OCT 06, 2018 </span>
               </v-flex>

           </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
                <v-flex xs6 md6 sm6>
                  <span class="text">  Barber </span>
                </v-flex>

            </v-layout>

            <v-layout row wrap>
                <v-flex xs6 md6 sm6>
                  <span class="current-date">  OCT 06, 2018 </span>
                </v-flex>

            </v-layout>
             <v-divider></v-divider>
             <v-layout row wrap>
                 <v-flex xs6 md6 sm6>
                   <span class="text">  Paid </span>
                 </v-flex>

             </v-layout>

             <v-layout row wrap>
                 <v-flex xs6 md6 sm6>
                   <span class="current-date">  OCT 06, 2018 </span>
                 </v-flex>

             </v-layout>
              <v-divider></v-divider>
              <v-layout row wrap>
                  <v-flex xs6 md6 sm6>
                    <span class="text">  Status </span>
                  </v-flex>

              </v-layout>



               <v-layout row wrap>
                   <v-flex xs6 md6 sm6>
                     <span class="current-date">  Completed </span>
                   </v-flex>

               </v-layout>


              </v-card-text>
              </v-card>

            </v-flex>
            </v-layout>
         <v-layout row wrap justify-center class="pt-2">
           <v-flex xs12 md8 sm8>
            <v-btn class="login-btn" block depressed>Rebook </v-btn>
           </v-flex>
         </v-layout>

       </v-container>

</div>
</template>
<style scoped="">
.find-text{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: 300 !important;
    line-height: normal !important;
    font-size: 16px !important;
    text-align: center !important;
    color: #000000 !important;
}
.back-link{
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    text-align: justify;
    color: black;
}
.card{
    border-radius:9px !important;
}
.title{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
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

.current-date{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    font-size: 14px !important;
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
</style>

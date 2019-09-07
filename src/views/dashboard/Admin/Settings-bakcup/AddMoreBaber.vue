<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'main', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> Add Barber </span>
           </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid  style="background-color:white;">
           <v-layout justify-center row wrap>
            <v-flex xs12 md8 sm8>

                    <v-layout row wrap class="pb-2">
                       <v-flex xs3 md2 sm3>
                         <v-responsive>
                           <v-img
                             :src="require('../assets/barber2.png')"
                             contain
                           ></v-img>
                         </v-responsive>
                       </v-flex>
                       <v-flex xs7 md6 sm8 class="pt-3 pl-3">
                           <h2 class="title">Amanda Cerny</h2>
                           <h5 class="text"> +78 578 658 1247 </h5>
                       </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-layout row wrap class="pb-2 pt-2">
                       <v-flex xs3 md2 sm3>
                         <v-responsive>
                           <v-img
                             :src="require('../assets/barber1.png')"
                             contain
                           ></v-img>
                         </v-responsive>
                       </v-flex>
                       <v-flex xs7 md6 sm8 class="pt-3 pl-3">
                           <h2 class="title">Angelina Jolie</h2>
                           <h5 class="text"> +22 222 589 1478 </h5>
                       </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-layout row wrap  class="pb-2 pt-2">
                       <v-flex xs3 md2 sm3>
                         <v-responsive>
                           <v-img
                             :src="require('../assets/barber2.png')"
                             contain
                           ></v-img>
                         </v-responsive>
                       </v-flex>
                       <v-flex xs7 md6 sm8 class="pt-3 pl-3">
                         <h2 class="title">Amanda Cerny</h2>
                         <h5 class="text"> +78 578 658 1247 </h5>
                       </v-flex>
                    </v-layout>

            </v-flex>
            </v-layout>


      <v-layout wrap row text-xs-center justify-end>

           <v-flex xs2>
            <v-layout align-center justify-center row fill-height style="width: 54px; height: 54px; border-radius:70px; background-color:#FCD675">
                <font-awesome-icon size="2x" color="#000" :icon="['fas','plus']"/>
            </v-layout>
          </v-flex>

      </v-layout>

      <v-layout align-end justify-center row fill-height>
         <v-flex xs12 md6 sm8>
           <v-btn color="#FCD675" depressed block class="btn text-capitalize">Done</v-btn>
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
      font-size: 16px !important;
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
.btn{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 14px !important;
      text-align: justify !important;
      color: #000 !important;
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

<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'main', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> Add Photos </span>
           </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-xs,sm,md,lg,xl style="height:50vh;">
            <v-layout row wrap>
               <v-flex xs8 md12 sm12>
                  <p class="shop-img"> Add Your Images Here </p>
               </v-flex>
            </v-layout>
           <v-layout row wrap justify-center class="pb-2">
             <v-flex xs4 md3 sm8>
               <v-responsive class="pa-1">
                 <v-img
                   :src="require('../assets/pic10.png')"
                   style="border-radius:8px;"
                   contain
                 ></v-img>
               </v-responsive>
             </v-flex>
             <v-flex xs4 md3 sm3>
               <v-responsive class="pa-1">
                 <v-img
                   :src="require('../assets/pic8.png')"
                   style="border-radius:8px;"
                   contain
                 ></v-img>
               </v-responsive>
             </v-flex>
             <v-flex xs4 md3 sm3>
               <v-responsive class="pa-1">
                 <v-img
                   :src="require('../assets/pic9.png')"
                   contain
                   style="border-radius:8px;"
                 ></v-img>
               </v-responsive>
             </v-flex>
           </v-layout>
           <v-layout row wrap justify-center class="pb-2">
             <v-flex xs4 md3 sm3>
               <v-responsive class="pa-1">
                 <v-img
                   :src="require('../assets/pic6.png')"
                   style="border-radius:8px;"
                   contain
                 ></v-img>
               </v-responsive>
             </v-flex>
             <v-flex xs4 md3 sm3>
               <v-responsive class="pa-1">
                 <v-img
                   :src="require('../assets/pic5.png')"
                   style="border-radius:8px;"
                   contain
                 ></v-img>
               </v-responsive>
             </v-flex>
             <v-flex xs4 md3 sm3 style="background-color:#FCD675; border-radius:15px;">
                   <v-container text-xs-center fill-height>
                       <v-layout wrap align-center>
                         <v-flex xs12 md12 sm12>
                           <font-awesome-icon size="2x" :icon="['fas','plus-circle']"/></v-flex>
                       </v-layout>
                   </v-container>
             </v-flex>
           </v-layout>
           <v-layout align-end justify-center row fill-height class="mt-2">
              <v-flex xs12 md6 sm8>
                <v-btn color="#FCD675" depressed block class="btn text-capitalize">Next</v-btn>
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
.shop-img{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 14px !important;
      text-align: justify !important;
      color: #484848 !important;
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
</style>

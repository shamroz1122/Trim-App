<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'BarberSettings', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> My Profile </span>
           </v-flex>
        </v-layout>
      </v-container>


          <v-container>
            <v-layout row wrap justify-center class="ma-1">
              <v-flex xs12 md10 sm10>
                 <v-card class="card">
                     <v-card-text>
                      <v-layout row wrap justify-center>
                         <v-flex xs4>
                           <v-responsive>
                             <v-img
                               :src="require('../../../../assets/barber2.png')"
                               contain
                             ></v-img>
                           </v-responsive>
                         </v-flex>
                      </v-layout>

                      <v-layout row wrap text-xs-center class="pt-3">
                         <v-flex xs12>
                          <span class="name">  Amanda Cerny </span> <br />
                          <font-awesome-icon size="1x" color="#FCD675" :icon="['fas','mobile']"/>  <span class="text pl-1">  +02 123 4569 45879 </span>  <br />
                         <font-awesome-icon size="1x" color="#FCD675" :icon="['fas','envelope']"/>  <span class="text pl-1">  cerny@gmail.com </span> <br />
                         </v-flex>
                      </v-layout>
                     </v-card-text>
                 </v-card>
              </v-flex>
            </v-layout>

            <v-layout row wrap justify-center class="pt-2 ma-1">
              <v-flex xs12 md10 sm10>
                 <v-card class="card">
                     <v-card-text>

                       <v-layout row wrap justify-center class="pb-2">
                         <v-flex xs4 md3 sm8>
                           <v-responsive class="pa-1">
                             <v-img
                               :src="require('../../../../assets/pic10.png')"
                               style="border-radius:8px;"
                               contain
                             ></v-img>
                           </v-responsive>
                         </v-flex>
                         <v-flex xs4 md3 sm3>
                           <v-responsive class="pa-1">
                             <v-img
                               :src="require('../../../../assets/pic8.png')"
                               style="border-radius:8px;"
                               contain
                             ></v-img>
                           </v-responsive>
                         </v-flex>
                         <v-flex xs4 md3 sm3>
                           <v-responsive class="pa-1">
                             <v-img
                               :src="require('../../../../assets/pic9.png')"
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
                               :src="require('../../../../assets/pic6.png')"
                               style="border-radius:8px;"
                               contain
                             ></v-img>
                           </v-responsive>
                         </v-flex>
                         <v-flex xs4 md3 sm3>
                           <v-responsive class="pa-1">
                             <v-img
                               :src="require('../../../../assets/pic5.png')"
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
    font-size: 18px !important;
    text-align: center !important;
    color: #000000 !important;
}
.name{
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
  font-weight: normal !important;
  font-size: 13px !important;
  line-height: normal !important;
  color: #000 !important;
}
.title{
  font-family: Montserrat !important;
  font-style: normal !important;
  line-height: normal !important;
  font-weight: bold !important;
  font-size: 14px !important;
  text-align: justify !important;
  color: #484848 !important;
}
.card{
    border-radius:5px !important;
}
.back-link{
    font-style: normal !important;
    font-weight: normal !important;
    line-height: normal !important;
    font-size: 18px !important;
    text-align: justify !important;
    color: black !important;
}
/* .bg-div{
  background-color:#FCD675 !important;
  border-radius: 8px !important;
  padding-top: 40% !important;
  padding-left: 35%;
} */
</style>

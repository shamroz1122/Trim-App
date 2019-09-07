<template>
<div class="main">
     <v-container fluid style="background-color:#FCD675;" >
       <v-layout row wrap>
         <v-flex  xs2 md2 sm2 >
             <router-link class="help-btn"  :to="{ name: 'discover', params: {} }">  <font-awesome-icon class="back-link"   :icon="['fas','arrow-left']"/></router-link>
         </v-flex>
         <v-flex  xs10 md6 sm6 >
        <span class="title"> Looking for Barber at </span>
         </v-flex>
       </v-layout>

     </v-container >

   <v-container fluid >

       <v-layout  row wrap text-xs-center just justify-center class="pt-3">
             <v-flex xs12 sm8 md8>

             <v-text-field
              prepend-inner-icon="search"
              placeholder="Enter New Location"
              solo
              class="enter-loc"
              >
             </v-text-field>
             </v-flex>
       </v-layout>

       <v-layout row wrap justify-center>
         <v-flex xs12 md8 sm12>
             <v-card>
             <v-card-text>
             <v-layout row wrap align-center>
               <v-flex >
                 <div class="title">
                   <font-awesome-icon size="1x"  :icon="['fas','location-arrow']"/>
                 </div>
               </v-flex>

               <v-flex style="border-left:0.5px solid #000000;"  xs11 md9 sm2 class="pa-2">
                  <span class="current-loc"> Current Location </span> <br />
                  <span class="loc-text"> 10 Pared St, Paddingtong, London W21JU, UK </span>
             </v-flex>
         </v-layout>

               </v-card-text>
               </v-card>
            </v-flex>
         </v-layout>

      <v-layout row wrap justify-center class="pt-2">
        <v-flex xs12 md8 sm12>
            <v-card>
            <v-card-text>
            <v-layout row wrap  align-center>
              <v-flex  xs1 md3 sm10  class="border" >
                <div class="title">
                  <font-awesome-icon size="1x"  :icon="['fas','star']"/>
                </div>
              </v-flex>

              <v-flex style="border-left:0.5px solid #000000;" class="pa-2"  xs11 md9 sm2>
             <span class="current-loc"> Recent Location </span> <br />
             <span class="loc-text"> 10 Pared St, Paddingtong, London W21JU, UK </span>
            </v-flex>
       </v-layout>

              </v-card-text>
              </v-card>
           </v-flex>
     </v-layout>

      </v-container >

</div>
</template>

<style media="screen" scoped="">
.enter-loc{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: 300 !important;
  line-height: normal !important;
  font-size: 12px !important;
  color: #484848 !important;
}
.back-link{
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
  text-align: justify;
  color: #000;
}
.current-loc{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 14px !important;
  text-align: justify !important;
  color: #484848 !important;
}
.loc-text{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: 300 !important;
  line-height: normal !important;
  font-size: 12px !important;
  color: #484848 !important;

}
.title{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 15px !important;
  text-align: justify !important;
  color: #484848;
}
</style>

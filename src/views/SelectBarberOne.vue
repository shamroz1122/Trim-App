<template>
 <div class="main">
   <div class="upper-div">
    <v-container>
      <v-layout row wrap>
        <v-flex  xs2 md2 sm2  style="text-align:left;">
        <router-link class="help-btn"  :to="{ name: 'main', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
         </v-flex>
         <v-flex  xs6 md2 sm2  style="text-align:left;">
           <span class="title">  Select Barber </span>
          </v-flex>
        </v-layout>
     </v-container>
    </div>

    <v-layout row wrap style="border-bottom:1px solid #E5E5E5; background-color:white;">
    <v-flex  xs3 md2 sm2  style="text-align:left; " class="pa-2">
      <v-responsive>
          <v-img
            :src="require('../assets/barber1.png')"
            contain
          ></v-img>
      </v-responsive>
    </v-flex>
    <v-flex  xs6 md2 sm2  class="pt-4 pl-2" >
  <p class="barber-name">  Angelina Jolie </p>
    </v-flex>
    <v-flex  xs3 md2 sm3 class="pt-3 pl-3"  >
      <v-icon large> check_circle_outline  </v-icon>
    </v-flex>

    </v-layout>

    <v-layout row wrap style="border-bottom:1px solid #E5E5E5; background-color:white;">
    <v-flex  xs3 md2 sm2  style="text-align:left; " class="pa-2">
      <v-responsive>
        <v-img
          :src="require('../assets/barber2.png')"
          contain
        ></v-img>
      </v-responsive>
    </v-flex>
    <v-flex  xs6 md2 sm2  class="pt-4 pl-2" >
    <p class="barber-name">  Amanda Cerny </p>
    </v-flex>
    <v-flex  xs3 md2 sm3 class="pt-3 pl-3"  >
      <v-icon large> check_circle  </v-icon>
    </v-flex>  

    </v-layout>

    <v-layout row wrap style="border-bottom:1px solid #E5E5E5; background-color:white;">
    <v-flex  xs3 md2 sm2  style="text-align:left; " class="pa-2">
      <v-responsive>
        <v-img
          :src="require('../assets/baber3.png')"
          contain
        ></v-img> 
      </v-responsive>
    </v-flex>
    <v-flex  xs6 md2 sm2  class="pt-4 pl-2" >
    <p class="barber-name">  Julia Ann  </p>
    </v-flex>
    <v-flex  xs3 md2 sm3 class="pt-3 pl-3"  >
      <v-icon large> check_circle_outline    </v-icon>
    </v-flex>

    </v-layout>
    <v-layout row wrap style="border-bottom:1px solid #E5E5E5; background-color:white;">
    <v-flex  xs3 md2 sm2  class="pa-2">
      <v-responsive>
        <v-img
          :src="require('../assets/barber5.png')"
          contain
        ></v-img>
      </v-responsive>
    </v-flex>
    <v-flex  xs6 md2 sm2  class="pt-4 pl-2" >
    <p class="barber-name">  Mia Khalifa </p>
    </v-flex>
    <v-flex  xs3 md2 sm3 class="pt-3 pl-3"  >
      <v-icon large> check_circle_outline    </v-icon>
    </v-flex>

    </v-layout>

    <v-layout row wrap style="border-bottom:1px solid #E5E5E5; background-color:white;">
    <v-flex  xs3 md2 sm2  style="text-align:left; " class="pa-2">
      <v-responsive>
        <v-img
          :src="require('../assets/barber4.png')"
          contain
        ></v-img>
      </v-responsive>
    </v-flex>
    <v-flex  xs6 md2 sm2  class="pt-4 pl-2" >
    <p class="barber-name">  Nendi Jones </p>
    </v-flex>
    <v-flex  xs3 md2 sm3 class="pt-3 pl-3"  >
      <v-icon large> check_circle_outline </v-icon>
    </v-flex>

    </v-layout>

     <v-layout row wrap text-xs-center just justify-center class="pt-5">
         <v-flex xs12 md5 sm6>

          <v-btn class="login-btn" depressed >Next</v-btn>

         </v-flex>
     </v-layout>

  </div>
  </template>

<style scoped="">
.upper-div{
 background-color:#FCD675;
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
font-family: Montserrat;
font-style: normal;
font-weight: 500;
line-height: normal;
font-size: 14px;
text-align: justify;
color: #484848;
}
.barber-name{
font-family: Montserrat;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 18px;
text-align: justify;
color: #000000;
}
.login-btn{
  font-family: Montserrat;
  font-style: normal;
  font-weight:bold !important;
  line-height: normal;
  font-size: 14px;
  height: 48px;
  width: 80%;
  background: #FCD675 !important;
  color: #484848;
  text-transform: capitalize;
   }
</style>
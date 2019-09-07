<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'SettingsSaloonInformation', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> Add Barber </span>
           </v-flex>
        </v-layout>
      </v-container>
      
      <v-container grid-list-xs,sm,md,lg,xl style="background-color:white;">
        <v-layout row wrap justify-center>
          <v-flex xs4 md1 sm3 style="background-color:#C4C4C4; border:2px solid #FCD675;  border-radius:320px;">
                <v-container text-xs-center fill-height>
                    <v-layout wrap align-center>
                      <v-flex xs12 md12 sm12 class="py-3">
                        <font-awesome-icon size="2x" color="#000" :icon="['fas','file-image']"/></v-flex>
                    </v-layout>
                </v-container>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md10 sm10>
            <span class="name"> Barber Name </span>
            <v-text-field class="py-0 my-0" color="#000">  </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md10 sm10>
            <span class="name"> Email </span>
            <v-text-field class="py-0 my-0" color="#000">  </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md10 sm10>
            <span class="name"> Pin Code </span>
            <v-text-field class="py-0 my-0" color="#000">  </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md10 sm10>
            <span class="name"> Phone Number </span>
            <v-text-field class="py-0 my-0" color="#000">  </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout justify-center row wrap>
           <v-flex xs12 md10 sm10>
             <v-btn color="#FCD675" block depressed class="btn text-capitalize">Add</v-btn>
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
.name{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: 300 !important;
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

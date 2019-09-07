<template>
 <div class="main">
  
   <v-container fluid style="background-color:#FCD675;" >
       <v-layout row wrap>
          <v-flex  xs2 md2 sm2>
                 <a @click='Backroute()' class="none"  style="text-decoration:none;">
                  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/>
                 </a>
           </v-flex>
           <v-flex  xs10 md8 sm8>
             <span class="title">  Appointment Created  </span>
           </v-flex>
       </v-layout>
    </v-container>

      <v-container fluid style="background-color:#E5E5E5;">
           <v-layout row wrap justify-center>
             <v-flex xs12 md10 sm10>
                <v-card class="card mt-5">
                  <v-card-text>

                    <v-layout row wrap text-xs-center>
                         <v-flex xs12 md12 sm12>
                           <v-layout row wrap text-xs-center justify-center>
                              <v-flex xs3 md3 offset-md2 sm3 offset-sm2>
                                <div style="width: 86px; height: 86px; border-radius:70px; margin-top:-60px; background-color:#5BBC52">
                                   <font-awesome-icon size="5x" color="black" style="padding-top:17px;" :icon="['fas','check']"/>
                                </div>
                              </v-flex>
                           </v-layout>

                           <p class="congrats pt-2"> Thanks! </p>
                           <span class="title"> Your appointment successfully created </span>
                             <br /> 
                           <span class="title" style="color:red !important;"> * Payment done with Paypal </span>
                         </v-flex>
                      </v-layout>
<!-- 
               <v-layout row wrap text-xs-center class="pt-2">
                 <v-flex xs12 md 12 sm12>
                    <p class="title"> Appointment Details: </p>
                  </v-flex>
              </v-layout>

                     <v-layout row wrap class="pa-1">
                        <v-flex xs4 md4 sm4>
                          <span class="text"> Barber : </span>
                        </v-flex>
                        <v-flex xs8 md8 sm8>
                          <span class="title">    </span>
                         </v-flex>
                     </v-layout>
                     <v-layout row wrap class="pa-1">
                        <v-flex xs4 md4 sm4>
                          <span class="text"> Date : </span>
                        </v-flex>
                        <v-flex xs8 md8 sm8>
                          <span class="title">  </span>
                         </v-flex>
                     </v-layout>
                     <v-layout row wrap class="pa-1">
                        <v-flex xs4 md4 sm4>
                          <span class="text"> Time : </span>
                        </v-flex>
                        <v-flex xs8 md8 sm8>
                          <span class="title">    </span>
                         </v-flex>
                     </v-layout>
                     <v-layout row wrap class="pa-1">
                        <v-flex xs4 md4 sm4>
                          <span class="text"> Address : </span>
                        </v-flex>
                        <v-flex xs8 md8 sm8>
                          <span class="title">   </span>
                         </v-flex>
                     </v-layout> -->

         </v-card-text>
         </v-card>

          </v-flex>
          </v-layout>

          <v-layout row wrap justify-center class="pt-3">
            <v-flex xs12 md10 sm10>
              <v-btn color="#FCD675" :to="{name:'MyBookingHome', params:{}}" style="font-weight:bold !important" depressed block class="btn">OK</v-btn>
            </v-flex>
          </v-layout>

    <v-layout row wrap justify-center class="pt-3">
      <v-flex xs12 md10 sm10>
        <span class="title"> Terms & Conditions: </span> <br />
         <p class="small-text">	• Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
	• Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br />
	• 	when an unknown printer took a galley of type  to make a type specimen book.<br />
	• 	It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </v-flex>
    </v-layout>
    </v-container>

</div>
</template>

<style scoped="">
.back-link{
    font-family: Font Awesome 5 Free !important;
    font-style: normal !important;
    font-weight: normal !important;
    line-height: normal !important;
    font-size: 18px !important;
    text-align: justify !important;
    color: #484848 !important;
}
.title{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 13px !important;
    color: #484848 !important;
}
.congrats{
  font-family: Montserrat !important;
  font-weight: bold !important;
  font-style: normal !important;
  line-height: normal !important;
  font-size: 24px !important;
  text-transform: capitalize !important;
  color: #484848 !important;
}
.card{
    border-radius:7px !important;
}
.text{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: 300 !important;
  line-height: normal !important;
  font-size: 14px !important;
  color: #484848 !important;
}
.btn{
  font-family: Montserrat !important;
  font-weight: 500 !important;
  font-style: normal !important;
  line-height: normal !important;
  font-size: 14px !important;
  text-align: justify !important;
  color: #484848 !important;
}
.small-text{
font-family: Montserrat !important;
font-style: normal !important;
line-height: normal !important;
font-weight: 500 !important;
font-size: 12px !important;
color: #000000 !important;
}
</style>

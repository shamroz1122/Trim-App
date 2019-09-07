<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap justify-center text-xs-center>
          <v-flex xs8 offset-xs2 md8 offset-md2 sm8 offset-sm2 >
            <span class="find-text">My Bookings</span>
          </v-flex>
          <v-flex xs2 md2 sm2>
                <v-switch
                class="my-0 py-0"
                color="black"
                hide-details
              ></v-switch>
          </v-flex>

        </v-layout>
      </v-container>

      <v-container fluid class="date-container ma-0">
        <v-layout row wrap text-xs-center>
           <v-flex xs2 md2 sm2 >
              <span class="today"> Today </span>
           </v-flex>
           <v-flex xs8 md8 sm8 >
              <span class="date"> October 18  </span>
           </v-flex>
        </v-layout>
        <v-layout row wrap text-xs-center class="pt-3">
           <v-flex xs2 md2 sm2>
              <span class="day"> SUN </span>
              <p> 7 </p>
           </v-flex>
           <v-flex xs2 md2 sm2>
              <span class="day">  MON </span>
              <p> 8 </p>
           </v-flex>
           <v-flex xs2 md2 sm2>
              <span class="day"> TUE  </span>
              <p> 9 </p>

           </v-flex>
           <v-flex xs2 md2 sm2>
             <div style="background-color:#FCD675; color:white;">
              <span style=" color:white;" class="day" > WED  </span>
              <p> 10 </p>
            </div>
           </v-flex>
           <v-flex xs2 md2 sm2>
              <span class="day"> THU  </span>
              <p> 11 </p>

           </v-flex>
           <v-flex xs2 md2 sm2>

              <span class="day"> FRI  </span>
              <p> 12 </p>

           </v-flex>

        </v-layout>
      </v-container>

      <v-container grid-list-xs,sm,md,lg,xl fluid>
         <v-layout row wrap>

           <v-flex xs12 md10 sm10>
              <v-layout row wrap justify-end>
                <v-flex xs5 md3 sm3 d-flex>
                     <v-select
                       :items="items"
                       label="All"
                       solo
                       background-color="#FCD675"
                     ></v-select>
               </v-flex>
              </v-layout>
           </v-flex>

       </v-layout>

         <v-layout row wrap justify-center>
           <v-flex xs2 md2 sm2>
             <span class="text"> 01:00 PM </span>
             <p class="text pl-2"> (1) </p>
           </v-flex>
           <v-flex xs10 md6 sm6 class="onepm">
             <router-link style="text-decoration:none"  :to="{ name: 'BookingsClient', params: {} }">
               <v-layout row wrap class="pt-2 pl-2">
                 <v-flex xs9>
                   <span class="title"> Kwasi Morson </span>
                   <p class="date"> Men’s Haircut by Amanda Cerny </p>
                 </v-flex>
                 <v-flex xs3>
                   <span class="title"> 01:30 PM </span>
                   <p class="date"> Completed </p>
                 </v-flex>
               </v-layout>
             </router-link>


           </v-flex>
         </v-layout>

<router-link style="text-decoration:none"  :to="{ name: 'BookingsClient', params: {} }">
         <v-layout  row wrap justify-center class="pt-2">
           <v-flex xs2 sm2 md2 class="mt-5">
             <span class="text"> 01:00 PM </span>
             <p class="text pl-2"> (1) </p>
           </v-flex>
           <v-flex xs10 md6 sm6 class="twopm">
               <v-layout row wrap class="pt-3 pl-2">
                 <v-flex xs9>
                   <span class="title"> Kwasi Morson </span>
                   <p class="date"> Men’s Haircut by Amanda Cerny </p>
                 </v-flex>
                 <v-flex xs3>
                   <span class="title"> 01:30 PM </span>
                   <p class="date"> Pending </p>
                 </v-flex>
               </v-layout>
               <v-divider color="#00C2FF"></v-divider>
               <v-layout row wrap class="pt-2 pl-2">
                 <v-flex xs9>
                   <span class="title"> Kwasi Morson </span>
                   <p class="date"> Men’s Haircut by Amanda Cerny </p>
                 </v-flex>
                 <v-flex xs3>
                   <span class="title"> 01:30 PM </span>
                   <p class="date"> Pending </p>
                 </v-flex>
               </v-layout>
               <v-divider color="#00C2FF"></v-divider>
               <v-layout row wrap class="pt-2 pl-2">
                 <v-flex xs9>
                   <span class="title"> Kwasi Morson </span>
                   <p class="date"> Men’s Haircut by Amanda Cerny </p>
                 </v-flex>
                 <v-flex xs3>
                   <span class="title"> 01:30 PM </span>
                   <p class="date"> Pending </p>
                 </v-flex>
               </v-layout>

           </v-flex>
         </v-layout>

         <v-layout row wrap justify-center pt-2>
           <v-flex xs2 md2 sm2>
             <span class="text"> 03:00 PM </span>
             <p class="text pl-2"> (1) </p>
           </v-flex>
           <v-flex xs10 md6 sm6 class="threepm">
               <v-layout row wrap class="pt-2 pl-2">
                 <v-flex xs9>
                   <span class="title"> Kwasi Morson </span>
                   <p class="date"> Men’s Haircut by Amanda Cerny </p>
                 </v-flex>
                 <v-flex xs3>
                   <span class="title"> 03:30 PM </span>
                   <p class="date"> Canceled </p>
                 </v-flex>
               </v-layout>

           </v-flex>
         </v-layout>
       </router-link>

      </v-container>


  </div>
  </template>
  <script>
  export default {
    data: () => ({
      items: ['All', 'Completed', 'Pending']
    }),
    mounted (){

      var el = document.getElementById('app')
      el.classList.remove('grey-color')
      el.classList.add('white-color')


    }

  }
</script>
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

.fb{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
      text-align: center !important;
      color: #484848 !important;
  }
.today{
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 10px;
      text-align: justify;
      color: #484848;
  }
.date{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-size: 10px;
    text-align: justify;
    color: #484848;
}
.time{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    text-align: justify;
    color: #484848;
}
.mins{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-size: 10px;
    text-align: justify;
    color: #484848;
}
.day{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-size: 12px;
    text-align: justify;
    color: #484848;
}
.text{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 12px !important;
    color: #484848 !important;
}
.title{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 14px !important;
    text-align: justify !important;
    color: #484848 !important;
}
.date-container{
    background-color:#F1F1F1;
    color:#000;
}
.switch-btn{
   margin-top:-20px;
}
.twopm{
  background-color:#B7E9FF;
  border-left:7px solid #00C2FF;
  border-top:1px solid #00C2FF;
  border-right:1px solid #00C2FF;
  border-bottom:1px solid #00C2FF;
}

.onepm{
  background-color:#AFECAA;
  border-left:7px solid #5BBC52;
  border-top:1px solid #5BBC52;
  border-right:1px solid #5BBC52;
  border-bottom:1px solid #5BBC52;
}
.threepm{
  background-color:#FFB0B0;
  border-left:7px solid #FF5555;
  border-top:1px solid #FF5555;
  border-right:1px solid #FF5555;
  border-bottom:1px solid #FF5555;
}
  </style>

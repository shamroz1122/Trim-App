<template>
 <div class="main">
   <div class="upper-div">
    <v-container>
      <v-layout row wrap>
        <v-flex  xs2 md2 sm2  style="text-align:left;">
        <router-link class="help-btn"  :to="{ name: 'main', params: {} }">  
          <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/>
          </router-link>
         </v-flex>
        </v-layout>
     </v-container>
    </div>

    <v-container >

      <v-layout row wrap >
        <v-flex  xs10 md6 sm2 class="pt-3">
       <span class="distance">Distance</span>

        </v-flex>
      </v-layout>


        <v-layout row wrap text-xs-center just justify-center class="pt-3">
             <v-flex xs11 md6 sm6>

               <v-layout
                 mb-3 >
                 <v-flex text-xs-left>

                   <v-fade-transition>
                     <v-avatar
                       v-if="isPlaying"
                       :color="color"
                       :style="{
                         animationDuration: animationDuration
                       }"
                       class="mb-1 v-avatar--metronome"
                       size="12"
                   ></v-avatar>
                   </v-fade-transition>

                 </v-flex>
                 <v-flex text-xs-right>
                 </v-flex>
                 </v-layout>

                 <v-slider
                   v-model="bpm"
                   :color="color"
                   always-dirty
                   min="40"
                   max="218"  >
                 </v-slider>

             </v-flex>
         </v-layout>
         <v-layout row wrap>
           <v-flex  xs4 md4 sm2 text-xs-center just justify-center >
              <span class="km"> 1 km </span>
           </v-flex>
           <v-flex  xs4 md4 sm2 text-xs-center just justify-center >
                <span class="km" v-text="bpm">  </span> <span class="km"> km  </span>
            </v-flex>
           <v-flex  xs4 md4 sm2 text-xs-center just justify-center >
                  <span class="km"> Anywhere </span>
           </v-flex>
         </v-layout>

         <v-layout row wrap >
           <v-flex  xs10 md6 sm2 class="pt-5">
          <span class="distance">Starting From</span>


          </v-flex>
           </v-layout>


           <v-layout row wrap text-xs-center just justify-center class="pt-3">
                <v-flex xs11 md6 sm6>

                  <v-layout
                    mb-3 >
                    <v-flex text-xs-left>

                      <v-fade-transition>
                        <v-avatar
                          v-if="isPlaying"
                          :color="color"
                          :style="{
                            animationDuration: animationDuration
                          }"
                          class="mb-1 v-avatar--metronome"
                          size="12"
                      ></v-avatar>
                      </v-fade-transition>

                    </v-flex>
                    <v-flex text-xs-right>
                    </v-flex>
                    </v-layout>

                    <v-slider
                      v-model="bpm1"
                      :color="color"
                      always-dirty
                      min="40"
                      max="218"  >
                    </v-slider>

                </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex  xs4 md4 sm2 text-xs-center just justify-center >
                 <span class="km"> 1 km </span>
              </v-flex>
              <v-flex  xs4 md4 sm2 text-xs-center just justify-center >
                   <span class="km" v-text="bpmm">  </span> <span class="km"> km  </span>
               </v-flex>
              <v-flex  xs4 md4 sm2 text-xs-center just justify-center >
                     <span class="km"> Anywhere </span>
              </v-flex>
            </v-layout>

          <v-layout row wrap text-xs-center just justify-center class="pt-5">
               <v-flex xs12 md5 sm6>

                <v-btn class="login-btn" depressed block >See result</v-btn>
                  <v-btn flat :to="{ name: 'resetpassword', params: {} }" class="pt-2 fg-pass" >Reset</v-btn>
               </v-flex>
           </v-layout>



 </v-container>
 </div>
   </template>
   <script>
     export default {
       data: () => ({
         bpm: 40,
         interval: null,
         isPlaying: false
       }),

       computed: {
         color () {
           if (this.bpm < 100) return 'indigo'
           if (this.bpm < 125) return 'teal'
           if (this.bpm < 140) return 'green'
           if (this.bpm < 175) return 'orange'
           return 'red'
         },
         animationDuration () {
           return `${60 / this.bpm}s`
         }
       },

       methods: {
         decrement () {
           this.bpm--
         },
         increment () {
           this.bpm++
         },
         toggle () {
           this.isPlaying = !this.isPlaying
         }
       }
     }

   </script>

<style scoped="">
.application.theme--light{
  background: #ffffff;
  color: #000;
}
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
.fg-pass{
font-family: Montserrat;
font-style: normal;
font-weight: 500;
line-height: normal;
font-size: 14px;
text-align: justify;
text-decoration-line: underline;
text-transform:capitalize;
   }
.distance{
font-family: Montserrat;
font-style: normal;
font-weight: bold !important;
line-height: normal;
font-size: 24px;
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
     width:336px;
     background: #FCD675 !important;
     color: #484848;
     text-transform: capitalize;
   }
   @keyframes metronome-example {
      from {
        transform: scale(.5);
      }

      to {
        transform: scale(1);
      }
    }
  .v-avatar--metronome {
      animation-name: metronome-example;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
.km{
font-family: Montserrat;
font-style: normal;
font-weight: 300;
line-height: normal;
font-size: 12px;
text-align: justify;
color: #000000;
  }
   </style>

<template>
 <div class="main">

    <v-container fluid style="background-color:#FCD675;" >
      <v-layout row wrap>
          <v-flex  xs2 md2 sm2>
         <a @click='Backroute()' class="none"  style="text-decoration:none;">
                  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/>
                 </a>
         </v-flex>
      </v-layout>
    </v-container>

  <v-container style="background-color:white;">

      <v-layout row wrap >
        <v-flex  xs10 md6 sm6 class="pt-3">
          <span class="distance">Distance</span>
        </v-flex>
      </v-layout>

       <v-layout row wrap justify-center class="pt-3">
             <v-flex xs11 md6 sm6>

              <v-layout mb-3 >
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
           <v-flex  xs4 md4 sm4 text-xs-center just >
              <span class="km"> 1 km </span>
           </v-flex>
           <v-flex  xs4 md4 sm4 text-xs-center just  >
                <span class="km" v-text="bpm">  </span> <span class="km"> km  </span>
            </v-flex>
           <v-flex  xs4 md4 sm4 text-xs-center just >
                  <span class="km"> Anywhere </span>
           </v-flex>
         </v-layout>

            <v-layout row wrap >
              <v-flex  xs10 md6 sm6 class="pt-5">
                <span class="distance">Starting From</span>
              </v-flex>
            </v-layout>

          <v-layout row wrap justify-center class="pt-3">
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
              <v-flex  xs4 md4 sm4 text-xs-center>
                 <span class="km"> 1 km </span>
              </v-flex>
              <v-flex  xs4 md4 sm4 text-xs-center just  >
                   <span class="km" v-text="bpm">  </span> <span class="km"> km  </span>
               </v-flex>
              <v-flex  xs4 md4 sm4 text-xs-center just>
                     <span class="km"> Anywhere </span>
              </v-flex>
            </v-layout>

          <v-layout row wrap text-xs-center class="pt-1">
               <v-flex xs12 md5 sm5>

                <v-btn class="login-btn" :to="{name:'discover',params:{}}" block depressed >See result</v-btn>
                  <!-- <v-btn flat :to="{ name: 'resetpassword', params: {} }" class="pt-2 fg-pass" >Reset</v-btn> -->
               </v-flex>
          </v-layout>

          <v-layout row wrap text-xs-center class="pt-1">
               <v-flex xs12 md5 sm5>
                 <v-btn flat :to="{ name: 'resetpassword', params: {} }"  class="pt-2 fg-pass" >Reset</v-btn>
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
           if (this.bpm < 100) return '#FCD675'
           if (this.bpm < 125) return '#FCD675'
           if (this.bpm < 140) return '#FCD675'
           if (this.bpm < 175) return '#FCD675'
           return '#FCD675'
         },
         animationDuration () {
           return `${60 / this.bpm}s`
         }
       },

       methods: {
         Backroute(){
          this.$router.go(-1);
          },
         decrement () {
           this.bpm--
         },
         increment () {
           this.bpm++
         },
         toggle () {
           this.isPlaying = !this.isPlaying
         }
       },
       mounted (){

       var interval =   setTimeout(function(){

         var el = document.getElementById('app')
         el.classList.remove('grey-color')
         el.classList.add('white-color')
         clearTimeout(interval);
       }, 100);

       },
       destroyed () {
         var el = document.getElementById('app')
         el.classList.remove('white-color')
         el.classList.add('grey-color')
       }
     }

</script>

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

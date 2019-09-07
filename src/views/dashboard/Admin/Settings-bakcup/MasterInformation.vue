<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center v-if="saloonHeader">
           <v-flex xs10 md12 sm12>
             <span class="find-text"> Trim App </span>
             <p class="text"> Get More Customer with Trim App </p>
           </v-flex>
        </v-layout>

        <v-layout row wrap text-md-center v-if="photosHeader">
            <v-flex  xs2 md2 sm2>
            <font-awesome-icon @click="step3" class="back-link" large   :icon="['fas','arrow-left']"/>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> Add Photos </span>
           </v-flex>
        </v-layout>

        <v-layout row wrap text-md-center  v-if="barbersHeader">
            <v-flex  xs2 md2 sm2>
            <font-awesome-icon @click="step1"  class="back-link" large   :icon="['fas','arrow-left']"/>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> Add Barber </span>
           </v-flex>
        </v-layout>



      </v-container>

         <v-stepper v-model="e1"  class="elevation-0">

            <v-stepper-header class="elevation-0" style="background-color:#F1F1F1;">
              <v-stepper-step  :step="1" color="#FCD675" :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :step="2" color="#FCD675"  :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :step="3" color="#FCD675"> Name of step 3</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items class="elevation-0">

              <v-stepper-content step="1"  >
                <v-card class="elevation-0" style="height:75vh">
                    <v-layout row wrap justify-center class="pt-4">
                      <v-flex xs12 md10 sm10>
                        <span class="name"> Saloon Phone Number </span>
                        <v-text-field class="py-0 my-0" color="#000">  </v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row wrap justify-center class="pt-4">
                      <v-flex xs12 md10 sm10>
                        <span class="name"> Address </span>
                        <v-text-field class="py-0 my-0" color="#000">  </v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row wrap justify-center class="pt-4">
                      <v-flex xs12 md10 sm10>
                        <span class="name"> Category </span>
                        <v-select
                        v-model="select"
                        :items="items"
                        item-text="state"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line
                        color="#000"
                       ></v-select>
                      </v-flex>
                    </v-layout>
                    <v-layout row wrap justify-center class="pt-4">
                      <v-flex xs12 md10 sm10>
                        <span class="name"> Opening Hours </span>
                        <v-select
                        v-model="select1"
                        :items="items"
                        item-text="state"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line
                        color="#000"
                       ></v-select>
                      </v-flex>
                    </v-layout>

                  </v-card>

                  <v-layout align-end justify-center row fill-height>
                     <v-flex xs12 md6 sm8>
                       <v-btn color="#FCD675" @click="step1" depressed block class="btn text-capitalize">Next</v-btn>
                     </v-flex>
                  </v-layout>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card style="height:55vh" class="elevation-0">

                  <v-layout row wrap>
                     <v-flex xs8 md12 sm12>
                        <p class="shop-img"> Add Your Images Here </p>
                     </v-flex>
                  </v-layout>
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

                 </v-card>

                <v-layout align-end justify-center row fill-height class="mt-2">
                   <v-flex xs12 md6 sm8>
                     <v-btn color="#FCD675"   @click="step2" depressed block class="btn text-capitalize">Next</v-btn>
                   </v-flex>
                </v-layout>

              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card style="height:55vh" class="elevation-0">

                  <v-layout justify-center row wrap>
                   <v-flex xs12 md8 sm8>

                           <v-layout row wrap class="pb-2">
                              <v-flex xs3 md2 sm3>
                                <v-responsive>
                                  <v-img
                                    :src="require('../../../../assets/barber2.png')"
                                    contain
                                  ></v-img>
                                </v-responsive>
                              </v-flex>
                              <v-flex xs7 md6 sm8 class="pt-3 pl-3">
                                  <p class="title">Amanda Cerny</p>
                                  <p class="text"> +78 578 658 1247 </p>
                              </v-flex>
                           </v-layout>
                           <v-divider></v-divider>
                           <v-layout row wrap class="pb-2 pt-2">
                              <v-flex xs3 md2 sm3>
                                <v-responsive>
                                  <v-img
                                    :src="require('../../../../assets/barber1.png')"
                                    contain
                                  ></v-img>
                                </v-responsive>
                              </v-flex>
                              <v-flex xs7 md6 sm8 class="pt-3 pl-3">
                                  <p class="title">Angelina Jolie</p>
                                  <p class="text"> +22 222 589 1478 </p>
                              </v-flex>
                           </v-layout>

                              <v-divider></v-divider>
                   </v-flex>
                   </v-layout>

                   </v-card>

                   <v-layout wrap row text-xs-center justify-end>
                        <v-flex xs2>
                         <v-layout align-center justify-center row fill-height style="width: 54px; height: 54px; border-radius:70px; background-color:#FCD675">
                                <router-link :to="{ name: 'SettingsAddBarber', params: {} }"><font-awesome-icon size="2x" color="#000" :icon="['fas','plus']"/></router-link>
                         </v-layout>
                       </v-flex>
                   </v-layout>

                  <v-layout align-end justify-center row fill-height>
                     <v-flex xs12 md6 sm8>
                       <v-btn @click="step3" color="#FCD675" depressed block class="btn text-capitalize">Done</v-btn>
                     </v-flex>
                  </v-layout>
              </v-stepper-content>


            </v-stepper-items>

          </v-stepper>




      <v-container grid-list-xs,sm,md,lg,xl style="background-color:white;">


      </v-container>


</div>
</template>
<script>
  export default {
    data () {
      return {
        saloonHeader: true,
        photosHeader: false,
        barbersHeader: false,
        e1: 0,
        select: { state: '', abbr: '' },
        select1: { state: '', abbr: '' },
        items: [
          { state: 'one'},
          { state: 'two' },
          { state: 'Hour 3' }
        ]

      }
    },

    methods: {
        step1(){

          this.e1 = 2

          this.saloonHeader = false
          this.barbersHeader= false
          this.photosHeader= true
        },
        step2(){
          this.e1 = 3
          this.saloonHeader = false
          this.photosHeader= false
          this.barbersHeader= true

        },
        step3(){
          this.e1 = 1
          this.saloonHeader = true
          this.barbersHeader= false
          this.photosHeader= false
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
.find-text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 16px !important;
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
.text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: 300 !important;
      line-height: normal !important;
      font-size: 12px !important;
      color: #484848 !important;
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
      height: 42px !important;
      font-size: 14px !important;
      text-align: justify !important;
      color: #000 !important;
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
</style>

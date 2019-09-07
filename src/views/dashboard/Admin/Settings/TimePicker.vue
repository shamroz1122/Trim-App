<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'WorkingHour', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text text-capitalize"> {{ this.$route.params.day }} </span>
           </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-xs,sm,md,lg,xl>
        <v-form ref="form1" v-model="valid" lazy-validation @submit.prevent="saveWorkingHours">
          <v-layout row wrap justify-center>
             <v-flex sm12 md10 sm10>
               <v-card class="card">
                  <v-card-text>
                      <v-layout justify-center ow wrap class="pb-2">
                        <v-flex xs12 md11 sm10>
                           <span class="title"> Start From </span>
                        </v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                      <v-layout justify-center text-xs-center row wrap class="pt-3">
                        <v-flex xs12 md12 sm12 class="py-2 ">
                          <v-dialog
                          ref="dialog"
                          v-model="modal"
                          :return-value.sync="time"
                          persistent
                          lazy
                          full-width
                          width="290px"
                          >
                          <v-text-field
                          slot="activator"
                          v-model="time"
                          label="Pick Time"
                          prepend-icon="access_time"
                          readonly
                          ></v-text-field>
                          <v-time-picker
                          v-if="modal"
                          v-model="time"
                          full-width
                          color="#FCD675"
                          format="24hr"
                          >
                          <v-spacer></v-spacer>
                          <v-btn flat color="#FCD675" @click="modal = false">Cancel</v-btn>
                          <v-btn flat color="#FCD675" @click="$refs.dialog.save(time)">OK</v-btn>
                          </v-time-picker>
                          </v-dialog>
                          </v-flex>
                      </v-layout>
                  </v-card-text>
               </v-card>
             </v-flex>
          </v-layout>

          <v-layout row wrap justify-center class="pt-2">
             <v-flex sm12 md10 sm10>
               <v-card class="card">
                  <v-card-text>
                      <v-layout row wrap justify-center class="pb-2">
                        <v-flex xs12 md11 sm10>
                           <span class="title"> Close At </span>
                        </v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                      <v-layout justify-center text-xs-center row wrap class="pt-3">
                        <v-flex xs12 md12 sm12 class="py-2 ">
                          <v-dialog
                          ref="dialog2"
                          v-model="modal2"
                          :return-value.sync="time2"
                          persistent
                          lazy
                          full-width
                          width="290px"
                          >
                          <v-text-field
                          slot="activator"
                          v-model="time2"
                          label="Pick Time"
                          prepend-icon="access_time"
                          readonly
                          ></v-text-field>
                          <v-time-picker
                          v-if="modal2"
                          v-model="time2"
                          full-width
                          color="#FCD675"
                          format="24hr"
                          >
                          <v-spacer></v-spacer>
                          <v-btn flat color="#FCD675" @click="modal2 = false">Cancel</v-btn>
                          <v-btn flat color="#FCD675" @click="$refs.dialog2.save(time2)">OK</v-btn>
                          </v-time-picker>
                          </v-dialog>
                          </v-flex>
                      </v-layout>
                  </v-card-text>
               </v-card>
             </v-flex>
          </v-layout>

          <v-layout row wrap justify-center class="pt-2">
            
            <v-flex xs12 md10 sm10>
               <v-btn type="submit" v-show="updateBtn" color="#FCD675" depressed block class="btn text-capitalize"> Update</v-btn>
               <v-layout row wrap justify-center text-xs-center>
                 <v-flex xs12>
                   <v-progress-circular
                     indeterminate
                     color="#FCD675"
                     v-show = "loader"
                   ></v-progress-circular>
                 </v-flex>
               </v-layout>
            </v-flex>
          </v-layout>
        </v-form>

      </v-container>

</div>
</template>

<script>
//import Vue from "vue"
//import $ from 'jquery'

//import anypicker from "anypicker"
//Vue.use(anypicker)
//require('../../../../../node_modules/anypicker/dist/anypicker.min.css')
  export default {
    data () {
      return {
        time: null,
        modal: false,
        time2: null,
        modal2: false,
        updateBtn :true,
        loader:false,
        valid:false,
      }
    },
    methods: {

        saveWorkingHours(){

          if (this.$refs.form1.validate()) {
                this.updateBtn = false
                this.loader = true
                this.$store.dispatch('saveWorkingHours',{
                    start_at: this.time,
                    close_at: this.time2,
                    user_id: this.$store.getters.loggedInUserId,
                    day:this.$route.params.day,
                    hour_id:this.$route.params.hourId,
                })
                .then(response => {
                  response.data
                  this.updateBtn = true
                  this.loader = false
                  if(response.data.status!=undefined && response.data.status=='Token is Expired')
                  {
                    this.$router.push({ name: 'login', params: { } })
                  }else{
                     this.$router.push({ name: 'WorkingHour', params: { } })
                  }
                })
                .catch(error=>{
                  this.updateBtn = true
                  this.loader = false
                  error.data
                })
          }
        }
    },
    mounted(){

      if(this.$route.params.hourId!='0')
      {

          this.$store.dispatch('getSingleWorkingHour',{
              hour_id: this.$route.params.hourId
          })
          .then(response => {

            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
                 this.$router.push({ name: 'login', params: { } })
            }else{

                  this.time = response.data.workingHours.start_at
                  this.time2 = response.data.workingHours.close_at

            }

          })
          .catch(error=>{
            error.response
          })
  }

    }

  }
</script>

<style scoped="">
.find-text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
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
.title{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 16px !important;
    text-align: justify !important;
    color: #484848 !important;
}
.time{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 18px !important;
    text-align: justify !important;
    color: #000000 !important;
}
.time-settings{
    border-top:1px solid black;
    border-bottom:1px solid black;
}
.time-fade{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 18px !important;
  text-align: justify !important;
  color: #C4C4C4 !important;
}
.card{
  border-radius:8px;
}
.login-btn{
     font-family: Montserrat;
     font-style: normal;
     font-weight:bold !important;
     line-height: normal;
     font-size: 14px;
     background: #FCD675 !important;
     color: #484848;
     text-transform: capitalize;
   }
</style>

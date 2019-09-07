<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'SettingsWorkingHours', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> Break/Lunch </span>
           </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-xs,sm,md,lg,xl>
          <v-layout row wrap justify-center>
             <v-flex sm12 md10 sm10>
               <v-card class="card">
                  <v-card-text>
                      <v-layout justify-center row wrap class="pb-2">
                        <v-flex xs12 md11 sm10>
                           <span class="title"> Start From </span>
                        </v-flex>
                      </v-layout>
                      <v-divider></v-divider>

                      <v-layout justify-center row wrap class="pt-2">
                        <v-flex xs12 md11 sm10>
                           <span class="text"> Pick Date </span>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap text-xs-center justify-center>
                          <v-flex xs12 md6 sm6>
                            <v-menu
                              v-model="menu2"
                              :close-on-content-click="false"
                              full-width
                              max-width="290"
                            >
                              <v-select
                                slot="activator"
                                :label="computedDateFormattedMomentjs"
                                class="px-5 py-1 calender-field"
                                readonly
                                outline
                              ></v-select>
                              <v-date-picker
                                color="#FCD675"
                                v-model="date"
                                @change="menu2 = false"
                                :min = "currentDate"
                              ></v-date-picker>
                            </v-menu>
                          </v-flex>
                      </v-layout>
                      <v-layout row wrap justify-space-between text-xs-center>
                          <v-flex xs2 md2 sm2 class="text-xs-center" >
                            <v-btn class="day-btn" flat fab  color="#C4C4C4">
                                <span class="first"> {{ first }}</span>
                           </v-btn>
                          </v-flex>
                          <v-flex xs2 md2 sm2>
                            <v-btn class="day-btn-2" flat fab  color="#000000">
                                <span class="second">{{ second }}</span>
                           </v-btn>
                          </v-flex>
                          <v-flex xs2 md2 sm2>
                            <v-btn class="day-btn-2" outline fab  color="#FCD675">
                               <span class="third">{{ third }}</span>
                           </v-btn>
                          </v-flex>
                          <v-flex xs2 md2 sm2>
                            <v-btn class="day-btn-2" flat fab  color="#000000">
                             <span class="fourth">{{ fourth }}</span>
                           </v-btn>
                          </v-flex>
                          <v-flex xs2 md2 sm2>
                            <v-btn class="day-btn" flat fab  color="#C4C4C4">
                             <span class="fifth">{{ fifth }}</span>
                           </v-btn>
                          </v-flex>
                          <v-flex xs12 pl-3 >
                              <span class="current-day text-uppercase">{{ currentDay }}</span>
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
                           <span class="title"> End  On </span>
                        </v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                      <v-layout justify-center row wrap class="pt-2">
                        <v-flex xs12 md11 sm10>
                           <span class="text"> Pick Date </span>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap text-xs-center justify-center>
                          <v-flex xs12 md6 sm6>
                            <v-menu
                              v-model="menu1"
                              :close-on-content-click="false"
                              full-width
                              max-width="290"
                            >
                              <v-select
                                slot="activator"
                                :label="computedDateFormattedMomentjs"
                                class="px-5 py-1 calender-field"
                                readonly
                                outline
                              ></v-select>
                              <v-date-picker
                                color="#FCD675"
                                v-model="date"
                                @change="menu1 = false"
                                :min = "currentDate"
                              ></v-date-picker>
                            </v-menu>
                          </v-flex>
                      </v-layout>
                      <v-layout row wrap text-xs-center justify-space-between>
                          <v-flex xs2 md2 sm2 >
                            <v-btn class="day-btn" flat fab  color="#C4C4C4">
                                <span class="first"> {{ first }}</span>
                           </v-btn>
                          </v-flex>
                          <v-flex xs2 md2 sm2>
                            <v-btn class="day-btn-2" flat fab  color="#000000">
                                <span class="second">{{ second }}</span>
                           </v-btn>
                          </v-flex>
                          <v-flex xs2 md2 sm2>
                            <v-btn class="day-btn-2" outline fab  color="#FCD675">
                               <span class="third">{{ third }}</span>
                           </v-btn>
                          </v-flex>
                          <v-flex xs2 md2 sm2>
                            <v-btn class="day-btn-2" flat fab  color="#000000">
                             <span class="fourth">{{ fourth }}</span>
                           </v-btn>
                          </v-flex>
                          <v-flex xs2 md2 sm2>
                            <v-btn class="day-btn" flat fab  color="#C4C4C4">
                             <span class="fifth">{{ fifth }}</span>
                           </v-btn>
                          </v-flex>
                          <v-flex xs12 pl-3>
                              <span class="current-day text-uppercase">{{ currentDay }}</span>
                          </v-flex>
                      </v-layout>
                  </v-card-text>
               </v-card>
             </v-flex>
          </v-layout>


          <v-layout row wrap justify-center class="pt-2">
            <v-flex xs12 md10 sm10>
             <v-btn class="login-btn" block depressed> Update </v-btn>
            </v-flex>
          </v-layout>

      </v-container>

</div>
</template>
<script>
  import moment from 'moment'
  //import format from 'date-fns/format'

  export default {
    data: () => ({
      first:'',
      second:'',
      third:'',
      fourth:'',
      fifth:'',
      currentDay:'',
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      currentDate: moment().format('YYYY-MM-DD'),

    }),
    computed: {
         computedDateFormattedMomentjs () {
         //  return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
         return this.date ? moment(this.date).format('MMMM') : ''
      },
         computedDateFormattedDatefns () {
         //  return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : ''
         return this.date ? moment(this.date).format('MMMM') : ''
      }
    },

    beforeMount(){
      this.first =  moment().subtract(2, 'days').format('D')
      this.second = moment().subtract(1, 'days').format('D')
      this.third = moment().format('D')
      this.fourth = moment().add(1, 'days').format('D')
      this.fifth =  moment().add(2, 'days').format('D')
      this.currentDay = moment().format('ddd')
    }
  }
</script>
<style scoped="">
.current-day{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 18px !important;
  color: #FCD675 !important;

}
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
.text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 14px !important;
      text-align: justify !important;
      color: #484848 !important;
}
.day-btn{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 18px;
}
.day-btn-2{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 18px;

}
</style>

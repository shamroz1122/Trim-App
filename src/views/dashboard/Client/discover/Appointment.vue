<template >
 <div class="main">
   <Loader v-show="loader" />
   <v-container fluid style="background-color:#FCD675;" >
       <v-layout row wrap>
            <v-flex  xs2 md2 sm2>
                 <a @click='Backroute()' class="none"  style="text-decoration:none;">
                  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/>
                 </a>
            </v-flex>

            <v-flex  xs6 md8 sm8 >
              <span class="calender-field">  Appointment </span>
            </v-flex>
       </v-layout>
   </v-container> 
   
   <v-container fluid grid-list-xs,sm,md,lg,xl >
        <v-layout row wrap>
            <v-flex xs12 md12 sm12>
                <p class="title date-title">Pick Date</p>
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
                  @change="getdate"
                  :min = "currentDate"
                ></v-date-picker>
              </v-menu>
            </v-flex>
        </v-layout>

        <v-layout row wrap text-xs-center justify-center>
            <v-flex xs2 md2 sm2>
              <v-btn class="day-btn" flat fab color="#C4C4C4">
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
        </v-layout>

         <v-divider></v-divider>

         <v-layout row wrap class="pt-4">
             <v-flex xs12 md12 sm12>
                 <p class="title date-title">Pick Time</p>
             </v-flex>
         </v-layout>

         <v-layout row wrap class="pt-4" text-xs-center justify-center>

           <v-flex v-for="(timeslot, index) in timeslots" :key="index" xs3 md3 sm3 >
              <v-btn :disabled="timeslot.disabled=='true'?true:false" class="pa-0 ma-0 mt-1 chipHover" label v-on:click="bookingtime(timeslot.text)" outline :color="timeslot.color">{{ timeslot.text }}</v-btn>
           </v-flex>
            <!-- <v-flex xs3 md3 sm3 >
                <v-chip  label outline color="#83DC7B">09:00AM</v-chip>
             </v-flex>
             <v-flex xs3 md3 sm3 >
                <v-chip   label outline color="#83DC7B">10:00AM</v-chip>
             </v-flex>
             <v-flex xs3 md3 sm3 >
                <v-chip  label outline color="#83DC7B">11:00AM</v-chip>
             </v-flex>
             <v-flex xs3 md3 sm3 >
                <v-chip  label outline color="#83DC7B">12:00PM</v-chip>
             </v-flex>
        
             <v-flex xs3 md3 sm3 >
                <v-chip   label outline color="#83DC7B">01:00PM</v-chip>
             </v-flex>
             <v-flex xs3 md3 sm3 >
                <v-chip   label outline color="#83DC7B">02:00AM</v-chip>
             </v-flex>
             <v-flex xs3 md3 sm3 >
                <v-chip  label outline color="#83DC7B">03:00AM</v-chip>
             </v-flex>
             <v-flex xs3 md3 sm3>
                <v-chip  label outline color="#83DC7B">04:00PM</v-chip>
             </v-flex>
         
             <v-flex xs3 md3 sm3 >
                <v-chip   label outline color="#83DC7B">05:00PM</v-chip>
             </v-flex>
             <v-flex xs3 md3 sm3 >
                <v-chip   label outline color="#83DC7B">06:00AM</v-chip>
             </v-flex>
             <v-flex xs3 md3 sm3 >
                <v-chip  label outline color="#83DC7B">07:00AM</v-chip>
             </v-flex>
             <v-flex xs3 md3 sm3 >
                <v-chip  label outline  color="#83DC7B">08:00PM</v-chip>
             </v-flex> -->
         </v-layout>
            <v-layout row wrap justify-center mt-2>
              <v-flex xs4 md3 sm3 >
                  <span class="text"><v-chip style="height:15px !important; width:15px !important;" small label outline color="#83DC7B"></v-chip>  Available</span>
              </v-flex>
              <v-flex xs4 md3 sm3 >
                  <span class="text"><v-chip style="height:15px !important; width:15px !important;"  small label outline color="red"></v-chip> Taken</span>
              </v-flex>
              <v-flex xs4 md3 sm3 >
                  <span class="text"><v-chip style="height:15px !important; width:15px !important;"  small label outline color="#00C2FF"></v-chip> Your Booking </span>
              </v-flex>
           </v-layout>

         <v-layout row wrap justify-center class="pt-3">
           <v-flex xs12 md6 sm6>
            <v-btn :to="{name:'DiscoverPayment' , params: { payment:basicExpress , serviceId:seriveId , barberId:barberId  , servicePrice:servicePrice, date:date, time:time } }"
              color="#FCD675" class="next-btn" block depressed >Next </v-btn>
           </v-flex> 
         </v-layout>

</v-container>
</div>
</template>

<script>
  import moment from 'moment'
  import Loader from '../../../../components/Loader'
  export default {
    components: {
       		Loader
       },
    data: () => ({
              loader: false,
              slot: false,
              time: '',
              timeslots:[],
              first:'',
              second:'',
              third:'',
              fourth:'',
              fifth:'',
              date: new Date().toISOString().substr(0, 10),
              menu1: false,
              menu2: false,
              currentDate: moment().format('YYYY-MM-DD'),
    }),
    computed: {
         computedDateFormattedMomentjs () {
         //  return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
         return this.date ? moment(this.date).format('YYYY MMMM, DD') : ''
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
    },
    methods:{
      Backroute(){
        this.$router.go(-1);
      },
      // bookingtime(){
      //     console.log( this.time ) 
      //  },
      bookingtime(e){ 
           this.time = e 
          },
      getdate(){
        this.menu1 = false
        //console.log(this.date)
        this.$store.dispatch('matchDate', {
                user_id: this.$store.getters.loggedInUserId,
                date:this.date,
                barberId:this.$route.params.barberId 
            }) 
            .then(response => {
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }
              else{
                  // this.getTime = response.data.getTime 
                  var newData = response.data.new_time
                  //  var color = ''
                  Object.keys(data).forEach(key => {
                    
                      Object.keys(newData).forEach(k => {

                          if(newData[k]['text']==data[key]['text'])
                          {
                             data[key]['color'] = newData[k]['color']
                          }
                      })
                    // if(newData[key]['text'] === data[key]['text'])
                    // {
                    //   console.log(newData[key]['text'])
                    //     console.log(data[key]['text'])
                    //     data[key]['color'] = newData[key]['color']
                    // }
                    //use key and value here
                     console.log(data[key]['text'])
                     //console.log(newData[key]['text'])
                  });  
                  
                  this.timeslots = newData
                }
            })
            .catch(error=>{
              error.response
            })
      }
    }, 
    mounted (){

          var el = document.getElementById('app')
          el.classList.remove('grey-color')
          el.classList.add('white-color')

            this.loader = true
            this.$store.dispatch('matchDate', {
                user_id: this.$store.getters.loggedInUserId,
                date:this.currentDate,
                barberId:this.$route.params.barberId,
                seriveId:this.$route.params.serviceId 
            })
            .then(response => {
              this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                     var newData = response.data.new_time
                      this.timeslots = newData
                 }
            })
            .catch(error=>{
              this.loader = false
              error.response
            })


    },
    destroyed () {
      var el = document.getElementById('app')
      el.classList.remove('white-color')
      el.classList.add('grey-color')
    },
    created(){

            this.barberId = this.$route.params.barberId;
            this.servicePrice = this.$route.params.servicePrice;
            this.seriveId = this.$route.params.serviceId;
            this.basicExpress = this.$route.params.continue;
    }

  }
</script>

<style scoped="">
  .chipHover:disabled{
    border-color: #FF0000 !important;
    color: #FF0000 !important;
   }
  .chipHover:hover{
    border-color: #00C2FF !important;
    color: #00C2FF !important;
  }
  .text{
    font-family: Montserrat;
    font-style: normal;
    line-height: normal;
    font-size: 10px;
    color: #484848;
  }
  .date-title{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    color:#484848 !important;
  }
  .next-btn{
    height: 48px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    text-align: justify;
    color: #484848;
  }
  .calender-field{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 20px;
    color: #000000;

  }
  .day-btn{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 18px;
    text-align: justify;
  }
  .day-btn-2{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 18px;
    text-align: justify;
  }
  .back-link{
  font-style: normal !important;
  font-weight: normal !important;
  line-height: normal !important;
  font-size: 18px !important;
  text-align: justify !important;
  color: black !important;
}
</style>

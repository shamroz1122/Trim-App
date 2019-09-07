<template>
 <div class="main">

   <Loader v-show="loader" />

        <ModalBox
          btnText = "Send"
          icon = "bell"
          ref="ModalBox"
          action="BookingsClient"
          :text=checkedNotification
          :clientId=client.id
          :date=date
          :time=time
           >

     <v-layout row wrap>
       <v-flex xs2 md2 sm2>
         <v-checkbox color="#FCD675" v-on:change="checked" value="Your appointment is 15 minutes due to busy with previous client" v-model="checkedNotification"  class="my-0 py-0"></v-checkbox>
       </v-flex>
       <v-flex xs10 md10 sm10>
            <span class="modalbox-text"> Your appointment is 15 minutes due to busy with previous client.</span>
       </v-flex>
    </v-layout>
    <v-layout row wrap>
       <v-flex xs2 md2 sm2>
         <v-checkbox color="#FCD675" v-on:change="checked" value="Due to bad weather we will not work after 05:00 PM" v-model="checkedNotification" class="my-0 py-0"></v-checkbox>
       </v-flex>
       <v-flex xs10 md10 sm10>
            <span class="modalbox-text"> Due to bad weather we will not work after 05:00 PM.</span>
       </v-flex>
    </v-layout>
    <v-layout row wrap>
       <v-flex xs2 md2 sm2>
         <v-checkbox color="#FCD675" v-on:change="checked" value="Some personal issue. I am not working today" v-model="checkedNotification"  class="my-0 py-0"></v-checkbox>
       </v-flex>
       <v-flex xs10 md10 sm10>
            <span class="modalbox-text"> Some personal issue. I am not working today.</span>
       </v-flex>
    </v-layout>

  </ModalBox>
    <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-xs-center>
            <v-flex  xs2 md2 sm2>
            <router-link :to="{ name: 'bookings', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8  sm8  >
             <span class="find-text">
               {{ client.name }}
             </span>
           </v-flex>
        </v-layout>

    </v-container>

    <v-container fluid class="pt-2">
         <v-layout justify-center row wrap>
          <v-flex xs12 md8 sm8>
              <v-card class="card">
                <v-card-title>
                  <v-layout row wrap>
                     <v-flex xs3 md2 sm3>
                       <v-responsive>
                         <v-img
                           :src="client.client_profile"
                           contain
                           style="border-radius:50%"
                         ></v-img>
                       </v-responsive>
                     </v-flex>
                     <v-flex xs7 md6 sm8 class="pt-3 pl-3">
                         <h2 class="title">{{ client.name }}</h2>
                         <h5 class="text"> {{ client.email }} </h5>
                     </v-flex>
                  </v-layout>
                </v-card-title>
              </v-card>
          </v-flex>
        </v-layout>

    <v-layout justify-center row wrap class="pt-2">
     <v-flex xs12 md8 sm8>
         <v-card class="card">
           <v-card-title>
             <v-layout row wrap>
                <v-flex xs10 md10 sm3>
                  <span class="text"> Phone Number </span>
                  <p class="current-date"> {{ client.phone_number }} </p>
                </v-flex> 
                <v-flex xs2 md2 sm2 text-xs-center justify-end>
                  <div style="width: 44px; height: 44px; border-radius:70px; border:3px solid #FCD675;">
                      <span @click="showModal"><font-awesome-icon  size="2x" color="#FCD675" style="padding-top:5px;"  :icon="['fas','bell']"/></span>
                  </div>
                </v-flex>
             </v-layout>
           </v-card-title>
         </v-card>
     </v-flex>
   </v-layout>

   <v-layout row wrap justify-center class="pt-2">
      <v-flex xs12 md8 sm8>
          <v-card class="card">
          <v-card-text>

       <v-layout row wrap>
           <v-flex xs6 md6 sm6>
             <span class="text">  Date </span>
           </v-flex>

       </v-layout>

       <v-layout row wrap class="pb-1">
           <v-flex xs6 md6 sm6>
             <span class="current-date">  {{ date }} </span>
           </v-flex>

       </v-layout>
       <v-divider></v-divider>
       <v-layout row wrap class="pt-1">
           <v-flex xs12 md6 sm6>
             <span class="text">  Time </span>
           </v-flex>

       </v-layout>

       <v-layout row wrap class="pb-1">
           <v-flex xs12 md6 sm6>
             <span class="current-date">  {{ time }} </span>
           </v-flex>

       </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap class="pt-1">
            <v-flex xs12 md6 sm6>
              <span class="text">  Category </span>
            </v-flex>

        </v-layout>

        <v-layout row wrap class="pb-1">
            <v-flex xs12 md6 sm6>
              <span class="current-date">  {{ category }} </span>
            </v-flex>

        </v-layout>
         <v-divider></v-divider>
         <v-layout row wrap class="pt-1">
             <v-flex xs12 md6 sm6>
               <span class="text">  Barber </span>
             </v-flex>

         </v-layout>

         <v-layout row wrap class="pb-1">
             <v-flex xs12 md6 sm6>
               <span class="current-date">  {{ barber }} </span>
             </v-flex>

         </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap class="pt-1">
              <v-flex xs12 md6 sm6>
                <span class="text">  Paid </span>
              </v-flex>

          </v-layout>

          <v-layout row wrap>
              <v-flex xs12 md6 sm6>
                <span class="current-date"> &#x20AC; {{ price }} (by Cash/through app) </span>
              </v-flex>

          </v-layout>

           </v-card-text>
           </v-card>

         </v-flex>
         </v-layout>
    </v-container>
     
       <v-container fluid >

           <v-layout row wrap justify-center class="pt-2">
             <v-flex xs12 md8 sm8> 
               <!-- :to="{name:'bookings', query:{complete:'complete'}}" -->
                <v-btn v-show="completeBtn" class="login-btn"  @click="completeAppointment"  block depressed>Complete </v-btn>
             
             </v-flex>
           </v-layout>

       </v-container> 

</div>
</template>
<script>
import Loader from '../../../../components/Loader'
import ModalBox from '../../../../components/ModalBox'
  export default {
    components: {
       ModalBox,
       Loader
    },
    data () {
      return {
        loader:false,
        client:'',
        completeBtn : true,
        checkedNotification:''
      }
    },
    methods:{
      checked(){
        // console.log(this.checkedNotification)
      },
      showModal(){
          this.$refs.ModalBox.setValue(true)
      },
      
      Backroute(){
        this.$router.go(-1);
				},
    
      completeAppointment(){ 
        
       //  console.log(this.$route.params.date)
      this.$store.dispatch('BarberCompletedAppointment', {
            date : this.$route.params.date,
            time : this.$route.params.time,
            category : this.$route.params.category,
            barberId : this.$route.params.barberId
              }) 
            .then(response => {

              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                     this.client = response.data.client 
                       } 
            })
            .catch(error=>{
              error.response
            })
         this.$router.push({ name: 'bookings', params: { } })   
      }
    },
    mounted (){
    this.loader = true     
    if(this.$route.params.completed === 'complete'){
         
         this.completeBtn = false   
    }
    else if(this.$route.params.completed === 'cancel'){
         this.completeBtn = false  
          
    }
    this.$store.dispatch('showBookedClientDetail', {
               clientId:this.$route.params.clientId
              }) 
            .then(response => {
              this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                     this.client = response.data.client 
                       } 
            })
            .catch(error=>{
              error.response
            })  

    var interval =   setTimeout(function(){

      var el = document.getElementById('app')
      el.classList.remove('white-color')
      el.classList.add('grey-color')
      clearTimeout(interval);
    }, 100);

    },
    destroyed () {
      var el = document.getElementById('app')
      el.classList.remove('grey-color')
      el.classList.add('white-color')
    },
    created(){

            this.date = this.$route.params.date;
            this.time = this.$route.params.time;
            this.category = this.$route.params.category;
            this.barber = this.$route.params.barber;
            this.price = this.$route.params.price;
            this.barberId = this.$route.params.barberId;
      }
    }
</script>
<style scoped="">
.modalbox-text{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 14px;
  color: #000000;

}
.find-text{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 16px !important;
    text-align: center !important;
    color: #000000 !important;
}
.back-link{
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    text-align: justify;
    color: black;
}
.card{
    border-radius:9px !important;
}
.title{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 19px !important;
    text-align: justify !important;
    color: #484848;
}
.text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: 300 !important;
      line-height: normal !important;
      font-size: 12px !important;
      color: #484848 !important;
}

.current-date{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    font-size: 14px !important;
    color: #484848 !important;

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

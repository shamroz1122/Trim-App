<template>
 <div class="main">
   <Loader v-show="loader" />
     <v-container fluid style="background-color:#FCD675;" >
           <v-layout  row wrap >
             <v-flex xs12 md11 sm11 >
                <span class="find-text">My Bookings</span>
             </v-flex>
          </v-layout>
     </v-container>

  <v-container>
    <template v-if="barbers.length>0">
     <div v-for="(barber,index) in barbers" :key="index">
        <v-layout row wrap justify-center mt-2>
          <v-flex xs12 md6 sm6>
               <v-card Route :to="{ name: 'MyBookingConfirmAppointment', params: {barberId:barber.id, barberName:barber.name, saloonName:barber.shop_name, time:barber.time, date:barber.date, picture:barber.barber_pic} }" class="card-text">
               <v-card-text>
                     <v-layout row wrap>
                        <v-flex xs12 md10 sm10>
                            <v-layout row wrap>
                                <v-flex xs4 md6 sm6>
                                 <v-responsive>
                                   <v-img
                                     :src="barber.barber_pic"
                                     contain
                                     style="
                                     height:120px !important;
                                     border-radius:50%;"
                                   ></v-img>
                                 </v-responsive>
                        </v-flex>

                         <v-flex xs8 md6 sm6 class="pl-3 pt-3">
                            <p class="title"> {{ barber.name }} </p>
                            <p class="text"> Barber at <span class="stylish"> {{ barber.shop_name }} </span> </p>
                         </v-flex>
                      </v-layout>
                      </v-flex>
                    </v-layout>

                   <v-divider class="mt-3 mb-2"></v-divider>

                    <v-layout row wrap text-xs-center>

                          <v-flex xs6 md6 sm6>
                            <span class="date">  {{ barber.date }} </span>
                          </v-flex>

                          <v-flex xs6 md6 sm6>
                            <span class="date"> {{ barber.time }} </span>
                          </v-flex>

                    </v-layout>
                </v-card-text>
                </v-card>

              </v-flex>
         </v-layout>
      </div>
    </template> 

    <div v-else>
       <v-alert
        :value="true"
        type="info">
         No Booking ..
       </v-alert>

    </div>
         <!-- <v-layout row wrap justify-center class="mt-2">
            <v-flex xs12 md6 sm6>
                <v-card Route :to="{ name: 'MyBookingConfirmAppointment', params: {} }" class="card-text">
                <v-card-text>
                      <v-layout row wrap>
                         <v-flex xs12 md10 sm10>
                             <v-layout row wrap>
                                 <v-flex xs4 md6 sm6>
                                  <v-responsive>
                                    <v-img
                                      :src="require('../../../../assets/barber2.png')"
                                      contain
                                    ></v-img>
                                  </v-responsive>
                         </v-flex>
                          <v-flex xs8 md6 sm6 class="pl-3 pt-3">
                             <p class="title"> Amanda Cerny </p>
                             <p class="text"> Barber at <span class="stylish"> Stylish Salon </span> </p>
                          </v-flex>
                       </v-layout>
                       </v-flex>
                     </v-layout>
         <v-divider class="mt-3 mb-2"></v-divider>
             <v-layout row wrap>
                 <v-flex xs6 md6 sm6>
                   <span class="date">  OCT 06, 2018 </span>
                 </v-flex>
                 <v-flex xs6 md6 sm6>
                 <span class="date"> SAT, 04:00 PM </span>
                 </v-flex>

             </v-layout>
                 </v-card-text>
                 </v-card>

               </v-flex>
          </v-layout> -->
        </v-container>

</div>
</template>
<script>
import Loader from '../../../../components/Loader'
  export default {
    components: {
       		Loader
       },
      data () {
        return {
        loader: false,
        barbers : []
      }
    },

   methods:{
     
   },
    mounted (){
         this.loader = true
         this.$store.dispatch('clientBookings', {
         user_id: this.$store.getters.loggedInUserId,
    })
    .then(response => { 
      this.loader = false
      if(response.data.status!=undefined && response.data.status=='Token is Expired')
      {
           this.$router.push({ name: 'login', params: { } })
      }
      else{
          
          this.barbers= response.data.barbers
          //console.log(this.barbers)
          // this.barbers = response.data.barbers.email
          // this.image = response.data.clientSaloon.client_profile
          // this.clientsaloonservices = response.data.clientsaloonservices
          // this.clientsaloonworkinghours = response.data.clientsaloonworkinghours
          // this.clientsaloonserviceprice = response.data.clientsaloonserviceprice
          //console.log(this.name)
      }
    })
    .catch(error=>{
      this.loader = false
      error.response
        })
      },
    }
</script>

<style scoped="">

.find-text{ 
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 16px !important;
    text-align: center !important;
    color: #000000 !important;
}
.date{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 15px !important;
  text-align: justify !important;
  color: #484848;
}
.title{
  font-family: Montserrat !important;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 18px;
  text-align: justify;
  color: #484848;
}
.text{
  font-family: Montserrat  !important;
  font-style: normal !important;
  font-weight: 300 !important;
  line-height: normal !important;
  font-size: 14px !important;
  text-align: justify !important;
  color: #484848;
}
.stylish{
    color: #FCD675;
}
.card-text{
  border-radius:15px;
}
</style>

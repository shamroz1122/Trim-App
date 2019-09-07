<template>
 <div id="main">
   <ModalBox title="Sorry" content="The Barber is booked for today. Try another day. Thankyou!" btnText="OK" icon="sad-tear" action="" ref="ModalBox" />
   <v-dialog text-xs-center v-model="dialog" persistent  width="500">
     <v-card text-xs-center>
       <v-card-title justify-center text-xs-center class="title" >
         <v-layout text-xs-center row wrap justify-center>
           <v-flex xs12 >
              <p class="box-title"> Basic </p> 
           </v-flex>
           <v-flex xs12 >
             <p class="box-text">Lorem Ipsum is simply dummy text of the
                printing and typesetting industry</p>
           </v-flex>
         </v-layout>

         <v-layout row wrap  text-xs-center justify-center>
           <v-flex xs10 >
              <!-- :to="{name:'DiscoverAppointment' , params: {continue: 'basic', barberId: barberId ,  servicePrice:this.$route.params.servicePrice } }" -->
             <v-btn @click="basic" color="#FCD675" block  class="box-text text-capitalize"  depressed >
               Continue with Basic(&#8364;1)
             </v-btn>
           </v-flex>
         </v-layout>
       </v-card-title>
       <v-layout row wrap justify-center>
          <v-flex xs10>
             <v-divider></v-divider>
          </v-flex>
       </v-layout>
       <v-card-title justify-center text-xs-center class="title" >
         <v-layout text-xs-center row wrap justify-center>
           <v-flex xs12>
              <p style="margin-left:-32px;" class="box-title"> <font-awesome-icon color="#FCD675"  large   :icon="['fas','crown']"/> Express</p>
              <p style="margin-top: -16px; margin-left: 9px;" class="sub-heading">(recommended)</p>
           </v-flex>
           <v-flex xs12  >
             <p class="box-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
           </v-flex>
         </v-layout>
         
         <v-layout row wrap text-xs-center justify-center>
           <v-flex xs10 > 
              <!-- :to="{name:'DiscoverAppointment' ,  params: {continue: 'express', barberId: barberId , servicePrice:this.$route.params.servicePrice } }" -->
             <v-btn :to="{name:'DiscoverAppointment' ,  params: { continue: 'express', serviceId:seriveId , barberId:barberId  , servicePrice:servicePrice } }" color="#FCD675" block  class="box-text text-capitalize"  depressed >
               Continue with Express(&#8364;2)
             </v-btn>
           </v-flex>
         </v-layout>
        
       </v-card-title>
      <v-layout row wrap justify-center>
          <v-flex xs10 >
              <a @click='Backroute()' class="none"  style="text-decoration:none;">
                <font-awesome-icon class="back-link" style="color:rgb(252, 214, 117); font-weight:bold;" large :icon="['fas','arrow-left']"/>
              </a>
          </v-flex>
        </v-layout>
        <br />
     </v-card>
   </v-dialog>

  <v-container class="main-container" grid-list-xs,sm,md,lg,xl>
        <v-layout row wrap>
              <v-flex  xs12 md12 sm12>
                  <router-link :to="{ name: 'discover', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
              </v-flex>

        </v-layout>
        <v-layout row wrap justify-center>
                  <v-flex  xs4 md1 sm2 text-xs-center>
                  <v-responsive>
                   <v-img
                   :src="require('../../../../assets/profile-pic.png')"

                   ></v-img>
                   </v-responsive>
                 </v-flex>
      </v-layout>
  </v-container>

  <v-container  style="background-color:white; color:black;">

     <v-layout row wrap text-xs-center class="pt-3">
          <v-flex xs3 md3 sm3>
                <v-btn  color="#00A807" class="open-btn" outline small round>Open</v-btn>
          </v-flex>

          <v-flex xs6 md6 sm6 class="pt-5">
              <span class="title"> Stylish Saloon </span>
              <p class="text"> 10 Pared St, Paddingtong,
              London W21JU, UK </p>
          </v-flex>
          <v-flex xs3 md3 sm3>
            <font-awesome-icon size="2x"  :icon="['far','heart']"/>
          </v-flex>

     </v-layout>
        <v-divider></v-divider>
          <v-tabs
                slot="extension"
                v-model="tab"
                color="white"
                grow
                >
                <v-tabs-slider color="#FCD675">

                </v-tabs-slider>
                <v-tab>
                    About
                </v-tab>
                <v-tab>
                    Price List
                </v-tab>
          </v-tabs>
          <v-divider></v-divider>


         <v-tabs-items  v-model="tab">
             <v-tab-item>
               <v-layout row wrap text-xs-center class="pt-1">
                       <v-flex xs4>
                         <span class="name">Saloon Name</span>
                           <p class="stylish">Stylish Saloon</p>
                       </v-flex>
                       <v-flex xs4>
                         <span class="name">Starting From</span>
                           <p class="stylish">$$$</p>
                       </v-flex>
                       <v-flex xs4>
                         <span class="name">Distance</span>
                           <p class="stylish">1.2 KM</p>
                       </v-flex>
                </v-layout>
                <v-layout row wrap>
                      <v-flex xs12 md12 sm12>
                        <v-responsive>
                           <v-img
                           :src="require('../../../../assets/map2.png')"
                           ></v-img>
                         </v-responsive>
                      </v-flex>
                      <v-flex xs12 md8 sm8 style="text-align:right;">
                         <p class="stylish" style="text-decoration:underline;">Get Directions</p>
                      </v-flex>
                 </v-layout>
                 <v-layout  row wrap justify-center>
                   <v-flex  xs12 md8 sm8 text-xs-center>
                       <span class="name"> Working Hours </span>
                   </v-flex>
                 </v-layout>
                    <v-layout row justify-center wrap class="pa-2" style="border: 1px solid #FCD675;">
                       <v-flex xs6 md6 sm6>
                         <span class="stylish">MON-FRI</span>
                           <p class="stylish">SAT</p>
                       </v-flex>
                       <v-flex xs6 md6 sm6 text-sm-right text-md-right text-xs-right >
                         <span class="stylish">09:00 AM - 06:00 PM</span>
                           <p right class="stylish">09:00 AM - 01:30 PM</p>
                       </v-flex>
                 </v-layout>
             </v-tab-item>

             <v-tab-item>
               <v-layout class="pa-2" row wrap>
                   <v-flex xs7 md8 sm8>
                     <p class="main-hair"> Men’s Hair Cut </p>
                     <font-awesome-icon large :icon="['fas','euro-sign']"/> <span style="font-weight:bold" class="rupees"> 70 </span> <span class="time"> (15min) </span>
                     </v-flex>
                     <v-flex x5 md4 sm4 text-sm-right text-md-right text-xs-right>
                     <v-btn :to="{ name: 'DiscoverSelectBbarber', params: {} }"  class="login-btn" depressed> Book</v-btn>
                   </v-flex>
               </v-layout>

               <v-divider></v-divider>

               <v-layout class="pa-2" row wrap>
                 <v-flex xs7 md8 sm8>
                   <p class="main-hair"> Women’s Hair Cut </p>
                    <font-awesome-icon large   :icon="['fas','euro-sign']"/><span style="font-weight:bold" class="rupees"> 120 </span> <span class="time"> (15min) </span>
                   </v-flex>
                   <v-flex xs5 md4 sm4 text-sm-right text-md-right text-xs-right >
                   <v-btn :to="{ name: 'DiscoverSelectBbarber', params: {} }" class="login-btn" depressed> Book</v-btn>
                 </v-flex>
                </v-layout>

               <v-divider></v-divider>

               <v-layout class="pa-2" row wrap>
                   <v-flex xs7 md8 sm8>
                     <p class="main-hair"> Women’s Hair Cut </p>
                      <font-awesome-icon large   :icon="['fas','euro-sign']"/><span style="font-weight:bold" class="rupees"> 120 </span> <span class="time"> (15min) </span>
                     </v-flex>
                     <v-flex xs5 md4 sm4 text-sm-right text-md-right text-xs-right>
                     <v-btn :to="{ name: 'DiscoverSelectBbarber', params: {} }" class="login-btn" depressed> Book</v-btn>
                   </v-flex>
               </v-layout>

               <v-divider></v-divider>

               <v-layout class="pa-2" row wrap>
                   <v-flex xs7 md8 sm8>
                     <p class="main-hair"> Shampoo/Style </p>
                      <font-awesome-icon large   :icon="['fas','euro-sign']"/><span style="font-weight:bold" class="rupees"> 22 </span> <span class="time"> (15min) </span>
                     </v-flex>
                     <v-flex xs5 md4 sm4 text-sm-right text-md-right text-xs-right>
                     <v-btn :to="{ name: 'DiscoverSelectBbarber', params: {} }" class="login-btn" depressed> Book</v-btn>
                   </v-flex>
               </v-layout>

               <v-divider></v-divider>

               <v-layout class="pa-2" row wrap>
                   <v-flex xs7 md8 sm8>
                     <p class="main-hair"> Team Bang </p>
                      <font-awesome-icon large   :icon="['fas','euro-sign']"/><span style="font-weight:bold" class="rupees"> 10 </span> <span class="time"> (15min) </span>
                     </v-flex>
                     <v-flex xs5 md4 sm4 text-sm-right text-md-right text-xs-right>
                     <v-btn :to="{ name: 'DiscoverAppointment', params: {} }" class="login-btn" depressed> Book</v-btn>
                   </v-flex>
               </v-layout>
             </v-tab-item>
         </v-tabs-items>
  </v-container>

</div>
</template>
<script>
import moment from 'moment'
import ModalBox from '../../../../components/ModalBox'
  export default {
   components: {
     ModalBox
    },
    data () {
      return {
        dialog:true,
        tab: null,
        items: [ 
          'About', 'Price List'
        ],
        currentDate: moment().format('YYYY-MM-DD'),
      }
    },
   methods:{
     Backroute(){
        this.$router.go(-1);
      },
     basic(){
          
          this.$store.dispatch('checkAppointment', {  
           date:this.currentDate,
           barberId:this.barberId
               }) 
            .then(response => {
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                       this.newAppoinmentTime = response.data.newAppoinmentTime 
                       if(this.newAppoinmentTime !== 'No Time Available'){
                         this.$router.push({ name: 'DiscoverPayment', params: { continue: 'basic', serviceId:this.$route.params.serviceId , barberId:this.$route.params.barberId  , servicePrice:this.$route.params.servicePrice, date:this.currentDate, time:this.newAppoinmentTime } })
                       }
                       else{
                          this.$refs.ModalBox.setValue(true)
                       }
                  } 
            }) .catch(error=>{
							error.response
            })
     }  
   }, 
    mounted (){
          //document.getElementById('app').className = "white-color";
          var el = document.getElementById('app')
          el.classList.remove('grey-color')
          el.classList.add('white-color')
    },
    destroyed () {
      var el = document.getElementById('app')
      el.classList.remove('white-color')
      el.classList.add('grey-color')
    },
    created() {
          this.barberId = this.$route.params.barberId;
          this.servicePrice = this.$route.params.servicePrice;
          this.seriveId = this.$route.params.serviceId;
        }
  }
</script>

<style scoped="">
.sub-heading{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  color: #5BBC52;
}
.box-title{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 28px !important;
  color: #484848 !important;

}
.box-text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-align: center;

  color: #000000;
}
.main-container{
    background-image: url('../../../../assets/print-bg.png');
    height:107px;
    background-repeat: no-repeat;
    background-size:cover;
    width:100%;
}
.open-btn{
    font-family: Montserrat !important;
    font-style: normal !important;
    line-height: normal  !important;
    font-size: 10px !important;
    border:solid !important;
    font-weight:bold !important;
}
.back-link{
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    text-align: justify;
    color: #FFFFFF;
}
.title{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 18px !important;
    color: #484848 !important;
  }
.text{
    font-family: Montserrat !important;
    font-style: normal  !important;
    font-weight: 300 !important;
    line-height: normal !important;
    font-size: 11px !important;
    color: #484848;
}
.prof-img{
    margin-top:35px;
    height:118px;
    width:118px;
}
.name{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    font-size: 12px !important;
    color: #484848 !important;
}
.stylish{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: 300 !important;
    font-size: 12px !important;
    color: #484848 !important;
}
.main-hair{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: 300 !important;
      line-height: normal !important;
      font-size: 16px !important;
      color: #000000 !important;
}
.rupess{

      font-style: normal !important;

      line-height: normal !important;
      font-size: 18px !important;
      text-align: justify !important;
      color: #000000 !important;
}
.time{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: 300 !important;
    line-height: normal !important;
    font-size: 14px !important;
    text-align: justify !important;
    color: #000000 !important;

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

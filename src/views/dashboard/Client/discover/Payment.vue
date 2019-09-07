<template>
	<div class="main">
		<Loader v-show="loader" />
		<ModalBox title="Are you Sure?" content="You have to pay cash
		directly to the Barber" btnText="OK" icon="question-circle" action="" ref="ModalBox" />
		<v-container fluid style="background-color:#FCD675;">
			<v-layout row wrap>
				<v-flex xs2 md2 sm2>
					<a @click='Backroute()' class="none" style="text-decoration:none;">
					<font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/>
					</a>
				</v-flex>
				<v-flex xs6 md2 sm2>
					<span class="title">
						Payment
					</span>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-xs,sm,md,lg,xl style="background-color:#E5E5E5;height:100vh !important">
			<v-layout row wrap justify-center v-show="noPayLocatin">
				<v-flex xs12 md6 sm6>
					<v-card class="card">
						<v-card-text>
							<v-layout row wrap>
								<v-flex xs10>
									<span class="text">
										Barber Fee
									</span>
								</v-flex>
								<v-flex xs2>
									<span class="rupees">
										<b> £  </b> {{ this.$route.params.servicePrice }}
									</span>
								</v-flex>
							</v-layout>
							<div v-if="paypal_original">
								<v-layout>
									<v-flex xs1>
										<v-checkbox id="myCheck" v-model="ex4" color="#484848" hide-details class="my-0 py-0" v-on:change="changeOption">
										</v-checkbox>
									</v-flex>
									<v-flex xs10>
										<span class="text" style="font-size:12px !important">
											Pay barber at location
										</span>
									</v-flex>
								</v-layout>
							</div>
							
							<v-layout row wrap>
								<v-flex xs12>
								
								</v-flex>
							</v-layout>
							<div v-if="basic">
								<v-layout row wrap class="pt-2 pb-2">
									<v-flex xs10>
										<span class="text">
											Trim Free
										</span>
									</v-flex>
									<v-flex xs2>
										<span class="rupees">
											  <b> £  </b> 1
										</span>
									</v-flex>
								</v-layout>
							</div>
							<div v-if="express">
								<v-layout row wrap class="pt-2 pb-2">
									<v-flex xs10>
										<span class="text">
											Trim Free
										</span>
									</v-flex>
									<v-flex xs2>
										<span class="rupees">
										<b> £  </b> 2
										</span>
									</v-flex>
								</v-layout>
							</div>
							<v-divider>
							</v-divider>
							<v-layout row wrap class="pt-2">
								<v-flex xs10>
									<span class="text">
										Total Payment
									</span>
								</v-flex>
								<v-flex xs2>
									<span class="rupees">
										<b> £  </b> {{ sum }}
									</span>
								</v-flex>
							</v-layout>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>

      <v-layout row wrap justify-center v-show="PayLocatin">
				<v-flex xs12 md6 sm6>
					<v-card class="card">
						<v-card-text>
							<v-layout row wrap>
								<v-flex xs6>
									<span class="text">
										Barber Fee
									</span>
								</v-flex>
								<v-flex xs6>
									<span class="text">
										Barber fee will be paid at Location
									</span>
								</v-flex>
							</v-layout>
							<div v-if="paypal_original">
								<v-layout>
									<v-flex xs1>
										<v-checkbox id="myCheck" v-model="ex4" color="#484848" hide-details class="my-0 py-0" v-on:change="changeOption">
										</v-checkbox>
									</v-flex>
									<v-flex xs10>
										<span class="text" style="font-size:12px !important">
											Pay barber at location
										</span>
									</v-flex>
								</v-layout>
							</div>
							
							<v-layout row wrap>
								<v-flex xs12>
								
								</v-flex>
							</v-layout>
							<div v-if="basic">
								<v-layout row wrap class="pt-2 pb-2">
									<v-flex xs10>
										<span class="text">
											Trim Free
										</span>
									</v-flex>
									<v-flex xs2>
										<span class="rupees">
											  <b> £  </b> 1
										</span>
									</v-flex>
								</v-layout>
							</div>
							<div v-if="express">
								<v-layout row wrap class="pt-2 pb-2">
									<v-flex xs10>
										<span class="text">
											Trim Free
										</span>
									</v-flex>
									<v-flex xs2>
										<span class="rupees">
										<b> £  </b> 2
										</span>
									</v-flex>
								</v-layout>
							</div>
							<v-divider>
							</v-divider>
							
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>

			<v-card class="card mt-3">
				<v-layout row wrap text-xs-center>
					<v-flex xs6 md6 sm6 class="mt-3 ">
						<span class="text">
							Date
						</span>
					</v-flex>
					<v-flex xs6 md6 sm6 class="mt-3">
						<span class="text">
							Time
						</span>
					</v-flex>
				</v-layout>
				<v-layout row wrap text-xs-center my-2>
					<v-flex xs6 md6 sm6 class="mb-3">
						<span class="text" style="font-weight:bold !important;">
							{{ this.$route.params.date }}
						</span>
					</v-flex>
					<v-flex xs6 md6 sm6 class="mb-3">
						<span class="text" style="font-weight:bold !important;">
							{{ this.$route.params.time }}
						</span>
					</v-flex>
					<br />
				</v-layout>
			</v-card>
			<div v-if="paypal_original">
				<v-layout row wrap class="pt-2" justify-center>
					<v-flex xs12 md6 sm6>
						<v-card class="card">
							<v-card-title>
								<v-layout row wrap>
									<v-flex x2 md>
										<v-responsive>
											<v-img :src="require('../../../../assets/paypal.png')" contain>
											</v-img>
										</v-responsive>
									</v-flex>
									<v-flex xs6>
										<span class="paypal">
											Paypal
										</span>
										<p class="text">
											**** **** **** 1234
										</p>
									</v-flex>
									<v-flex xs2>
										<!-- <span @click="outlineOption1" v-if="outline1"><v-icon  large  > check_circle_outline </v-icon></span>
										<span @click="circleOption1" v-if="circle1" ><v-icon  large > check_circle</v-icon></span> -->
									</v-flex>
								</v-layout>
							</v-card-title>
						</v-card>
					</v-flex>
				</v-layout>
				<!-- <v-layout row wrap class="pt-2" justify-center>
				<v-flex xs12 md6 sm6>
				<v-card class="card">
				<v-card-title>
				<v-layout row wrap>
				<v-flex x2 md>
				<v-responsive>
				<v-img
				:src="require('../../../../assets/visa.png')"
				contain
				></v-img>
				</v-responsive>
				</v-flex>
				<v-flex xs6>
				<span class="paypal">  Visa </span>
				<p class="text">  **** **** **** 1234 </p>
				</v-flex>
				<v-flex xs2>
				<span @click="outlineOption2" v-if="outline2"><v-icon  large  > check_circle_outline </v-icon></span>
				<span @click="circleOption2" v-if="circle2" ><v-icon  large > check_circle</v-icon></span>
				</v-flex>
				</v-layout>
				</v-card-title>
				</v-card>
				</v-flex>
				</v-layout> -->
			</div>
			<div v-if="bilal">
				<v-layout row wrap class="pt-2" justify-center>
					<v-card>
						<v-flex x12 md12 sm12>
							<v-responsive>
								<v-img :src="require('../../../../assets/paypal1.png')" contain>
								</v-img>
							</v-responsive>
						</v-flex>
					</v-card>
				</v-layout>
				<v-layout row wrap class="pt-2" justify-center>
					<v-flex xs12 md6 sm6>
						<v-card class="card">
							<v-card-title>
								<v-layout row wrap>
									<v-flex x12 md>
										<v-responsive>
											<v-img :src="require('../../../../assets/paypal1.png')" contain>
											</v-img>
										</v-responsive>
									</v-flex>
								</v-layout>
							</v-card-title>
						</v-card>
					</v-flex>
				</v-layout>
				<!-- <v-layout row wrap class="pt-2" justify-center>
					<v-flex xs12 md6 sm6>
						<v-card class="card">
							<v-card-title>
								<v-layout row wrap>
									<v-flex x12 md>
										<v-responsive>
											<v-img :src="require('../../../../assets/visa1.png')" contain>
											</v-img>
										</v-responsive>
									</v-flex>
								</v-layout>
							</v-card-title>
						</v-card>
					</v-flex>
				</v-layout> -->
				<v-layout>
					<v-flex xs12 md12 sm12 text-xs-center class="mt-2">
						<span class="text" style="color:red !important;">
							** This barber Accepts cash only ..
						</span>
					</v-flex>
				</v-layout>
			</div>
			<v-layout v-show="payAtLocation" row wrap justify-center class="pt-3">
				<v-flex xs12 md6 sm6>
					<v-btn :to="{name:'DiscoverCongrats' , params: { saloonid:saloonId , payment:basicExpress , serviceId:seriveId , barberId:barberId  , servicePrice:sum, date:date, time:time } }" style="height: 48px;"
					color="#FCD675" depressed block>
						Book Now
					</v-btn>
				</v-flex>
			</v-layout>
      <v-form :action="paypalUrl" method="post" v-show="paypalform">
        <input type="hidden" name="cmd" value="_xclick">
        <input type="hidden" name="business" v-model="businessEmail">
        <input type="hidden" name="item_name" v-model="itemname">
        <input type="hidden" name="item_number" v-model="seriveId">
        <input type="hidden" name="amount" v-model="sum">
        <input type="hidden" name="invoice" v-model="invoice">
        <input type="hidden" name="currency_code" value="EUR">
        <input type="hidden" name="notify_url" value="https://shm.ranksol.com/app/public/api/paymentNotify">
        <input type="hidden" v-model="returnURL" name="return">
        <input type="hidden" v-model="cancelURL" name="cancel_return">
        <v-layout row wrap justify-center class="pt-3">
          <v-flex xs12 md6 sm6>
            <v-btn type="submit" style="height: 48px;" color="#FCD675" depressed block>
              Pay Now
            </v-btn>
					</v-flex>
				</v-layout>
			</v-form>
		</v-container>
	</div>
</template>
<script>

import ModalBox from '../../../../components/ModalBox'
import Loader from '../../../../components/Loader'
import moment from 'moment'
  export default {
    components: {
       ModalBox,
       Loader
    },

    data () {
      return {
          PayLocatin:false,
          noPayLocatin:false,
          invoice:'',
          paypalStatus:'',
          paypalform: true,
          businessEmail: '',
          itemname:'',
          itemnumber:'',
          amount:'',
          sum:'',
          returnURL:'',
          cancelURL:'',
          paypalUrl:'',
          payAtLocation: false,
          loader: false,
          outline1:true,
          circle1:false,
          outline2:true,
          circle2:false,
          payNow: true,
          basic: false,
          express: false,
          paypal_original: false,
          bilal: false,
          number1: 2, 
          valid: true,
          status:[],
          date:'',
          time:'',
          basicExpress:'',
          saloonId:'',
          email: '',
          seriveId:'',
          servicePrice:'',
          timestamp:moment(),
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
          ] 
      }
    },
    methods:{
      
       Backroute(){
        this.$router.go(-1);
        },

     outlineOption1(){
          this.payNow = false
          this.outline1 = false
          this.outline2 = true
          this.circle1 = true
          this.circle2 = false
   },
        
        outlineOption2(){
          
          this.outline1 = true
          this.outline2 = false
          this.circle1 = false
          this.circle2 = true

        },

      showModal(){
          this.$refs.ModalBox.setValue(true)
      },
      changeOption(val){
        if(val==true)
        {
             this.$refs.ModalBox.setValue(true)
             // this.payNow = false;
             this.paypalform = false
             this.payAtLocation =true
             this.PayLocatin = true
             this.noPayLocatin = false

        }
        else if(val==false){
             //this.payNow = true;
              this.payAtLocation =false
              this.paypalform = true
              this.PayLocatin = false
              this.noPayLocatin = true
            
        } 
      }
    },

    mounted (){
          this.loader = true
          this.$store.dispatch('getPaymentStatusClient',{
              user_id: this.$store.getters.loggedInUserId,
              barberId:this.$route.params.barberId 
            })
            .then(response => {
            this.loader = false
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                  this.$router.push({ name: 'login', params: { } })
              }else{
                  this.status = response.data.status.payment_status
                  
                  if(this.status === 'true')
                    {  
                      this.bilal = true;
                      this.payNow = false;
                      this.paypal_original = false;
                      this.payAtLocation = true;
                      this.paypalform = false;
                      this.PayLocatin = true;
                      this.noPayLocatin = false
                    } 
                  else if(this.status === 'false'){
                      this.bilal = false;
                      this.payNow = true;
                      this.paypal_original = true;
                      this.payAtLocation = false;
                      this.paypalform = true;
                      this.PayLocatin = false;
                      this.noPayLocatin = true
                  }  
              if(this.$route.params.continue === 'basic'){
                  this.basic = true;
                  this.sum =  parseInt(this.$route.params.servicePrice) + 1
              }
              else if(this.$route.params.continue === 'express'){
                  this.express = true;
                  this.sum =  parseInt(this.$route.params.servicePrice) + 2
                    } 
                 }
            }) 
            .catch(error=>{
              this.loader = false
              error.response
            })  

    this.loader = true
    this.$store.dispatch('getSaloonId', {
     barberId:this.$route.params.barberId
    })
    .then(response => { 
      this.loader = false 
      if(response.data.status!=undefined && response.data.status=='Token is Expired')
      {
           this.$router.push({ name: 'login', params: { } })
      }
      else{
          
          this.saloonId = response.data.saloonId.created_by
         
      }
    })
    .catch(error=>{
      this.loader = false 
      error.response
      })
 
    this.loader = true
    this.$store.dispatch('getServiceName', {
     serviceId:this.$route.params.serviceId
    })
    .then(response => { 
      this.loader = false 
      if(response.data.status!=undefined && response.data.status=='Token is Expired')
      {
           this.$router.push({ name: 'login', params: { } })
      }
      else{
          
          this.ServiceName = response.data.getService.name

      }
    })
    .catch(error=>{
      this.loader = false
      error.response
      })

     
    this.$store.dispatch('getPaypalSetting', {
     user_id: this.$store.getters.loggedInUserId,
     barberId:this.barberId
    })
    .then(response => { 
      
      if(response.data.status!=undefined && response.data.status=='Token is Expired')
      {
           this.$router.push({ name: 'login', params: { } })
      }
      else{
          
          this.paypalStatus = response.data.paypal_settings.paypal_status
          if(this.paypalStatus=='0')
          {     this.businessEmail = response.data.paypal_settings.paypal_sandbox_email
                this.paypalUrl = 'https://www.sandbox.paypal.com/cgi-bin/webscr'

          }else{
                this.businessEmail = response.data.paypal_settings.paypal_live_email
                this.paypalUrl = 'https://www.paypal.com/cgi-bin/webscr';
          }

           this.itemname = this.ServiceName
           this.invoice = this.barberId+'_'+this.$store.getters.loggedInUserId+'_'+this.saloonId+'_'+this.seriveId+'_'+this.timestamp+'_'+this.date+'_'+this.time+'_'+this.basicExpress+'_'+this.sum 
           var base_url = window.location.origin;
           this.returnURL = base_url+'/dist/#/dashboard/client/discover/congrats-paypal'
           this.cancelURL = base_url+'/dist/#/dashboard/client/discover/home'
           //  console.log( this.paypalStatus)

      }
    })
    .catch(error=>{
      error.response
       })
      },

  // computed: {
  // 	result() {
  //        if(this.$route.params.continue === 'basic'){

  //               this.basic = true; 
  //               return parseInt(this.$route.params.servicePrice) + 1;
                
  //        } 
  //       else if(this.$route.params.continue === 'express'){

  //               this.express = true; 
  //               return parseInt(this.$route.params.servicePrice) + 2;
               
  //           }
           
  //       }
  //    },
    created(){
            
            this.barberId = this.$route.params.barberId;
            this.servicePrice = this.$route.params.servicePrice;
            this.seriveId = this.$route.params.serviceId;
            this.basicExpress = this.$route.params.continue;
            this.date = this.$route.params.date; 
            this.time = this.$route.params.time;
    }   
  }
</script>
<style scoped="">
.back-link{
    font-family: Font Awesome 5 Free !important;
    font-style: normal !important;
    font-weight: normal !important;
    line-height: normal !important;
    font-size: 18px !important;
    text-align: justify !important;
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
.text{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: 300 !important;
    line-height: normal !important;
    font-size: 14px !important;
    color: #484848 !important;
}
.rupees{
    font-family: Font Awesome 5 Free !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 18px !important;
    text-align: justify !important;
    color: #484848 !important;
}
.card{
    border-radius:7px !important;
}
.date{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  text-align: justify;
  font-size: 14px !important;
  color: #484848 !important;
}
.paypal{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 18px !important;
  line-height: normal !important;
  color: #484848 !important;
}
</style>

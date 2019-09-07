<template>
	<div class="main">
		<Loader v-show="loader" />
		<AlertBox alertText="You will not get refund if you cancel your appointment." 
							confirmText="Are you sure you want to cancle your appointment?"
							ref="AlertBox" 
							action="MyBookingHome"
							:date=date :time=time	/>
		<v-container fluid style="background-color:#FCD675;">
			<v-layout row wrap text-md-center>
				<v-flex xs2 md2 sm2>
					<router-link :to="{ name: 'MyBookingHome', params: {} }">
						<font-awesome-icon class="back-link" large :icon="['fas','arrow-left']"/>
					</router-link>
				</v-flex>
				<v-flex xs8 md8 sm8>
					<span class="find-text">
						My Bookings
					</span>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container>
			<v-layout row wrap justify-center>
				<v-flex xs12 md6 sm12>
					<v-card class="card-text">
						<v-card-text>
							<v-layout row wrap>
								<v-flex xs12 md10 sm10>
									<v-layout row wrap>
										<v-flex xs4 md6 sm6>
											<v-responsive>
												<v-img :src="picture" contain style="height:120px !important; border-radius:50%;">
												</v-img>
											</v-responsive>
										</v-flex>
										<v-flex xs8 md6 sm6 class="pl-3 pt-3">
											<p class="title">
												{{ barberName }}
											</p>
											<p class="text">
												Barber at
												<span class="stylish">
													{{ saloonName }}
												</span>
											</p>
										</v-flex>
									</v-layout>
								</v-flex>
							</v-layout>
							<v-divider class="mt-3 mb-2">
							</v-divider>
							<v-layout row wrap text-xs-center justify-center>
								<v-flex xs6 md6 sm6>
									<span class="date">
										{{ date }}
									</span>
								</v-flex>
								<v-flex xs6 md6 sm6>
									<span class="date">
										{{ time }}
									</span>
								</v-flex>
							</v-layout>
							<v-layout row wrap text-xs-center justify-center>
								
								<!-- <v-flex xs6 md6 sm6>
								<v-btn class="add-btn" round  depressed>
								<font-awesome-icon size="1x"  :icon="['fas','calendar']"/>
								&nbsp;
								Add to Calender
								</v-btn>
								</v-flex> -->

							  <v-flex xs6 md6 sm6>
									<v-btn @click="completeAppointment" class="add-btn" round  depressed>
									<!-- <font-awesome-icon size="1x"  :icon="['fas','calendar']"/> -->
									&nbsp;
										Complete Appointment
									</v-btn>
								</v-flex> 

								<v-flex xs6 md8 sm8>
									<v-btn @click="showAlert" class="cancel-btn" round depressed>
										<font-awesome-icon size="1x" :icon="['fas','times']"/>
										&nbsp; Cancel
									</v-btn>
								</v-flex>
							</v-layout>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
			<!-- <v-layout row wrap justify-center text-xs-center>
				<v-flex xs12 md6 sm6 class="pt-2">
					<v-btn @click="completeAppointment" class="login-btn" block depressed>
						Complete Appointment
					</v-btn>
				</v-flex>
			</v-layout> -->
		</v-container>
	</div>
</template>

<script>

import AlertBox from '../../../../components/AlertBox'
import Loader from '../../../../components/Loader'
  export default {
    components: {
           Loader,
           AlertBox
       },
      data () {
        return {
          loader: false,
          date : '',
          time: '',
          valid: true,
          email: '',
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
          ] 
        }
      },

    methods:{
      showAlert(){
          this.$refs.AlertBox.setValue(true)
			} ,
			completeAppointment(){
				
				this.$router.push({ name: 'MyBookingHome', params: { } })
				
        this.$store.dispatch('completeAppointment', {
                user_id: this.$store.getters.loggedInUserId,
								barberId: this.barberId,
								time: this.time,
								date: this.date
              }) 
            .then(response => {
              this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                      
											// console.log(this.showBookingOne)
                  } 
            })
            .catch(error=>{
              this.loader = false
              error.response
            })				 

			} 
    }, 

    created(){
			this.barberId = this.$route.params.barberId;
      this.barberName = this.$route.params.barberName;
      this.saloonName = this.$route.params.saloonName;
      this.time = this.$route.params.time;
      this.date = this.$route.params.date;
      this.picture = this.$route.params.picture;
      // console.log(this.picture)
    },
  }
</script>
<style scoped="">
.add-btn{
font-family: Montserrat !important;
font-style: normal !important;
font-weight: bold !important;
line-height: normal !important;
font-size: 10px !important;
text-align: justify !important;
color: #000 !important;
border-radius: 18px !important;
background: #FCD675 !important;

}
.back-link{
font-style: normal !important;
font-weight: normal !important;
line-height: normal !important;
font-size: 18px !important;
text-align: justify !important;
color: black !important;
}
.cancel-btn{
background: #FF5555 !important;
border-radius: 18px !important;
font-family: Montserrat !important;
font-style: normal !important;
font-weight: bold !important;
line-height: normal !important;
font-size: 10px !important;
text-align: justify !important;
color: #FFFFFF;

}
.login-btn{
     font-family: Montserrat !important;
     font-style: normal;
     font-weight:bold !important;
     line-height: normal;
     font-size: 14px;
     background: #FCD675 !important;
     color: #484848;
     height: 48px;
     text-transform: capitalize;
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
  font-size: 13px !important;
  color: #484848;
}
.stylish{
    color: #FCD675;
}
.card-text{
  border-radius:15px;
}
</style>

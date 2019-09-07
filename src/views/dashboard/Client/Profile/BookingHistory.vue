<template>
	<div class="main">
		<Loader v-show="loader" />
		<v-container fluid style="background-color:#FCD675;">
			<v-layout row wrap>

				<v-flex xs2 md3 sm3>
					<router-link :to="{ name: 'ProfileHome', params: {} }">
						<font-awesome-icon class="back-link" large :icon="['fas','arrow-left']"/>
					</router-link>
				</v-flex>

				<v-flex xs9 md9 sm9>
					<span class="find-text">
						Booking History
					</span>
				</v-flex>

			</v-layout>
		</v-container>

		<v-container>
			<template v-if="bookedbarbers.length>0">
				<div v-for="(client,index) in bookedbarbers" :key="index">
					<v-layout row wrap justify-center class="pt-2">
						<v-flex xs12 md10 sm12 class="mt-1">
							<v-card class="card-text">
								<v-card-text>
									<v-layout row wrap text-xs-center class="pa-2">
										<v-flex xs12 md8 sm10>
											<v-layout row wrap>
												<v-flex xs3 md4 sm6>
													<v-responsive>
														<v-img style="border:2px solid #FCD675; height:80px !important; border-radius:50%" :src="client.client_profile" contain>
														</v-img>
													</v-responsive>
												</v-flex>
												<v-flex xs5 md4 sm6 class="pl-3 pt-1">
													<h2 class="title">
														{{ client.barber_name }}
													</h2>
													<h4 class="text">
														Barber at
														<span class="stylish">
															{{ client.saloonName }}
														</span>
													</h4>
												</v-flex>
												<v-flex xs4 md4 sm6 text-xs-right>
													<span class="rupees">
													 £  {{ client.payment }}
													</span>
													<br />
													<v-btn class="btn-text" small depressed color="#00C2FF">
														Pending
													</v-btn>
												</v-flex>
											</v-layout>
										</v-flex>
									</v-layout>
									<v-divider class="mt-3 mb-2">
									</v-divider>
									<v-layout row wrap text-xs-center>
										<v-flex xs6 md6 sm6>
											<span class="duration">
												Date
											</span>
										</v-flex>
										<v-flex xs6 md6 sm6>
											<span class="duration">
												Time
											</span>
										</v-flex>
									</v-layout>
									<v-layout row wrap text-xs-center>
										<v-flex xs6 md6 sm6>
											<span class="date">
												{{ client.date }}
											</span>
										</v-flex>
										<v-flex xs6 md6 sm6>
											<span class="date">
												{{ client.time }}
											</span>
										</v-flex>
									</v-layout>
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</div>
			</template>
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
        bookedbarbers: []
      }
    },
  mounted(){
		          this.loader = true
              this.$store.dispatch('clientBookingHistory',{
              user_id: this.$store.getters.loggedInUserId
            }) 
            .then(response => {
              this.loader = false 
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                 this.bookedbarbers = response.data.user  
                 }
            })
            .catch(error=>{
						  	this.loader = false 
                error.response
            })
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
    text-align: center !important;
    color: #000000 !important;
}
.date{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 12px !important;
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
  font-family: Montserrat  !important;
  font-style: normal !important;
  font-weight: 300 !important;
  line-height: normal !important;
  font-size: 12px !important;
  text-align: justify !important;
  color: #484848;
}
.stylish{
    color: #FCD675;
}
.card-text{
  border-radius:15px;
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
.btn-text{
    font-family: Montserrat  !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 10px !important;
    text-align: justify !important;
    color: #FFFFFF !important;
}
.duration{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: 300 !important;
      line-height: normal !important;
      font-size: 14px !important;
      text-align: justify !important;
      color: #484848 !important;

}
.back-link{
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    text-align: justify;
    color: black;
}
</style>
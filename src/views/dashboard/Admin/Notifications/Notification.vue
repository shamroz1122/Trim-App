<template>
	<div class="main">
		<Loader v-show="loader" />
		<v-container fluid style="background-color:#FCD675;">
			<v-layout row wrap text-xs-center>
				<v-flex xs12 md12 sm12>
					<span class="find-text">
						Notifications
					</span>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid pa-0 grid-list-xs,sm,md,lg,xl style="color:#000; background-color:#fff;">
			<template v-if="getNoti.length > 0">
				<div v-for="(getNot,index) in getNoti" :key="index">
					<v-layout row wrap justify-center text-md-center>
						<v-flex xs12 md10 sm10>
							<v-layout row wrap justify-center>
								<v-flex xs2 md2 sm2 class="pa-2 pt-4" text-xs-center>
									<div style="width: 54px; height: 54px; border-radius:70px; background-color:#FCD675">
										<v-avatar>
											<img src="../../../../assets/trimmer.png" style="margin-top:5px;">
										</v-avatar>
									</div>
								</v-flex>
								<v-flex xs8 md8 sm4 class="mt-3 pl-3 pt-3">
									<span class="oneday">
										{{ getNot.barber_name }}
									</span>
									<span class="new-appointment">
										is on Holiday
									</span>
									<br />
								</v-flex>
							</v-layout>
							<v-divider>
							</v-divider>
						</v-flex>
					</v-layout>
				</div>
			</template>
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
      data () {
        return {
						day:'',
						getNoti:[],
						loader: false
					}
				},

		mounted (){
			this.loader = true
			this.day =  moment().format('dddd')
			this.$store.dispatch('adminNotifications', {
						    user_id: this.$store.getters.loggedInUserId,
                day:this.day   
               }) 
            .then(response => {
							this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                      this.getNoti = response.data.getNoti 
                  } 
            })
            .catch(error=>{
              this.loader = false
							error.response
							this.getNoti = []
            })
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
      text-align: center !important;
      color: #000000 !important;
  }
.new-appointment{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: normal !important;
      line-height: normal !important;
      font-size: 11px !important;
      color: #484848 !important;
}
.oneday{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 12px !important;
      color: #000000 !important;
}
.text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: 300 !important;
      line-height: normal !important;
      font-size: 12px !important;
      color: #484848 !important;
}
</style>

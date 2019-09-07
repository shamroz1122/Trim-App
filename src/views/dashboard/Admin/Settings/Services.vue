<template>
	<div class="main">
		<Loader v-show="loader" />
		<v-container fluid style="background-color:#FCD675;">
			<v-layout row wrap text-xs-center>
				<v-flex xs2 md2 sm2>
					<router-link :to="{ name: 'AdminSettingsHome', params: {} }">
						<font-awesome-icon class="back-link" large :icon="['fas','arrow-left']"/>
					</router-link>
				</v-flex>
				<v-flex xs8 md8 sm8>
					<span class="find-text">
						Services
					</span>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid class="pa-0" style="background-color:#fff;" grid-list-xs,sm,md,lg,xl>
			<template v-if="services.length>0">
				<div v-for="(service,index) in services" :key="index">
					<v-layout justify-center row wrap class="pt-3">
						<v-flex xs2 md2 sm3>
							<v-checkbox color="#FCD675" 
              class="my-0 py-0" 
              v-on:change="statusOption($event,service.id)" 
              v-model="service.status=='true'?true:false">
							</v-checkbox>
						</v-flex>
						<v-flex xs9 md8 sm4>
							<span class="day">
								{{ service.name }}
							</span>
						</v-flex>
						<router-link :to="{ name: 'AddService', params: {serviceId:service.id} }">
							<v-flex xs1 md2 sm2>
								<font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
							</v-flex>
						</router-link>
					</v-layout>
					<v-divider>
					</v-divider>
				</div>
			</template>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 offset-md3>
					<div style="height: 100px; position: relative">
						<v-fab-transition>
							<v-btn color="#FCD675" fixed right fab :to="{ name: 'AddService', params: {} }">
								<v-icon>
									add
								</v-icon>
							</v-btn>
						</v-fab-transition>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
import Loader from '../../../../components/Loader'
  export default {
    components: { Loader },
    data () {
      return {
        services:[],
        loader:false,
        status:true,
      }
    },
    methods:{
      statusOption(a,service_id){
       
        this.$store.dispatch('changeServiceStatus',{
            user_id: this.$store.getters.loggedInUserId,
            status: a,
            service_id: service_id,
        })
        .then(response => {

          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
               this.$router.push({ name: 'login', params: { } })
          }

        })
        .catch(error=>{
          error.response
        })

      }
    },
    mounted (){

      var interval =   setTimeout(function(){
      var el = document.getElementById('app')
      el.classList.remove('grey-color')
      el.classList.add('white-color')
      clearTimeout(interval);
    }, 100);
    this.loader = true
    this.$store.dispatch('getServices',{
        user_id: this.$store.getters.loggedInUserId
    })
    .then(response => {
      this.loader = false
      if(response.data.status!=undefined && response.data.status=='Token is Expired')
      {
           this.$router.push({ name: 'login', params: { } })
      }else{
          this.services = response.data.service
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
    }
 }
</script>
<style scoped="">
.v-btn.v-btn--fixed {
    top: 520px !important;
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
    font-style: normal !important;
    font-weight: normal !important;
    line-height: normal !important;
    font-size: 18px !important;
    text-align: justify !important;
    color: black !important;
}
.day{
      font-family: Montserrat  !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
      text-align: justify !important;
      color: #484848 !important;
}
.checkbox{
  margin-top:-4px;
}
</style>

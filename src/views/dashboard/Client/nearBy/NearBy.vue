<template>
	<div class="main">
		<v-container fluid style="background-color:#FCD675;">
			<Loader v-show="loader" />
			<v-layout row wrap>
				<v-flex xs11 md11 sm11>
					<span class="discover-text">
						Discover
					</span>
					<br />
					<span class="find-text">
						Find the perfect barber
					</span>
				</v-flex>
				<v-flex xs1 md1 sm1>
					<!-- <router-link :to="{ name: 'DiscoverDistanceCal', params: {} }">
						<font-awesome-icon color="#484848" size="2x" :icon="['fas','sliders-h']"/>
					</router-link> -->
				</v-flex>
			</v-layout>
		</v-container>
		<v-container>
        <br />
			<v-layout row wrap text-xs-center just justify-center class="pt-2">
        <v-flex xs10 md8 sm8>
           <p class="find-text">* Select kilometers to show the Saloon's in the range of the selected Km</p>
        </v-flex>
				<v-flex xs3 md3 sm6>
					<p class="chipHover kilometer" @click="onekm('1')">
						1 KM
					</p>
				</v-flex>
				<v-flex xs3 md3 sm6>
					<p class="chipHover kilometer" @click="onekm('2')">
						2 KM
					</p>
				</v-flex>
				<v-flex xs3 md3 sm6>
					<p class="chipHover kilometer" @click="onekm('3')">
						3 KM
					</p>
				</v-flex>
				<v-flex xs3 md3 sm6>
					<p class="chipHover kilometer" @click="onekm('4')">
						4 KM
					</p>
				</v-flex>
			</v-layout>
      
			<gmap-map :center="center" :zoom="10" style="width:100%; height: 300px;">
				<gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position">
				</gmap-marker>
			</gmap-map>

			<!-- <v-layout @click="barberOption" row wrap text-xs-center just justify-center class="pt-1">
        <v-flex xs11 md6 sm6 >
          <v-responsive>
            <v-img
            :src="require('../../../../assets/map.png')"
            ></v-img>
          </v-responsive>
        </v-flex>
			</v-layout> -->

			<v-layout row warp justify-center class="mt-2">
				<v-flex xs12 md10 lg10>
					<div v-if="allsaloons.length > 0">
						<carousel-3d :space="370" :clickable="true" :controls-visible="false">
							<slide v-for="(saloon,index) in allsaloons" :key='saloon.id' :index="index" style="border:2px solid #FCD675; border-radius:11px; width:100%; height: 162px !important; background-color:white !important">
								<v-layout row wrap class="pt-2" justify-center v-if="barberDiv">
									<v-flex xs12 md8 sm10>
									
												<v-layout row wrap>
													<v-flex xs4 md6 sm6>
														<v-responsive>
															<v-img 
                              style="border:2px solid #FCD675;
                               height: 126px;
                               border-radius:50% !important;"
                              :src="saloon.image">
															</v-img>
														</v-responsive>
													</v-flex>
													<v-flex xs8 md6 sm2 class="pa-1">
														<v-layout row wrap>
															<v-flex xs8 md8 sm10 class="text-xs-center"> 
																<span class="prof-name">
																	{{ saloon.name }}
																</span>
															</v-flex>
															<v-flex xs4 md4 sm10 class="text-xs-center">
																<!-- <span  v-if="farHeart" @click="setFasHeat"><font-awesome-icon size="2x"  :icon="['far','heart']"/></span>
                                <span  v-if="fasHeart" @click="setFarHeat"><font-awesome-icon color="#FF0000" size="2x"  :icon="['fas','heart']"/></span> -->
															</v-flex>
														</v-layout>
														<v-layout row wrap>
															<v-flex xs12 md8 sm8 >
																<span class="prof-desc">
																	{{ saloon.address }}
																</span>
															</v-flex>
														</v-layout>
														<v-flex xs12 md8 sm8 right>
															<v-btn :to="{ name: 'DiscoverSaloonDetail', params: {SaloonId:saloon.id} }" class="b-register" flat color="#00A807" outline small round>
																Open 
															</v-btn>
														</v-flex>
													</v-flex>
												</v-layout>
											
									</v-flex>
								</v-layout>
							</slide>
						</carousel-3d>
					</div>
				</v-flex>
			</v-layout>
			
		</v-container>
	</div>
</template> 
<script>
import Loader from '../../../../components/Loader'
import { Carousel3d, Slide } from 'vue-carousel-3d';
  export default {
    components: {
           Loader,
           Carousel3d,
           Slide
       },
    data () {
      return {
        // farHeart:false,
        // fasHeart:false,
        loader: false,
        latitude:'',
        longitude:'',
        currentLocation:'',
        center: { lat: 51.5707001, lng: -0.06229699999994409 },
        markers: [],
        places: [],
        lat2:'',
        lat1:'',
        lon2:'',
        lon1:'',
        place: null, 
        currentLat:'',
        currentLong:'',
        distance:'',
        lattitudeDifference:'',
        dLat:'',
        longitudeDifference:'',
        dLon:'',
        a:'',
        c:'',
        address:'',
        radiusOfEarth:'',
        distanceInMiles:'',
        barberDiv:true,
        allsaloons:''
      }
    },
    mounted(){
              this.geolocate(); 
              
              this.$store.dispatch('oneKm',{
              currentLat:this.currentLat,
              currentLong:this.currentLong,
              km:1
            }) 
            .then(response => {
             
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                this.allsaloons = response.data.latlonArray
                // .log(this.allsaloons)
              
                var saloons = response.data.latlonArray
                Object.keys(saloons).forEach(key => {
                  
                  this.place = saloons[key]['address']  
                  this.long = saloons[key]['saloonLon']
                  this.lat = saloons[key]['saloonLat']
                  // // .log(this.lat+' '+this.long)
                  if (this.place) {  
                  const marker = {    
                  lat: Number(this.lat),
                  lng: Number(this.long)
                    };  
                  this.markers.push({ position: marker });
                  this.places.push(this.place);
                  this.center = marker;
                  this.place = null;   
                      }  
                  });  
                 }
            })
            .catch(error=>{
              
						  error.response
            })
              
    },

    methods:{

        /* barberOption() {
          this.barberDiv = true
        } */

         onekm(e){
            
              this.loader = true
              this.$store.dispatch('oneKm',{
              currentLat:this.currentLat,
              currentLong:this.currentLong,
              km: e 
            }) 
            .then(response => {
             
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                this.allsaloons = response.data.latlonArray
                //// .log(this.allsaloons)
                this.loader = false
                var saloons = response.data.latlonArray
                Object.keys(saloons).forEach(key => {
                  
                  this.place = saloons[key]['address']  
                  this.long = saloons[key]['saloonLon']
                  this.lat = saloons[key]['saloonLat']
                   // console.log(this.lat+' '+this.long)
                  if (this.place) {  
                  const marker = {    
                  lat: Number(this.lat),
                  lng: Number(this.long)
                    };  
                  this.markers.push({ position: marker });
                  this.places.push(this.place);
                  this.center = marker;
                  this.place = null;   
                      }  
                  });  
                 }
            }) 
            .catch(error=>{
              this.loader = false
						  error.response
            })
         },
    
          geolocate: function() {
              
              navigator.geolocation.getCurrentPosition(position => {
              this.currentLat = position.coords.latitude
              this.currentLong = position.coords.longitude
              // console.log(this.currentLat+' '+this.currentLong)
          });
				},
    }
  }
</script>

<style scoped="">
.chipHover:hover{
    border-color: #FCD675 !important;
    color: #FCD675 !important;
  }
.prof-name{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 13px;
  font-weight:bold;
  color: #484848;
}
.prof-desc{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 12px;
  color: #484848;
}
.find-text{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: 300 !important;
  line-height: normal !important;
  font-size: 14px !important;
  text-align: center !important;
  color: #000000 !important;
}
.kilometer{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 14px !important;
  text-align: center !important;
  color: #000000 !important;
}
.discover-text{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: normal !important;
  font-size: 18px !important;
  font-weight: bold !important;
  text-align: justify !important;
  color: #484848 !important;
}
</style>
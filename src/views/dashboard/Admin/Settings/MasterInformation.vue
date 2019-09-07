<template>
	<div class="main">
		<Loader v-show="loader" />
		<v-container fluid style="background-color:#FCD675;">
			<v-layout row wrap text-md-center v-if="saloonHeader">
				<v-flex xs10 md12 sm12>
					<span class="find-text">
						Trim App
					</span>
					<p class="text">
						Get More Customer with Trim App
					</p>
				</v-flex>
			</v-layout>
			<v-layout row wrap text-md-center v-if="photosHeader">
				<v-flex xs2 md2 sm2>
					<font-awesome-icon @click="step3" class="back-link" large :icon="['fas','arrow-left']"/>
				</v-flex>
				<v-flex xs8 md8 sm8>
					<span class="find-text">
						Add Photos
					</span>
				</v-flex>
			</v-layout>
			<v-layout row wrap text-md-center v-if="barbersHeader">
				<v-flex xs2 md2 sm2>
					<font-awesome-icon @click="step1" class="back-link" large :icon="['fas','arrow-left']"/>
				</v-flex>
				<v-flex xs8 md8 sm8>
					<span class="find-text">
						Add Barber
					</span>
				</v-flex>
			</v-layout>
		</v-container>
		<v-stepper v-model="e1" class="elevation-0">
			<v-stepper-header class="elevation-0" style="background-color:#F1F1F1;">
				<v-stepper-step color="#FCD675" :complete="e1 > 1" step="1">
				</v-stepper-step>
				<v-divider>
				</v-divider>
				<v-stepper-step color="#FCD675" :complete="e1 > 2" step="2">
				</v-stepper-step>
				<v-divider>
				</v-divider>
				<v-stepper-step step="3" color="#FCD675">
				</v-stepper-step>
			</v-stepper-header>
			<v-stepper-items class="elevation-0">
				<v-form ref="form1" v-model="valid" lazy-validation @submit.prevent="saloonSaveBasicInfo">
					<v-stepper-content step="1">
						<v-card class="elevation-0" style="">
							<v-layout row wrap justify-center class="pt-4">
								<v-flex xs12 md10 sm10>
									<v-dialog v-model="dialog" max-width="390">
										<v-card>
											<!-- <GmapMap v-bind:center="{lat:31.450365, lng:73.134964}" v-bind:zoom="7" map-type-id="terrain" style="width: 500px; height: 300px">
											<GmapMarker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" v-bind:draggable="true" @click="center=m.position" />
											</GmapMap> -->
											<div>
												<h2 class="text-xs-center find-text pt-2">
													Search and add a pin
												</h2>
												<label>
														<gmap-autocomplete 
															style="font-family: Montserrat !important;
															margin-left:10px; padding:12px; 
															width:90%; 
															border:1px solid #000;" 
															@place_changed="setPlace">
														</gmap-autocomplete>
													<button @click="addMarker" class="btn">
														Add
													</button>
													
													<button @click="dialog = false" class="btn">
														Done
													</button>
												
												</label>
												<br/>
											</div>
											<br />

										<gmap-map :center="center" :zoom="8" style="width:100%;  height: 400px;">
											<gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position">
											</gmap-marker>
										</gmap-map>

										</v-card>
									</v-dialog>
									<span class="name">
										Saloon Phone Number
									</span>
									<v-text-field v-model="phone" type="number" color="black">
									</v-text-field>
								</v-flex>
							</v-layout>
							<v-layout row wrap justify-center class="pt-4">
								<v-flex xs12 md10 sm10>
									<span class="name">
										Owner's Name
									</span>
									<v-text-field v-model="name" color="black">
									</v-text-field>
								</v-flex>
							</v-layout>
							<v-layout row wrap justify-center class="pt-4">
								<v-flex xs12 md10 sm10>
									<span class="name">
										Shop Name
									</span>
									<v-text-field v-model="shopName" color="black">
									</v-text-field>
								</v-flex>
							</v-layout>
							<v-layout row wrap justify-center class="pt-4">
								<v-flex xs12 md10 sm10>
									<span class="name">
										Address
									</span>
									<!-- v-model="address" -->
									<v-text-field v-model="currentLocation" color="black" @click.stop="dialog = true">
									</v-text-field>
								</v-flex>
							</v-layout>
							<v-layout row wrap justify-center class="pt-4">
								<v-flex xs12 md10 sm10>
									<span class="name">
										Category
									</span>
									<v-select v-model="category" :items="items" label="Select" single-line color="#000">
									</v-select>
								</v-flex>
							</v-layout>
							<v-layout row wrap justify-center class="pt-4">
								<v-flex xs12 md10 sm10>
									<span class="name">
										Opening Hours
									</span>
									<v-select v-model="openingHours" :items="items" label="Select" single-line color="#000">
									</v-select>
								</v-flex>
							</v-layout>
						</v-card>
						<v-layout align-end justify-center row fill-height>
							<v-flex xs12 md6 sm8>
								<!-- <v-btn color="#FCD675" @click="step1" depressed block class="btn text-capitalize">Next</v-btn> -->
								<v-btn type="submit" v-show="nextBtn" color="#FCD675" depressed block class="btn text-capitalize">
									Next
								</v-btn>
								<v-layout row wrap justify-center text-xs-center>
									<v-flex xs12>
										<v-progress-circular indeterminate color="#FCD675" v-show="loader">
										</v-progress-circular>
									</v-flex>
								</v-layout>
							</v-flex>
						</v-layout>
					</v-stepper-content>
				</v-form>
				<v-stepper-content step="2">
					<v-card style="" class="elevation-0">
						<v-layout row wrap>
							<v-flex xs8 md12 sm12>
								<p class="shop-img">
									Add Your Images Here
								</p>
							</v-flex>
						</v-layout>
						<v-layout row wrap justify-center class="pb-2">
							<template v-if="images.length==0">
								<v-flex xs4 md3 sm3>
									<v-avatar :tile="tile" size="90px" color="grey lighten-4" style="border-radius:8px;">
										<img :src="require('../../../../assets/dummy.png')" alt="avatar">
									</v-avatar>
								</v-flex>
							</template>
							<template v-if="images.length>0">
							 <v-layout row wrap justify-center text-xs-center mt-1>	
								<v-flex v-for="(image,index) in images" :key="index" xs4 md4 sm4>
									<v-avatar :tile="tile" size="90px" color="grey lighten-4" style="border-radius:8px;">
										<img :src="image.meta_value" style="border-radius:8px; !important" alt="avatar">
									</v-avatar>
								</v-flex>
							 </v-layout>	
							</template>
							<v-flex xs3 md3 sm3 @click='pickFile' style="background-color:#FCD675; border-radius:15px;">
								<v-container text-xs-center fill-height>
									<v-layout wrap align-center>
										<v-flex xs12 md12 sm12>
											<!-- <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>-->
											<input type="file" style="display:none" ref="image" accept="image/*" @change="onFilePicked">
											<font-awesome-icon size="2x" :icon="['fas','plus-circle']"/>
										</v-flex>
									</v-layout>
								</v-container>
							</v-flex>
						</v-layout>
					</v-card>
					<v-layout align-end justify-center row fill-height class="mt-2">
						<v-flex xs12 md6 sm8>
							<v-btn color="#FCD675" @click="step2" depressed block class="btn text-capitalize">
								Next
							</v-btn>
						</v-flex>
					</v-layout>
				</v-stepper-content>
				<v-stepper-content step="3">
					<v-card style="height:55vh" class="elevation-0">
						<v-layout justify-center row wrap>
							<v-flex xs12 md8 sm8>
								<router-link v-for="(barber,index) in barbers" :key="index" :to="{ name: 'DeleteBarber', params: {userId:barber.id} }" style="text-decoration:none;">
									<v-layout row wrap class="py-2">
										<v-flex xs3 md2 sm3>
											<v-avatar :tile="tile" size="70px" color="grey lighten-4">
												<img :src="barber.barber_profile!=''?barber.barber_profile:require('../../../../assets/dummy.png')" alt="avatar">
											</v-avatar>
										</v-flex>
										<v-flex xs7 md6 sm8 class="pt-3 pl-3">
											<h2 class="title">
												{{ barber.name }}
											</h2>
											<h5 class="text" v-text="barber.phone_number!=''?barber.phone_number:''">
											</h5>
										</v-flex>
									</v-layout>
									<v-divider>
									</v-divider>
								</router-link>
							</v-flex>
						</v-layout>
					</v-card>
					<v-layout wrap row text-xs-center justify-end>
						<v-flex xs2>
							<v-layout align-center justify-center row fill-height style="width: 54px; height: 54px; border-radius:70px; background-color:#FCD675">
								<router-link :to="{ name: 'SettingsAddBarber', params: {} }">
									<font-awesome-icon size="2x" color="#000" :icon="['fas','plus']"/>
								</router-link>
							</v-layout>
						</v-flex>
					</v-layout>
					<v-layout align-end justify-center row fill-height>
						<v-flex xs12 md6 sm8>
							<v-btn @click="step3" color="#FCD675" depressed block class="btn text-capitalize">
								Done
							</v-btn>
						</v-flex>
					</v-layout>
				</v-stepper-content>
			</v-stepper-items>
		</v-stepper>
		<v-container grid-list-xs,sm,md,lg,xl style="background-color:white;">
		</v-container>
	</div>
</template>
<script>
import Loader from '../../../../components/Loader'
	export default {
	components: { Loader },
    data () {
      return {
				latitude:'',
				longitude:'',
				currentLocation:'',
				loader: false,
				center: { lat: 45.508, lng: -73.587 },
				markers: [],
				places: [],
				currentPlace: null,

        // center : { lat:31.450365, long:73.134964 },
        // markers : [
        //   {
        //     position: { lat:31.450365, long:73.134964 }
        //   },
        //   {
        //     position: { lat:31.450365, long:73.134964 }
        //   }
				// ],
				
        dialog: false,
        imageName:'',imageUrl:'',imageFile:'',
        saloonHeader: true,
        photosHeader: false,
        barbersHeader: false,
        shopName:'',
        address:'',
        name:'',
        tile:false,
        e1: 0,
        valid: true,
        phone:'',
        nextBtn :true,
        loader:false,
        category: 'one',
        openingHours: 'one',
        items: ['one','two','Hour 3'],
        images: [],
        barbers:[], 
      }
    },

    methods: {
				setPlace(place) {
					this.currentPlace = place; 
					this.currentLocation = this.currentPlace.formatted_address
					// console.log(this.currentPlace.formatted_address)
				}, 

				addMarker() {
					if (this.currentPlace) {
						const marker = { 
								lat: this.currentPlace.geometry.location.lat(),
								lng: this.currentPlace.geometry.location.lng(),
							};

						this.latitude = this.currentPlace.geometry.location.lat()
						this.longitude = this.currentPlace.geometry.location.lng()
						this.markers.push({ position: marker });
						this.places.push(this.currentPlace);
						this.center = marker;
						this.currentPlace = null;   
						console.log(this.latitude+ ' ' + this.longitude)
				  }
				}, 

				geolocate: function() {  
					navigator.geolocation.getCurrentPosition(position => {
						this.center = { 
							lat: position.coords.latitude,
							lng: position.coords.longitude
						};
					});
				},

        pickFile () {
             this.$refs.image.click()
				 },
				 
         onFilePicked (e) {
           const files = e.target.files
           if(files[0] !== undefined) {
             this.imageName = files[0].name
             if(this.imageName.lastIndexOf('.') <= 0) {
               return
             }
             const fr = new FileReader ()
             fr.readAsDataURL(files[0])
             fr.addEventListener('load', () => {
               this.imageUrl = fr.result
               this.imageFile = files[0] // this is an image file that can be sent to server...
               this.images.push({meta_value:this.imageUrl})

               this.$store.dispatch('saveSaloonImages',{
                   user_id: this.$store.getters.loggedInUserId,
                   ImageFile: this.imageFile,
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
             })
           } else {
             this.imageName = ''
             this.imageFile = ''
             this.imageUrl = ''
           }
         },
        step1(){

          this.e1 = 2
          this.saloonHeader = false
          this.barbersHeader= false
          this.photosHeader= true
        },
        step2(){
          this.e1 = 3
          this.saloonHeader = false
          this.photosHeader= false
          this.barbersHeader= true

        },
        step3(){
          this.e1 = 1
          this.saloonHeader = true
          this.barbersHeader= false
          this.photosHeader= false
        },

        saloonSaveBasicInfo(){

          if (this.$refs.form1.validate()) {
                this.nextBtn = false
                this.loader = true
                this.$store.dispatch('saloonSaveBasicInfo',{
                    phone_number: this.phone,
                    name: this.name,
										address: this.currentLocation,
										latitude:this.latitude,
										longitude:this.longitude,
                    shopName: this.shopName,
                    openingHours: this.openingHours,
                    category: this.category,
                    user_id: this.$store.getters.loggedInUserId,
                })
                .then(response => {
                  response.data
                  this.nextBtn = true
                  this.loader = false
                  if(response.data.status!=undefined && response.data.status=='Token is Expired')
                  {
                    this.$router.push({ name: 'login', params: { } })
                  }else{
                    this.step1()
                  }
                })
                .catch(error=>{
                    error.response

                })
          }
        }
    },
    mounted (){

			this.geolocate();
 
      var interval =   setTimeout(function(){
      var el = document.getElementById('app')
        el.classList.remove('grey-color')
        el.classList.add('white-color')
        clearTimeout(interval);
      }, 100);
          this.loader = true
          this.$store.dispatch('getSaloonBasicInfo',{
              user_id: this.$store.getters.loggedInUserId,
          })
          .then(response => {
            this.loader = false
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
                 this.$router.push({ name: 'login', params: { } })
            }else{

                 this.phone =    response.data.user.phone_number
                 this.name =     response.data.user.name
                 this.shopName = response.data.user.shop_name
                 this.currentLocation =    response.data.user.address
                 this.category =    response.data.user.category
                 this.openingHours =    response.data.user.opening_hours
                 this.images =    response.data.meta
            }

          })
          .catch(error=>{
						this.loader = false
            error.response
          })

          this.$store.dispatch('getBarbers',{
              user_id: this.$store.getters.loggedInUserId,
          })
          .then(response => {

            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
                 this.$router.push({ name: 'login', params: { } })
            }else{

								// console.log(response.data.user)
								
                this.barbers = response.data.user

            }

          })
          .catch(error=>{
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
.find-text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 16px !important;
      color: #484848 !important;
    }
.back-link{
          font-style: normal !important;
          font-weight: normal !important;
          line-height: normal !important;
          font-size: 18px !important;
          text-align: justify !important;
          color: black !important;
    }
    .title{
        font-family: Montserrat !important;
        font-style: normal !important;
        font-weight: bold !important;
        line-height: normal !important;
        font-size: 18px !important;
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
.shop-img{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 14px !important;
      text-align: justify !important;
      color: #484848 !important;
}
.btn{
font-family: Montserrat !important;
font-style: normal !important;
font-weight: bold !important;
line-height: normal !important;
height: 42px !important;
font-size: 14px !important;
text-align: justify !important;
color: #000 !important;
}
.name{
font-family: Montserrat !important;
font-style: normal !important;
font-weight: 300 !important;
line-height: normal !important;
font-size: 14px !important;
text-align: justify !important;
color: #484848 !important;
}
.btn{ 
text-align:center !important;
margin-left: 10px !important;
margin-top:10px !important;
font-family: Montserrat !important;
font-style: normal !important;
font-weight: bold !important;
color: #484848 !important;
background-color: #FCD675;
padding: 15px;
width:40%; 
}
</style>

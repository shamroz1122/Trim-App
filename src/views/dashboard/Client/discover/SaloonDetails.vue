<template>
 <div id="main">
 <Loader v-show="loader" />
  <v-container class="main-container" grid-list-xs,sm,md,lg,xl>
        <v-layout row wrap>
              <v-flex  xs12 md12 sm12>
                <a @click='Backroute()' class="none"  style="text-decoration:none;">
                  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/>
                </a>
              </v-flex>
              
        </v-layout>
        <v-layout row wrap justify-center>
                  <v-flex  xs4 md1 sm2 text-xs-center>
                  <v-responsive>
                   <v-img
                   :src="image"
                   style="border-radius:50%;"
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
              <span class="title"> {{saloon.name}} </span>
              <p class="text"> {{saloon.address}} </p>
          </v-flex>
          <v-flex xs3 md3 sm3>
           <span  v-if="farHeart" @click="setFasHeat"><font-awesome-icon size="2x"  :icon="['far','heart']"/></span>
           <span  v-if="fasHeart" @click="setFarHeat"><font-awesome-icon color="#FF0000" size="2x"  :icon="['fas','heart']"/></span>
           <!-- <span  @click="setFarHeatOne"><font-awesome-icon color="#FF0000" size="2x"  :icon="['fas','heart']"/></span>  -->
          </v-flex>

     </v-layout>
        <v-divider></v-divider>
          <v-tabs
                slot="extension"
                v-model="tab"
                color="white"
                grow
                >
                <v-tabs-slider color="#FCD675"></v-tabs-slider>

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
                           <p class="stylish">{{saloon.name}}</p>
                       </v-flex>
                       <v-flex xs4>
                         <span class="name">Starting From</span>
                           <p class="stylish"> <b>£</b> {{ clientsaloonserviceprice }} </p>
                       </v-flex>
                       <v-flex xs4>
                         <span class="name">Distance</span>
                           <p class="stylish"> {{ distance }} KM</p>
                       </v-flex>
                </v-layout>
                <v-layout row wrap>
                      <v-flex xs12 md12 sm12>
                          <gmap-map :center="center" :zoom="8" style="width:100%;  height: 300px;">
											      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position">
                            </gmap-marker>
                          </gmap-map> 
                        <!-- <v-responsive>
                           <v-img
                           :src="require('../../../../assets/map2.png')"
                           ></v-img>
                         </v-responsive> -->
                      </v-flex>
                      <!-- <v-flex xs12 md8 sm8 style="text-align:right;">
                         <p class="stylish" style="text-decoration:underline;">Get Directions</p>
                      </v-flex> -->
                 </v-layout>
                 <v-layout  row wrap justify-center>
                   <v-flex  xs12 md8 sm8 text-xs-center>
                       <span class="name"> Working Hours </span>
                   </v-flex>
                 </v-layout>
                  <template v-if="clientsaloonworkinghours.length>0">
                   <div style="border: 1px solid #FCD675;" v-for="(clientsaloonworkinghour,index) in clientsaloonworkinghours" :key="index">
                      <v-layout row justify-center wrap class="pa-2" > 
                       <v-flex xs6 md6 sm6>
                         <span class="stylish"> {{ clientsaloonworkinghour.day }} </span>
                           <!-- <p class="stylish">SAT</p> -->
                       </v-flex>
                       <v-flex xs6 md6 sm6 text-sm-right text-md-right text-xs-right >
                         <span class="stylish">{{ clientsaloonworkinghour.start_at }} - {{ clientsaloonworkinghour.close_at }}</span>
                           <!-- <p right class="stylish">09:00 AM - 01:30 PM</p> -->
                       </v-flex>
                       </v-layout>
                      </div>
                   </template>
                 <v-layout v-else justify-center text-xs-center>
                   <v-flex xs12 md5 sm6>
                      <p class="text">Saloon has no active  Working Hours</p>
                   </v-flex>
                 </v-layout>
                        
                   
             </v-tab-item>

             <v-tab-item>
                <template v-if="clientsaloonservices.length>0">
                 <div v-for="(clientsaloonservice,index) in clientsaloonservices" :key="index">
                  <v-layout class="py-2" row wrap>
                    <v-flex class="mt-3" xs7 md8 sm8>
                      <span class="main-hair"> {{clientsaloonservice.name}} </span> <br />
                        £
                        <span style="font-weight:bold" class="rupees"> {{clientsaloonservice.price}} </span> 
                        <span class="time"> ({{clientsaloonservice.duration}}) </span>
                     </v-flex>
                     <v-flex x5 md4 sm4 text-sm-right text-md-right text-xs-right>
                      <v-btn :to="{ name: 'DiscoverSelectBbarber', params: {serviceId:clientsaloonservice.id , servicePrice:clientsaloonservice.price} }"  class="login-btn" depressed> Book</v-btn>
                    </v-flex> 
                  </v-layout>
                 </div> 
               </template>
            </v-tab-item>
            </v-tabs-items>

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

        latitude:'',
				longitude:'',
				currentLocation:'',
				center: { lat: 10, lng: 10 },
				markers: [],
        places: [],
        lat2:'',
        lat1:'',
        lon2:'',
        lon1:'',
				place: null, 
        currentLat:'',
        currentLong:'',
        loader: false,
        farHeart:false,
        fasHeart:false,
        tab: null,
        name: '',
        address : '',
        saloon:'',
        image: '',
        clientsaloonservices: [],
        clientsaloonworkinghours: [],
        clientsaloonserviceprice : [],
        saloon_id:'',
        distance:'',
        lattitudeDifference:'',
        dLat:'',
        longitudeDifference:'',
        dLon:'',
        a:'',
        c:'',
        radiusOfEarth:'',
        distanceInMiles:'',
        items: [
          'About', 'Price List'
        ]
      }
    },
    methods:{
      Backroute(){
        this.$router.go(-1);
       },
     
      setFasHeat (){
        
        this.farHeart = false
        this.fasHeart = true
         // localStorage.setItem("favorite", "Yes");

        this.$store.dispatch('addFavourites',{
              user_id: this.$store.getters.loggedInUserId,
              saloon_id: this.saloon.id
            })
            .then(response => {
            
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                  this.$router.push({ name: 'login', params: { } })
              }else{
                  this.status = response.data.status.payment_status
               
                 }
            }) 
            .catch(error=>{
             
              error.response
            }) 
      },
      setFarHeat (){
        
        this.farHeart = true
        this.fasHeart = false
       
        this.$store.dispatch('removeFavourites',{
              user_id: this.$store.getters.loggedInUserId,
              saloon_id: this.saloon.id
            })
            .then(response => {
            
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                  this.$router.push({ name: 'login', params: { } })
              }else{
                  this.status = response.data.status.payment_status
               
                 }
            }) 
            .catch(error=>{
               error.response
            }) 
      }, 

      geolocate: function() {

					navigator.geolocation.getCurrentPosition(position => {
           this.currentLat = position.coords.latitude
           this.currentLong = position.coords.longitude
           
            //console.log(this.currentLat+' '+this.currentLong)
            // console.log(this.saloon.latitude)
            // console.log(this.saloon.longitude)

            function toRad(degrees) {
                return degrees * Math.PI / 180;
              }
              
              this.radiusOfEarth = 6371;
            
              this.lat2 = this.saloon.latitude;
              this.lat1 = this.currentLat;
              this.lon2 = this.saloon.longitude;
              this.lon1 = this.currentLong;
              this.lattitudeDifference = this.lat2 - this.lat1;
              this.dLat = toRad(this.lattitudeDifference);
              this.longitudeDifference = this.lon2 - this.lon1;
              this.dLon = toRad(this.longitudeDifference);
             
             /*
              a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
              c = 2 ⋅ atan2( √a, √(1−a) )
              d = R ⋅ c
              where	φ is latitude, λ is longitude, R is earth’s radius
              Assumes that the earth radius is 6,371 KM
              */

              this.a = Math.sin(this.dLat / 2) * Math.sin(this.dLat / 2) +
                Math.cos(toRad(this.lat1)) * Math.cos(toRad(this.lat2)) *
                Math.sin(this.dLon / 2) * Math.sin(this.dLon / 2);
              this.c = 2 * Math.atan2(Math.sqrt(this.a), Math.sqrt(1 - this.a));
              this.distance = this.radiusOfEarth * this.c;
              this.distance = parseFloat(this.distance).toFixed(2);
              this.distanceInMiles = 0.62137119 * this.distance
              this.distanceInMiles = parseFloat(this.distanceInMiles).toFixed(2);
              // console.log(this.distance) 

              //document.getElementById('distance').innerHTML = distance + " km, or " + distanceInMiles + "mi.";
              // getTime1(this.lat1, this.lon1);
              // getTime2(this.lat2, this.lon2);

          });
				},
    },
    mounted (){
        
          var el = document.getElementById('app')
          el.classList.remove('grey-color')
          el.classList.add('white-color')

    this.loader = true
    this.$store.dispatch('getClientSaloon', {
         saloon_id: this.$route.params.SaloonId
    })
    .then(response => { 
      this.loader = false
      if(response.data.status!=undefined && response.data.status=='Token is Expired')
      {
           this.$router.push({ name: 'login', params: { } })
      }else{

          console.log(this.saloon = response.data.clientSaloon)
          this.image = response.data.clientSaloon.client_profile
          this.clientsaloonservices = response.data.clientsaloonservices
          this.clientsaloonworkinghours = response.data.clientsaloonworkinghours
          this.clientsaloonserviceprice = response.data.clientsaloonserviceprice
          this.geolocate();
         //  console.log(this.saloon.latitude)

        this.place = this.saloon.address 
        if (this.place) {
						const marker = { 
                lat: Number(this.saloon.latitude),
								lng: Number(this.saloon.longitude),
              }; 
						this.markers.push({ position: marker });
						this.places.push(this.place);
						this.center = marker;
						this.place = null  
				  }  
      }
    })
    .catch(error=>{
      this.loader = false
      error.response
      })

      this.loader = true
      this.$store.dispatch('getfavrotites', {
      user_id: this.$store.getters.loggedInUserId,
      saloon_id: this.$route.params.SaloonId
        })
    .then(response => {
      this.loader = false
      this.fasHeart = true
      this.farHeart = false
      if(response.data.status!=undefined && response.data.status=='Token is Expired')
      {
           this.$router.push({ name: 'login', params: { } })
      }
    })
    .catch(error=>{
      this.loader = false
      this.fasHeart = false
      this.farHeart = true
      error.response
      });

    
  },
    
    destroyed () {
      var el = document.getElementById('app')
      el.classList.remove('white-color')
      el.classList.add('grey-color')
    }  
  }
</script>

<style scoped="">
.main-container{
    background-image: url('../../../../assets/header-bg.png');
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

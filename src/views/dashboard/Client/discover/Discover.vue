<template>
 <div class="main">
   <Loader v-show="loader" />
     <v-container fluid style="background-color:#FCD675;" >
           <v-layout  row wrap >
          
             <v-flex xs11 md11  sm11 >
                <span class="discover-text">Discover</span> <br />
                <span class="find-text">Find the perfect barber</span>
             </v-flex>
             
          </v-layout>
          <v-form ref="form" v-model="valid" lazy-validation>
              <v-layout  row wrap text-xs-center justify-center class="pt-3">

                    <v-flex xs12 sm8 md8>
                        <v-text-field
                          v-model="search"
                          prepend-inner-icon="search"
                          placeholder = "Any Salon . Even Field street, London"
                          solo
                          required>
                        </v-text-field>
                    </v-flex>

              </v-layout>
            </v-form>
         </v-container >

        <v-container fluid class="pa-0">
          <v-layout row wrap >
            <v-flex xs12 md12 sm12>
              <v-responsive>
                  <v-img
                    :src="require('../../../../assets/perf-brbr-bg.png')"
                    contain
                  ></v-img>
              </v-responsive>
            </v-flex>
          </v-layout>

          <v-layout row wrap text-xs-center just justify-center>
               <v-flex xs3 md3 sm3>
                   <v-responsive>
                     <v-img
                       :src="require('../../../../assets/pic4.png')"
                       contain
                     ></v-img>
                   </v-responsive>
               </v-flex>
               <v-flex xs3 md3 sm3>
                 <v-responsive>
                   <v-img
                     :src="require('../../../../assets/pic1.png')"
                     contain
                   ></v-img>
                 </v-responsive>
               </v-flex>
               <v-flex xs3 md3 sm3>
                 <v-responsive>
                   <v-img
                     :src="require('../../../../assets/pic2.png')"
                     contain
                   ></v-img>
                 </v-responsive>
               </v-flex>
               <v-flex xs3 md3 sm3>
                 <v-responsive>
                   <v-img
                     :src="require('../../../../assets/pic3.png')"
                     contain
                   ></v-img>
                 </v-responsive>
               </v-flex>
          </v-layout>
        </v-container>

      <v-container>
          <v-layout row wrap>
            <v-flex xs12 md12 sm12>

              <v-card v-for="(saloon,index) in filterMembers" :key="index"  class="mt-2" :to="{ name: 'DiscoverSaloonDetail', params: {SaloonId:saloon.id} }">
                <v-card-text>
                <v-layout row wrap>
                  <v-flex  xs8 md10 sm10 >
                    <div class="title">
                      {{ saloon.shop_name }}
                    </div>
                  </v-flex>

                  <v-flex  xs2 md2 sm2 >
                      <v-btn class="mt-2 b-register" flat color="#00A807" outline small round>Open</v-btn>
                  </v-flex>

                </v-layout>
                <v-layout row wrap >
                  <v-flex  xs8 md10 sm10 >
                      <p class="text"> {{ saloon.address }}  </p>
                    </v-flex>

                  <v-flex  xs2 md2 sm2 >
                     <!-- <p class="km pt-2"> 1.2KM </p> -->
                  </v-flex>
                </v-layout>
                </v-card-text>
                </v-card>
                
            </v-flex>
          </v-layout>
         </v-container>
         <v-snackbar
            style="height: 63px important;"
            v-model="snackbar"
            :color="color"
            :multi-line="mode === 'multi-line'"
            :timeout="timeout"
            :vertical="mode === 'vertical'"
          >
            <p class="text justify-center text-xs-center mt-3" > To have the the best experience, <b> Location </b> need to switched on </p>
          
          <font-awesome-icon large size="1x" color="#000" @click="snackbar = false" :icon="['fas','times']"/>
          </v-snackbar>
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
          lat:'',
          long:'',
          errorMsg:'',
          search:"",
          valid:true,
          saloons:[],
          color:'#FCD675',
          snackbar: true,
          y: 'top',
          x: null,
          mode: '',
          timeout: 10000,
          text: 'Hello, I\'m a snackbar'
      }
    },
    
  //     computed: {
  //      filterMembers: function() {
  //         let filtered = this.saloons;
  //         if (this.search) {
  //           filtered = this.saloons.filter(
  //             m => m.shop_name.toLowerCase().indexOf(this.search) > -1 
  //           )
  //         }
  //         return filtered;
  //       }
  // },

  computed: {
   filterMembers () {
     const { shop_name, address } = this
     return this.saloons
       .filter(m => m.shop_name.indexOf(this.search) > -1)
      }
 }, 
    methods: {
      geolocate: function() {

              navigator.geolocation.getCurrentPosition(position => {
              this.currentLat = position.coords.latitude
              this.currentLong = position.coords.longitude
              // console.log(this.currentLat+' '+this.currentLong)

          });
				},
        Backroute(){
        this.$router.go(-1);
         },
        findBarber (){
            this.$router.push({ name: 'Discoverfind', params: { }})
        },

        showlocation(position){

          this.lat = position.coords.latitude
          this.long =  position.coords.longitude

        }
    },
    mounted(){
      this.geolocate();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showlocation)
      } else {
        this.errorMsg = "Geolocation is not supported by this browser."
      }

      this.loader = true 
      this.$store.dispatch('getSaloons',{
          user_id: '0',
          latitude: this.lat,
          longitude: this.long
      })
      .then(response => {
        this.loader = false
        var data = response.data.user
        this.saloons = data
      })
      .catch(error=>{
        this.loader = false
        error.response
      })
    }
  }
</script>


<style scoped="">
.upper-div{
  background-color:#FCD675;
}
.btn-title{
  font-family: Montserrat;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 11px;
text-align: center;
}
.title{
font-family: Montserrat !important;
font-style: normal !important;
font-weight: bolder !important;
line-height: normal !important;
font-size: 14px !important;

color: #484848 !important;
}
.km{
font-family: Montserrat;
font-style: normal;
font-weight: 500;
line-height: normal;
font-size: 12px;
text-align: justify;
color: #484848;
padding-left: 35px;
}
.text{
  font-family: Montserrat;
font-style: normal;
font-weight: 300;
line-height: normal;
font-size: 13px;
color: #484848;
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
.find-text{
font-family: Montserrat !important;
font-style: normal !important;
font-weight: 300 !important;
line-height: normal !important;
font-size: 14px !important;
text-align: center !important;
color: #000000 !important;
}
.icon{
font-family: Montserrat;
font-style: normal;
font-weight: 300;
line-height: normal;
font-size: 14px;
text-align: center;
color: #000000;
}
.search-bar{
  border:2px solid white ;
  background-color:white;
  height:47px;
}
.footer-title{
  font-family: Montserrat;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 11px;
text-align: center;
color: #FFFFFF;
}

 .b-register{
 font-family: Montserrat !important;
 font-style: normal !important;
 font-weight: 500 !important;
 line-height: normal !important;
 font-size: 12px !important;
 }
</style>

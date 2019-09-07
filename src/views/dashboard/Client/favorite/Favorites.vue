<template>
 <div class="main">
  <Loader v-show="loader" />
     <v-container fluid style="background-color:#FCD675;" >

            <v-layout row wrap >
              <v-flex xs11 md11  sm11 >
                  <span class="discover-text">Discover</span> <br />
                  <span class="find-text">Find the perfect barber</span>
              </v-flex>
              
              <v-flex  xs1 md1 sm1>
                  <!-- <router-link :to="{ name: 'Discoverlookingfor', params: {} }"><font-awesome-icon  color="#484848" size="2x" :icon="['fas','sliders-h']"/></router-link> -->
              </v-flex>
            </v-layout> 

          <v-layout  row wrap text-xs-center just justify-center class="pt-3">
                <v-flex xs12 sm8 md8>
                <v-text-field
                  v-model="search"
                  prepend-inner-icon="search"
                  placeholder="Any Salon . Even Field street, London"
                  solo
                 >
                </v-text-field>
                </v-flex>
          </v-layout>
         </v-container >

        <v-container fluid class="pa-0">
          <v-layout row wrap >
            <v-flex xs12 md12 sm12>
              <div id="navi">
                <v-responsive>
                    <v-img
                      :src="require('../../../../assets/perf-brbr-bg.png')"
                      contain
                    ></v-img>
                </v-responsive>
              </div>
              <!-- <div id="infoi">
                <span ><font-awesome-icon color="#FF0000" size="2x"  :icon="['fas','heart']"/></span>
              </div> -->

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

              <v-card v-for="(saloon,index) in filterMembers" :key="index" :to="{ name: 'DiscoverSaloonDetail', params: {SaloonId:saloon.saloon_id} }"  class="mt-2">
                <v-card-text>
                <v-layout row wrap>
                  <v-flex  xs8 md10 sm10 >
                    <div class="title">
                      {{ saloon.shop_name }}
                    </div>
                  </v-flex>

                  <v-flex  xs2 md2 sm2>
                      <v-btn class="b-register" flat color="#00A807" outline small round>Open</v-btn>
                  </v-flex>

                </v-layout>
                <v-layout row wrap >
                  <v-flex  xs8 md10 sm10 >
                        <p class="text"> {{ saloon.address }}  </p>
                    </v-flex>

                  <v-flex  xs2 md2 sm2 >
                      <!-- <p class="km pt-2">1.2km</p> -->
                  </v-flex>
                </v-layout>
                </v-card-text>
                </v-card>
                
            </v-flex>
          </v-layout>
         </v-container>


 </div>
</template>
<script>
 import Loader from '../../../../components/Loader'
  export default {
  components: {	Loader },
    data () {
      return {
        loader:false,
        fvrtSaloons: [],
        favoriteSaloon:false,
        search:"",
      }
    },
    mounted (){
              this.loader = true 
              this.$store.dispatch('showFavourites', {
               user_id: this.$store.getters.loggedInUserId
              }) 
            .then(response => {
              this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                     this.fvrtSaloons = response.data.Favourites 
                       } 
            })
            .catch(error=>{
              this.loader = false
              error.response
            })
    },
    computed: { 
       filterMembers: function() {
          let filtered = this.fvrtSaloons;
          if (this.search) {
            filtered = this.fvrtSaloons.filter(
              m => m.shop_name.toLowerCase().indexOf(this.search) > -1 
            )
          }
           return filtered;
        }
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
#infoi {
  width: 100%;
  position: absolute;
  top: 190px;
  right:20px;
  text-align:right;
}
#infoi {
  z-index: 10;
}
</style>

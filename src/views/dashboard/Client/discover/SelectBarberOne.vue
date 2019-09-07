<template>
	<div class="main">
    <Loader v-show="loader" />
		<v-container fluid style="background-color:#FCD675;">
			<v-layout row wrap>
				<v-flex xs2 md2 sm2>
					<a @click='Backroute()' class="none" style="text-decoration:none;">
					<font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/>
					</a>
				</v-flex>
				<v-flex xs6 md2 sm2>
					<span class="title">
						Select Barber
					</span>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid style="background-color:#ffffff">
			<template v-if="barbers.length>0">
				<div v-for="(barber,index) in barbers" :key="index">
					<!-- <router-link style="text-decoration:none;" :to="{ name: 'DiscoverSelectPackage', params: {barberId:barber.id} }">  -->
					<v-layout row wrap justify-center mt-2>
						<v-flex xs12 md8 sm8>
							<v-card class="elevation-0">
								<v-layout row wrap justify-center>
									<v-flex xs3 md2 sm2>
										<v-responsive>
											<v-img :src="barber.barber_pic" contain style=" height:100px !important; border-radius:50%;">
											</v-img>
										</v-responsive>
									</v-flex>

									<v-flex xs7 md8 sm2 align-center class="pa-3 mt-3">
										<p class="barber-name"> 
											{{ barber.name }}
										</p>
									</v-flex>

									<v-flex xs2 md2 sm3 class="pa-3">
                    <v-checkbox v-on:change="changeOption"
                        :value="barber.id" v-model="checkedBarber" 
                        color="#484848" hide-details class="my-0 py-0 mt-3" 
                        style="border-radius:50% !important"
                        height="45px !important;">
										</v-checkbox>
                  </v-flex>
								</v-layout>
							</v-card>
						</v-flex>
					</v-layout>
				</div>
			</template>
      
			<!-- </router-link> -->
		</v-container>
		<v-container fluid style="background-color:#ffffff">
			<v-layout row wrap justify-center mt-2>
        <p class="warningText"> * Select the barber before going to next page</p>
				<v-flex xs12 md8 sm8>
					<v-card class="elevation-0">
						<v-layout row wrap justify-center>
							<v-flex xs12 md8 sm8>
								<v-btn :disabled="nxtbtn" :to="{ name: 'DiscoverSelectPackage', params:{ serviceId:serviceId , barberId:checkedBarber , servicePrice:servicePrice } }" class="login-btn" block depressed>
									Next
								</v-btn>
							</v-flex>
						</v-layout>
					</v-card>
				</v-flex>
			</v-layout>
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
            barberId:'',
            loader: false,
            checkedBarber:'',
            nxtbtn: false,
            outline1:true,
            circle1:false,
            outline2:true,
            circle2:false,
            outline3:true,
            circle3:false,
            outline4:true,
            circle4:false,
            servicePrice:[],
            ServiceId:[],
            name:[],
            barbers:[],
        }
      },
      methods:{

      changeOption(e){
       
       if(e==true)
        {   
          
            this.nxtbtn = false    
          }
        else if(e==false){
            this.nxtbtn = true 
        }
      },
        outlineOption1(){

          this.outline1 = false
          this.outline2 = true
          this.outline3 = true
          this.outline4 = true

          this.circle1 = true
          this.circle2 = false
          this.circle3 = false
          this.circle4 = false

        },
        circleOption1(){
          this.outline1 = true
          this.outline2 = true
          this.outline3 = true
          this.outline4 = true

          this.circle1 = false
          this.circle2 = false
          this.circle3 = false
          this.circle4 = false

        },

        outlineOption2(){

          this.outline1 = true
          this.outline2 = false
          this.outline3 = true
          this.outline4 = true

          this.circle1 = false
          this.circle2 = true
          this.circle3 = false
          this.circle4 = false


        },
        circleOption2(){
          this.outline1 = true
          this.outline2 = true
          this.outline3 = true
          this.outline4 = true

          this.circle1 = false
          this.circle2 = false
          this.circle3 = false
          this.circle4 = false
        },

        outlineOption3(){

          this.outline1 = true
          this.outline2 = true
          this.outline3 = false
          this.outline4 = true

          this.circle1 = false
          this.circle2 = false
          this.circle3 = true
          this.circle4 = false
            
          },
        circleOption3(){
          this.outline1 = true
          this.outline2 = true
          this.outline3 = true
          this.outline4 = true


          this.circle1 = false
          this.circle2 = false
          this.circle3 = false
          this.circle4 = false
        },
        outlineOption4(){


          this.outline1 = true
          this.outline2 = true
          this.outline3 = true
          this.outline4 = false

          this.circle1 = false
          this.circle2 = false
          this.circle3 = false
          this.circle4 = true


        },
        circleOption4(){
          this.outline1 = true
          this.outline2 = true
          this.outline3 = true
          this.outline4 = true

          this.circle1 = false
          this.circle2 = false
          this.circle3 = false
          this.circle4 = false
        },
      Backroute(){
        this.$router.go(-1);
        },
      },
     mounted (){
          
          var el = document.getElementById('app')
          el.classList.remove('grey-color')
          el.classList.add('white-color')
    
    this.loader = true
    this.$store.dispatch('getServiceBarbers', {
         serviceId: this.$route.params.serviceId
    })
    .then(response => { 
      this.loader = false 
      if(response.data.status!=undefined && response.data.status=='Token is Expired')
      {
           this.$router.push({ name: 'login', params: { } })
      }
      else{
          
          this.barbers = response.data.barbers
         
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
      },
    created() {
         this.serviceId = this.$route.params.serviceId ;
         this.servicePrice = this.$route.params.servicePrice ;
      }
    }
  </script>

<style scoped="">
.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
.upper-div{
      background-color:#FCD675;
}
.back-link{
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 18px;
      text-align: justify;
      color: black;
}
.title{
      font-family: Montserrat !important;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      font-size: 14px;
      text-align: justify;
      color: #484848;
}
.barber-name{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    text-align: justify;
    color: #000000;
}
.warningText{
     font-family: Montserrat;
     font-style: normal;
     font-weight:bold !important;
     line-height: normal;
     font-size: 14px;
     color: red !important;
}
.login-btn{
     font-family: Montserrat;
     font-style: normal;
     font-weight:bold !important;
     line-height: normal;
     font-size: 14px;
     height: 48px;
     background: #FCD675 !important;
     color: #484848;
     text-transform: capitalize;
   }
</style>

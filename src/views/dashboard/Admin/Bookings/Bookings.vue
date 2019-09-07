<template>
	<div class="main">
		<Loader v-show="loader" />
		<v-container fluid style="background-color:#FCD675;">
			<v-layout row wrap text-xs-center>
				<v-flex xs6 md2 sm2>
					<!--<span class="find-text">All Staffs</span>-->
					<v-select v-if="selectbarber" v-model="barberId" :items="items" item-text="name" item-value="id" label="All Staffs" persistent-hint return-object single-line color="#FCD675" class="py-0 my-0 find-text"
					v-on:change="changeOption">
					</v-select>
				</v-flex>
				<v-flex xs2 offset-xs4 md2 offset-md8 sm2 offset-sm8>
					<v-switch class="my-0 py-0" color="black" hide-details v-on:change="switchOption" v-model="switchMe">
					</v-switch>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid class="ma-0" v-if="firstContainer">
			<v-container fluid class="date-container ma-0 pa-0">
				<v-layout row wrap text-xs-center justify-center>
					<v-flex xs12 md6 sm6>
						<v-menu v-model="menu1" :close-on-content-click="false" full-width max-width="290">
							<v-select slot="activator" :label="computedDateFormattedMomentjs" class="px-5 py-1 calender-field" readonly outline>
							</v-select>
							<v-date-picker color="#FCD675" v-model="date" @change="getdate">
							</v-date-picker>
						</v-menu>
					</v-flex>
				</v-layout>
				<v-layout row wrap text-xs-center justify-center>
					<v-flex xs2 md2 sm2>
						<v-btn class="day-btn" flat fab color="#C4C4C4">
							<span class="first">
								{{ first }}
							</span>
						</v-btn>
					</v-flex>
					<v-flex xs2 md2 sm2>
						<v-btn class="day-btn-2" flat fab color="#000000">
							<span class="second">
								{{ second }}
							</span>
						</v-btn>
					</v-flex>
					<v-flex xs2 md2 sm2>
						<v-btn class="day-btn-2" outline fab color="#FCD675">
							<span class="third">
								{{ third }}
							</span>
						</v-btn>
					</v-flex>
					<v-flex xs2 md2 sm2>
						<v-btn class="day-btn-2" flat fab color="#000000">
							<span class="fourth">
								{{ fourth }}
							</span>
						</v-btn>
					</v-flex>
					<v-flex xs2 md2 sm2>
						<v-btn class="day-btn" flat fab color="#C4C4C4">
							<span class="fifth">
								{{ fifth }}
							</span>
						</v-btn>
					</v-flex>
				</v-layout>
			</v-container>
			<template v-if="CalenderBookings.length > 0">
				<div v-for="(calenderBooking,index) in CalenderBookings" :key="index">
					<v-layout row wrap justify-center>
						<v-flex xs12 md10 sm10>
							<v-layout row wrap class="pb-2 pt-2">
								<v-flex xs5 md2 sm2>
									<span class="time">
										{{ calenderBooking.time }}
									</span>
									<p class="mins">
									</p>
								</v-flex>
								<v-flex xs7 md2 sm2>
									<span class="time">
										{{ calenderBooking.client_name }}
									</span>
									<p class="mins">
										{{ calenderBooking.service_name }}
										<span style="font-weight:bold !important;">
											&#8364;{{calenderBooking.payment}}
										</span>
										| {{ calenderBooking.barber_name }}
									</p>
								</v-flex>
							</v-layout>
						</v-flex>
					</v-layout>
				</div>
			</template>
			<p v-else class="title mt-5">
				No Booking found
			</p>
		</v-container>
		<v-container fluid class="ma-0 mt-3" v-if="SelectedBarberContainer">
			<!-- <v-container fluid class="date-container ma-0 pa-0">
				<v-layout row wrap text-xs-center justify-center>
				<v-flex xs12 md6 sm6>
				<v-menu
				v-model="menu1"
				:close-on-content-click="false"
				full-width
				max-width="290">
				<v-select
				slot="activator"
				:label="computedDateFormattedMomentjs"
				class="px-5 py-1 calender-field"
				readonly
				outline
				></v-select>
				<v-date-picker
				color="#FCD675"
				v-model="date"
				@change="getdate"
				:min = "currentDate"
				></v-date-picker>
				</v-menu>
				</v-flex>
				</v-layout>
				<v-layout row wrap text-xs-center justify-center>
				<v-flex xs2 md2 sm2> 
				<v-btn class="day-btn" flat fab color="#C4C4C4">
				<span class="first"> {{ first }} </span>
				</v-btn>
				</v-flex>
				<v-flex xs2 md2 sm2>
				<v-btn class="day-btn-2" flat fab  color="#000000">
				<span class="second">{{ second }} </span>
				</v-btn>
				</v-flex>
				<v-flex xs2 md2 sm2>
				<v-btn class="day-btn-2" outline fab  color="#FCD675">
				<span class="third">{{ third }} </span>
				</v-btn>
				</v-flex>
				<v-flex xs2 md2 sm2>
				<v-btn class="day-btn-2" flat fab  color="#000000">
				<span class="fourth">{{ fourth }} </span>
				</v-btn>
				</v-flex>
				<v-flex xs2 md2 sm2>
				<v-btn class="day-btn" flat fab  color="#C4C4C4">
				<span class="fifth">{{ fifth }}</span>
				</v-btn>
				</v-flex>
				</v-layout>
			</v-container> -->
			<template v-if="selectedBarberBooking.length > 0">
				<div v-for="(selectedBarberBookings,index) in selectedBarberBooking" :key="index">
					<v-layout row wrap justify-center>
						<v-flex xs12 md10 sm10>
							<v-layout row wrap class="pb-2 pt-2">
								<v-flex xs5 md2 sm2>
									<span class="time">
										{{ selectedBarberBookings.time }}
									</span>
									<p class="mins">
									</p>
								</v-flex>
								<v-flex xs7 md2 sm2>
									<span class="time">
										{{ selectedBarberBookings.client_name }}
									</span>
									<p class="mins">
										{{ selectedBarberBookings.service_name }}
										<span style="font-weight:bold !important;">
											&#8364;{{selectedBarberBookings.payment}}
										</span>
										| {{ selectedBarberBookings.barber_name }}
									</p>
								</v-flex>
							</v-layout>
						</v-flex>
					</v-layout>
				</div>
			</template>
			<p v-else class="title mt-5">
				No Booking found
			</p>
		</v-container>
		<v-container grid-list-xs,sm,md,lg,xl fluid v-if="secondContainer">
			<v-layout row wrap>
				<v-flex xs12 md10 sm10>
					<v-layout row wrap justify-end>
						<v-flex xs5 md3 sm3 d-flex>
							<v-select :items="items2" label="All" solo background-color="#FCD675" v-on:change="OnSelectOptionChange">
							</v-select>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
			<div>
				<template v-if="showBookings.length > 0">
					<div v-for="(showBooking,ind) in showBookings" :key="ind">
						<router-link v-if="completedBooking" style="text-decoration:none" :to="{ name: 'AdminClient', params: { completed:'complete' , clientId :showBooking.client_id , date:showBooking.date , time:showBooking.time , category:showBooking.service_name , barber:showBooking.barber_name , price:showBooking.payment , barberId:showBooking.barber_id } }">
							<v-layout row wrap justify-center>
								<v-flex xs2 md2 sm2>
									<span class="text">
										{{ showBooking.date }}
									</span>
								</v-flex>
								<v-flex xs10 md6 sm6 class="onepm">
									<v-layout row wrap class="pt-2 pl-2">
										<v-flex xs9>
											<span class="title">
												{{ showBooking.client_name }}
											</span>
											<p class="date">
												{{ showBooking.service_name }} by {{ showBooking.barber_name }}
											</p>
										</v-flex>
										<v-flex xs3>
											<span class="title">
												{{ showBooking.time }}
											</span>
											<p class="date">
												Completed
											</p>
										</v-flex>
									</v-layout>
								</v-flex>
							</v-layout>
						</router-link>
					</div>
				</template>
			</div>
			<div>
				<template v-if="showBookingsOne.length > 0">
					<div v-for="(showBookingOne,inde) in showBookingsOne" :key="inde">
						<router-link v-if="pendingBooking" style="text-decoration:none" :to="{ name: 'AdminClient', params: { completed:'pending' , clientId :showBookingOne.client_id , date:showBookingOne.date , time:showBookingOne.time , category:showBookingOne.service_name , barber:showBookingOne.barber_name , price:showBookingOne.payment , barberId:showBookingOne.barber_id } }">
							<v-layout row wrap justify-center mt-2>
								<v-flex xs2 md2 sm2>
									<span class="text">
										{{ showBookingOne.date }}
									</span>
									<p class="text pl-2">
									</p>
								</v-flex>
								<v-flex xs10 md6 sm6 class="twopm">
									<v-layout row wrap class="pt-2 pl-2">
										<v-flex xs9>
											<span class="title">
												{{ showBookingOne.client_name }}
											</span>
											<p class="date">
												{{ showBookingOne.service_name }} by {{ showBookingOne.barber_name }}
											</p>
										</v-flex>
										<v-flex xs3>
											<span class="title">
												{{ showBookingOne.time }}
											</span>
											<p class="date">
												Pending
											</p>
										</v-flex>
									</v-layout>
								</v-flex>
							</v-layout>
						</router-link>
					</div>
				</template>
			</div>
			<template v-if="showBookings2.length > 0">
				<div v-for="(showBooking2,index) in showBookings2" :key="index">
					<router-link v-if="canceledBooking" style="text-decoration:none" :to="{ name: 'AdminClient', params: { completed:'cancel' , clientId :showBooking2.client_id , date:showBooking2.date , time:showBooking2.time , category:showBooking2.service_name , barber:showBooking2.barber_name , price:showBooking2.payment , barberId:showBooking2.barber_id } }">
						<v-layout row wrap justify-center mt-2>
							<v-flex xs2 md2 sm2>
								<span class="text">
									{{ showBooking2.date }}
								</span>
								<p class="text pl-2">
								</p>
							</v-flex>
							<v-flex xs10 md6 sm6 class="threepm">
								<v-layout row wrap class="pt-2 pl-2">
									<v-flex xs9>
										<span class="title">
											{{ showBooking2.client_name }}
										</span>
										<p class="date">
											{{ showBooking2.service_name }} by {{ showBooking2.barber_name }}
										</p>
									</v-flex>
									<v-flex xs3>
										<span class="title">
											{{ showBooking2.time }}
										</span>
										<p class="date">
											Canceled
										</p>
									</v-flex>
								</v-layout>
							</v-flex>
						</v-layout>
					</router-link>
				</div>
			</template>
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
import moment from 'moment'
    export default {
    components: { Loader },
      data () {
        return {
					color:'#FCD675',
          snackbar: true,
          y: 'top', 
          x: null,
          mode: '',
          timeout: 10000,
				
          selectbarber: true,
          barberId:'', 
          loader: false,
          slot: false,
          time: '',
          first:'',
          second:'',
          third:'',
          fourth:'',
					fifth:'', 
					price:'',
          date: new Date().toISOString().substr(0, 10),
          menu1: false,
          menu2: false,
          currentDate: moment().format('YYYY-MM-DD'),
          getBarbers:[],
          CalenderBookings:[],
          switchMe:true,
          firstContainer: true,
          SelectedBarberContainer: false,
          secondContainer: false,
          select:'',  
          amanda:true,
          angelina:true,
          canceledBooking:true,
          completedBooking:true,
          pendingBooking:true,
          mia:true,
          showBookings:[],
          showBookingsOne:[],
          showBookings2:[],
          items: [],
          selectedBarberBooking: [],
          items2: ['All', 'Completed', 'Pending']
        }
      },
      computed: {
         computedDateFormattedMomentjs () {
         //  return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
         return this.date ? moment(this.date).format('YYYY MMMM, DD') : ''
      },
         computedDateFormattedDatefns () {
         //  return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : ''
         return this.date ? moment(this.date).format('MMMM') : ''
      }
    },
    beforeMount(){
      this.first =  moment().subtract(2, 'days').format('D')
      this.second = moment().subtract(1, 'days').format('D')
      this.third = moment().format('D')
      this.fourth = moment().add(1, 'days').format('D')
      this.fifth =  moment().add(2, 'days').format('D')
    },
      methods: {
         
      OnSelectOptionChange(val){

        if(val=='Completed')
        {
          this.canceledBooking =false
          this.completedBooking = true
          this.pendingBooking = false
        }else if(val=='Pending')
        {
          this.canceledBooking =false
          this.completedBooking = false
          this.pendingBooking = true
        }else if(val=='Cancelled')
        {
          this.canceledBooking =true
          this.completedBooking = false
          this.pendingBooking = false
        }else{
          this.canceledBooking =true
          this.completedBooking = true
          this.pendingBooking = true
        }
      }, 
         getdate(){
              this.menu1 = false
              this.$store.dispatch('showCalenderBookingsAdmin', {
              user_id: this.$store.getters.loggedInUserId,
              date:this.date
               }) 
            .then(response => {
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                      this.CalenderBookings = response.data.CalenderBookings 
                  } 
            }) .catch(error=>{
							error.response
							this.CalenderBookings = []
            }) },
            changeOption(a) {
             this.loader = true
             this.firstContainer = false
             this.SelectedBarberContainer = true,
             this.$store.dispatch('selectedBarber', {
              user_id: this.$store.getters.loggedInUserId,
              id:a.id, 
              date:this.date
               })   
            .then(response => {
							this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                      this.selectedBarberBooking = response.data.CalenderBookings 
                      
                  } 
            }) 
            .catch(error=>{
              this.loader = false
							error.response
							this.selectedBarberBooking = []
            }) 
          },
        switchOption (a) {

          if(a==true)
          {
           this.selectbarber = true 
           this.firstContainer = true
           this.secondContainer = false
          }
          if(a==false)
          {
            this.firstContainer = false
            this.secondContainer = true
            this.selectbarber = false

          }

        }
      },
      mounted (){
					this.loader = true
				  this.$store.dispatch('statusMasterInfo', {
					user_id: this.$store.getters.loggedInUserId
					}) 
            .then(response => {
							this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {      
                   this.$router.push({ name: 'login', params: { } })
              }else{  
                      this.getinfo = response.data.getinfo
                      if(this.getinfo.name == '' || this.getinfo.shop_name == '' ){
												 
												 this.$router.push({ name: 'SettingsSaloonInformation', params: { } })
											
											}
											// else{
											// 	console.log("no")
											// }
                  } 
            })
            .catch(error=>{
							this.loader = false
							error.response
					   })
          
          this.$store.dispatch('showCalenderBookingsAdmin', {
					user_id: this.$store.getters.loggedInUserId,
					date: this.date
					}) 
            .then(response => {
							//this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {      
                   this.$router.push({ name: 'login', params: { } })
              }else{  
                      this.CalenderBookings = response.data.CalenderBookings
             
                  } 
            })
            .catch(error=>{
							error.response
							this.CalenderBookings = []
            })


            this.$store.dispatch('showAllBooking', {
            user_id: this.$store.getters.loggedInUserId,
            }) 
            .then(response => {
							//this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                      this.showBookings = response.data.completedBooking 
                      this.showBookingsOne = response.data.pendingBooking 
											this.showBookings2 = response.data.canceledBooking  
                  } 
            })
            .catch(error=>{
							error.response
							this.CalenderBookings = []
            })
        
         this.$store.dispatch('getAllBarbers', {
            user_id: this.$store.getters.loggedInUserId,
            }) 
            .then(response => {
							//this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                      this.items = response.data.Barbers 
                  } 
            })
            .catch(error=>{
							error.response
							this.CalenderBookings = []
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

.name{
  font-weight: bold !important;
}
.find-text{
        font-family: Montserrat !important;
        font-style: normal !important;
        font-weight: bold !important;
        line-height: normal !important;
        font-size: 16px !important;

        color: #484848 !important;
      }
.fb{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
      text-align: center !important;
      color: #484848 !important;
  }
.today{
font-family: Montserrat;
font-style: normal;
font-weight: bold;
line-height: normal;
font-size: 10px;
text-align: justify;
color: #484848;
  }
.date{
font-family: Montserrat;
font-style: normal;
font-weight: 300;
line-height: normal;
font-size: 10px;
text-align: justify;
color: #484848;
}
.time{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  text-align: justify;
  color: #484848;
}
.mins{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 10px;
  text-align: justify;
  color: #484848;
}
.day{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 12px;
  text-align: justify;
  color: #484848;
}
.date-container{

  background-color:#F1F1F1;
  color:#000;
}
.twopm{
  background-color:#B7E9FF;
  border-left:7px solid #00C2FF;
  border-top:1px solid #00C2FF;
  border-right:1px solid #00C2FF;
  border-bottom:1px solid #00C2FF;
}

.onepm{
  background-color:#AFECAA;
  border-left:7px solid #5BBC52;
  border-top:1px solid #5BBC52;
  border-right:1px solid #5BBC52;
  border-bottom:1px solid #5BBC52;
}
.threepm{
  background-color:#FFB0B0;
  border-left:7px solid #FF5555;
  border-top:1px solid #FF5555;
  border-right:1px solid #FF5555;
  border-bottom:1px solid #FF5555;
}
.text{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 12px !important;
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
  </style>

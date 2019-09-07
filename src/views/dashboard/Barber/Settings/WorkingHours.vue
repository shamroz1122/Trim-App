<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-xs-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'BarberSettings', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> Working Hours </span>
           </v-flex>
        </v-layout>
      </v-container>

       
      <v-container fluid class="ma-0" style="background-color:#fff;" grid-list-xs,sm,md,lg,xl>
          
          <v-layout justify-center row wrap>
             <v-flex xs2 md1 sm2>
               <v-checkbox
                color="#FCD675"
                class="my-0 py-0"
                v-on:change="statusOption($event,'monday')"
                v-model= "monStatus"
                ></v-checkbox>
             </v-flex>

             <v-flex xs9 md8 sm4>
                <span class="day"> Monday </span>
             </v-flex>

             <router-link :to="{ name: 'BarberSettingsPickTime', params: {userId:userID,day:'monday',hourId:mondayHourID} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>

          </v-layout>

          <v-divider></v-divider>
          
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox
               color="#FCD675"
               class="my-0 py-0"
               v-on:change="statusOption($event,'tuesday')"
               v-model= "tueStatus"
               ></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Tuesday </span>
             </v-flex>
           <router-link :to="{ name: 'BarberSettingsPickTime', params: {userId:userID,day:'tuesday',hourId:tuesdayHourID} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox
               color="#FCD675"
               class="my-0 py-0"
               v-on:change="statusOption($event,'wednesday')"
               v-model= "wedStatus"
               ></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Wednesday </span>
             </v-flex>
            <router-link :to="{ name: 'BarberSettingsPickTime', params: {userId:userID,day:'wednesday',hourId:wednesdayHourID} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox
               color="#FCD675"
               class="my-0 py-0"
               v-on:change="statusOption($event,'thursday')"
               v-model= "thuStatus"
               ></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Thursday </span>
             </v-flex>
            <router-link :to="{ name: 'BarberSettingsPickTime', params: {userId:userID,day:'thursday',hourId:thursdayHourID} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row justify-center wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox
               color="#FCD675"
               class="my-0 py-0"
               v-on:change="statusOption($event,'friday')"
               v-model= "friStatus"
               ></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Friday </span>
             </v-flex>
            <router-link :to="{ name: 'BarberSettingsPickTime', params: {userId:userID,day:'friday',hourId:fridayHourID} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox
               color="#FCD675"
               class="my-0 py-0"
               v-on:change="statusOption($event,'saturday')"
               v-model= "satStatus"
               ></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Saturday </span>
             </v-flex>
            <router-link :to="{ name: 'BarberSettingsPickTime', params: {userId:userID,day:'saturday',hourId:saturdayHourID} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox
               color="#FCD675"
               class="my-0 py-0"
               v-on:change="statusOption($event,'sunday')"
               v-model= "sunStatus"
               ></v-checkbox>
            </v-flex>

            <v-flex xs9 md8 sm4>
                <span class="day"> Sunday </span>
             </v-flex>

            <router-link :to="{ name: 'BarberSettingsPickTime', params: {userId:userID,day:'sunday',hourId:sundayHourID} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>

      </v-container>
</div>
</template>
<script>

  export default {
    data () {
      return {
        userID:'0',
        mondayHourID:'0',
        tuesdayHourID:'0',
        wednesdayHourID:'0',
        thursdayHourID:'0',
        fridayHourID:'0',
        saturdayHourID:'0',
        sundayHourID:'0',
        monStatus:false,
        tueStatus:false,
        wedStatus:false,
        thuStatus:false,
        friStatus:false,
        satStatus:false,
        sunStatus:false,
      }
    },
    methods:{
      statusOption(e,day){
            this.$store.dispatch('changeBarberWorkingHoursStatus',{
                user_id: this.$store.getters.loggedInUserId,
                status: e,
                day: day,
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

            this.$store.dispatch('getWorkingHours',{
                user_id: this.$store.getters.loggedInUserId
            })
            .then(response => {

              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{

                   this.userID = this.$store.getters.loggedInUserId
                   var data = response.data.workingHours
                    Object.keys(data).forEach((key)=> {
                        if(data[key].day=='monday')
                        {
                          if(data[key].status=='true')
                          {
                            // console.log(data[key].status)
                            this.monStatus = true
                            this.mondayHourID = data[key].id
                          }
                        }
                        if(data[key].day=='tuesday')
                        {
                          if(data[key].status=='true')
                          {
                          //  console.log(data[key].status)
                            this.tueStatus = true
                            this.tuesdayHourID = data[key].id
                          }
                        }
                        if(data[key].day=='wednesday')
                        {
                          if(data[key].status=='true')
                          {
                          //  console.log(data[key].status)
                            this.wedStatus = true
                            this.wednesdayHourID = data[key].id
                          }
                        }
                        if(data[key].day=='thursday')
                        {
                          if(data[key].status=='true')
                          {
                          //  console.log(data[key].status)
                            this.thuStatus = true
                            this.thursdayHourID = data[key].id
                          }
                        }
                        if(data[key].day=='friday')
                        {
                          if(data[key].status=='true')
                          {
                          //  console.log(data[key].status)
                              this.friStatus = true
                              this.fridayHourID = data[key].id
                          }
                        }
                        if(data[key].day=='saturday')
                        {
                          if(data[key].status=='true')
                          {
                            this.satStatus = true
                            this.saturdayHourID = data[key].id
                          }
                        }
                        if(data[key].day=='sunday')
                        {
                          if(data[key].status=='true')
                          {
                            this.sunStatus = true
                            this.sundayHourID = data[key].id
                          }
                        }
                    });
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

</style>

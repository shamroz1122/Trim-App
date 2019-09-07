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
               <v-checkbox color="#FCD675"  class="my-0 py-0"></v-checkbox>
             </v-flex>
             <v-flex xs9 md8 sm4>
                <span class="day"> Monday </span>
             </v-flex>

          <router-link :to="{ name: 'SettingsPickTime', params: {} }">
             <v-flex xs1 md2 sm2>
                  <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
             </v-flex>
          </router-link>

          </v-layout>

          <v-divider></v-divider>
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox color="#FCD675"  class="my-0 py-0"></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Tuesday </span>
             </v-flex>
             <router-link :to="{ name: 'SettingsPickTime', params: {} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox color="#FCD675"  class="my-0 py-0"></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Wednesday </span>
             </v-flex>
             <router-link :to="{ name: 'SettingsPickTime', params: {} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox color="#FCD675"  class="my-0 py-0"></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Thursday </span>
             </v-flex>
             <router-link :to="{ name: 'SettingsPickTime', params: {} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row justify-center wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox color="#FCD675"  class="my-0 py-0"></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Friday </span>
             </v-flex>
             <router-link :to="{ name: 'SettingsPickTime', params: {} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox color="#FCD675"  class="my-0 py-0"></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Saturday </span>
             </v-flex>
             <router-link :to="{ name: 'SettingsPickTime', params: {} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox color="#FCD675" class="my-0 py-0"></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Sunday </span>
             </v-flex>
             <router-link :to="{ name: 'SettingsPickTime', params: {} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox color="#FCD675" class="my-0 py-0"></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Break/Lunch </span>
             </v-flex>
             <router-link :to="{ name: 'SettingsPickTime', params: {} }">
                <v-flex xs1 md2 sm2>
                     <font-awesome-icon size="1x" color="#000" :icon="['fas','edit']"/>
                </v-flex>
             </router-link>
          </v-layout>
          <v-divider></v-divider>
          <v-layout justify-center row wrap class="pt-3">
            <v-flex xs2 md1 sm2>
              <v-checkbox color="#FCD675" class="my-0 py-0"></v-checkbox>
            </v-flex>
            <v-flex xs9 md8 sm4>
                <span class="day"> Holiday/Sick </span>
             </v-flex>
             <router-link :to="{ name: 'SettingsPickTime', params: {} }">
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
      }
    },
    mounted (){

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

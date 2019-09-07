<template>
  <v-app class="grey-color">
     <v-content>
       <router-view></router-view>

           <ClientBottomNav v-if="ClientBottomNav" />
           <BarberBottomNav v-if="BarberBottomNav" />
           <AdminBottomNav v-if="AdminBottomNav" />

      </v-content>
    </v-app>
</template>
<script>
import ClientBottomNav from '../../components/ClientBottomNav'
import BarberBottomNav from '../../components/BarberBottomNav'
import AdminBottomNav from '../../components/AdminBottomNav'

  export default {
    components:{
      'ClientBottomNav': ClientBottomNav,
      'BarberBottomNav': BarberBottomNav,
      'AdminBottomNav' : AdminBottomNav
    },
    data () {
      return {
        ClientBottomNav:false,
        BarberBottomNav:false,
        AdminBottomNav:false
      }
    },
    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      },
      loggedInPUserType(){
        return this.$store.getters.loggedInPUserType
      },
      loggedInUserId(){
        return this.$store.getters.loggedInUserId
      }
    },


    beforeMount (){
    //  document.getElementById('app').classList.add('grey-color');

      var string = this.$router.currentRoute.path

      if(string.includes('client'))
      {
        this.BarberBottomNav = false
        this.AdminBottomNav = false
        this.ClientBottomNav = true
      }

      if(string.includes('barber'))
      {
        this.ClientBottomNav = false
        this.AdminBottomNav = false
        this.BarberBottomNav = true
      }

      if(string.includes('admin'))
      {
        this.ClientBottomNav = false
        this.BarberBottomNav = false
        this.AdminBottomNav = true
      }

    },
    mounted () {
      var el = document.getElementById('app')
      el.classList.remove('white-color')
      el.classList.add('grey-color')

    }
  }
</script>
<style media="screen" >
@import url('https://fonts.googleapis.com/css?family=Montserrat');

.white-color{
  background-color:#ffffff !important;
}
.grey-color{
  background-color:#E5E5E5 !important;
}
.black-color{
  background-color:#000000 !important;
}
</style>

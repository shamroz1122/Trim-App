<template >
  <v-card>
      <v-bottom-nav
         :active.sync="bottomNav"
         :value="true"
         app
         color="#474747"
       >
         <v-btn
           color="#FCD675"
           flat
           value="bookings"
           :to="{ name: 'booking', params: {} }"
         >
           <span class="btn-title pt-1" >Bookings</span>
           <font-awesome-icon size="2x"  :icon="['fas','book-open']"/>
         </v-btn>

         <v-btn
           color="#FCD675"
           flat
           value="Notifications"
           :to="{ name: 'AdminNotifications', params: {} }"
         >
           <span class="btn-title pt-1">Notifications</span>
           <font-awesome-icon size="2x"  :icon="['fas','bell']"/>
         </v-btn>

         <v-btn
           color="#FCD675"
           flat
           value="settings"
           :to="{ name: 'AdminSettings', params: {} }"
         >
           <span class="btn-title pt-1">Settings</span>
           <font-awesome-icon size="2x"  :icon="['fas','cog']"/>
         </v-btn>
       </v-bottom-nav>

   </v-card>
</template>

<script>
export default {
  data () {
    return {
        bottomNav:''
    }
}
}
</script>

<style scoped="">
.btn-title{
  font-family: Montserrat;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 11px;
text-align: center;
}
</style>

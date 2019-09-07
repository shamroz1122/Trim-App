<template >
  <v-card>
      <v-bottom-nav
         :active.sync="bottomNav"
         :value="true"
         app
         color="#474747"
         style="zoom:0.85;"
       >
         <v-btn
           color="#FCD675"
           flat
           value="discover"
           :to="{ name: 'discover', params: {} }"

         >
           <span class="btn-title pt-1">Discover</span>
          <font-awesome-icon size="2x"  :icon="['fas','globe']"/>
         </v-btn>

         <v-btn
           color="#FCD675"
           flat
           value="nearby"
           :to="{ name: 'near-by', params: {} }"
         >
           <span class="btn-title pt-1">Nearby</span>
            <font-awesome-icon size="2x"  :icon="['fas','map-marker-alt']"/>
         </v-btn>

         <v-btn
           color="#FCD675"
           flat
           value="favorites"
           :to="{ name: 'favorites', params: {} }"

         >
           <span class="btn-title pt-1">Favorites</span>
              <font-awesome-icon size="2x"  :icon="['fas','heart']"/>
         </v-btn>

         <v-btn
           color="#FCD675"
           flat
           value="booking"
           :to="{ name: 'my-booking', params: {} }"

         >
           <span class="btn-title pt-1">My Booking</span>
          <font-awesome-icon size="2x"  :icon="['fas','book-open']"/>
         </v-btn>

         <v-btn
           color="#FCD675"
           flat
           value="profile"
           :to="{ name: 'profile', params: {} }"

         >
           <span class="btn-title pt-1" >Profile</span>
          <font-awesome-icon size="2x"  :icon="['fas','user']"/>
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

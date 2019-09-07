<template>
 <div class="main">

     <v-container fluid style="background-color:#FCD675;" >

           <v-layout row wrap text-xs-center>
             <v-flex  xs12 md12 sm12 >
                <span class="clients">Staffs</span> <br />
             </v-flex>
           </v-layout>

           <v-layout  row wrap text-xs-center just justify-center class="pt-3">
                 <v-flex xs12 sm8 md8>
                      <v-text-field
                      label="Search barbers"
                      single-line
                      solo
                      prepend-inner-icon="search"
                      class="my-input"
                      v-model="search"
                    ></v-text-field>
                 </v-flex>
          </v-layout>
      </v-container>
      <v-container fluid>
           <v-layout justify-center row wrap>
            <v-flex xs12 md8 sm8>
            <template v-if="barbers.length>0">


               <router-link  v-for="(barber,index) in filterMembers" :key="index" :to="{ name: 'DeleteBarber', params: {userId:barber.id} }" style="text-decoration:none;">
                    <v-layout row wrap class="py-2">
                       <v-flex xs3 md2 sm3>
                         <v-avatar
                           :tile="tile"
                           size="80px"
                           color="grey lighten-4"
                         >
                           <img :src="barber.barber_profile!=''?barber.barber_profile:require('../../../../assets/dummy.png')" alt="avatar">
                         </v-avatar>

                       </v-flex>
                       <v-flex xs7 md6 sm8 class="pt-3 pl-3">
                           <h2 class="title" >{{ barber.name }} </h2>
                           <h5 class="text" v-text="barber.phone_number!=''?barber.phone_number:''"> </h5>
                       </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                </router-link>


              </template>
            </v-flex>
          </v-layout>
          <v-layout wrap row text-xs-center justify-end>

               <v-flex xs2 md2 sm2>
                <v-layout align-center justify-center row fill-height style="width: 54px; height: 54px; border-radius:70px; background-color:#FCD675">
                    <router-link :to="{ name: 'SettingsAddBarber', params: {} }"><font-awesome-icon size="2x" color="#000" :icon="['fas','plus']"/></router-link>
                </v-layout>
              </v-flex>

          </v-layout>
      </v-container>

</div>
</template>
<script>

  export default {
    data () {
      return {
        search: "",
        barbers:[],
        tile: false,
      }
    },
    computed: {
    filterMembers: function() {
      let filtered = this.barbers;
      if (this.search) {
        filtered = this.barbers.filter(
          m => m.name.indexOf(this.search) > -1
        );
      }
      return filtered;
    }
  },
    mounted () {

      this.$store.dispatch('getBarbers',{
          user_id: this.$store.getters.loggedInUserId,
      })
      .then(response => {

        if(response.data.status!=undefined && response.data.status=='Token is Expired')
        {
             this.$router.push({ name: 'login', params: { } })
        }else{

            this.barbers = response.data.user

        }

      })
      .catch(error=>{
        error.response
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
.clients{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
      text-align: justify !important;
      color: #484848 !important;
}
.text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
      text-align: justify !important;
      color: #484848 !important;
}
.title{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 18px !important;
    color: #484848;
}
.text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: 300 !important;
      line-height: normal !important;
      font-size: 12px !important;
      color: #484848 !important;
} 
</style>

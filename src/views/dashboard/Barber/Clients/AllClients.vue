<template>
 <div class="main">
     <Loader v-show="loader" />
     <v-container fluid style="background-color:#FCD675;" >
           <v-layout row wrap text-xs-center>
             <v-flex  xs12 md12 sm12 >
                <span class="clients">Clients</span> <br />
             </v-flex>
           </v-layout>
           <v-layout  row wrap text-xs-center just justify-center class="pt-3">
                 <v-flex xs12 sm8 md8>
                  <v-text-field
                   label="Search Clients"
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

        <router-link style="text-decoration:none" :to="{ name: 'BookingsClient', params: {} }">
          <v-layout justify-center row wrap>
           <v-flex xs12 md8 sm8>
                <template v-if="clients.length>0">
                  <div v-for="(client,index) in filterMembers" :key="index">
                    <v-layout row wrap class="pb-2">
                        <v-flex xs4 md2 sm3>
                          <v-responsive>
                            <v-img
                              :src="client.client_pic"
                              contain
                              height="85px" 
                              style="border-radius:50%;"
                            ></v-img>
                          </v-responsive>
                        </v-flex>
                        <v-flex xs7 md6 sm8 class="pt-3 pl-3">
                          <h2 class="title"> {{ client.name }} </h2>
                          <h5 class="text">  {{ client.phone_number }} </h5>
                        </v-flex>
                    </v-layout>
                  </div>   
                </template>
                <v-divider></v-divider>
              </v-flex>
              </v-layout>
          </router-link>
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
        loader:false,
        search: "",
        clients: []
      }
    },
  
    mounted (){
    
    var interval =   setTimeout(function(){
      var el = document.getElementById('app')
      el.classList.remove('grey-color')
      el.classList.add('white-color')
      clearTimeout(interval);
    }, 100);
     this.loader = true
     this.$store.dispatch('getClients',{
              user_id: this.$store.getters.loggedInUserId,
                }) 
            .then(response => {
              this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                 this.clients = response.data.clients  
                 }
            })
            .catch(error=>{
                this.loader = false
                error.response
            })
    },
   computed: {
    filterMembers: function() {
      let filtered = this.clients;
      if (this.search) {
        filtered = this.clients.filter(
          m => m.name.toLowerCase().indexOf(this.search) > -1
        );
      }
      return filtered;
    }
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
      font-size: 20px !important;
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

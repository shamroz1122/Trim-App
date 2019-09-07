<template>
 <div class="main" >
      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap>
            <v-flex  xs2 md3 sm3>
            <router-link  :to="{ name: 'BarberSettings', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs9 md9 sm9>
             <span class="find-text">Feedback</span>
           </v-flex>
        </v-layout>
      </v-container>
     <v-container> 
      <v-card> 
     
     <template v-if="getFeedback.length>0">
      <div v-for="(Feedback,index) in getFeedback" :key="index">
     
       <v-layout row wrap  class="pt-2 pb-2">
          <v-flex xs2 md2 sm2 class="ml-2">
            <v-responsive>
              <v-img
                style="border-radius:50% !important; height:60px !important;"
                :src="Feedback.picture"
                ></v-img>
            </v-responsive>
          </v-flex>

          <v-flex xs8 md10 sm10>
            <span class="ml-2 login-btn text-xs-center"> {{ Feedback.name }} </span> <br />
            <span><b class="ml-2 find-text">Feedback</b>: {{ Feedback.comment }} </span>
                <v-rating
                  v-model="Feedback.stars_value"
                  background-color="#FCD675"
                  color="#FCD675"
                  :size="30"
                 ></v-rating>
          </v-flex>
       </v-layout>
      </div>
     </template>
     </v-card>
     </v-container>
</div>
</template>

<script>

  export default {
  components: {
     
       },
    data () {
      return {
        getFeedback:''  	
      }
    },
   mounted(){
     
     this.$store.dispatch('getFeedbacks', {
         saloon_id: this.$route.params.SaloonId
    })
    .then(response => { 
      this.loader = false
      if(response.data.status!=undefined && response.data.status=='Token is Expired')
      {
           this.$router.push({ name: 'login', params: { } })
      }else{

          this.getFeedback = response.data.user
        
      }
    })
    .catch(error=>{
      this.loader = false
      error.response
      })
   }
  }
</script>
<style scoped="">
.vue-star-rating-rating-text{
  display:none !important;
}
.find-text{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 14px !important;
  color: #484848 !important;
}
.back-link{
  font-style: normal !important;
  font-weight: normal !important;
  line-height: normal !important;
  font-size: 18px !important;
  text-align: justify !important;
  color: black !important;
}
.title{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 24px !important;
  color: #484848 !important;
}
.comment{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: normal !important;
      line-height: normal !important;
      font-size: 12px !important;
      color: #C4C4C4 !important;
}
.login-btn{
     font-family: Montserrat;
     font-style: normal;
     line-height: normal;
     font-size: 14px;
     color: #484848;
     text-transform: capitalize;
   }
</style>

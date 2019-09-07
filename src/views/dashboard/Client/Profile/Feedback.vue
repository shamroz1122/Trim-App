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
      <v-form ref="form1" v-model="valid" lazy-validation @submit.prevent="SaveService">
       <v-container grid-list-xs,sm,md,lg,xl >
          <v-layout row wrap text-xs-center class="pt-5">
             <v-flex xs12 md10 sm10>
                <span class="title"> Share your feedback about Trim </span>
             </v-flex>
          </v-layout>
          <v-layout row wrap class="pt-5" justify-center>
              <div class="text-xs-center">
               <star-rating style="border-color:red !important;" @rating-selected ="setRating"></star-rating>
               </div>
          </v-layout>

          <v-layout row wrap justify-center class="pt-4">
             <v-flex xs12 md8 sm8>
               <v-textarea
                 outline
                 name="input-7-7"
                 label="Comment Here"
                 color="#FCD675"
                 class="comment"
                 v-model="comment"
                 :rules="desRules"
                 ></v-textarea>
             </v-flex>
          </v-layout>

          <v-layout justify-center row wrap>
           <v-flex xs12 md10 sm10>
             <v-btn type="submit" v-show="addBtn" color="#FCD675" depressed block class="btn text-capitalize">Add</v-btn>
             <v-layout row wrap justify-center text-xs-center>
               <v-flex xs12>
                 <v-progress-circular
                   indeterminate
                   color="#FCD675"
                   v-show = "loader"
                 ></v-progress-circular>
               </v-flex>
             </v-layout>
           </v-flex>
        </v-layout>

       </v-container>
      </v-form>
</div>
</template>

<script>
import StarRating from 'vue-star-rating'
  export default {
  components: {
       		StarRating
       },
    data () {
      return {
         rating: 0,
         loader:false,
         addBtn :true,
         valid:'',
         comment:'',
         desRules: [
          v => !!v || 'Comment is required'
         ],
      }
    },
    methods:{
      setRating: function(rating){
        console.log(this.rating = rating)
      },
      SaveService(){

          if (this.$refs.form1.validate()) {
              this.addBtn = false
              this.loader = true
              this.$store.dispatch('sendFeedback', {
              user_id: this.$store.getters.loggedInUserId,
              rating: this.rating,
              comment: this.comment
             }) 
            .then(response => {
                  response.data
                  this.addBtn = true
                  this.loader = false
                  if(response.data.status!=undefined && response.data.status=='Token is Expired')
                  {
                    this.$router.push({ name: 'login', params: { } })
                  }else{
                     this.$router.push({ name: 'ProfileHome', params: { } })
                  }
                }) 
            .catch(error=>{
              error.response
            })
          }
        },
     saveFeedback(){
      
      }
    },
    mounted (){
     
      var el = document.getElementById('app')
      el.classList.remove('grey-color')
      el.classList.add('white-color')

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
  font-size: 14px !important;
  text-align: justify !important;
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
     font-weight:bold !important;
     line-height: normal;
     font-size: 14px;
     background: #FCD675 !important;
     color: #484848;
     text-transform: capitalize;
   }
</style>

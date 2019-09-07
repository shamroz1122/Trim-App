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
       <v-container grid-list-xs,sm,md,lg,xl >
          <v-layout row wrap text-xs-center class="pt-5">
             <v-flex xs12 md10 sm10>
                <span class="title"> Share your feedback about Trim </span>
             </v-flex>
          </v-layout>
          <v-layout row wrap class="pt-5" justify-center>
                 <v-flex xs2 md1>
                    <font-awesome-icon size="3x" color="#FCD675"  :icon="['far','star']"/>
                </v-flex>
                  <v-flex xs2 md1>
                     <font-awesome-icon size="3x" color="#FCD675"  :icon="['far','star']"/>
                  </v-flex>
                 <v-flex xs2 md1>
                    <font-awesome-icon size="3x" color="#FCD675"  :icon="['far','star']"/>
                 </v-flex>
                <v-flex xs2 md1>
                   <font-awesome-icon size="3x" color="#FCD675"  :icon="['far','star']"/>
                </v-flex>
               <v-flex xs2 md1>
                  <font-awesome-icon size="3x" color="#FCD675"  :icon="['far','star']"/>
               </v-flex>
          </v-layout>

          <v-layout row wrap justify-center class="pt-4">
             <v-flex xs10 md8 sm8>
               <v-textarea
                 outline
                 name="input-7-7"
                 label="Comment Here"
                 color="#FCD675"
                 class="comment"
                 ></v-textarea>
             </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
             <v-flex xs12 md8 sm8 class="pt-1">
               <v-layout row wrap justify-center class="pt-2">
                 <v-flex xs12 md8 sm8>
                  <v-btn class="login-btn" block depressed> Done </v-btn>
                 </v-flex>
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

      }
    },
    mounted (){
        //document.getElementById('app').className = "white-color";
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

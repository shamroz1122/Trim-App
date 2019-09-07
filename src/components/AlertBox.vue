<template>
  <div text-xs-center>
    <v-dialog text-xs-center v-model="dialog"  width="500">
      <v-card text-xs-center>
        <v-card-title justify-center text-xs-center class="title" >
          <v-layout text-xs-center row wrap justify-center>
            <v-flex xs12 >
              <v-responsive>
                <v-img
                  height="92px"
                  :src="require('../assets/Warning_Sign.png')"
                  contain
                ></v-img>
              </v-responsive>
            </v-flex>
            <v-flex xs12 class="mt-4 warning-text" >
                Warning
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text >
            <v-layout row wrap  text-xs-center>
                <v-flex xs12 class="alert-text" >
                    {{ alertText }}
                </v-flex>
            </v-layout>

            <v-layout row wrap  text-xs-center>
                <v-flex  xs12 class="mt-4">
                      <p  class="confirm-text">{{ confirmText }}</p>
                </v-flex>
            </v-layout>
        </v-card-text>
          <v-spacer></v-spacer>
            <v-layout row wrap text-xs-center class="pa-3">
                <v-flex xs6 class="pr-2 ">
                  <v-btn  color="#FCD675" block  class="close-btn"  depressed @click = "setValue(true)">
                    No
                  </v-btn>
                </v-flex>
                <v-flex xs6 class="pl-2 ">
                  <v-btn color="#FCD675" block outline  class="close-btn" depressed @click = "setValue(false); cancelBooking()">
                    Yes
                  </v-btn>
                </v-flex>
            </v-layout>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>

  export default {
    name:'AlertBox',
    props:{
      alertText:String,
      confirmText:String,
      action: { 
         type: String,
         default: ''
      },
      date: String,
      time: String
    }, 
    data () {
      return {
        dialog: false,    
      }
    },
    methods: {
      setValue: function(value) {

          this.dialog = value
           
          if(this.action!='' && this.dialog == false)
          {
              this.$router.push({ name:this.action, params: {  }})
          
          }
      },
      cancelBooking: function(value) {

          if(this.action!='' && this.dialog == false)
          {
              this.$router.push({ name:this.action, params: {  }})
            
               this.$store.dispatch('CancelBooking', {
                user_id: this.$store.getters.loggedInUserId,
                date: this.date,
                time: this.time
              }) 
            .then(response => {

              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                     // var newData = response.data.new_time
                     // this.timeslots = newData
                 }
            })
            .catch(error=>{
              error.response
            }) 

          }
      },  
    }
  }
</script>
<style media="screen" scoped="">
  .warning-text{
    font-family: Montserrat !important;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #EA0000;
  }
  .alert-text{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-size: 14px;
    text-align: center;
    color: #484848;
  }
  .confirm-text{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold !important;
    line-height: normal;
    font-size: 14px;
    text-align: center;
    color: #484848;
  }
  .close-btn{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    color: #484848;
    font-size: 14px;
  }
</style>

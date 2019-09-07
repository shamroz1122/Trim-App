<template>
 <div id="main">
   <Loader v-show="loader" />
    <v-container fluid style="background-color:#FCD675;">
        <v-layout row wrap justify-center text-xs-center>
          <v-flex xs12 md8 sm8>
            <span class="find-text">
              Paypal Settings
            </span>
          </v-flex>
        </v-layout>
		</v-container>

   <v-container>

     <v-layout row wrap text-xs-center justify-center>
        <v-radio-group v-model="pstatus" @change="paymentStatus" >
          <v-flex xs3 md4 sm6>
           
              <v-radio label="Live" class="text_radio" color="#FCD675" value="1"></v-radio>
           
           </v-flex>
          <v-flex xs3 md4 sm6>
          
              <v-radio label="Sandbox" class="text_radio"  color="#FCD675" value="0"></v-radio>
          
           </v-flex>
       </v-radio-group>
     </v-layout>
 
    
     <v-layout row wrap text-xs-center justify-center mt-3>
       
           <v-flex xs12 md9 sm9>
             <div v-if="field1">
               
                <v-text-field
                   outline
                  v-model="emailLive"
                  label="Live Email"
                  prepend-icon="email"
                  color="#FCD675"
                  style="width: 90% !important;"
                ></v-text-field>

                <v-flex xs10 style="margin:0 auto;">
                 <v-btn type="submit" color="#FCD675" depressed @click="save" block class="btn text-capitalize">Save</v-btn>
                </v-flex>

                </div>

          <div v-if="field2">
                <v-text-field
                  outline
                  v-model="emailSandbox"
                  label="Sandbox Email"
                  prepend-icon="email"
                  color="#FCD675"
                  style="width: 90% !important;"
                ></v-text-field>
                 <v-flex xs10 style="margin:0 auto;">
                 <v-btn type="submit" color="#FCD675" depressed @click="save1" block class="btn text-capitalize">Save</v-btn>
                </v-flex>
                </div>

           </v-flex>
      </v-layout>
      </v-container>


  </div>   
</template>
<script>
import Loader from '../../../../components/Loader'
export default {
  components:{  Loader  },
    data () {
      return {
        loader:false,
        field1:false,
        field2:false,
        emailLive: '',
        emailSandbox:'',
        pstatus: '',
        paypal_settings:[]
      }
    },
  methods:{
    
   paymentStatus(e){
     if(e == 1){
       this.field1 = true
       this.field2 = false
      }
     else if(e == 0){
      this.field1 = false
      this.field2 = true
     }
   },

   save(){  
            this.loader = true  
            this.$store.dispatch('savepaypalSetting', {
            emailLive : this.emailLive,
            user_id: this.$store.getters.loggedInUserId,
            status: this.pstatus,  
           }) 
            .then(response => {
              this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                     // this.client = response.data.client 
                       } 
            })
            .catch(error=>{
              this.loader = false
              error.response
            })
     }, 
   save1(){
            this.loader = true
            this.$store.dispatch('savepaypalSetting1', {
            emailSandbox : this.emailSandbox,
            user_id: this.$store.getters.loggedInUserId,
            status: this.pstatus
            }) 

            .then(response => {
              this.loader = false
              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                     // this.client = response.data.client 
                       } 
            })
            .catch(error=>{
              this.loader = false
              error.response
            })
   }   
  },
  mounted(){
     
     
     this.loader = true
     this.$store.dispatch('getPaypalSettingAdmin', {
     user_id: this.$store.getters.loggedInUserId, 
     })    
    .then(response => { 
      this.loader = false
      if(response.data.status!=undefined && response.data.status=='Token is Expired')
      {
           this.$router.push({ name: 'login', params: { } })
      }
      else{
          
          this.paypal_settings = response.data.paypal_settings
          this.pstatus = this.paypal_settings.paypal_status
          this.emailSandbox = this.paypal_settings.paypal_sandbox_email
          this.emailLive = this.paypal_settings.paypal_live_email
          if(this.pstatus == 0){
            this.field2 = true
            this.field1 = false
          } 
          else if(this.pstatus == 1){
            this.field2 = false
            this.field1 = true
          }
      }
    })
    .catch(error=>{
      this.loader = false
      error.response
      })  
    
  }
}
</script>
<style scoped>
#text_radio{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 16px !important;
    color: #484848 !important;
}
#main{
    background-color: #fff;
    height:100vh;
}
.find-text{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 16px !important;
    color: #484848 !important;
      }
</style> 
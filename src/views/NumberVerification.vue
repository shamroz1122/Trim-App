<template>
  <v-app style="background-color:#ffffff;">
     <v-content>
      <v-container >
        <ModalBox
          title = "Invalid User"
          btnText = "OK"
          icon = "times-circle"
          ref="ModalBox"
         />
        <v-layout row wrap>
          <v-flex  xs2 md2 sm2  style="text-align:left;">
              <router-link class="help-btn"  :to="{ name: 'register', params: {} }">  <font-awesome-icon class="back-link"   :icon="['fas','arrow-left']"/></router-link>

          </v-flex>
        </v-layout>

         <v-layout row wrap text-xs-center just justify-center>
              <v-flex xs8 md3 sm6>

                <v-responsive>
                  <v-img
                    :src="require('../assets/veri_pic.png')"
                    contain
                  ></v-img>
                </v-responsive>

              </v-flex>
          </v-layout>

          <v-layout row wrap text-xs-center justify-center>
                  <v-flex xs12 md3 sm6 class="pa-2 mt-5">
                        <div class="title">Mobile Number Verification</div>
                        <p class="text"> Please Enter a mobile number to receive a verification code</p>

                  </v-flex>
          </v-layout>
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="verifyNumber">
            <v-layout row wrap text-xs-center justify-center>

                 <v-flex xs2 md2 sm6>
                   <v-text-field
                    v-model="code"
                    :rules="codeRules"
                    required
                    readonly
                  ></v-text-field>
                  </v-flex>
                  <v-flex xs7 md4 sm6 class="ml-2">
                    <v-text-field
                     v-model="phone"
                     :rules="phoneRules"
                     required
                     type="number"
                   ></v-text-field>
                  </v-flex>

            </v-layout>
            <v-layout row wrap text-xs-center justify-center>
                 <v-flex xs12 md6 sm6 class="pt-3">
                   <v-btn type="submit" v-show="continueBtn" class="login-btn" round  depressed>Continue</v-btn>
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
          </v-form>

      </v-container>
    </v-content>
   </v-app>

</template>
<script>
import ModalBox from '../components/ModalBox'
  export default {
    components: {
       ModalBox
    },
    data () {
      return {
        valid:true,
        code:'+44',
        loader:false,
        continueBtn:true,
        phone:'',
        codeRules: [
          v => !!v || 'Code is required',
          v => (v && v.length <= 4) || 'Code must be less than or equal to 4 characters'
        ],
        phoneRules: [
          v => !!v || 'Phone Number is required',
          v => (v && v.length <= 10) || 'Phone Number must be less than or equal to 10 characters'
        ]
      }
    },
    methods: {
        verifyNumber () {
          if (this.$refs.form.validate()) {
                this.continueBtn = false
                this.loader = true
                this.$store.dispatch('numberVerification',{
                    phone_number:this.phone,
                    user_id: this.$route.params.userId,
                })
                .then(response => {
                  this.continueBtn = true
                  this.loader = false
                  this.$router.push({ name: 'mobile-number-verification', params: {userId: response.data.user_id , phone:response.data.phone_number}})
                }) 
                .catch(error=>{
                  this.continueBtn = true
                  this.loader = false
                  error.response
                  this.$refs.ModalBox.setValue(true)

                })
          }
        },
        clear () {
          this.$refs.form.reset()
        }
  }
  }
</script>

<style media="screen" scoped="">

.title{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 18px;

  color: #484848;
}
.login-btn{
  font-family: Montserrat;
  font-style: normal;
  font-weight:bold !important;
  line-height: normal;
  font-size: 14px;
  height: 36px;
  width: 176px;
  background: #FCD675 !important;
  color: #484848;
}
.text{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 14px;
  text-align: center;
 margin-top:17px;
}
.back-link{
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
  text-align: justify;

  color: black;
}
</style>

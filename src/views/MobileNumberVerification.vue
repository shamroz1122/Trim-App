<template>
    <v-app style="background-color:#ffffff;">
      <v-content>

  <ModalBox
    :title = "title"
    :content = "content"
    btnText = "close"
    :icon = "icon"
    ref="ModalBox"
    :action="action"
   />

       <div class="black lighten-3 white--text">
         <v-container >
           <v-layout row wrap>
             <v-flex  xs2 md2 sm2 style="text-align:left;">
                 <router-link class="help-btn"  :to="{ name: 'main', params: {} }">  <font-awesome-icon class="back-link"   :icon="['fas','arrow-left']"/></router-link>

             </v-flex>
           </v-layout>

            <v-layout row wrap text-xs-center just justify-center>
              <v-flex xs12 md6 sm6 class="pa-1 mt-2">
                   
                  <div class="title">Mobile Number Verification</div> <br />
                  <span class="text" > You will get a SMS with a</span> <br />
                  <span class="text">confirmation code to this number.</span>

              </v-flex>
             </v-layout>
            </v-container >
      </div>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
       <v-container >
           <v-layout row wrap text-xs-center justify-center  class="pt-4">
              <v-flex xs2 md1 sm6>
                <v-text-field
                 v-model="code"
                 :rules="codeRules"
                 required
                 readonly
               ></v-text-field>
               </v-flex>
               <v-flex xs7 md3 sm6 class="ml-2">
                 <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  required
                  type="number"
                  readonly
                ></v-text-field>
                </v-flex>
           </v-layout>

            <v-layout row wrap text-xs-center just justify-center class="pt-4">
                 <v-flex xs12 md6 sm6 >
                    <div class="input-code">Please input code below</div>
                 </v-flex>
            </v-layout>

             <v-layout row wrap text-xs-center justify-center>
               <v-flex xs2 md1 sm6>
                 <v-text-field
                  v-model="verifyCode1"
                  :rules="verifyCodeRules"
                  required
                  type="number"
                ></v-text-field>
                </v-flex>
                <v-flex xs2 md1 sm6 class="ml-2">
                  <v-text-field
                   v-model="verifyCode2"
                   :rules="verifyCodeRules"
                   type="number"
                   required
                 ></v-text-field>
                 </v-flex>
                 <v-flex xs2 md1 sm6 class="ml-2">
                   <v-text-field
                    v-model="verifyCode3"
                    :rules="verifyCodeRules"
                    type="number"
                    required
                  ></v-text-field>
                  </v-flex>
                  <v-flex xs2 md1 sm6 class="ml-2">
                    <v-text-field
                     v-model="verifyCode4"
                     :rules="verifyCodeRules"
                     type="number"
                     required
                   ></v-text-field>
                   </v-flex>
             </v-layout>

                 <v-layout row wrap text-xs-center justify-center class="pt-5">
                      <v-flex xs12 md6 sm6 class="pt-4">
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
                 <v-layout row wrap text-xs-center justify-center>
                   <v-flex xs12 md6 sm6>
                      <v-btn  v-show="codeBtn"  flat @click="resendCode" class="fg-pass" >RESEND CODE</v-btn>
                      <v-layout row wrap justify-center text-xs-center>
                        <v-flex xs12>
                          <v-progress-circular
                            indeterminate
                            color="#FCD675"
                            v-show = "loader2"
                          ></v-progress-circular>
                        </v-flex>
                      </v-layout>
                   </v-flex>
                 </v-layout>
          </v-container >
      </v-form>
     </v-content>
   </v-app>
</template>

<script>
import ModalBox from '../components/ModalBox'
  export default {
    components: {
      "ModalBox": ModalBox
    },
    data () {
      return {
        title: 'Registration Complete',
        content: 'Your registration has successfully completed.',
        icon:'check-circle',
        action:'',
        valid:true,
        loader:false,
        continueBtn:true,
        loader1:false,
        codeBtn:true,
        verifyCode1:'0',
        verifyCode2:'0',
        verifyCode3:'0',
        verifyCode4:'0',
        code:'+44',
        phone:'',
        codeRules: [
          v => !!v || 'Code is required',
          v => (v && v.length <= 4) || 'Code must be less than or equal to 4 characters'
        ],
        phoneRules: [
          v => !!v || 'Phone Number is required',
          v => (v && v.length <= 10) || 'Phone Number must be less than or equal to 10 characters'
        ],
        verifyCodeRules: [
          v => !!v || 'Requir-ed',
          v => (v && v.length == 1) || ''
        ],
      }
    },
    methods: {
        submit () {
          if (this.$refs.form.validate()) {
            this.continueBtn = false
            this.loader = true

            var verification_code = this.verifyCode1+this.verifyCode2+this.verifyCode3+this.verifyCode4

            this.$store.dispatch('CodeVerification',{
                phone_number:this.$route.params.phone,
                user_id: this.$route.params.userId,
                verification_code: verification_code,
            })
            .then(response => {
              this.continueBtn = true
              this.loader = false
              this.title =  'Registration Complete'
              this.content = response.data.success  //'Your registration has successfully completed.',
              this.icon = 'check-circle'
              this.action = 'login'
              this.$refs.ModalBox.setValue(true)
              //this.$router.push({ name: 'mobile-number-verification', params: {userId: response.data.user_id , phone:response.data.phone_number}})
            })
            .catch(error=> {
              this.continueBtn = true
              this.loader = false
              this.title = 'Error'
              this.content = error.data.error
              this.icon = 'times-circle'
              error.response
              this.$refs.ModalBox.setValue(true)

            })

          }
        },
        resendCode(){
          this.codeBtn = false
          this.loader2 = true
          this.$store.dispatch('numberVerification',{
              phone_number:this.phone,
              user_id: this.$route.params.userId,
          })
          .then(response => {
            response.data
            this.codeBtn = true
            this.loader2 = false
            this.title =  ''
            this.content = 'Code has been resent.',
            this.icon = 'check-circle'
            this.$refs.ModalBox.setValue(true)
          })
          .catch(error=>{
            this.codeBtn = true
            this.loader2 = false
            error.response
            this.title = 'Error'
            this.content = error.data.error
            this.icon = 'times-circle'
            this.$refs.ModalBox.setValue(true)
          })
        },
        clear () {
          this.$refs.form.reset()
        }
  },
  mounted(){
        this.phone = this.$route.params.phone
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
  color: #FFFFFF;
}
.input-code{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  color: #484848;
}
.fg-pass{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  text-decoration-line: underline;
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
}
.back-link{
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
  text-align: justify;
  color: #FCD675;
}
</style>

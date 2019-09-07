<template>
  <v-app style="background-color:#000000">
     <v-content>
      <v-container>

        <v-layout row wrap text-xs-center >
          <v-flex xs2 md3 sm3  style="text-align:left;">
              <router-link class="help-btn"  :to="{ name: 'login', params: {} }">  <font-awesome-icon class="back-link"   :icon="['fas','arrow-left']"/></router-link>
          </v-flex>
          <v-flex xs8 md6 sm6 >
             <v-responsive>
               <v-img
                 :src="require('../assets/logo1.png')"
                 contain
               ></v-img>
             </v-responsive>

          </v-flex>
          <v-flex xs2 md3 sm3  style="text-align:right;">
            <router-link class="help-btn"  :to="{ name: '', params: {} }">Help</router-link>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-center text-xs-center>
            <v-flex xs12 sm6 md6 >
               <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="resetPassword">
               <v-card class="elevation-12" style="border-radius: 10px;">

                  <v-card-text style="padding: 10%;">
                     <div class="title">Reset Password</div>
                        <v-text-field
                        v-model="email"
                        :rules="emailRules"
                         label="Enter Your Email Address"
                         required
                       ></v-text-field>
                       <v-btn type="submit" v-show="resetBtn"  class="login-btn" block >Reset Password</v-btn>
                       <v-layout row wrap justify-center text-xs-center>
                         <v-flex xs12>
                           <v-progress-circular
                             indeterminate
                             color="#FCD675"
                             v-show = "loader"
                           ></v-progress-circular>
                         </v-flex>
                       </v-layout>
                    </v-card-text>
              </v-card>
               </v-form>
            </v-flex>

          </v-layout>
          <ModalBox
            :title = "title"
            :content = "content"
            btnText = "close"
            :icon = "icon"
            ref="ModalBox"
           />
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
          resetBtn:true,
          loader:false,
          title:'',
          content:'',
          icon:'',
          valid: true,
          email: '',
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
          ]

      }
    },
    methods:{
      resetPassword(){
        if (this.$refs.form.validate()) {
          this.resetBtn = false
          this.loader = true


          this.$store.dispatch('resetPassword', {
            email: this.email,
          })
          
          .then(response => {
            this.resetBtn = true
            this.loader = false

            response.status
            this.title = "Password Sent"
            this.content = "A password has been sent to your mail."
            this.icon = "check-circle"
            this.$refs.ModalBox.setValue(true)

          }).catch(error => {
             this.resetBtn = true
             this.loader = false
             error.response
             this.icon = "times-circle"
             this.title = "Error"
             this.content = error.response.data.error
             this.$refs.ModalBox.setValue(true)

          })

        }


      }
    }
  }
</script>
<style media="screen" scoped="">
.title{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 20px !important;
  color: #484848 !important;
}
.login-btn{
  font-family: Montserrat;
  font-style: normal;
  font-weight:bold !important;
  line-height: normal;
  font-size: 14px;
  height: 41px;
  background: #FCD675 !important;
  color: #484848;
}
.fg.pass{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold !important;
  line-height: normal;
  font-size: 18px;
  text-align: justify;
  text-decoration-line: underline;
  color: #484848;
}
.help-btn{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
  text-align: justify;
  text-decoration: none;
  color: #FCD675;
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

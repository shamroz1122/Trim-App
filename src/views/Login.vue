<template>
  <v-app style="background-color:#000000">
    <v-content>
      <v-container >

        <ModalBox
          title = "Invalid Email OR Password"
          btnText = "OK"
          icon = "times-circle"
          ref="ModalBox"
         />

        <v-layout row wrap text-xs-center>
          <v-flex xs2 md3 sm3  style="text-align:left;">
              <router-link class="help-btn"  :to="{ name: 'main', params: {} }">  <font-awesome-icon class="back-link"   :icon="['fas','arrow-left']"/></router-link>

          </v-flex>
          
          <v-flex xs8 md6 sm6 >
            <v-img
              :src="require('../assets/logo1.png')"
              contain
            ></v-img>
          </v-flex>

          <v-flex xs2 md3 sm3  style="text-align:right;">
            <router-link class="help-btn"  :to="{ name: '', params: {} }">Help</router-link>

          </v-flex>
        </v-layout>

       <v-layout row wrap justify-center text-xs-center>
          <v-flex xs12 md6 sm6 >
             <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="login">
             <v-card class="elevation-12" style="border-radius: 10px;">
                <v-card-text style="padding: 10%;">
                  <div class="title">Login to Continue</div>

                      <v-text-field
                      v-model="email"
                      :rules="emailRules"
                       label="Email Address"
                       required
                     ></v-text-field>

                     <v-text-field
                      v-model="password"
                      :rules="passRules"
                      label="Password"
                      required
                      type="password"
                    ></v-text-field>

                    <v-btn v-show="loginBtn" type="submit" class="login-btn" block >Login</v-btn>
                    <v-layout row wrap justify-center text-xs-center>
                      <v-flex xs12>
                        <v-progress-circular
                          indeterminate
                          color="#FCD675"
                          v-show = "loader"
                        ></v-progress-circular>
                      </v-flex>
                    </v-layout>
                     <v-btn flat :to="{ name: 'reset-password', params: {} }" class="fg-pass" >Forgot Password?</v-btn>
                  </v-card-text>

            </v-card>
             </v-form>
          </v-flex>
        </v-layout>
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
      loader:false,
      loginBtn:true,
      password:'',
      email:'',
      valid: true,
      emailRules: [
        v => !!v || 'Email is required'
      ], 

      passRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
       ]
      }
    },
    methods: {
      login () {

          if (this.$refs.form.validate()) {
            this.loginBtn = false
            this.loader = true

            this.$store.dispatch('retrieveToken', {
              email: this.email,
              password: this.password,
            })
            .then(response => {

                this.loginBtn = true
                this.loader = false
                if(response.data.user.user_type == 1){
                  this.$router.push({name:'booking'})
                }else if(response.data.user.user_type == 2){
                  this.$router.push({name:'bookings'})
                }else if(response.data.user.user_type == 3){
                  this.$router.push({name:'discover'})
                }

            }).catch(error => {
               this.loginBtn = true
               this.loader = false
               /* if(error.response.status==401) 
                {
                    this.$router.push({ name: 'number-verification', params: { userId: error.response.data.id } })

                }else{
                    this.$refs.ModalBox.setValue(true)
                } */
            }) 
          }
        },
        clear () {
          this.$refs.form.reset()
        }
  },

  mounted (){
        //document.getElementById('app').className = "white-color";
        var el = document.getElementById('app')
        el.classList.remove('grey-color')
        el.classList.add('black-color')
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

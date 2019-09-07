<template>
  <div style="margin: auto;">
      <v-container
        fluid
        grid-list-lg
        fill-height> 
        <v-layout row wrap text-xs-center>
          <v-flex  xs2 md2 sm2  style="text-align:left;">
              <router-link class="help-btn"  :to="{ name: 'main', params: {} }"> 
                 <font-awesome-icon class="back-link"   :icon="['fas','arrow-left']"/></router-link>

          </v-flex>
          <v-flex xs8 md8 sm8 >
            <v-img
              :src="require('../assets/logo1.png')"
              contain
            ></v-img>
          </v-flex>

          <v-flex xs12 >
             <v-form ref="form" v-model="valid" lazy-validation>
             <v-card class="elevation-12" style="border-radius: 10px;">

                <v-card-text style="padding: 10%;">
                  <div class="title"> Change Password </div>
                      <v-text-field
                       v-model="password"
                       :rules="nameRules"
                       label="Current Password"
                       required
                     ></v-text-field>

                     <v-text-field
                     v-model="password"
                     :rules="emailRules"
                      label="New Password"
                      required
                    ></v-text-field>


                    <v-text-field
                     v-model="confirmpass"
                     :rules="confirmpassRules"
                     label="Confirm Password"
                     required
                     type="password"
                   ></v-text-field>

                     <v-btn class="login-btn" block depressed >Update Password</v-btn>

                  </v-card-text>

            </v-card>
             </v-form>
          </v-flex>


        </v-layout>
      </v-container>

  </div>
</template>
<script>
  export default {
    data () {
      return {
      password:'',
      username:'',
      email:'',
      confirmpass:'',
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      passRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => (v && v.length <= 10) || 'Email must be less than 10 characters'
      ],
      confirmpassRules: [
        v => !!v || 'Confirm Password is required',
        v => (v && v.length <= 10) || 'Confirm Password must be less than 10 characters'
      ]
      }
    }
  }
</script>
<style media="screen" scoped="">
@import url('https://fonts.googleapis.com/css?family=Montserrat');
.title{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: bold !important;
  line-height: normal !important;
  font-size: 18px !important;
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
.footer-text{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 14px;
  text-align: center;

  color: #FFFFFF;
}
</style>

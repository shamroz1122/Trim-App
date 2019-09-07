<template>
  <v-app style="background-color:#000000">
    <v-content>
      <v-container>
        <v-layout row wrap text-xs-center>
          <v-flex xs2 md3 sm3  style="text-align:left;">
              <router-link class="help-btn"  :to="{ name: 'main', params: {} }">  <font-awesome-icon class="back-link"   :icon="['fas','arrow-left']"/></router-link>
          </v-flex>
          <v-flex xs8 md6 sm3 >
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
             <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="register">
             <v-card class="elevation-12" style="border-radius: 10px;">

                <v-card-text style="padding: 10%;">
                  <div class="title">Welcome to Trim</div>
                      <v-text-field
                       v-model="username"
                       :rules="nameRules"
                       label="Full Name or Nick Name"
                       required
                     ></v-text-field>

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

                    <v-text-field
                     v-model="confirmpass"
                     :rules="confirmpassRules"
                     label="Confirm Password"
                     required
                     type="password"
                   ></v-text-field>

                   <v-radio-group required :rules="[v => !!v || 'Please select option']" v-model="userType" row>
                      <v-radio  label="Trim Barber"  color="#FCD675" value="2"></v-radio>
                      <v-radio  label="Trim Client" color="#FCD675" value="3"></v-radio>
                      <v-radio  label="Trim Saloon" color="#FCD675" value="1"></v-radio>
                    </v-radio-group>

                    <v-select
                      v-model="saloonID"
                      :rules="selectRules"
                      :items="saloon"
                      item-text = "shop_name"
                      item-value = "id"
                      label="Select Saloon"
                      solo
                      required
                      v-if="userType==2?true:false"
                      color="#FCD675"
                    ></v-select>

                    <v-btn class="login-btn" type="submit" v-show="registerBtn" block >
                      Register
                    </v-btn>
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
        <v-layout row wrap justify-center text-xs-center>
          <v-flex xs12 md6 sm6 class="mt-3">
              <p class="footer-text">By signing up with <span style="font-weight:bold" >Trim</span> your are agree <br>
                  to pur <span style="font-weight:bold" >Term and Conditions</span></p>
          </v-flex>
        </v-layout>
        <ModalBox
          :title = "title"
          :content = "content"
          btnText = "close"
          icon = "times-circle"
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
      saloonID: '',
      saloon:[],
      registerBtn:true,
      loader:false,
      title:'',
      content:'',
      userType: null,
      password:'',
      username:'',
      email:'',
      createdBy:'0',
      confirmpass:'',
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 10 characters'
      ],
      passRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'Email is required'
      ],
      confirmpassRules: [
        v => !!v || 'Confirm Password is required',
        v => (v && v.length <= 10) || 'Confirm Password must be less than 10 characters'
      ],
       selectRules: [
        v => !!v || 'Saloon is required'
      ],
    }
  },
  methods: {
    register () {      
      // console.log(this.user_type)  
      if (this.$refs.form.validate()) {
            this.registerBtn = false
            this.loader = true

           this.$store.dispatch('register', {
             name: this.username,
             email: this.email,
             password: this.password,
             password_confirmation: this.confirmpass,
             user_type: this.userType,
             created_by: this.saloonID,
           })
           .then(response => {
               this.registerBtn = true
               this.loader = false
               this.$router.push({ name: 'number-verification', params: { userId: response.data.user.id } })

           }).catch(error => {
              this.registerBtn = true
              this.loader = false
              this.title = 'Error'
              var data = error.data
              var content = ''
              Object.keys(data).forEach(function (item) {
                  content =  data[item][0]
              });
              this.content = content
              this.$refs.ModalBox.setValue(true)
          })
        }
      },

    clear () {
      this.$refs.form.reset()
    },

    barber(e) {
      alert(e)
    }
  },

  mounted(){
        this.$store.dispatch('getSaloons',{
            user_id: '0',
        })
        .then(response => {
          var data = response.data.user
          this.saloon = data
        })
        .catch(error=>{
          error.response
        })
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

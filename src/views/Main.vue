<template>
<v-app>
     <v-content >
       <div class="background-div" >
        <div class="inner-bg" >
         <v-container >
            <v-layout row wrap justify-center text-xs-center >

                <v-flex xs12 md6 sm6 >
                  <v-responsive>
                    <v-img
                      :src="require('../assets/logo1.png')"
                      class="my-12"
                      contain
                    ></v-img>
                  </v-responsive>
                </v-flex>

            </v-layout>

        <v-layout row wrap justify-center text-xs-center>
            <v-flex xs12 md6 sm6 style="z-index: 1;" >
              <h1 class="title">
                Welcome to Trim
              </h1>
              <p class="description">
                Lorem Ipsum has been the industry's <br>
                standard dummy
              </p>
            </v-flex>
        </v-layout>

        <v-layout row wrap justify-center text-xs-center>
            <v-flex xs12 md6 sm6 class="mt-4">
            <!-- <v-btn class="fb-btn" block color="info"><font-awesome-icon size="2x"  :icon="['fab','facebook-square']"/> &nbsp; &nbsp; Login with Facebook</v-btn> -->


            <!--  <facebook-login class="button"
              appId="498485293977388"
              @login="onLogin"
              @logout="onLogout"
              @get-initial-status="getUserData">
            </facebook-login> -->

            </v-flex>
        </v-layout>

        <v-layout row wrap justify-center text-xs-center mt-3>

            <v-flex  xs6 md3 sm3 class="pr-2 " >
               <v-btn class="b-login" :to="{ name: 'login', params: {} }" block>LOGIN</v-btn>
            </v-flex>

            <v-flex class="pl-2 " xs6 md3 sm3 >
               <v-btn outline :to="{ name: 'register', params: {} }" color="#FCD675" class="b-register" block>REGISTER</v-btn>
            </v-flex>

         </v-layout>
      </v-container>

    </div>
   </div>
 </v-content>
</v-app>
</template>

<script>
//import facebookLogin from 'facebook-login-vuejs'
export default {
  components: {
    // facebookLogin
  },
  data () {
    return {
      isConnected: false,
      name: '',
      email: '',
      personalID: '',
      FB: undefined
    }
  },
  methods: {
  /*  getUserData() {
     this.FB.api('/me', 'GET', { fields: 'id,name,email' },
       userInformation => {
         this.personalID = userInformation.id;
         this.email = userInformation.email;
         this.name = userInformation.name;
       }
     )
   },
   onLogin() {
     this.isConnected = true
     this.getUserData()

     console.log(this.personalID)
     console.log(this.email)
     console.log(this.name)

   },
   onLogout() {
     this.isConnected = false;
   } */
  }
}
</script>

<style media="screen" scoped="">
  button{
    border-radius: 0;
  }
 .inner-bg:before{
   background: rgba(0, 0, 0, 0.7);
   content: "";
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
 }
 .background-div{z-index: 1;}

 .background-div:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
     background-image: url('../assets/background.png');
     background-repeat: no-repeat;
     background-size:cover;
     filter:alpha(opacity=40);
     width:100%;
  }

  .title{
    font-family: Montserrat !important;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #FCD675;
  }

  .description{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-size: 12px;
    color: #FFFFFF;
    margin-top: 14px;

  /*  margin-bottom: 121px */
  }
  .fb-btn{
    background: #3B5998 !important;
    height: 50px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 14px;
    letter-spacing: 0.15em;
   text-transform: none;
   margin-bottom: 42px;
  }
  .b-container{
    padding-left: 30px;
    padding-right: 30px;
  }
  .b-login{
    background: #FCD675 !important;
    font-family: Montserrat ;
    font-style: normal !important;
    font-weight: 900 !important;
    line-height: normal !important;
    font-size: 14px !important;
    color: #484848 !important;
    height: 50px;
  }
  .b-register{

    font-family: Montserrat ;
    font-style: normal !important;
    font-weight: 900 !important;
    line-height: normal !important;
    font-size: 14px !important;
    border: 2px solid !important;
    box-sizing: border-box !important;
    height: 50px;
  }

</style>
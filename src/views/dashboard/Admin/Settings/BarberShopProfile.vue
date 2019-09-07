<template>
 <div class="main">
    <Loader v-show="loader" />
      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'AdminSettingsHome', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text">  Profile </span>
           </v-flex>
        </v-layout>
      </v-container> 

      <v-container grid-list-xs,sm,md,lg,xl>
        <v-layout row wrap justify-center>
          <v-flex xs12 md11 sm11>
             <v-card>
               <v-card-text>
                  <v-layout row wrap >
                     <v-flex xs8 md8 sm8>
                       <span class="title"> Owner’s Name: </span>
                       <p class="text" v-text="name"> </p>
                     </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                     <v-flex xs8 md8 sm8>
                       <span class="title"> Shop Name: </span>
                       <p class="text" v-text="shopName">  </p>
                     </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                     <v-flex xs8 md8 sm8>
                       <span class="title"> Email Address: </span>
                       <p class="text"  v-text="email">  </p>
                     </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                     <v-flex xs8 md8 sm8>
                       <span class="title"> Contact No.: </span>
                       <p class="text" v-text="phone">  </p>
                     </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                     <v-flex xs8 md8 sm8>
                       <span class="title"> Address: </span>
                       <p class="text" v-text="address"> </p>
                     </v-flex>
                  </v-layout>

               </v-card-text>
             </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-center class="pt-2 ma-1">
          <v-flex xs12 md11 sm11>
             <v-card class="card">
                 <v-card-text>
                   
                    <v-layout row wrap>
                       <v-flex xs8 md12 sm12>
                          <p class="shop-img"> Shop Images </p>
                       </v-flex>
                    </v-layout>

                   <v-layout row wrap justify-center class="pb-2">
                     <template v-if="images.length>0">
                      <v-flex v-for="(image,index) in images" :key="index" xs6 md4 sm4>

                         <v-responsive :tile="tile" style="border-radius:0px; !important">
                           <img style="width: 100%; height: 149px; border-radius: 16px;" class="pa-2" :src="image.meta_value" alt="avatar">
                         </v-responsive>

                       </v-flex>
                     </template>
                   </v-layout>

                 </v-card-text>
             </v-card>
          </v-flex>
          </v-layout>
      </v-container>

</div>
</template>
<script>
import Loader from '../../../../components/Loader'

  export default {
    components: {
       Loader
    },
    data () {
      return {
          loader:false,
          name:'',
          shopName:'',
          email:'',
          phone:'',
          address:'',
          images: [],
          tile:false,
          imageName:'',
          imageUrl:'',
          imageFile:'',
          image :'',
      }
    },
    mounted (){
        //document.getElementById('app').className = "white-color";
          this.loader = true
          var el = document.getElementById('app')
          el.classList.remove('white-color')
          el.classList.add('grey-color')


          this.$store.dispatch('getSaloonBasicInfo',{
              user_id: this.$store.getters.loggedInUserId,
          })
           
          .then(response => {
            this.loader = false
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
                 this.$router.push({ name: 'login', params: { } })
            }else{

                 this.phone =    response.data.user.phone
                 this.name =     response.data.user.name
                 this.shopName = response.data.user.shop_name
                 this.address =   response.data.user.address
                 this.email =    response.data.user.email
                 this.images =    response.data.meta
                 
            }

          })
          .catch(error=>{
            this.loader = false
            error.response
        })

    },
    destroyed () {
      var el = document.getElementById('app')
      el.classList.remove('grey-color')
      el.classList.add('white-color')
    }
  }
</script>
<style scoped="">
.find-text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 16px !important;
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
      font-weight: 300 !important;
      line-height: normal !important;
      font-size: 12px !important;
      text-align: justify !important;
      color: #484848 !important;
}
.text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 12px !important;
      text-align: justify !important;
      color: #484848 !important;
}
.shop-img{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 14px !important;
      text-align: justify !important;
      color: #484848 !important;
}
</style>

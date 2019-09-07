<template>
 <div class="main">
  <Loader v-show="loader" />
     <v-container fluid style="background-color:#FCD675;" >

           <v-layout row wrap >
             <v-flex xs11 md11  sm11 >
                <span class="discover-text">My Profile</span> <br />
                <span class="find-text">Find the perfect Barber</span>
             </v-flex>
             <v-flex  xs1 md1 sm1 >
               <!-- <font-awesome-icon  color="#484848" size="2x" :icon="['fas','sliders-h']"/> -->
             </v-flex>  
          </v-layout>

          <!-- <v-layout  row wrap text-xs-center just justify-center class="pt-3">
                <v-flex xs12 sm8 md8>
                <v-text-field
                prepend-inner-icon="search"
                 placeholder="Any Salon . Even Field street, London"
                 solo
                 >
                </v-text-field>
                </v-flex>
         </v-layout> -->

         </v-container>

          <v-container >
           
           <v-layout wrap row align-center justify-center text-xs-center>
                           <template v-if="image==''">
                              <v-flex @click='pickFile' xs6  md6 sm6 class="py-3">
                                    <v-avatar
                                      :tile="tile"
                                      size="150px"
                                      color="grey lighten-4"
                                    >
                                   <img :src="require('../../../../assets/dummy.png')" alt="avatar">
                                   </v-avatar>
                              </v-flex>
                          </template>

                        <template v-if="image!= ''">
                           <v-flex @click='pickFile'  xs6 md6 sm6 class="py-3">
                             <v-avatar :tile = "tile" size = "150px" style = "border-radius:8px;">
                              <img :src="image" style="border: 3px solid rgb(252, 214, 117); border-radius:50%;">
                             </v-avatar>
                           </v-flex>
                           
                            <div @click='pickFile' style="border-radius: 50px; margin-left: -41px; position: relative; margin-top: 67px; height: 25px; width: 28px; background: rgb(252, 214, 117); border-radius: 50px;">
                              <font-awesome-icon style="margin-top:5px;" size="1x" color="#000" :icon="['fas','camera']"/>  
                            </div>
                       </template>
                          
                         <input
                            type="file"
                            style="display: none"
                            ref="image"
                            accept="image/*"
                            @change="onFilePicked">
                    </v-layout>
                    
                      <v-layout row wrap text-xs-center class="pt-3">
                         <v-flex xs12>
                          <span class="name" v-text="name"> </span> <br />
                          <font-awesome-icon size="1x" color="#FCD675" :icon="['fas','mobile']"/>  <span class="text pl-1" v-text="email">   </span> <br />
                          <font-awesome-icon size="1x" color="#FCD675" :icon="['fas','envelope']"/>  <span class="text pl-1" v-text="phone"> </span> <br />
                         </v-flex>
                      </v-layout>

            <v-layout row wrap justify-center class="pt-2">
              <v-flex xs12 md10 sm10>
                 <v-card class="card">
                     <v-card-text>
                       <v-layout  row wrap class="pb-2">
                         <v-flex xs2 md1 sm1 >
                            <router-link :to="{ name: 'ProfileBookingHistory', params: {} }"> <font-awesome-icon size="1x" color="#FCD675" :icon="['fas','file-alt']"/></router-link>
                         </v-flex>
                         <v-flex xs9 md11 sm11>
                        <router-link :to="{ name: 'ProfileBookingHistory', params: {} }" style="text-decoration:none !important;" ><span class="title"> Booking History  </span></router-link>
                         </v-flex>
                       </v-layout>
                         <v-divider></v-divider>
                         <v-layout row wrap class="pt-2 pb-2">
                           <v-flex xs2 xs1 sm1>
                            <router-link :to="{ name: 'ProfileChangePassword', params: {} }"> <font-awesome-icon size="1x" color="#FCD675" :icon="['fas','key']"/></router-link>
                           </v-flex>
                           <v-flex xs9 md11 sm11>
                          <router-link :to="{ name: 'ProfileChangePassword', params: {} }" style="text-decoration:none !important;" > <span class="title">  Change Password </span> </router-link>
                           </v-flex>
                         </v-layout>
                         <v-divider></v-divider>
                          <!-- <v-layout row wrap class="pt-2 pb-2">
                            <v-flex xs2 md1 sm1>
                              <router-link :to="{ name: 'ProfileInviteBarber', params: {} }"><font-awesome-icon size="1x" color="#FCD675" :icon="['fas','user-plus']"/></router-link>
                            </v-flex>
                            <v-flex xs9 md11 sm11>
                              <router-link :to="{ name: 'ProfileInviteBarber', params: {} }" style="text-decoration:none !important;"><span class="title" > Invite Barbers </span></router-link>
                            </v-flex>
                          </v-layout> -->
                         <v-divider></v-divider>
                         <v-layout row wrap  class="pt-2 pb-2">
                           <v-flex xs2 md1 sm1>
                            <router-link :to="{ name: 'ProfileFeedback', params: {} }"> <font-awesome-icon size="1x" color="#FCD675" :icon="['fas','star']"/></router-link>
                           </v-flex>
                           <v-flex xs9 md11 sm11>
                            <router-link :to="{ name: 'ProfileFeedback', params: {} }" style="text-decoration:none !important;"><span class="title">  Feedback </span></router-link>
                           </v-flex>
                         </v-layout>
                         <v-divider></v-divider>
                          <!-- <v-layout row wrap class="pt-2 pb-2">
                            <v-flex xs2 md1 sm1>
                                <router-link :to="{ name: 'ProfileOffers', params: {} }"><font-awesome-icon size="1x" color="#FCD675" :icon="['fas','gift']"/></router-link>
                            </v-flex>
                            <v-flex xs9 md11 sm11>
                              <router-link :to="{ name: 'ProfileOffers', params: {} }" style="text-decoration:none !important;"><span class="title"> Offers </span></router-link>
                            </v-flex>
                          </v-layout> -->
                         <v-divider></v-divider>
                         <v-layout @click="logout" row wrap class="pt-2 pb-2">
                           <v-flex xs2 md1 sm1>
                              <font-awesome-icon size="1x" color="#FCD675" :icon="['fas','power-off']"/>
                           </v-flex>
                           <v-flex xs9 md11 sm11>
                              <span class="title">  Logout </span>
                           </v-flex>
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
          loader: false,
          name: '',
          email: '',
          phone: '',
          image: '',
          tile: ''
      }
    },
    methods: {

      pickFile () {
             this.$refs.image.click()
         }, 
        onFilePicked (e) {
           const files = e.target.files
           if(files[0] !== undefined) {
             this.imageName = files[0].name
             if(this.imageName.lastIndexOf('.') <= 0) {
               return
             }
             const fr = new FileReader ()
             fr.readAsDataURL(files[0])
             fr.addEventListener('load', () => {
               this.imageUrl = fr.result
               this.imageFile = files[0] // this is an image file that can be sent to server...
               this.image = this.imageUrl

               this.$store.dispatch('saveClientProfile',{
                   user_id: this.$store.getters.loggedInUserId,
                   ImageFile: this.imageFile,
               })
               .then(response => {

                 if(response.data.status!=undefined && response.data.status=='Token is Expired')
                    {
                        this.$router.push({ name: 'login', params: { } })
                    }

               })
               .catch(error=>{
                 error.response
               })
             })
           } else {
             this.imageName = ''
             this.imageFile = ''
             this.imageUrl = ''
           }
         }, 

      logout(){
        this.$store.dispatch('destroyToken')
          .then(response => {
            response.status
            this.$router.push({ name: 'login' })
          })
      }
    } ,
    mounted (){
          this.loader = true
          this.$store.dispatch('getClientBasicInfo',{
              user_id: this.$store.getters.loggedInUserId,
          })
          .then(response => {
            this.loader=false
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
                 this.$router.push({ name: 'login', params: { } })
            }else{

                 this.phone =    response.data.user.phone_number
                 this.name =     response.data.user.name
                 this.email =    response.data.user.email
                 this.images =    response.data.meta
                 this.image =   response.data.user.client_profile
            }

          })
          .catch(error=>{
            this.loader= false
            error.response
          })

    }

  }
</script>

<style scoped="">
.discover-text{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: 500 !important;
    line-height: normal !important;
    font-size: 18px !important;
    font-weight: bold !important;
    text-align: justify !important;
    color: #484848 !important;
}
.find-text{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: 300 !important;
    line-height: normal !important;
    font-size: 14px !important;
    text-align: center !important;
    color: #000000 !important;
}
.name{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 18px !important;
    text-align: justify !important;
    color: #484848 !important;

}
.text{
  font-family: Montserrat !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 13px !important;
  line-height: normal !important;
  color: #000 !important;
}
.title{
  font-family: Montserrat !important;
  font-style: normal !important;
  line-height: normal !important;
  font-weight: bold !important;
  font-size: 14px !important;
  text-align: justify !important;
  color: #484848 !important;
}
.card{
    border-radius:7px !important;
}
</style>

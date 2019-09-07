<template>
 <div class="main">
 <Loader v-show="loader" />
      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'BarberSettings', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> Profile </span>
           </v-flex>
        </v-layout>
        </v-container>

          <v-container>
             <v-layout row wrap justify-center class="ma-1">
              <v-flex xs12 md10 sm10>
                 <v-card class="card">
                     <v-card-text>
                      
                 <v-layout wrap align-center justify-center text-xs-center>
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
                    <v-flex  xs6 md6 sm6 class="py-3">
                      <v-avatar :tile = "tile" size = "150px" style = "border-radius:8px;">
                        <img style="border: 3px solid rgb(252, 214, 117);" :src="image">
                      </v-avatar>
                        <div @click='pickFile' style="border-radius: 50px;
                                                      margin-left: 121px;
                                                      position: relative;
                                                      margin-top: -32px;
                                                      height: 25px;
                                                      width: 28px;
                                                      background: rgb(252, 214, 117) none repeat scroll 0% 0%;">
                          <font-awesome-icon style="margin-top:5px;" size="1x" color="#000" :icon="['fas','camera']"/>  
                        </div>
                    </v-flex>
                  </template>
                          
                         <input
                            type="file"
                            style="display: none"
                            ref="image"
                            accept="image/*"
                            @change="onFilePicked"
                          >
                      </v-layout>
                      <v-layout row wrap text-xs-center class="pt-3">
                         <v-flex xs12>
                          <span class="name" v-text="name"> </span> <br />
                          <font-awesome-icon size="1x" color="#FCD675" :icon="['fas','mobile']"/>  <span class="text pl-1" v-text="email">   </span> <br />
                          <font-awesome-icon size="1x" color="#FCD675" :icon="['fas','envelope']"/>  <span class="text pl-1" v-text="phone"> </span> <br />
                         </v-flex>
                      </v-layout>
                      
                     </v-card-text>
                 </v-card>
              </v-flex>
            </v-layout> 

            <v-layout row wrap justify-center class="pt-2 ma-1">
              <v-flex xs12 md10 sm10>
               <v-card style="" class="elevation-0">
						<v-layout row wrap>
							<v-flex xs8 md12 sm12>
								<p class="shop-img">
									Add Your Images Here
								</p>
							</v-flex>
						</v-layout>
						<v-layout row wrap justify-center class="pb-2">
							<template v-if="images.length==0">
								<v-flex xs4 md3 sm3>
									<v-avatar :tile="tile" size="90px" color="grey lighten-4" style="border-radius:8px;">
										<img :src="require('../../../../assets/dummy.png')" alt="avatar">
									</v-avatar>
								</v-flex>
							</template>
							<template v-if="images.length>0">
               <v-layout row wrap justify-center text-xs-center mt-1>
                 <v-flex v-for="(image,index) in images" :key="index" xs4 md4 sm4>
									<v-avatar :tile="tile" size="90px" color="grey lighten-4" style="border-radius:8px;">
										<img :src="image.meta_value" style="border-radius:8px; !important" alt="avatar">
									</v-avatar>
								</v-flex>
               </v-layout> 
							</template>
							<v-flex xs3 md3 sm3 @click='pickFile' style=" border-radius:15px;">
								<v-container text-xs-center fill-height>
									<v-layout wrap align-center>
										<v-flex xs12 md12 sm12>
											<!-- <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>-->
											<input type="file" style="display:none" ref="image" accept="image/*" @change="onFilePicked1">
											<font-awesome-icon size="2x" :icon="['fas','plus-circle']"/>
										</v-flex>
									</v-layout>
								</v-container>
							</v-flex>
						</v-layout>
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
          imageName:'',
          imageUrl:'',
          imageFile:'',
          name:'',
          shopName:'',
          email:'',
          phone:'',
          address:'',
          images: [],
          tile:false,
          image :'',
      }
    },

     methods: {
        pickFile () {
             this.$refs.image.click()
         },
          onFilePicked1 (e) {
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
               this.images.push({meta_value:this.imageUrl})

               this.$store.dispatch('barberImages',{
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
               //this.images.push({meta_value:this.imageUrl})

               this.$store.dispatch('saveBarberProfile',{
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
    },

    mounted (){
          
          var el = document.getElementById('app')
          el.classList.remove('white-color')
          el.classList.add('grey-color')
          this.loader = true
          this.$store.dispatch('getBarberBasicInfo',{
              user_id: this.$store.getters.loggedInUserId,
          })
          
          .then(response => {
           this.loader = false
           if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
                 this.$router.push({ name: 'login', params: { } })
            }else{

                 this.phone =    response.data.user.phone_number
                 this.name =     response.data.user.name
                 this.shopName = response.data.user.shop_name
                 this.address =    response.data.user.address
                 this.email =    response.data.user.email
                 this.image =   response.data.user.barber_profile
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
    font-size: 18px !important;
    text-align: center !important;
    color: #000000 !important;
}
.name{
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: bold !important;
    line-height: normal !important;
    font-size: 18px !important;
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
    border-radius:5px !important;
}
.back-link{
    font-style: normal !important;
    font-weight: normal !important;
    line-height: normal !important;
    font-size: 18px !important;
    text-align: justify !important;
    color: black !important;
}
.shop-img{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 14px !important;
      text-align: center !important;
      color: #484848 !important;
}
</style>

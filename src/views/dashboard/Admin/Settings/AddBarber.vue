<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'Staffs', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> Add Barber </span>
           </v-flex>
        </v-layout>
      </v-container>

  <v-form ref="form1" v-model="valid" lazy-validation @submit.prevent="saloonSaveBarber">
      <v-container grid-list-xs,sm,md,lg,xl style="background-color:white;">

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


                          <template v-if="image!=''">
                             <v-flex xs6  md6 sm6 class="py-3">

                               <v-avatar
                                  :tile="tile"
                                  size="150px"
                                  color="grey lighten-4">

                                <img :src="image" alt="avatar">
                                </v-avatar>

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


        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md10 sm10>
            <span class="name"> Barber Name </span>
            <v-text-field
            :rules="nameRules"
             class="py-0 my-0"
             color="#000"
             v-model="name"
             required
             >  </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md10 sm10>
            <span class="name"> Email </span>
            <v-text-field
              :rules="emailRules"
              class="py-0 my-0"
              color="#000"
              v-model="email"
              required
              >  </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md10 sm10>
            <span class="name"> Pin Code </span>
            <v-text-field
            class="py-0 my-0"
            color="#000"
            :rules="pinCodeRules"
            v-model="pinCode"
            required
            >  </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md12 sm12>
            <span class="name"> Phone Number </span>
          </v-flex>

          <v-flex xs2 md10 sm10>
            <v-text-field
             v-model="code"
             required
             readonly
             color="#000"
           ></v-text-field>
          </v-flex>
          <v-flex xs10 md10 sm10>
            <v-text-field
             v-model="phone"
             :rules="phoneRules"
             required
             type="number"
             color="#000"
           ></v-text-field>
           </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md10 sm10>
            <span class="name"> Password </span>
            <v-text-field
             v-model="password"
             :rules="passRules"
             label="Password"
             required
             color="#000"
             type="password"
           ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout justify-center row wrap>
           <v-flex xs12 md10 sm10>
             <v-btn type="submit" v-show="addBtn" color="#FCD675" depressed block class="btn text-capitalize">Add</v-btn>
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
        <ModalBox
          :title = "title"
          :content = "content"
          btnText = "close"
          icon = "times-circle"
          ref="ModalBox"
         />
      </v-container>
  </v-form>
</div>
</template>
<script>
import ModalBox from '../../../../components/ModalBox'
  export default {
    components: {
       ModalBox
    },
    data () {
      return {
        code:'+44',
        title:'',
        content:'',
        image:'',
        imageName:'',imageUrl:'',imageFile:'',
        password:'',
        name:'',
        email:'',
        pinCode:'',
        valid: true,
        phone:'',
        addBtn :true,
        loader:false,
        tile: false,
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 50) || 'Name must be less than 30 characters'
        ],
        emailRules: [
          v => !!v || 'Email is required'
        ],
        pinCodeRules: [
          v => !!v || 'Code is required',
          v => (v && v.length == 4) || 'Code must be equal to 4 characters'
        ],
        phoneRules: [
          v => !!v || 'Phone Number is required',
          v => (v && v.length <= 10) || 'Phone Number must be less than or equal to 10 characters'
        ],
        passRules: [
          v => !!v || 'Password is required',
          v => (v && v.length <= 10) || 'Password must be less than 10 characters'
        ],
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
             })
           } else {
             this.imageName = ''
             this.imageFile = ''
             this.imageUrl = ''
           }
         },

        saloonSaveBarber(){
          if (this.$refs.form1.validate()) {
                this.addBtn = false
                this.loader = true
                this.$store.dispatch('saloonSaveBarber',{
                    phone_number: this.phone,
                    password: this.password,
                    name: this.name,
                    pin_code: this.pinCode,
                    email: this.email,
                    user_id: this.$store.getters.loggedInUserId,
                    ImageFile: this.imageFile,
                })
                .then(response => {
                  response.data
                  this.addBtn = true
                  this.loader = false
                  if(response.data.status!=undefined && response.data.status=='Token is Expired')
                  {
                    this.$router.push({ name: 'login', params: { } })
                  }else{
                     this.$router.push({ name: 'Staffs', params: { } })
                  }
                })
                .catch(error=>{
                  this.addBtn = true
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
        }
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
.name{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: 300 !important;
      line-height: normal !important;
      font-size: 14px !important;
      text-align: justify !important;
      color: #484848 !important;
}
.btn{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 14px !important;
      text-align: justify !important;
      color: #000 !important;
}
</style>

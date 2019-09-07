<template>
 <div class="main">
 <Loader v-show="loader" /> 
      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'Service', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> Add Service </span>
           </v-flex>
        </v-layout>
      </v-container>

  <v-form ref="form1" v-model="valid" lazy-validation @submit.prevent="SaveService">
      <v-container grid-list-xs,sm,md,lg,xl style="background-color:white;">

        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md10 sm10>
            <span class="name"> Service Name </span>
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
            <span class="name"> Duration </span>
            <v-text-field
            :rules="durationRules"
             class="py-0 my-0"
             color="#000"
             v-model="duration"
             required
             >  </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md10 sm10>
            <span class="name"> Price </span>
            <v-text-field
            :rules="priceRules"
             class="py-0 my-0"
             color="#000"
             v-model="price"
             required

             type="number"
             >  </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs12 md10 sm10>
            <span class="name"> Description </span>
            <v-textarea
              outline
               color="#000"
              name="input-7-7"
              v-model="description"
              required
              :rules="desRules"
              ></v-textarea>
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
import Loader from '../../../../components/Loader'
  export default {
    components: {
       ModalBox,
       Loader
    },
    data () {
      return {
        loader:false,
        serviceId:'',
        title:'',
        content:'',
        name:'',
        price:'',
        valid: true,
        duration:'',
        description:'',
        addBtn :true,
        tile: false,
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 50) || 'Name must be less than 30 characters'
        ],
        durationRules: [
          v => !!v || 'Duration is required',
          v => (v && v.length <= 50) || 'Duration must be less than 30 characters'
        ],
        priceRules: [
          v => !!v || 'Price is required',
          v => (v && v.length <= 10) || 'Price Number must be less than or equal to 10 characters'
        ],
        desRules: [
          v => !!v || 'Description is required'

        ],
      }
    },

    methods: {

        SaveService(){ 

          if (this.$refs.form1.validate()) {
                this.addBtn = false
                this.loader = true
                this.$store.dispatch('SaveService',{
                    name: this.name,
                    service_id: this.serviceId,
                    duration: this.duration,
                    price: this.price,
                    description: this.description,
                    user_id: this.$store.getters.loggedInUserId,
                })
                .then(response => {
                  response.data
                  this.addBtn = true
                  this.loader = false
                  if(response.data.status!=undefined && response.data.status=='Token is Expired')
                  {
                    this.$router.push({ name: 'login', params: { } })
                  }else{
                     this.$router.push({ name: 'Service', params: { } })
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
    },
    mounted(){

    if(this.$route.params.serviceId)
    { 
      this.loader=true
      this.$store.dispatch('getSingleService',{
          service_id: this.$route.params.serviceId
      })
      .then(response => {
        this.loader=false
        if(response.data.status!=undefined && response.data.status=='Token is Expired')
        {
             this.$router.push({ name: 'login', params: { } })
        }else{

            this.name = response.data.service.name
            this.price = response.data.service.price
            this.duration = response.data.service.duration
            this.description = response.data.service.description
            this.serviceId = response.data.service.id
        }

      })
      .catch(error=>{
        this.loader=false
        error.response
      })
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
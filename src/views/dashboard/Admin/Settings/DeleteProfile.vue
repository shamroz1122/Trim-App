<template>
 <div class="main">

      <v-container fluid style="background-color:#FCD675;" >
        <v-layout row wrap text-md-center>
            <v-flex  xs2 md2 sm2>
            <router-link  :to="{ name: 'Staffs', params: {} }">  <font-awesome-icon class="back-link" large   :icon="['fas','arrow-left']"/></router-link>
           </v-flex>
           <v-flex xs8 md8 sm8>
             <span class="find-text"> {{ name }}</span>
           </v-flex>
        </v-layout>
      </v-container>

     <v-container grid-list-xs,sm,md,lg,xl style="height:35vh;">
        <v-layout row wrap text-xs-center justify-center class="pt-4">
           <v-flex xs12 md4 sm4>
             <v-avatar
               :tile="tile"
               size="200px"
               color="grey lighten-4"
             >
               <img :src="image!=''?image:require('../../../../assets/dummy.png')" alt="avatar">
             </v-avatar>
           </v-flex>
        </v-layout>
        <v-layout row wrap text-xs-center class="pt-4">
           <v-flex xs12 md12 sm12>
             <span class="title" > {{ name }} </span>
             <p class="text">  {{ phone }} </p>
           </v-flex>
        </v-layout>
        <v-layout align-end justify-center row fill-height>
           <v-flex xs12 md6 sm8>
             <v-btn @click="deleteBarber" v-show="deleteBtn" color="#FF5555" block class="delete-btn">Delete Barber</v-btn>
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
     </v-container>

</div>
</template>
<script>

  export default {
    data () {
      return {
        tile:false,
        name:'',
        phone:'',
        image:'',
        deleteBtn :true,
        loader:false,
      }
    },
    methods:{
      deleteBarber () {
        this.deleteBtn = false
        this.loader = true

        this.$store.dispatch('deleteBarber',{
            user_id: this.$route.params.userId
        })
        .then(response => {

          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
               this.$router.push({ name: 'login', params: { } })

          }else{

               this.$router.push({ name: 'Staffs', params: { } })

          }

        })
        .catch(error=>{
          error.response
        })

       },
    },
    mounted (){

      var interval =   setTimeout(function(){
      var el = document.getElementById('app')
      el.classList.remove('grey-color')
      el.classList.add('white-color')
      clearTimeout(interval);
    }, 100);

          this.$store.dispatch('getSingleBarber',{
              user_id: this.$route.params.userId
          })
          .then(response => {

            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
                 this.$router.push({ name: 'login', params: { } })
            }else{

              //  console.log(response.data.user)
                this.name = response.data.user.name
                this.phone = response.data.user.phone_number
                this.image = response.data.user.barber_profile

            }

          })
          .catch(error=>{
            error.response
          })

    },
    destroyed () {
      var el = document.getElementById('app')
      el.classList.remove('white-color')
      el.classList.add('grey-color')
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
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 18px !important;
      color: #484848 !important;
}
.text{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: 300 !important;
      line-height: normal !important;
      font-size: 12px !important;
      color: #484848 !important;
}
.delete-btn{
      font-family: Montserrat !important;
      font-style: normal !important;
      font-weight: bold !important;
      line-height: normal !important;
      font-size: 14px !important;
      text-align: justify !important;
      color: #FFFFFF !important;
}
</style>

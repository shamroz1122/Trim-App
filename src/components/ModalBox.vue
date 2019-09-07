<template>
  <div text-xs-center>
    <v-dialog text-xs-center v-model="dialog"  width="500">
      <v-card text-xs-center>
        <v-card-title justify-center text-xs-center style="background-color:#FCD675;text-align:center !important" class="title" >
          <v-layout row wrap>
            <v-flex xs12 >
              <font-awesome-icon size="2x"  :icon="['fas',icon]"/>
            </v-flex>
            <v-flex xs12 class="mt-4" >
              {{ title }}
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text >
            <v-layout row wrap  text-xs-center>
                <v-flex xs12 class="content" >
                    {{ content }}
                    <slot></slot>
                </v-flex>
            </v-layout>
        </v-card-text>
          <v-spacer></v-spacer>
            <v-layout row wrap text-xs-center>
                <v-flex xs12 class="mx-5 my-3">
                  <v-btn color="#FCD675"   block class="close-btn" round depressed @click = "setValue(false); cancelBooking()">
                    {{ btnText }}
                  </v-btn>
                </v-flex>
            </v-layout>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>

  export default {
    name:'ModalBox',
    props:{
      title:String,
      content:String,
      btnText:String,
      icon:String,
      action: {
         type: String,
         default: ''
      },
      text:String,
      clientId:String,
      date:String,
      time:String
    },
    data () {
      return {
        dialog: false
      }
    },
    methods: {
      setValue: function(value) {
         
          this.dialog = value
          if(this.action!='' && this.dialog == false)
            {
                this.$router.push({ name:this.action, params: { }})
            }
      },
      cancelBooking: function(value) {
         
          if(this.action!='' && this.dialog == false)
          {
                this.$router.push({ name:this.action, params: {  }})

                this.$store.dispatch('savebarberNotification', {
                user_id: this.$store.getters.loggedInUserId,  
                notification:this.text,
                clientId:this.clientId,
                date:this.date,
                time:this.time,
              }) 
            .then(response => {

              if(response.data.status!=undefined && response.data.status=='Token is Expired')
              {
                   this.$router.push({ name: 'login', params: { } })
              }else{
                     // var newData = response.data.new_time
                     // this.timeslots = newData
                 }
            })
            .catch(error=>{
              error.response
            }) 
          }
      },
    }
    
  }
</script>
<style media="screen" scoped="">
  .title{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 18px;
    text-align: justify;

    color: #484848;
  }
  .content{
    font-family: Montserrat;
    font-style: normal;
    line-height: normal;
    font-size: 14px;
    text-align: center;
    color: #000000;
  }
  .close-btn{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    color: #484848;
  }
</style>

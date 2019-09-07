<template>
  <v-app style="background-color:#000000">
     <v-content>
        <div v-if="progressBar">
          <v-container>
            <v-layout row wrap align-center justify-center text-xs-center>
                <v-flex xs12 md6 sm6 >
                  <v-responsive >
                    <v-img
                      size = "200"
                      :src="require('../assets/logo1.png')"
                      contain
                    ></v-img>
                  </v-responsive>
                </v-flex>
            </v-layout>
            <v-layout row wrap  justify-center text-xs-center>
                <v-flex xs12 md6 sm6  class="px-4" >
                  <v-progress-linear
                    class="progree-bar"
                    v-model="value"
                    :active="show"
                    :indeterminate="query"
                    :query="true"
                    color="#FCD675"
                    ></v-progress-linear>
                </v-flex>
            </v-layout>
          </v-container>

        </div>

        <v-fade-transition>
          <div v-if="termsCond">
          <v-container>
            <v-layout row wrap justify-center text-xs-center class="ma-3" >
                <v-flex xs12 md6 sm6  >
                  <v-carousel height="436"   hide-controls>
                      <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                      >
                      <v-card light tile color="white" class="dark--text pa-3 my-5 ">
                         <v-card-title primary-title >
                           <div>
                             <div class="headline" v-text="item.title"></div>
                             <p class="text"  v-text="item.text"></p>
                           </div>
                         </v-card-title>
                       </v-card>
                    </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>

           <v-layout row justify-center text-xs-center wrap>
                <v-flex xs12 md6 sm6 >
                 <v-btn class="fb-btn" block :to="{ name: 'main', params: {} }" > DONE </v-btn>
                </v-flex>
            </v-layout>

          </v-container>
          </div>
        </v-fade-transition>

      </v-content>
    </v-app>
</template>
<script>
  export default {
    data () {
      return {
        value: 0,
        query: false,
        show: true,
        interval: 0,
        progressBar:true,
        termsCond:false,
        items: [
        {
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
          title: "Lorem Ipsum"
        },
        {
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
          title: "Lorem Ipsum"
        },
        {
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
          title: "Lorem Ipsum"
        },
        {
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
          title: "Lorem Ipsum"
        }
      ]
      }
    },

    mounted () {
      this.queryAndIndeterminate()

    },

    beforeDestroy () {
      clearInterval(this.interval)

    },

    methods: { 
      queryAndIndeterminate () {
        this.query = true
        this.show = true
        this.value = 0

        setTimeout(() => {
          this.query = false

          this.interval = setInterval(() => {
            if (this.value === 100) {
              clearInterval(this.interval)
              this.show = false
              this.progressBar = false
              this.termsCond = true

              return  setTimeout(this.queryAndIndeterminate, 2000)
            }
            this.value += 25
          }, 1000)
        }, 2500)
      }
    }
  }
</script>
<style media="screen" scoped="">
.progree-bar{
   top: 100px;
   border-radius: 3.5px;
   background: #FFFFFF;
}
.headline{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 18px;
  color: #484848;
}
.text{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 12px;
  text-align: justify !important;
  color: #484848;
  padding: 10% 0;
}
.fb-btn{
  background: #FCD675 !important;
  height: 50px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: BOLD;
  line-height: normal;
  font-size: 14px;
  letter-spacing: 0.15em;
  text-transform: none;
  color: #484848 !important;
}

</style>

<template>
 <div class="main">

     <v-container fluid style="background-color:#FCD675;" >

           <v-layout  row wrap >
             <v-flex   xs11 md11  sm11 >
                <span class="discover-text">Discover</span> <br />
                <span class="find-text">Find the perfect barber</span>
             </v-flex>
             <v-flex  xs1 md1 sm1 >
                 <v-icon large>toc</v-icon>
             </v-flex>
          </v-layout>

          <v-layout  row wrap text-xs-center just justify-center class="pt-3">
                <v-flex xs12 sm8 md8>
                <v-text-field
                prepend-inner-icon="search"
                 placeholder="Any Salon . Even Field street, London"
                 solo
                 >
                </v-text-field>
                </v-flex>
         </v-layout>
         </v-container>





        <v-layout row wrap text-xs-center just justify-center class="pt-3">
             <v-flex xs8 md3 sm6>

               <v-responsive>
                 <v-img
                   :src="require('../assets/not-found.png')"

                 ></v-img>
               </v-responsive>

             </v-flex>
         </v-layout>
         <v-layout row wrap text-xs-center just justify-center class="pt-5">
              <v-flex xs8 md3 sm6>

                <p class="title">NO RESULT FOUND </p>
                <p class="description">  No result found for term “Type something” please
                  try again with different search term. </p>
              </v-flex>
          </v-layout>

          <v-layout row wrap text-xs-center just justify-center class="pt-3">
               <v-flex xs8 md6 sm6>

                <v-btn class="login-btn" depressed block >Search Again</v-btn>
               </v-flex>
           </v-layout>

           <v-container fluid grid-list-xs,sm,md,lg,xl>
           <v-layout row wrap>
                 <v-flex xs12>
                 <v-bottom-nav
                    :active.sync="bottomNav"
                    :value="true"
                    fixed
                    color="#474747"
                  >
                    <v-btn
                      color="#FCD675"
                      flat
                      value="recent"
                    >
                      <span class="btn-title" >Discover</span>
                     <font-awesome-icon size="2x"  :icon="['fas','globe']"/>
                    </v-btn>

                    <v-btn
                      color="#FCD675"
                      flat
                      value="nearby"
                    >
                      <span class="btn-title">Nearby</span>
                      <v-icon>place</v-icon>
                    </v-btn>

                    <v-btn
                      color="#FCD675"
                      flat
                      value="favorites"
                    >
                      <span class="btn-title">Favorites</span>
                      <v-icon>favorite</v-icon>
                    </v-btn>

                    <v-btn
                      color="#FCD675"
                      flat
                      value="booking"
                    >
                      <span class="btn-title">My Booking</span>
                     <font-awesome-icon size="2x"  :icon="['fas','book-open']"/>
                    </v-btn>

                    <v-btn
                      color="#FCD675"
                      flat
                      value="person"
                    >
                      <span class="btn-title">Person</span>
                      <v-icon>person </v-icon>
                    </v-btn>

                  </v-bottom-nav>
             </v-flex>

           </v-layout>
         </v-container>

 </div>
</template>


<style scoped="">
.upper-div{
  background-color:#FCD675;
}
.login-btn{
  font-family: Montserrat;
  font-style: normal;
  font-weight:bold !important;
  line-height: normal;
  font-size: 14px;
  height: 48px;
  background: #FCD675 !important;
  color: #484848;
  text-transform: capitalize;
}
.title{
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
line-height: normal;
font-size: 18px;
text-align: center;
letter-spacing: 0.2em;
color: #484848;
}
.description{
  font-family: Montserrat;
font-style: normal;
font-weight: 300;
line-height: normal;
font-size: 14px;
text-align: center;

color: #484848;
}
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
</style>

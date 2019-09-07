<template>
	<div>
		<div class="below-loader">
			<v-layout text-xs-center row wrap justify-center mt-5>
				<v-flex xs12>
					<v-responsive>
						<v-img height="250px" :src="require('../assets/logo1.png')" contain>
						</v-img>
					</v-responsive>
				</v-flex>
       </v-layout>
      <v-layout text-xs-center row wrap justify-center mt-5>  
				<v-progress-circular class="progress-bar" :size="50" color="rgb(252, 214, 117) !important" indeterminate>
				</v-progress-circular>
			</v-layout>
		</div>
	</div>
</template>

<script>

  export default {
  data () {
  return {
       }
     }
  }

</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>

<style scoped>
.progress-bar{
    margin: 0 auto;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 100%;
    z-index: 9999;
}
.below-loader{
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;  
    background: white;
    position: fixed;
    z-index: 9;
} 
</style>
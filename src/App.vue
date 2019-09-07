<template>
       
         <router-view></router-view>

</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>

<style media="screen">
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import url('https://maps.googleapis.com/maps/api/js?key=AIzaSyCAwX5DJjr0fC7_vp6_WVO6Ut16hXTuK1g&libraries=places&callback=initMap'); 

.router-anim-enter-active {
  animation: coming .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-80px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-80px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

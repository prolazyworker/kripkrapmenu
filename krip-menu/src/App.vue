<template>
  <div id="main">
    <navBar></navBar>
    <router-view/>
  </div>
</template>

<script>
import navBar from '@/components/NavBar'
export default {
  components: {
    navBar: navBar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hind+Guntur:wght@300&display=swap');


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 100%;
}

#app {
  /* padding: 50px; */
  background-image: url(assets/background.jpg);
   /* Add the blur effect */
  /* filter: blur(8px); */
  /* -webkit-filter: blur(8px); */

  
  /* Full height */
  height: 100%; 
  width: auto;
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#app div {
  backdrop-filter: blur(10px);

}

</style>

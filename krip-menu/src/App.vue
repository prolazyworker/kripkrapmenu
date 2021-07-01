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
  background-image: url(assets/background.jpg);
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#app > div {
  backdrop-filter: blur(30px);
}

</style>

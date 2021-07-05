<template>
  <div id="main">
    <navBar></navBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import navBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  components: {
    navBar: navBar,
    Footer: Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hind+Guntur:wght@300&display=swap');

@font-face {
  font-family: "Moontime";
  src: local("Moontime"),
   url(./assets/fonts/moontime.ttf) format("truetype");
} 

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 100%;
}

body,
html {
  width: auto;
  height: 100vh;
}

#app {
  min-height: 100%;
  width:100vw;
  max-width: 100%;
  /* background-image: url(assets/background.jpg); */
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: rgb(228, 218, 231);
}

#app > div {
  min-height: 100%;
  width:100vw;
  max-width: 100%;
  /* backdrop-filter: blur(30px); */
}

</style>

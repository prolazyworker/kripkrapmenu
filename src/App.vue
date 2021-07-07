<template>
  <div id="main">
    <navBar></navBar>
    <div class="content-wrap">
      <router-view/>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Hind+Guntur&display=swap');

@font-face {
  font-family: "Moontime";
  src: local("Moontime"),
  url(./assets/fonts/moontime.ttf) format("truetype");
} 


:root {
  --footer-height: 60px;
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
  overflow-x: hidden; 
}

#app {
  height: auto;
  width:100vw;
  max-width: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  background: rgb(228, 218, 231);
}

#app > div {
  height: auto;
  width:100vw;
  max-width: 100%; 
  /* backdrop-filter: blur(30px); */
}

#main {
  position: relative;
  min-height: 100vh;
}

.content-wrap {
  padding-bottom: var(--footer-height);
}

footer {
  position: absolute;
  bottom: 0;
  padding-top: 20px;
  width: 100%;
  height: var(--footer-height);
  color: white;
  background-color: #383838;
  display: flex;
  flex-direction: column;
  align-items: center; 
}

</style>

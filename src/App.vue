<template>
  <div id="main">
    <navBar></navBar>
    <div class="content-wrap">
      <router-view/>
    </div>
    <!-- <button @click="moveUp" class="go-top" title="Go to top">Shko lart</button> -->
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

var mybutton = document.getElementsByClassName("go-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {topFunction()};

function topFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // mybutton.style.display = "block";
    mybutton.classList.add('visible-button')

  } else {
    mybutton.classList.remove('visible-button')
    // mybutton.style.display = "none";
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

@font-face {
  font-family: "Moontime";
  src: local("Moontime"),
  url(./assets/fonts/moontime.ttf) format("truetype");
} 

:root {
  --footer-height: 83px;
  --opacity-full: 100%;
  --load-page-transition: 0.5s;
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

/* SCROLLBAR */

::-webkit-scrollbar {
  width: 10px;
  background: #f8eaff;
}

::-webkit-scrollbar-track {
  background: #f8eaff;
}

::-webkit-scrollbar-thumb {
  background: rgb(193, 154, 202); 
  border-radius: 12px;

}


.content-wrap {
  padding-bottom: var(--footer-height);
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-column {
  display: flex;
  flex-direction: column;
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

.go-top {
  position: fixed;
  right: 50px;
  bottom: 65px;
  border: 0;
  border-bottom: 2px solid #fff;
  border-radius: 12px;
  padding: 5px 8px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  text-align: center;
  align-self: flex-end;
  justify-content: center;
  color: #fff;
  background: none;
  opacity: 100%;
  cursor: pointer;
  border-color: hsl(286, 21%, 80%);
  transition-property: opacity, color, border-color, right, bottom;
  transition-duration: 0.3s;
  z-index: 2;
}

.go-top:hover {
  color: #e7018f;
}

.visible-button {
  pointer-events: all;
  opacity: 100%;
}

/* RESPONSIVENESS */

@media (max-width: 428px) {
  :root {
    --footer-height: 135px;
  }
}

@media (max-width: 417px) {
  .go-top {
    right: 25px;
    bottom: 25px;
  }
}

</style>

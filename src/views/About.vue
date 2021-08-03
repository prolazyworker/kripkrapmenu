<template>
  <div class="about-main">
    <div v-bind:class="{'main-content': true, loaded: isLoaded}">
      <div v-bind:class="{top: true}">
        <h1>Kush jemi ne?</h1>
        <hr class="divider">
      </div>

      <div class="slidershow">
        <div class="slides">
          <input type="radio" name="r" id="r1" checked>
          <input type="radio" name="r" id="r2">
          <input type="radio" name="r" id="r3">
          <input type="radio" name="r" id="r4">
          <input type="radio" name="r" id="r5">
          <!-- Slider IMAGE LINKS -->
          <div class="slide s1">
            <img src="../assets/menu-items/gallery/16.jpg" alt="">
          </div>
          <div class="slide">
            <img src="img/2.jpg" alt="z">
          </div>
          <div class="slide">
            <img src="img/3.jpg" alt="">
          </div>
          <div class="slide">
            <img src="img/4.jpg" alt="">
          </div>
          <div class="slide">
            <img src="img/5.jpg" alt="">
          </div>
        </div>

        <div class="slide-navigation">
          <label for="r1" class="bar"></label>
          <label for="r2" class="bar"></label>
          <label for="r3" class="bar"></label>
          <label for="r4" class="bar"></label>
          <label for="r5" class="bar"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    }
  },
  methods: {
    loadPage() {
      setTimeout(() => { 
        this.isLoaded = true,
        setTimeout(() => {
          var menu = document.getElementsByClassName("main-content")
          menu.forEach(menuPage => {
            menuPage.style.transitionDuration  = '0.2s';
          });
        }, 700)
      }, 100)
    },
  },
  mounted() {
    this.loadPage();
  },
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.about-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content {
  width: 80%;
  padding: 50px;
  border-radius: 12px;
  opacity: 0;
  margin: 25px auto;
  background: #f8eaff;
  transform: translateY(75px);
  transition-property: box-shadow, opacity, transform;
  transition-duration: var(--load-page-transition);
}

.loaded {
  opacity: var(--opacity-full);
  transform: translateY(0);
}

.top {
  /* font-family: 'Montserrat', sans-serif; */
  font-family: 'Dancing Script', cursive;
}

h1 {
  margin: 20px 0;
  width: fit-content;
  margin: auto;
  font-size: 48px;
  color: rgb(166, 65, 189);
  background: hsl(280, 100%, 90%);
  border-radius: 12px;
  padding: 10px 15px;
}

.divider {
  border: none;
  /* border-bottom: 2px solid hsl(280, 100%, 85%); */
  border: 0;
  height: 2px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), hsl(280, 100%, 85%), rgba(0, 0, 0, 0));
  margin: 25px 0;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Muli:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

#title {
  font-family: 'Dancing Script', cursive;
  text-align: center;
  font-size: 4em;
  color:#fff;
  color: rgb(166, 65, 189);
  background: #f8eaff;
  background: #eeccff;
  border-radius: 12px;
  width: fit-content;
  padding: 25px;
  margin: auto;
  margin-top: 25px;
}

.slider-container {
  width: 85%;
  margin: auto;
  margin-top: 50px;
}

/* SLIDER1 */
.slidershow{
  width: 700px;
  width: 85%;
  height: 650px;
  overflow: hidden;
  align-self: center;
  margin: auto;
  margin-top: 50px;
  transition: 0.3s;
}

.slidershow:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
}

.slider-left-side{
  float: left;
  margin-left: 1%;
 }

.slide-navigation{
   position: relative;
   bottom: 7%;
   margin-bottom: 50px;
   justify-content: center;
   display: flex;
}
 /* Slider Controls */
.bar{
  width: 25px;
  height: 12px;
  border: 2px solid #f8eaff;
  border-radius: 12px;
  margin: 2px;
  cursor: pointer;
  transition: 0.4s;
}

/* 
#f8eaff
 */
 /* Slider Controls : COLOR Transition*/
.bar:hover{
  background: rgb(193, 154, 202);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);
}
/* Hide Radio Buttons */
input[name="r"]{
  position: absolute;
  visibility: hidden;
}
 
.slides{
  width: 500%;
  height: 100%;
  display: flex;
 }
 /* Slider picture Width Scaling*/
.slide{
  width: 20%;
  transition: 0.5s ease;
 }
  /* Slider picture Overall Scaling and positioning*/
.slide img{
  width: 100%;
  height: 100%;
  object-fit: cover;
 }
 
#r1:checked ~ .s1{
   margin-left: 0;
 }
 #r2:checked ~ .s1{
   margin-left: -20%;
 }
 #r3:checked ~ .s1{
   margin-left: -40%;
 }
#r4:checked ~ .s1{
   margin-left: -60%;
 }
#r5:checked ~ .s1{
   margin-left: -80%;
 }

/* Slideshow container */
 .slideshow-container {
  display: flex;
  position: relative;
  background: #f1f1f1f1;
  width: 500px;
  height: 300px;
  margin: 0 1%;
}

</style>

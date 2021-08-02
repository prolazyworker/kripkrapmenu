<template>
  <div class="menu-main">
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
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      topping_1: require('../assets/menu-toppings/Asset 1.svg'),
      topping_2: require('../assets/menu-toppings/Asset 3.svg'),
      topping_3: require('../assets/menu-toppings/Asset 4.svg'),
      topping_4: require('../assets/menu-toppings/Asset 5.svg'),
      topping_5: require('../assets/menu-toppings/Asset 7.svg'),
      topping_6: require('../assets/menu-toppings/Asset 8.svg'),
      topping_7: require('../assets/menu-toppings/Asset 11.svg'),
      topping_8: require('../assets/menu-toppings/Asset 12.svg'),
      topping_9: require('../assets/menu-toppings/Asset 13.svg'),
      topping_10: require('../assets/menu-toppings/Asset 16.svg'),
      topping_11: require('../assets/menu-toppings/Asset 17.svg'),
      topping_12: require('../assets/menu-toppings/Asset 18.svg'),
      topping_13: require('../assets/menu-toppings/Asset 19.svg'),

      jam_1: require('../assets/menu-toppings/Asset 21.svg'),
      jam_2: require('../assets/menu-toppings/Asset 21.svg'),
      jam_3: require('../assets/menu-toppings/Asset 22.svg'),
      jam_4: require('../assets/menu-toppings/Asset 24.svg'),
      jam_5: require('../assets/menu-toppings/Asset 25.svg'),
      jam_6: require('../assets/menu-toppings/Asset 26.svg'),
      jam_7: require('../assets/menu-toppings/Asset 27.svg'),
      jam_8: require('../assets/menu-toppings/Asset 28.svg'),
      jam_9: require('../assets/menu-toppings/Asset 29.svg'),
      jam_10: require('../assets/menu-toppings/Asset 31.svg'),
      jam_11: require('../assets/menu-toppings/Asset 31.svg'),
      jam_12: require('../assets/menu-toppings/Asset 30.svg'),

      sauce_1: require('../assets/menu-toppings/Sauce.svg'),
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Muli:wght@500&display=swap');

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

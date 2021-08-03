<template>
    <div class="menu-main">
        <div onclick="" v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
          <div class="top">
            <h1 class="menu-title">Pije</h1>
            <img class='logo' src="@/assets/krip-krap.png" alt="">
          </div>
          <div  class="menu">
            <div onclick="" class="flex-row menu-option">
              <p>Ujë pa gaz<img id="water" src="@/assets/menu-items/drinks/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">............................................</span></p><span>0.70€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Ujë me gaz<img id="carboWater" src="@/assets/menu-items/drinks/carboWater.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">..........................................</span></p><span>0.70€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Ice Tea<img id="iceTea" src="@/assets/menu-items/drinks/ice-tea.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">.................................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Coca Cola<img id="cola" src="@/assets/menu-items/drinks/cola.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">............................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Fanta<img id="fanta" src="@/assets/menu-items/drinks/fanta.png" alt="menu-item"> <span class="spacing" style="letter-spacing: 3px;">...................................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Schweppers<img id="schweppers" src="@/assets/menu-items/drinks/schweppers.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">..........................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Sprite<img id="sprite" src="@/assets/menu-items/drinks/sprite.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">....................................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Tonic<img id="tonic" src="@/assets/menu-items/drinks/tonic.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">....................................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Portokall<img id="orange" src="@/assets/menu-items/drinks/orange.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">...............................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Vishnje<img id="cherry" src="@/assets/menu-items/drinks/cherry.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">..................................................</span></p>
              <span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Pjeshkë<img id="peach" src="@/assets/menu-items/drinks/peach.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.................................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Mollë<img id="apple" src="@/assets/menu-items/drinks/apple.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">....................................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Fruta Mali<img id="wildBerries" src="@/assets/menu-items/drinks/wildBerries.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.............................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Ace<img id="bravo" src="@/assets/menu-items/drinks/bravo.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.......................................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Frappe<img id="frappe" src="@/assets/menu-items/drinks/frappe.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">..................................................</span></p><span>1.20€</span>
            </div>
          </div>
          <div class="bottom">
            <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrap/drinksfrozen</a></p>
            <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
          </div>
        </div>

        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
          <div class="top">
            <h1 class="menu-title">Toppings</h1>
            <img class='logo' src="@/assets/krip-krap.png" alt="">
          </div>
          <div class="menu">
            <div class="flex-column" style="width: 100%;">
              <h2 class="submenu-title">REÇEL / JAM</h2>
              <div class="flex-row jams-main">
                <div class="flex-column jam">
                  <img :src="jam_1" alt="Jam">
                  <p>Vishnje</p>
                </div>
                <div class="flex-column jam">
                  <img :src="jam_2" alt="Jam">
                  <p>Fruta mali</p>
                </div>
                <div class="flex-column jam">
                  <img :src="jam_3" alt="Jam">
                  <p>Nutella</p>
                </div>
                <div class="flex-column jam">
                  <img :src="jam_4" alt="Jam">
                  <p>Nutella dredhëz</p>
                </div>
                <div class="flex-column jam">
                  <img :src="jam_5" alt="Jam">
                  <p>Dredhëz</p>
                </div>
                <div class="flex-column jam">
                  <img :src="jam_6" alt="Jam">
                  <p>Karamel</p>
                </div>
                <div class="flex-column jam">
                  <img :src="jam_7" alt="Jam">
                  <p>Passion fruit</p>
                </div>
              </div>
              <h2 class="submenu-title">NUTS / ARRA</h2>
              <div class="flex-row nuts-main">
                <div class="flex-column nuts">
                  <img :src="ico_6" alt="Nuts">
                </div>
                <div class="flex-column nuts">
                  <img :src="ico_7" alt="Nuts">
                </div>
                <div class="flex-column nuts">
                  <img :src="ico_8" alt="Nuts">
                </div>
                <div class="flex-column nuts">
                  <img :src="ico_9" alt="Nuts">
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
            <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
          </div>
        </div>

        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
          <div class="top">
            <h1 class="menu-title">Frozen Yogurt</h1>
            <img class='logo' src="@/assets/krip-krap.png" alt="">
          </div>
          <div class="menu menu-yogurts">
            <div class="flex-row menu-option">
              <p>Strawberry Frozen Yogurt<img src="@/assets/menu-items/drinks/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.....................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Nutella Frozen Yogurt<img src="@/assets/menu-items/drinks/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">...........................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Strawberry Nutella Frozen Yogurt<img src="@/assets/menu-items/drinks/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.........</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Passion Fruit Frozen Yogurt<img src="@/assets/menu-items/drinks/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">..................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Cherry Frozen Yogurt<img src="@/assets/menu-items/drinks/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">............................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Wildfruits Frozen Yogurt<img src="@/assets/menu-items/drinks/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.......................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>XL Frozen Yogurt<img src="@/assets/menu-items/drinks/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">.................................</span></p><span>2.00€</span>
            </div>
            <div class="ul-options frozen-yogurt-ico" >
              <img :src="ico_1" alt="Ico">
              <p>Një shije/topping 30 cent e përfshirë në çmim</p>
            </div>
          </div>
          <h1 id="iceCreamTitle">Ice Cream</h1>
          <div class="menu menu-ice-creams">
            <div class="flex-row menu-option">
              <p>1/2 Porcion<img src="@/assets/menu-items/drinks/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">............................................</span></p><span>1.00€</span>
            </div>
            <div class="flex-row menu-option">
              <p>1 Porcion<img src="@/assets/menu-items/drinks/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">...............................................</span></p><span>1.50€</span>
            </div>
            <div class="flex-row menu-option">
              <p>Kupa<img src="@/assets/menu-items/drinks/water.png" alt="menu-item"><span class="spacing" style="letter-spacing: 3px;">....................................................</span></p><span>0.50€</span>
            </div>

            <div class="ul-options frozen-yogurt-ico" >
              <img :src="ico_2" alt="Ico">
            </div>
          </div>
              
          <div class="bottom">
            <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
            <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
          </div>
        </div>

        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
          <div class="top">
            <h1 class="menu-title">Waffles</h1>
            <img class='logo' src="@/assets/krip-krap.png" alt="">
          </div>
          <div class="menu menu-waffles">
            <div @mouseover="waffle_menu = waffle_1" @mouseleave="waffle_menu = ''" class="flex-row menu-option menu-hover-option">
              <p>Fruit Waffle<span class="spacing" style="letter-spacing: 3px;">..........................................</span></p>
              <span>2.50€</span>
              <span class="alternativeText">Banane, kiwi, dredhëz, nutella</span>
            </div>
            <div @mouseover="waffle_menu = waffle_2" @mouseleave="waffle_menu = ''" class="flex-row menu-option menu-hover-option">
              <p>Nutella Waffle<span class="spacing" style="letter-spacing: 3px;">.....................................</span></p>
              <span>2.00€</span>
              <span class="alternativeText">Nutella,keksa të bluar</span>
            </div>
            <div @mouseover="waffle_menu = waffle_3" @mouseleave="waffle_menu = ''"  class="flex-row menu-option menu-hover-option">
              <p>Oreo Waffle<span class="spacing" style="letter-spacing: 3px;">.........................................</span></p>
              <span>2.50€</span>
              <span class="alternativeText">Çokollatë e bardhë, oreo & akullore</span>
            </div>
            <div @mouseover="waffle_menu = waffle_4" @mouseleave="waffle_menu = ''" class="flex-row menu-option menu-hover-option">
              <p>Raffaelo Waffle<span class="spacing" style="letter-spacing: 3px;">....................................</span></p>
              <span>2.50€</span>
              <span class="alternativeText">Çokollatë e bardhë, kokos, rafaello</span>
            </div>
            <div @mouseover="waffle_menu = waffle_5" @mouseleave="waffle_menu = ''" class="flex-row menu-option menu-hover-option" value="">
              <p>Orange Delight Waffle<span class="spacing" style="letter-spacing: 3px;">.........................</span></p>
              <span>2.00€</span>
              <span class="alternativeText">Çokollatë e bardhë, kokos, rafaello</span>
            </div>

            <b class="hover-menu-text">HOVER/TAP ON A MENU</b>

            <div class="waffle-container">
              <img class="waffle-menu" :src="waffle_menu">
            </div>

          </div>

          <h1 class="menu-title title-middle">Pancakes</h1>
          <div class="menu menu-pancakes">
            <div @mouseover="pancake_menu = pancake_1" @mouseleave="pancake_menu = ''" class="flex-row menu-option">
              <p>Nutella Pancakes<span class="spacing" style="letter-spacing: 3px;">..................................</span></p>
              <span>2.50€</span>
              <span class="alternativeText">Nutella, keks i bluar</span>
            </div>
            <div @mouseover="pancake_menu = pancake_2" @mouseleave="pancake_menu = ''" class="flex-row menu-option">
              <p>Krip Krap Pancakes<span class="spacing" style="letter-spacing: 3px;">...............................</span></p>
              <span>2.00€</span>
              <span class="alternativeText">Mjatë, arra, lajthi</span>
            </div>
            <div @mouseover="pancake_menu = pancake_3" @mouseleave="pancake_menu = ''" class="flex-row menu-option">
              <p>Wild Berries Pancake<span class="spacing" style="letter-spacing: 3px;">............................</span></p>
              <span>2.00€</span>
              <span class="alternativeText">Xhem i frutave të malit</span>
            </div>
            <!-- <div class="ul-options frozen-yogurt-ico">
              <img :src="ico_4" alt="Ico">
            </div> -->
            <b class="hover-menu-text2">HOVER/TAP ON A MENU</b>
          
            <div class="pancake-container">
              <img class="pancake-menu" :src="pancake_menu">
            </div>
          </div>

          <div class="bottom">
            <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
            <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
          </div>
        </div>

        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
          <div class="top">
            <h1 class="menu-title">Crepes</h1>
            <img class='logo' src="@/assets/krip-krap.png" alt="">
          </div>
          <div class="menu">
            <div class="flex-row crepes-main">
              <div class="flex-column crepes">
                <h4>TË ËMBLA</h4>
                <div @mouseover="creppe_menu = creppe_1" @mouseleave="creppe_menu = ''" class="flex-row menu-option">
                  <p>Nutella Creppe<span class="spacing" style="letter-spacing: 3px;">......................................</span></p>
                  <span>1.50€</span>
                  <span class="alternativeText">Nutella, keks i bluar</span>
                </div>  
                <div @mouseover="creppe_menu = creppe_2" @mouseleave="creppe_menu = ''" class="flex-row menu-option">
                  <p>Wilberries Creppe<span class="spacing" style="letter-spacing: 3px;">.................................</span></p>
                  <span>1.50€</span>
                  <span class="alternativeText">Xhem i frutave të malit</span>
                </div>
                <div @mouseover="creppe_menu = creppe_3" @mouseleave="creppe_menu = ''" class="flex-row menu-option">
                  <p>Nutella Fruit Creppe<span class="spacing" style="letter-spacing: 3px;">.............................</span></p>
                  <span>2.00€</span>
                  <span class="alternativeText">Banane, kiwi, dredhëz, nutella</span>
                </div>
                <!-- <div class="flex-row crepe-ico">
                  <img :src="ico_5" alt="Ico">
                </div> -->

                <div class="creppe-container">
                  <img :src="creppe_menu"  class="creppe-menu">
                </div>
              </div>
              <div class="flex-column crepes">
                <h4>TË KRIPURA</h4>
                <div class="flex-row menu-option">
                  <p>Mix Creppe<span class="spacing" style="letter-spacing: 3px;">..........................................</span></p>
                  <span>2.50€</span>
                  <span class="alternativeText">Kaçkavall, proshutë viçi dhe pule, misër, tranguj, domate, ullinj</span>
                </div>  
                <div class="flex-row menu-option">
                  <p>Chicken Fresh<span class="spacing" style="letter-spacing: 3px;">.......................................</span></p>
                  <span>2.00€</span>
                  <span class="alternativeText">Kaçkavall, proshutë pule, kërpudha, domate</span>
                </div>
                <div class="flex-row menu-option">
                  <p>Vegetarian Creppe<span class="spacing" style="letter-spacing: 3px;">................................</span></p>
                  <span>1.80€</span>
                  <span class="alternativeText">Misër, tranguj, domate, kërpudha, ullinj, kaçkavall</span>
                </div>
                <div class="flex-row menu-option">
                  <p>Omlete Chef<span class="spacing" style="letter-spacing: 3px;">.........................................</span></p>
                  <span>2.00€</span>
                  <span class="alternativeText">Kaçkavall, vezë, proshutë pule</span>
                </div>
                <div class="flex-row menu-option">
                  <p>Beef Creppe<span class="spacing" style="letter-spacing: 3px;">..........................................</span></p>
                  <span>1.30€</span>
                  <span class="alternativeText">Kaçkavall dhe proshutë viçi</span>
                </div>
                <div class="flex-row menu-option">
                  <p>Cheese Creppe<span class="spacing" style="letter-spacing: 3px;">......................................</span></p>
                  <span>1.30€</span>
                  <span class="alternativeText">Vetëm djathë</span>
                </div>
                <div class="flex-row menu-option">
                  <p>Mexican Creppe<span class="spacing" style="letter-spacing: 3px;">...................................</span></p>
                  <span>2.50€</span>
                  <span class="alternativeText">Kaçkavall, proshutë viçi dhe pule, misër, tranguj, domate, ullinj, tabasco</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
            <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
          </div>
        </div>

        <div v-bind:class="{'menu-loaded': isLoaded, 'menu-page': true}">
          <div class="top">
            <h1 class="menu-title">Smoothies</h1>
            <img class='logo' src="@/assets/krip-krap.png" alt="">
          </div>

          <div class="menu">
            <div class="menu-1">
              <div class="flex-row menu-option">
                <p>All in<span class="spacing" style="letter-spacing: 3px;">.....................................................</span></p>
                <span>1.50€</span>
                <span class="alternativeText">Fruta mali, dredhëz, kivi, ananas</span>
              </div> 
              <div class="flex-row menu-option">
                <p>Pick me up<span class="spacing" style="letter-spacing: 3px;">............................................</span></p>
                <span>1.50€</span>
                <span class="alternativeText">Banane, fruta mali</span>
              </div> 
              <div class="flex-row menu-option">
                <p>Stress Down<span class="spacing" style="letter-spacing: 3px;">.........................................</span></p>
                <span>1.50€</span>
                <span class="alternativeText">Banane, mollë, dredhëz</span>
              </div> 
              <div class="flex-row menu-option">
                <p>Green Life<span class="spacing" style="letter-spacing: 3px;">.............................................</span></p>
                <span>1.50€</span>
                <span class="alternativeText">Mollë, kivi, lime</span>
              </div> 
            </div>
            <h1 id="milkshakes" class="title-middle">Milkshakes</h1>
            <div class="menu-2">
              <div class="flex-row menu-option">
                <p>Choco Milkshake<span class="spacing" style="letter-spacing: 3px;">..................................</span></p>
                <span>2.00€</span>
              </div>
              <div class="flex-row menu-option">
                <p>Oreo Milkshake<span class="spacing" style="letter-spacing: 3px;">....................................</span></p>
                <span>2.00€</span>
              </div>
              <div class="flex-row menu-option">
                <p>Strawberry Milkshake<span class="spacing" style="letter-spacing: 3px;">...........................</span></p>
                <span>2.00€</span>
              </div>
            </div>
            <div class="ul-options-2">
            <p>Disa shije/toppings mund të jenë sezonale</p>
            </div>
          </div>

          <div class="bottom">
            <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
            <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
          </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
        isLoaded: false,

        show_menu: false,
        waffle_menu: '',
        pancake_menu: '',
        creppe_menu: '',

        jam_1: require('../assets/menu-toppings/7.png'),
        jam_2: require('../assets/menu-toppings/6.png'),
        jam_3: require('../assets/menu-toppings/5.png'),
        jam_4: require('../assets/menu-toppings/4.png'),
        jam_5: require('../assets/menu-toppings/3.png'),
        jam_6: require('../assets/menu-toppings/2.png'),
        jam_7: require('../assets/menu-toppings/Asset 27.svg'),
        jam_8: require('../assets/menu-toppings/Asset 28.svg'),
        jam_9: require('../assets/menu-toppings/Asset 29.svg'),
        jam_10: require('../assets/menu-toppings/Asset 31.svg'),
        jam_11: require('../assets/menu-toppings/Asset 31.svg'),
        jam_12: require('../assets/menu-toppings/Asset 30.svg'),

        ico_1: require('../assets/menu-toppings/16.png'),
        ico_2: require('../assets/menu-toppings/15.png'),
        ico_3: require('../assets/menu-toppings/18.png'),
        ico_4: require('../assets/menu-toppings/17.png'),
        ico_5: require('../assets/menu-toppings/14.png'),
        ico_6: require('../assets/menu-toppings/11.png'),
        ico_7: require('../assets/menu-toppings/10.png'),
        ico_8: require('../assets/menu-toppings/9.png'),
        ico_9: require('../assets/menu-toppings/8.png'),

        waffle_1: require('../assets/menu-items/waffles/3.png'),
        waffle_2: require('../assets/menu-items/waffles/4.png'),
        waffle_3: require('../assets/menu-items/waffles/7.png'),
        waffle_4: require('../assets/menu-items/waffles/6.png'),
        waffle_5: require('../assets/menu-items/waffles/5.png'),
        
        pancake_1: require('../assets/menu-items/waffles/1.png'),
        pancake_2: require('../assets/menu-items/waffles/2.png'),
        pancake_3: require('../assets/menu-items/waffles/5.png'),

        creppe_1: require('../assets/menu-items/waffles/8.png'),
        creppe_2: require('../assets/menu-items/waffles/9.png'),
        creppe_3: require('../assets/menu-items/waffles/10.png'),
    }
  },
  methods: {
      loadCards() {
        setTimeout(() => { 
          this.isLoaded = true,
          setTimeout(() => {
            var menu = document.getElementsByClassName("menu-page")
            menu.forEach(menuPage => {
              menuPage.style.transitionDuration  = '0.2s';
            });
          }, 700)
        }, 100)
      },
  },
  mounted() {
      this.loadCards();
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hind+Guntur:wght@300&display=swap');

.menu-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.menu-page {
  width: 1000px;
  padding: 50px;
  border-radius: 12px;
  opacity: 0;
  margin: 25px auto;
  background: #f8eaff;
  transition-property: box-shadow, opacity, transform;
  transition-duration: var(--load-page-transition);
  transform: translateY(75px);
}

.menu-loaded {
  opacity: var(--opacity-full);
  transform: translateY(0);
}

.menu-page:hover {
  box-shadow: 5px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.menu-1 {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  height: 306px;
  width: -webkit-fill-available;
}

.menu-2 {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  width: -webkit-fill-available;
}

.menu-option {
  width: 425px;
  justify-content: space-between;
  margin: 30px 0;
  font-weight: 100;
  flex-wrap: wrap;
  position: relative;
  cursor: context-menu;
}

.menu-option span {
    margin-left: auto;
}

.bottom {
  display: flex;
  justify-content: space-around;
  font-family: 'Hind Guntur', sans-serif;
  font-size: 1.3em;
  margin-top: 45px;
}

.bottom, .bottom a {
  color: #8b73ff;
}

.bottom a:hover {
  color: hsl(250, 100%, 60%);
}

.topping-main, .jams-main, .nuts-main {
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
}

.nuts-main {
  justify-content: center;
  margin: 0 auto;
}

.nuts-main img {
  width: 75px;
  height: unset;
}

.jams-main img:first-child {
  transform:translateX(-2px);
}

.jam {
  flex-wrap: wrap;
  display: flex;
  width: min-content;
  text-align: center;
  line-height: 15px;
  font-size: 12px;
  color: #000;
  align-items: center;
  cursor: context-menu;
  margin: 5px;

}

.topping img, .jam img{
  width: 45px;
  transition-property: transform;
  transition-duration: 0.3s;
}



.nuts img {
  width: 125px;
  text-align: center;
  transition-property: transform;
  transition-duration: 0.3s;
}

.sauce p {
  margin: 5px 0 0 0;
  line-height: 15px;
}

.jam img{
  width: 75px;
  margin-bottom: 5px;
}

.topping:first-child img {
   transform: scale(1.4) translateY(5px);
}

.topping:first-child:hover img {
   transform: scale(1.6) translateY(5px);
}

.topping:hover img, .nuts:hover img {
  transform: scale(1.15);
}

.jam:hover img {
  transform: scale(1.15) translateX(-3px);

}

.frozen-yogurt-ico {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.frozen-yogurt-ico img {
  width: 175px;
  margin: auto;
  object-fit: scale-down;
}

.crepe-ico img {
  width: 275px;
}
.crepe-ico {
  margin: auto;
}

.submenu-title {
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  letter-spacing: 5px;
  font-family: 'Hind Guntur', sans-serif;
}

#frappe {
  width: 50px;
  transform: translate(-10px, -5px);
}

.hotChocolate {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  width: 50px !important;
}

#water {
  width: 60px;
  transform: translateX(-15px)
}

#carboWater {
  width: 45px;
  transform: translateX(-5px)

}

#iceTea {
  width: 30px;
  filter: drop-shadow(0px 5px 3px rgba(34, 34, 34, 0.15));
}

#fanta {
  width: 25px;
  transform: translateY(-2px);
}

#cola {
  width: 20px;
  transform: translateY(5px);
}

#bravo {
  width: 25px;
}

#redbull {
  width: 60px;
  transform: translate(-18px, 10px);
}

#schweppers {
  width: 25px;
}

#sprite {
  width: 30px;
}

#tonic {
  width: 25px;
}

#orange {
  width: 40px;
}

#cherry {
  width: 40px;
  transform: translateY(5px);
}

#peach {
  width: 55px;
  transform: translateY(5px);
}

#apple {
  width: 70px;
  transform: translateY(5px);
}

#wildBerries {
  width: 60px;
}

#frappe {
  width: 50px;
  transform: translate(-10px, 0px);
}

.menu-option img {
  width: 100px;
  pointer-events: none;
  opacity: 0;
  position: absolute;
  top: -50px;
  left: 0;
  transition-property: opacity, top;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}

.menu-option:hover img {
  opacity: var(--opacity-full);
  top: -65px;
}

.menu-page:nth-child(5) .menu, .menu-page:nth-child(2) .menu {
  height: auto;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-family: 'Moontime';
  font-size: 7em;
  line-height: 1;
  font-weight: 400;
  color: #e7018f;
  cursor: context-menu;
  width: 72%;
}

#milkshakes {
  font-size: 8rem;
}

.logo {
  width: 300px;
  height: 300px;
  position: absolute;
  right: -50px;
  top: -65px;
}

.top {
  position: relative;
  display: flex;
  margin: 0 0 100px;
}

.menu {
  font-family: 'Hind Guntur', sans-serif;
  color: #233dff;
  font-size: 1.4em;
  font-stretch: expanded;
  width: 100%;
  height: 660px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.menu-page:first-child .menu {
  height: 820px;
}

.menu-page:last-child .menu {
  flex-wrap: nowrap;
}

.menu-page:last-child .menu .alternativeText {
  top: 40px;
}

.menu-page:nth-child(6) .menu, .menu-page:last-child .menu {
  height: auto;
}

.menu-yogurts {
  height: 525px;
}

.menu-pancakes {
  height: 320px;
}

.menu-ice-creams {
  height: 310px;
}

.menu-waffles {
  height: 435px;
}

.menu-waffles .frozen-yogurt-ico img {
  width: 300px;
}

.menu-pancakes .frozen-yogurt-ico {
  width: auto;
}

.menu-pancakes .frozen-yogurt-ico img {
  width: 310px;
  
}

.alternativeText {
  position: absolute;
  top: 25px;
  top: 100%;
  left: 0;
  font-size: 15px;
}

.waffle-show {
  width: 550px;
  position: absolute;
  right: 0;
  top: 350px;
}

.waffle-container, .pancake-container, .creppe-container {
  width: 305px;
  display: flex;
  margin: auto;
  position: relative;
}

.waffle-menu, .pancake-menu, .creppe-menu {
  position: absolute;
  -webkit-filter: drop-shadow(0px 10px 12px #222);
  filter: drop-shadow(0px 10px 14px rgba(34, 34, 34, 0.575)) brightness(1.05);
  width: 150%;
}

.waffle-menu {
  top: -150px;
  left: -75px;
}

.pancake-menu {
  top: -320px;
  left: 160px;
}

.creppe-menu {
  bottom: -160px;
  right: -55px;
}

.hover-menu-text {
  width: 535px;
  position: absolute;
  right: 0px;
  top: 485px;
  text-align: center;
}

.hover-menu-text2 {
  position: absolute;
  text-align: center;
  right: 150px;
  bottom: 300px;
}

.ice-option {
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  margin: 25px 0;
}

.ice-price {
  margin: 0;
  padding: 0;
}

.additional-prices {
  width: 250px;
  display: flex; 
  flex-direction: column; 
  margin: auto;
}

.ul-options {
  width: 350px;
}

.ul-options p {
  margin: 20px 0;
  color: rgb(166, 65, 189);
  background: hsl(280, 100%, 90%);
  border-radius: 12px;
  padding: 10px 15px;
}

.ul-options-2 {
  margin: 20px auto;
  color: rgb(166, 65, 189);
  background: hsl(280, 100%, 90%);
  border-radius: 12px;
  padding: 10px 15px;
  text-align: center;
  width: fit-content;

}

.ul-options:nth-child(2) {
  display: flex;
  flex-wrap: wrap;
  width: 720px;
  margin: 0 auto;
}

.ul-options:nth-child(2) p {
  margin: 5px;
}

.menu-page:nth-child(5) .ul-options {
  flex-direction: column;
}

.menu-page:nth-child(5) .ul-options p{
  padding: 10px 15px;
  font-size: 24px;
  font-family: 'Hind Guntur', sans-serif;
}

.crepes {
  width: 450px;
}

.crepes h4 {
  font-size: 34px;
}



/* RESPONSIVENESS */

@media (max-width: 1110px) {
  .menu-page {
    width: 90%;
  }

  .menu-page:first-child .menu {
    flex-wrap: wrap;
    height: auto;
  }
}

@media (max-width: 1101px) {
  #smoothies {
    font-size: 74px;
    text-align: center;
  }
}

@media (max-width: 1080px) {
  .menu {
    height: auto;
    align-content: center;
  }

  .ul-options {
    margin: 0 0 0 25px;
  }

  .ul-options:nth-child(2) {
    flex-direction: column;
    width: auto;
  }

  .crepes-main {
    flex-direction: column;
    justify-content: center;
    width: min-content;
  }

  .crepes {
    padding: 0;
    margin: auto;
  }

  .crepes:last-child {
    margin: 25px 0 0 0;
  }

  .ul-options:nth-child(2) {
    margin-top: 30px;
  }

  .menu-1, .menu-2 {
    flex-direction: column;
    height: auto;
    align-items: center;
  }

  .menu-page:nth-child(2) .menu {
    align-content: unset;
  }
  .frozen-yogurt-ico {
    display: none;
  }
  
  #iceCreamTitle {
    margin: auto;
    text-align: center;
  }

  .title-middle {
    margin: auto;
    text-align: center;
  }

  .crepe-ico {
    display: none;
  }

  #milkshakes {
    margin: 40px auto 25px;
  }

  .hover-menu-text {
    right: 205px;
    top: 200px;
    width: fit-content;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }

  .hover-menu-text2 {
    width: fit-content;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 400px;
  }

  .waffle-container, .pancake-container {
    width: 39%;
  }

  .waffle-menu {
    top: -450px;
    width: 225%;
    left: -62%;
    -webkit-filter: drop-shadow(0px 10px 12px #222) brightness(1.05);
    filter: drop-shadow(0px 10px 12px #222) brightness(1.05);
  }

  .pancake-menu {
    left: -48%;
    width: 200%;
    top: -365px;
  }
.creppe-container .creppe-menu {
    bottom: 0;
  }
}

@media (max-width: 973px) {
  .menu-page:nth-child(5) > div:nth-child(2){
    flex-direction: column;
  }
}

@media (max-width: 781px) {
  .ice-option {
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
}

@media (max-width: 746px) {
  h1, #milkshakes {
    font-size: 6rem;
  }

  .logo {
    width: 200px;
    height: 200px;
    top: -60px;
  }
}

@media (max-width: 676px) {
  .hover-menu-text, .hover-menu-text2 {
    font-size: 18px;
  }

  .hover-menu-text2 {
    bottom: 450px;
  }
}


@media (max-width: 575px) {
  .logo {
    width: 150px;
    height: 150px;
    top: -60px;
  }

  .top {
    margin: 0 0 25px;
  }

  .ul-options {
    width: 100%;
    margin: 0;
  }

  .crepes-main {
    width: 100%;
  }

  .crepes {
    width: -webkit-fill-available;
  }

  .spacing{
    display: none;
  }

  .menu-option {
    background: rgb(193, 154, 202);
    color: #fff;
    padding: 0 5px;
    height: auto;
    widows: 100%;
    width: -webkit-fill-available;
  }

  .alternativeText {
    color: rgb(193, 154, 202);
  }

  #milkshakes {
    font-size: 5rem;
  }

  .waffle-container, .pancake-container {
    width: 50%;
  }

  .waffle-menu {
    top: -400px;
  }

  .hover-menu-text {
    top: 155px;
  }

}

@media (max-width: 525px) {
  #smoothies {
    font-size: 62px;;
  }

  h1 {
    font-size: 4rem;
  }

  #milkshakes {
    margin: auto;
    margin-top: 25px;
    margin-bottom: 25px;
    width: 100%;
  }

  .hover-menu-text {
    top: 130px;
  }
}

@media (max-width: 515px) {
  .bottom {
    display: flex;
    flex-direction: column;
  }
}
  

@media (max-width: 417px) {
  .menu-page:nth-child(4) .menu-option{
    height: auto;
  }

  #smoothies {
    font-size: 54px;;
  }

  #milkshakes, h1 {
    font-size: 4rem;
  }

  .hover-menu-text, .hover-menu-text2 {
    display: none;
  }
}

@media (max-width: 385px) {
  .top .menu-title {
    width: auto;
  }
  .top {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 15px;
  }

  .logo {
    width: 100px;
    height: 100px;
    right: -60px;
  }

  .additional-prices {
    width: 100%;
  }
}

@media (max-width: 371px) {
  .menu-page:nth-child(4) .menu-option {
    height: auto;
  }

}

@media (max-width: 340px) {
  .menu-option {
    height: fit-content;
  }
}

@media (max-width: 349px) {

}

@media (max-width: 348px) {
  .menu-page:first-child .menu > div:first-child {
    width: auto;

  }
  .menu-page:first-child .menu > div:first-child span{ 
    margin-left: auto;
  }
}


</style>

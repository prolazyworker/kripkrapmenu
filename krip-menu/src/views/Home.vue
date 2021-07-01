<template>
  <div class="home">
    <div class="menu-page">
      <div id="top">
        <h1>Pije</h1>
        <img id='logo' src="@/assets/krip-krap.png" alt="">
      </div>
      <div id="menu">
        <div class="flex-row menu-option">
          <p>Kafe/machiato<img src="@/assets/menu-items/coffe.png" alt="menu-item"><span style="letter-spacing: 3px;">......................................</span></p><span>0.70€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Kapuçino<img src="@/assets/menu-items/cappuccino.png" alt="menu-item"> <span style="letter-spacing: 3px;">..............................................</span></p><span>1.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Frape<img id="frappe" src="@/assets/menu-items/frappe.png" alt="menu-item"> <span style="letter-spacing: 3px;">..................................................</span></p><span>2.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Çokollatë e nxehtë<img class="hotChocolate" src="@/assets/menu-items/hot-chocolate.png" alt="menu-item"> <span style="letter-spacing: 3px;">...............................</span></p><span>1.50€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Kakao<img class="hotChocolate" src="@/assets/menu-items/hot-chocolate.png" alt="menu-item"> <span style="letter-spacing: 3px;">..................................................</span></p><span>4.99€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Ujë natyral ose i gazuar<img id="water" src="@/assets/menu-items/water.png" alt="menu-item"><span style="letter-spacing: 3px;">.........................</span></p><span>1.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Çaj i ftohtë<img id="iceTea" src="@/assets/menu-items/ice-tea.png" alt="menu-item"><span style="letter-spacing: 3px;">............................................</span></p><span>1.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Fanta<img id="fanta" src="@/assets/menu-items/fanta.png" alt="menu-item"><span style="letter-spacing: 3px;">....................................................</span></p><span>1.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Coca Cola<img id="cola" src="@/assets/menu-items/cola.png" alt="menu-item"><span style="letter-spacing: 3px;">.............................................</span></p><span>1.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Bravo<img id="bravo" src="@/assets/menu-items/bravo.png" alt="menu-item"><span style="letter-spacing: 3px;">....................................................</span></p>
          <span>1.00€</span>
          <span id="alternativeText">(me shije të ndryshme)</span>
        </div>
        <div class="flex-row menu-option">
          <p>Redbull<img id="redbull" src="@/assets/menu-items/redbull.png" alt="menu-item"><span style="letter-spacing: 3px;">.................................................</span></p><span>1.00€</span>
        </div>
      </div>
      <div class="bottom">
        <p>instagram: <a href="https://www.instagram.com/kripkrapfrozen/">@kripkrapfrozen</a></p>
        <p>web: <a href="http://www.kripkrapfrozen.net">www.kripkrapfrozen.net</a></p>
      </div>
    </div>

    <div class="menu-page">
      <div id="top">
        <h1 id="frozenYogurt">Frozen Yogurt</h1>
        <img id='logo' src="@/assets/krip-krap.png" alt="">
      </div>
      <div id="menu">

      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.menu-page {
  width: 1000px;
  padding: 50px;
  margin: 25px auto;
  background: #f8eaff;
  transition-property: box-shadow;
  transition-duration: 0.2s;
}

.menu-page:hover {
  box-shadow: 5px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.menu-option {
  width: 425px;
  justify-content: space-between;
  margin: 30px 0;
  font-weight: 100;
  position: relative;
  cursor: context-menu;
}

.bottom {
  display: flex;
  justify-content: space-around;
  font-family: 'Hind Guntur', sans-serif;
  font-size: 1.3em;
}

.bottom, .bottom a {
  color: #8b73ff;
}

.bottom a:hover {
  color: hsl(250, 100%, 60%);

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

#iceTea {
  width: 50px;
  transform: translate(-5px, -50px);
  /* box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19); */
  filter: drop-shadow(0px 5px 3px rgba(34, 34, 34, 0.15));
}

#fanta {
  width: 25px;
  transform: translateY(-5px);

}

#cola {
  width: 20px;
}

#bravo {
  width: 25px;
}

#redbull {
  width: 60px;
  transform: translate(-18px, 10px);
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
  opacity: 100%;
  top: -65px;
}

.menu-page:nth-child(2) {
  background: #fdfefe;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 8em;
  font-weight: 800;
  color: #e7018f;
  cursor: context-menu;
}

#logo {
  width: 350px;
  height: 350px;
  position: absolute;
  right: 0;
  top: -85px;
}

#top {
  position: relative;
  display: flex;
  margin: 0 0 100px;
}

#menu {
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


#alternativeText {
  position: absolute;
  top: 25px;
  font-size: 15px;
}


#frozenYogurt {
  width: 75px;
}


</style>
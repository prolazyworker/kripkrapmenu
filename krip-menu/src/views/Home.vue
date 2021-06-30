<template>
  <div class="home">
    <div class="menu-page">
      <div id="top">
        <h1>Pije</h1>
        <img id='logo' src="@/assets/krip-krap.png" alt="">
      </div>
      <div id="menu">
        <div class="flex-row menu-option">
          <p>Kafe/machiato <span style="letter-spacing: 3px;">....................................</span></p><span>0.70€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Kapuçino<span style="letter-spacing: 3px;">...............................................</span></p><span>1.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Frape<span style="letter-spacing: 3px;">....................................................</span></p><span>2.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Çokollatë e nxehtë<span style="letter-spacing: 3px;">................................</span></p><span>1.50€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Kakao<span style="letter-spacing: 3px;">...................................................</span></p><span>4.99€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Ujë natyral ose i gazuar<span style="letter-spacing: 3px;">.........................</span></p><span>1.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Çaj i ftohtë<span style="letter-spacing: 3px;">............................................</span></p><span>1.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Fanta<span style="letter-spacing: 3px;">....................................................</span></p><span>1.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Coca Cola<span style="letter-spacing: 3px;">.............................................</span></p><span>1.00€</span>
        </div>
        <div class="flex-row menu-option">
          <p>Bravo<span style="letter-spacing: 3px;">....................................................</span></p>
          <span>1.00€</span>
          <span id="alternativeText">(me shije të ndryshme)</span>
        </div>
        <div class="flex-row menu-option">
          <p>Redbull<span style="letter-spacing: 3px;">.................................................</span></p><span>1.00€</span>
        </div>
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

<style>

body {
  background: rgb(248, 251, 253);
}

.home {
  display: flex;
}

.menu-page {
  width: 1000px;
  padding: 50px;
  margin: 0 25px;
  background: #f8eaff;
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
}

.menu-page:nth-child(2) {
  background: #fdfefe;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 8em;
  font-weight: 800;
  color: #e7018f;
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
  height: 690px;
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
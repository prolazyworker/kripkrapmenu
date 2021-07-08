<template>
  <div class="about-main">
    <div v-bind:class="{'main-content': true, loaded: isLoaded}">
      <div v-bind:class="{top: true}">
        <h1>Kush jemi ne?</h1>
        <hr class="divider">
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
      }, 250)
    },
  },
  mounted() {
    this.loadPage();
  },
  
}
</script>

<style scoped>

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
  transition-duration: 0.8s;
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

</style>

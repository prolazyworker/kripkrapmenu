<template>
  <navBar></navBar>
  <router-view/>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hind+Guntur:wght@300&display=swap');


* {
  padding: 0;
  margin: 0;
}

#app {
  padding: 50px;
}

body {
  /* background: #f8eaff; */
}



</style>

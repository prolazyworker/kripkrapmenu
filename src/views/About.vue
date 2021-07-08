<template>
  <div class="about-main">
    <div class="main-content">
      <div class="top" v-bind:class="{loaded: isLoaded}">
        <h1>test</h1>
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
  mounted() {
    this.isLoaded = true
  },
  
}
</script>

<style scoped>

.top {
  width: 80%;
  margin: auto;
  margin-top: 50px;
}
h1 {
  margin: 20px 0;
  width: fit-content;
  margin: auto;
  color: rgb(166, 65, 189);
  background: hsl(280, 100%, 90%);
  border-radius: 12px;
  padding: 10px 15px;
}


</style>

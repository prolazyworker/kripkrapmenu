<template>
    <div class="navBar">
        <router-link to="/">Home</router-link>
        <router-link to="/">Galeria</router-link>
        <router-link to="/about">Rreth Nesh</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navBar {
    width: 100%;
    padding: 25px;
    display: flex;
    justify-content: center;
}

a {
    padding: 10px 15px;
    margin: 0 15px;
    text-decoration: none;
    color: #fff;
    background: #f8eaff;
    border-radius: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 600;
    transition-property: color;
    transition-duration: 0.2s;
}

a:hover {
    color: #e7018f;
}



</style>
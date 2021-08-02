<template>
    <div class="navBar">
        <router-link to="/">Home</router-link>
        <router-link to="/menu">Menu</router-link>
        <router-link to="/gallery">Galeria</router-link>
        <router-link to="/about">Rreth Nesh</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lobster&display=swap');

.navBar {
    width: 100%;
    padding: 25px 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    padding: 10px 20px;
    margin: 0 15px;
    text-decoration: none;
    color: rgb(193, 154, 202);
    background: #f8eaff;
    border-radius: 12px;
    font-family: 'Dancing Script', cursive;
    font-family: 'Lobster', cursive;
    font-size: 34px;
    transition-property: color;
    transition-duration: 0.2s;
}

a:hover {
    color: #e7018f;
}

/* RESPONSIVENESS */

@media (max-width: 717px) {
    .navBar a {
        margin: 0 5px;
    }
}

@media (max-width: 637px) {
    a {
        align-self: center;
        font-size: 20px;
        text-align: center;
    }
    .navBar {
        padding-bottom: 0;
        padding: 25px 0 0;
    }
}

@media (max-width: 478px) {
    .navBar {
        padding: 25px 0 0;
    }
}

@media (max-width: 464px) {
    a {
        font-size: 16px;
        padding: 10px 13px; 
    }

    .navBar {
        padding: 25px 25px 0;
    }
}


</style>
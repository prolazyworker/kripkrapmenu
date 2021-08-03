<template>
    <div class="navBar">
        <router-link to="/">Menu</router-link>
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

@media (max-width: 585px) {
    a {
        align-self: center;
        font-size: 24px;
        text-align: center;
    }
    .navBar {
        padding-bottom: 0;
        padding: 25px 0 0;
    } 
}

@media (max-width: 460px) {
    .navBar {
        padding: 25px 0 0;
    }

    a {
        padding: 10px 13px; 
    } 
}

@media (max-width: 380px) {
     a {
        padding: 10px 13px; 
    } 
}

@media (max-width: 410px){
    a {
        font-size: 21px;
        margin: 0 5px;
    }
}


</style>
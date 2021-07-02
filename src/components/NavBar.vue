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
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lobster&display=swap');

.navBar {
    width: 100%;
    padding: 25px;
    display: flex;
    justify-content: center;
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

@media (max-width: 575px) {
    a {
        align-self: center;
        font-size: 20px;
        text-align: center;
    }
    .navBar {
        padding-bottom: 10px;
    }
}

@media (max-width: 445px) {
    a {
        font-size: 16px;
    }

    .navBar {
        padding: 20px 0 10px;
    }
}


</style>
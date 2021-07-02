<template>
    <div id="footer">
        <p>Made by Nesa Media. Learn more about us at : <a href="https://nesamedia.website">Nesa Media</a></p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #footer {
        padding: 20px 10px 10px;
        text-align: center;
        color: rgb(193, 154, 202);
        width: 100%;
        min-height: 60px;
        color: white;
        background-color: #383838;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Hind Guntur', sans-serif;

    }

    #footer a {
        color: #8b73ff;
    }

    #footer a:hover {
        color: hsl(250, 100%, 90%);
    }
    
</style>
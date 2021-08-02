<template>
    <footer id="footer">
        <div>
            <div class="footer-title">
                <p style="font-family: 'Lobster', cursive;">Krip Krap Frozen</p>
            </div>
            <div id="socials">
                <a id="fb" href="https://www.facebook.com/nesamedia"><i class="fab fa-facebook-f"></i></a>
                <a id="yt" href="#"><i class="fab fa-youtube"></i></a>
                <a id="inst" href="https://www.instagram.com/nesamedia2020/"><i class="fab fa-instagram"></i></a>
            </div>
            <div class="flex-column">
                <p>Made by : <a href="https://nesamedia.website">Nesa Media</a></p>
                <router-link to="/contactUs">Contact Us</router-link>
            </div>
        </div>
    </footer>
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
    min-height: var(--footer-height);
    color: white;
    background-color: #383838;
    font-family: 'Hind Guntur', sans-serif;
}

#footer > div {
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#footer a {
    color: #8b73ff;
}

#footer a:hover {
    color: hsl(250, 100%, 90%);
} 

#socials {
    transform: translateY(2px);
}

#socials a {
    color: white;
}

#fb:hover {
    color: #3b5998 !important;
}

#yt:hover {
    color:#FF0000 !important;
}

#inst:hover {
    background: rgb(255,220,128);
    background: linear-gradient(90deg, rgba(255,220,128,1) 0%, rgba(252,175,69,1) 11%, rgba(247,119,55,1) 22%, rgba(245,96,64,1) 33%, rgba(253,29,29,1) 44%, rgba(225,48,108,1) 55%, rgba(193,53,132,1) 66%, rgba(131,58,180,1) 77%, rgba(88,81,219,1) 88%, rgba(64,93,230,1) 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.fab {
    margin: 0 5px;
}

/* RESPONSIVENESS */

@media (max-width: 1080px) {
    #footer {
        padding: 20px 0 0;
    }

    #footer > div {
        width: 90%;
    }
}


@media (max-width: 428px) {
    #footer > div {
        flex-direction: column;
    }

    .footer-title {
        margin-bottom: 5px;
    }
}

</style>
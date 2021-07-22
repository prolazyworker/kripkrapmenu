<template>
    <div class="about-us-main">
        <form name="contact" action="POST" data-netlify="true">
            <div>
                <label>Your Name:</label>   
                <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div>
                <label>Your Email: </label>
                <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div>
                <label>Message: </label>
                <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
            </div>
            <div>
                <button type="submit" value="Send Message">Send</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    border: 3px solid hsl(150, 82%, 35%);
    margin: auto;
}


    
</style>
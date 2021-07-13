<template>
    <div class="about-us-main">
        <form name="contact" action="POST" data-netlify="true">
            <p>
                <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
            <div>
                <div data-netlify-recaptcha="true"></div>
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
<template>
    <div class="about-us-main">
        <form @submit.prevent="sendMail">
            <input type="text" name="Name" v-model="form.name" required autofocus/>
            <input type="email" name="email" v-model="form.email"/>
            <input type="text" name="Topic" v-model="form.topic"/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                name:'',
                email: '',
                topic: '',
                message: '',
            },
        }
    },
    methods: {
        sendMail() {
            Email.send({
                Host : "smtp.yourisp.com",
                Username : form.name,
                Password : form.email,
                To : 'them@website.com',
                From : "you@isp.com",
                Subject : form.topic,
                Body : form.messsage
            }).then(
                message => alert(message)
            );  
        }
    }
    
}
</script>
<script src="https://smtpjs.com/v3/smtp.js"></script>

<style lang="">
    
</style>
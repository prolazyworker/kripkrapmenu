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
            }
        }
    }
}
</script>
<script>
import axios from 'axios';
import { store } from '../data/store';
const endpoint = 'http://127.0.0.1:8000/api/contact-mail/';
export default {
    name: 'ContactUsPage',
    data: () => ({
        form: {
            sender: '',
            subject: '',
            message: ''
        },
    }),
    methods: {
        sendEmail() {
            axios.post(endpoint, this.form)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.error(err)
                })
                .then(() => { });
        }
    }
}
</script>
<template>
    <h2>Contattaci</h2>
    <form @submit.prevent="sendEmail" novalidate>
        <!-- Email -->
        <div class="mb-3">
            <label for="sender" class="form-label">Indirizzo email</label>
            <input type="email" class="form-control" id="sender" placeholder="es: pippo@topolino.com"
                v-model="form.sender">
        </div>
        <!-- Oggetto -->
        <div class="mb-3">
            <label for="subject" class="form-label">Oggetto email</label>
            <input type="text" class="form-control" id="subject" v-model="form.subject">
        </div>
        <!-- Messaggio -->
        <div class="mb-3">
            <label for="message" class="form-label">Scrivi il tuo messaggio</label>
            <textarea class="form-control" id="message" rows="10" v-model="form.message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Invia</button>
    </form>
</template>
<style></style>
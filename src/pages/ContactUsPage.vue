<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
    name: 'ContactUsPage',
    data: () => ({
        form: {
            email: '',
            subject: '',
            message: ''
        },
    })
}
</script>
<template>
    <h2>Contattaci</h2>
    <form @submit.prevent novalidate>
        <!-- Email -->
        <div class="mb-3">
            <label for="email" class="form-label">Indirizzo email</label>
            <input type="email" class="form-control" id="email" placeholder="es: pippo@topolino.com"
                v-model="form.email">
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
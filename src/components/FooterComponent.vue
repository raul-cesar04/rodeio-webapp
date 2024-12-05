<template>
    <v-footer class="footer">
        <p>
            &copy; Raul César UFMS - 2024
        </p>
        <router-link to="/novo-tropeiro" style="font-weight: lighter; text-decoration: none; color: inherit;">
            Cadastrar um tropeiro
        </router-link>
    </v-footer>
</template>
<style scoped>
    .footer{
        background-color: var(--primary-color);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        color: var(--link-color);
        font-weight: bold;
    }
</style>

<script>
    export default {
        name: 'FooterComponent'
    }
</script>
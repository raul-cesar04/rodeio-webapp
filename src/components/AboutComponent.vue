<template>
    <v-card class="v-card">
        <v-card-item class="v-card-container">
            <v-card-title>A PRB</v-card-title>
            <v-card-tex>A PRB (Profissionais do Rodeio Brasileiro) há mais de 10 anos realiza eventos de mais alto nível do rodeio brasileiro. Sempre inovando e oferecendo o melhor em estrutura, profissionais e competição.</v-card-tex>
        </v-card-item>
        <v-img alt="logo" :src="require('../assets/logo.png')" max-width="25%" max-height="auto"></v-img>
    </v-card>
    <v-card class="v-card">
        <v-card-item class="v-card-container">
            <v-card-title>O Campeonato</v-card-title>
            <v-card-tex>O Campeonato Nacional da PRB, realiza etapas em todo o território brasileiro que distribui mais de R$ 100.000,00 em premiação! </v-card-tex>
        </v-card-item>
        <v-img alt="campeonato-info" :src="require('../assets/neguindoporto.png')" max-width="25%" max-height="auto"></v-img>
    </v-card>
</template>
<style scoped>
    .v-card{
        background-color: var(--secondary-color);
        padding: 2em;
        border-radius: 1.2em;
        margin: 1em;
        box-shadow: 2px 2px 8px 1px rgba(0,0,0,0.75);

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        min-height: 22em;
    }
    .v-card .v-card-container{
        max-width: 50%;
    }
</style>
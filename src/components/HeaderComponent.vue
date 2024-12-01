<template>
    <v-div class = 'v-app-header'>
        <v-div class="logo-container">
            <img class="logo-img"
                src="../assets/logo.png"
                contain
            />
            <v-app-bar-title>
                <h4>Profissionais Rodeio Brasileiro</h4>
            </v-app-bar-title>
        </v-div>
        <v-tabs
            v-model="tab"
            bg-color="var(--primary-color)"
            align-tabs="center"
        >
            <router-link to="/">
                <v-tab value="sobre" class="v-tab-text">
                    Sobre
                </v-tab>
            </router-link>
            <router-link to="/competidores">
                <v-tab value="competidores" class="v-tab-text">
                    Competidores
                </v-tab>
            </router-link>
            <router-link to="/animais">
                <v-tab value="animais" class="v-tab-text">
                    Animais
                </v-tab>
            </router-link>
            <router-link to="/resultados">
                <v-tab value="resultados" class="v-tab-text">
                    Resultados
                </v-tab>
            </router-link>
        </v-tabs>
    </v-div>
</template>
<script>
    export default{
        name: "HeaderComponent"
    }
</script>
<style scoped>
    .v-tab-text{
        font-weight: bold !important;
        color: var(--link-color);
    }
    .v-app-header {
        display: flex;
        flex-direction: column;
        background-color: var(--primary-color);

        align-items: center;
        justify-content: center;
    }

    .v-app-header h4{
        color: var(--link-color);
    }

    /** LOGO */
    .logo-img{
        max-width: 8em;
        height: auto;
    }

    .logo-container{
        padding: 1em;
        background-color: var(--primary-color);
    }

    
</style>
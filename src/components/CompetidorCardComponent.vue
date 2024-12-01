<template>
    <v-card class = "competidor-card" variant="flat">
        <v-card-item class="competidor-card-container">
                <router-link :to="'/competidores/'+competidorId" style="text-decoration: none; color: inherit;">
                <v-img 
                    :alt="'competidor'+'_'+competidorId"
                    :src="require('../assets/logo.png')"
                    width = "auto"
                    max-heigth = "25%"
                ></v-img>
                <h4>{{ competidorNome }}</h4>
                <p>{{ competidorCidade }}</p>
            </router-link>
            </v-card-item>
    </v-card>
</template>

<style>
    .competidor-card-container{
        border: 1px solid rgb(0, 0, 0); 
        padding: 5%;
        margin: 5% 10%;
        text-align: center;
    }
</style>

<script>
export default{
    name: 'CompetidorCardComponent',
    props: ['competidorNome', 'competidorCidade', 'competidorId']
}
</script>
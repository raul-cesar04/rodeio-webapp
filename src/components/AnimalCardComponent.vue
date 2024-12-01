<template>
    <v-card class = "competidor-card" variant="flat">
        <v-card-item class="competidor-card-container">
                <router-link :to="'/animais/'+animalId" style="text-decoration: none; color: inherit;">
                <v-img 
                    :alt="'animal'+'_'+animalId"
                    :src="require('../assets/logo.png')"
                    width = "auto"
                    max-heigth = "25%"
                ></v-img>
                <h4>{{ animalNome }}</h4>
                <p>{{ animalProprietario }}</p>
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
    name: 'AnimalCardComponent',
    props: ['animalNome', 'animalProprietario', 'animalId']
}
</script>
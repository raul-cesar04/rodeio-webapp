<template>
    <v-card class = "competidor-card">
        <v-img 
            :alt="'competidor'+'_'+competidorId"
            :src="require('../assets/logo.png')"
            width = "auto"
            max-heigth = "25%"
        ></v-img>
        <v-card-item class="competidor-card-container">
            <h4>{{ competidorNome }}</h4>
            <p>{{ competidorCidade }}</p>
        </v-card-item>
    </v-card>
</template>

<style>
    .competidor-card{
        display: flex;
        flex-direction: column;
    }
</style>

<script>
export default{
    name: 'CompetidorCardComponent',
    data(){
        return {
            competidorNome: 'Renato Alves Alcantara',
            competidorCidade: 'São Miguel do Araguaia/GO',
            competidorId: 32
        }
    },
    props:{
        
    }
}
</script>
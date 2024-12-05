<template>
    <v-form validate-on="eager" v-on:submit="searchAnimais">
        <v-text-field
            :rules="rules"
            hide-details="auto"
            label="Nome do Animal"
            v-model="animalNomeSearch"
        ></v-text-field>
        <v-btn
        :loading="loading"
        class="mt-2"
        text="Pesquisar"
        type="submit"
        ></v-btn>
    </v-form>
    <div class="animal-cards-container">
        <div v-for = "(animal) in animais" :key="animal.id">
            <AnimalCardComponent :animal-nome="animal.nome" :animal-proprietario="proprietarioToString(animal.proprietario)" :animalId="animal.id" />
        </div>
        <AddCardAnimal />
    </div>
    <v-pagination
        v-model = "currentPage"
        :length="numberOfPages"
        v-on:update:model-value="this.retrieveAnimais()"
    ></v-pagination>
</template>

<style scoped>
    .animal-cards-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>

<script>
import AnimalDataService from '@/services/AnimalDataService';
import AnimalCardComponent from './AnimalCardComponent.vue';
import AddCardAnimal from './AddCardAnimal.vue';



    export default {
        name: 'CompetidoresComponent',
        data(){
            return{
                animais: [],
                animalNomeSearch: '',
                numberOfPages: 0,
                currentPage: 1
            };
        },
        methods: {
            retrieveAnimais(){
                AnimalDataService.getAll(this.currentPage-1)
                    .then(this.updateAnimaisData).catch(err=>{
                        console.error(err);
                    });
            },

            searchAnimais(){
                AnimalDataService.searchAnimal(this.animalNomeSearch)
                    .then(this.updateAnimaisData)
                    .catch(err=>console.error(err));
            },

            updateAnimaisData(response){
                this.numberOfPages = response.data.totalPages;
                this.animais = response.data.content;
            },
            
            proprietarioToString(proprietario){
                return proprietario.nome+" ("+proprietario.sigla+")";
            }

        },
        components: {
            AnimalCardComponent,
            AddCardAnimal
        },
        mounted(){
            this.retrieveAnimais();
        }
    }
</script>
<template>
    <v-form validate-on="eager" v-on:submit="searchCompetidores">
        <v-text-field
            :rules="rules"
            hide-details="auto"
            label="Nome do competidor"
            v-model="nomeCompetidorSearch"
        ></v-text-field>
        <v-btn
        :loading="loading"
        class="mt-2"
        text="Pesquisar"
        type="submit"
        ></v-btn>
    </v-form>
    <div class="competidor-cards-container">
        <div v-for = "(competidor) in competidores" :key="competidor.id">
            <CompetidorCardComponent :competidorNome="competidor.nome" :competidorCidade="cidadeNatalToString(competidor.cidadeNatal)" :competidorId="competidor.id" />
        </div>
    </div>
    <v-pagination
        v-model = "currentPage"
        :length="numberOfPages"
        v-on:update:model-value="this.retrieveCompetidores()"
    ></v-pagination>
</template>

<style scoped>
    .competidor-cards-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>

<script>
import CompetidorDataService from '@/services/CompetidorDataService';
import CompetidorCardComponent from './CompetidorCardComponent.vue';

    export default {
        name: 'CompetidoresComponent',
        data(){
            return{
                competidores: [],
                nomeCompetidorSearch: '',
                numberOfPages: 0,
                currentPage: 0
            };
        },
        methods: {
            retrieveCompetidores(){
                CompetidorDataService.getAll(this.currentPage-1)
                    .then(this.updateCompetidoresData).catch(err=>{
                        console.error(err);
                    });
            },

            searchCompetidores(){
                CompetidorDataService.searchCompetidores(this.nomeCompetidorSearch)
                    .then(this.updateCompetidoresData)
                    .catch(err=>console.error(err));
            },

            updateCompetidoresData(response){
                this.numberOfPages = response.data.totalPages;
                this.competidores = response.data.content;
            },
            
            cidadeNatalToString(cidadeNatal){
                return cidadeNatal.cidade + "/" + cidadeNatal.estado
            }

        },
        components: {
            CompetidorCardComponent
        },
        mounted(){
            this.retrieveCompetidores();
        }
    }
</script>
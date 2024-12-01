<template>
    <CompetidorCardComponent competidorName=""/>
</template>
<script>
import CompetidorCardComponent from './CompetidorCardComponent.vue';

    export default {
        name: 'CompetidoresComponent',
        data(){
            return{
                competidores: [],
                name: '',
            }
        },
        methods: {
            retrieveCompetidores(){

            }
        },
        components: {
            CompetidorCardComponent
        }
    }
</script>
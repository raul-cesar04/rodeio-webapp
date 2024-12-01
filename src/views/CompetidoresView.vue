<template>
    <div class="competidores-wrapper">
        <HeaderComponent />
        <v-form validate-on="submit lazy">
            <v-autocomplete label = "Nome do Competidor" :items="['alex']" v-model="nomeCompetidor"></v-autocomplete>
            <v-btn
            :loading="loading"
            class="mt-2"
            text="Pesquisar"
            type="submit"
            ></v-btn>
        </v-form>

        <div class="competidores">
            <CompetidoresComponent />
        </div>

        <FooterComponent />
    </div>
</template>

<style>
</style>

<script>
import CompetidoresComponent from '@/components/CompetidoresComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';


    export default {
        name: 'CompetidoresView',
        components: {
            HeaderComponent,
            FooterComponent,
            CompetidoresComponent
        }
    }
</script>

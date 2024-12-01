<template>
    <HeaderComponent />
    <div v-if="!loading">
        <v-card variant="flat">
            <v-card-item>
                <v-img :src="require('@/assets/logo.png')" max-width="65%"></v-img>
            </v-card-item>
            <v-card-item>
                <h1>
                    {{competidor.nome}}
                </h1>
                <h2>
                    {{ competidor.cidadeNatal.cidade }}/{{ competidor.cidadeNatal.estado }}
                </h2>
                <h3>
                    Idade: {{ competidor.idade }}
                </h3>
            </v-card-item>
        </v-card>
        <h2>Eventos</h2>
        <EventosComponent :from-user="competidor.id"/>
    </div>
    <FooterComponent />
</template>

<style scoped>
    .v-card{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .v-card-item{
        text-align: left;
    }
</style>

<script>
import EventosComponent from '@/components/EventosComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import CompetidorDataService from '@/services/CompetidorDataService';

    export default{
        name: 'CompetidorView',
        data(){
            return{
                competidor: {},
                loading: true
            }
        },
        components: {
            FooterComponent,
            EventosComponent,
            HeaderComponent
        },
        methods: {
            retrieveData(){
                CompetidorDataService.getOne(this.$route.params.id)
                .then(response=>{
                    this.competidor = response.data;
                    this.loading = false;
                }).catch(console.error);
            }
        },
        mounted(){
            this.retrieveData();
        }
    }
</script>
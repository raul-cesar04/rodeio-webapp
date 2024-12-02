<template>
    <HeaderComponent />
    <div v-if="!loading">
        <header>
            <h1>
                Resultados {{ evento.titulo }}
            </h1>
            <h2>
                {{ evento.localizacao.cidade }}/{{ evento.localizacao.estado }}
            </h2>
        </header>
        <v-table>
            <thead>
                <tr>
                    <th>POS</th>
                    <th>Competidor</th>
                    <th>Pontuação</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(competidor, index) in evento.competidores" :key="competidor.id">
                    <td class  = "text-left" >{{index+1}}</td>
                    <td class  = "text-left">
                        <router-link :to = "'/competidores/'+competidor.competidor.id" style="color: inherit">
                            {{ competidor.competidor.nome }}
                        </router-link>
                    </td>
                    <td class = "text-left">{{ parseFloat(competidor.pontuacao).toFixed(2) }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
    <FooterComponent />
</template>

<style scoped>

</style>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import EventoDataService from '@/services/EventoDataService';

    export default{
        name: 'EventoView',
        data(){
            return {
                evento: {},
                loading: true
            }
        },
        components: {
            HeaderComponent,
            FooterComponent
        },
        methods: {
            retrieveData(){
                EventoDataService.getOne(this.$route.params.id)
                    .then(response=>{
                        this.evento = response.data;
                        this.loading = false;
                        console.log(this.evento.competidores);
                    }).catch(console.error);
            }
        },
        mounted(){
            this.retrieveData();
        }
    }
</script>
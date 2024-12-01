<template>
    <v-table>
        <thead>
            <tr>
                <th class  = "text">ID</th>
                <th class  = "text">Evento</th>
                <th class  = "text">Local</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="evento in eventos" :key="evento.id">
                <td class  = "text-left"><strong>{{evento.id}}</strong></td>
                <td class  = "text-left">
                    <router-link :to="'/eventos/'+evento.id" style="text-decoration: underline; color: var(--primary-color); font-weight: bold">
                        {{evento.titulo}}
                    </router-link>
                </td>
                <td class  = "text-left">{{ evento.localizacao.cidade }}/{{ evento.localizacao.estado }}</td>
            </tr>
        </tbody>
    </v-table>
    <v-pagination
        v-model = "currentPage"
        :length="numberOfPages"
        v-on:update:model-value="this.retrieveEvents()"
    ></v-pagination>
</template>

<script>
import CompetidorDataService from '@/services/CompetidorDataService';
import EventoDataService from '@/services/EventoDataService';

    export default {
        name: 'EventosComponent',
        props: ['fromUser'],
        data(){
            return {
                eventos: [],
                numberOfPages: 0,
                currentPage: 1
            };
        },

        methods: {
            retrieveEvents(){
                if(!this.fromUser){
                    console.log("Get all");
                    EventoDataService.getAll(this.currentPage-1)
                        .then(this.updateResponseData)
                        .catch(err=>console.error(err));

                }else{
                    CompetidorDataService.getEventos(this.fromUser)
                    .then(response=>{
                        this.eventos = response.data.map(data=>data.evento);
                    })
                    .catch(console.error);
                }
            },
            updateResponseData(response){
                this.eventos = response.data.content;
                this.numberOfPages = response.data.totalPages;
            }
        },
        mounted(){
            this.retrieveEvents();
        }
    }
</script>
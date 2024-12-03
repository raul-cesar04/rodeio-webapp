<template>
    <v-table>
        <thead>
            <tr>
                <th class  = "text">ID</th>
                <th class  = "text">Evento</th>
                <th class  = "text">Local</th>
                <th v-if="!fromUser">Ações</th>
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
                <td class="text-left" v-if="!fromUser">
                    <div class="actions-row">
                        <v-btn @click="()=>{
                            dialog = true;
                            currentEventToSubscribe = { id: evento.id }
                        }">
                            <svg-icon type="mdi" :path="mdiAccountCowboyHat" />
                        </v-btn>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>
    <v-pagination
        v-model = "currentPage"
        :length="numberOfPages"
        v-on:update:model-value="this.retrieveEvents()"
    ></v-pagination>

    <v-dialog
        v-model="dialog"
        width="auto"
    >
        <v-card max-width="400" title="Inscrever competidor no evento">
            <template v-slot:actions>
                <v-autocomplete label="Nome do competidor" :items="competidoresDisponiveis.map(e=>e.nome)" v-model="competidorTermo" v-model:search-input="search" @update:search="searchCompetidores">

                </v-autocomplete>
                <v-btn class="ms-auto" text="Inscrever" @click="validateForm">
                    <svg-icon type = "mdi" :path="mdiAccountCheck">

                    </svg-icon>
                </v-btn>
            </template>
        </v-card>

    </v-dialog>
</template>

<script>
import CompetidorDataService from '@/services/CompetidorDataService';
import EventoDataService from '@/services/EventoDataService';
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccountCowboyHat, mdiDelete, mdiAccountCheck } from "@mdi/js";

    export default {
        name: 'EventosComponent',
        props: ['fromUser'],
        data(){
            return {
                eventos: [],
                numberOfPages: 0,
                currentPage: 1,

                // Subscribing
                dialog: false,
                currentEventToSubscribe: {},
                competidoresDisponiveis: [],
                competidorTermo: "",    

                mdiAccountCowboyHat,
                mdiAccountCheck,
                mdiDelete
            };
        },
        components: {
            SvgIcon
        },

        methods: {
            retrieveEvents(){
                if(!this.fromUser){
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
            },
            searchCompetidores(val){
                if(val.length < 2) {
                    this.competidoresDisponiveis = [];
                    return;
                }
                CompetidorDataService.searchCompetidores(val)
                    .then(response=>{
                        this.competidoresDisponiveis = response.data.content;
                    })
                    .catch(console.error);
            },
            validateForm(){
                if(!this.competidorTermo) return;
                // Do the thing here!

                const { id } = this.competidoresDisponiveis[0];

                CompetidorDataService.subscribeEvento(this.currentEventToSubscribe.id, id)
                    .then(response=>{
                        console.log(response.data);
                    })
                    .catch(console.error);

                this.dialog = false;
            }
        },
        watch: {
        },
        mounted(){
            this.retrieveEvents();
        }
    }
</script>
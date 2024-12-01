<template>
    <HeaderComponent />
    <div v-if="!loading">
        <v-card variant="flat">
            <v-card-item>
                <v-img :src="require('@/assets/logo.png')" max-width="65%"></v-img>
            </v-card-item>
            <v-card-item>
                <h1>
                    {{proprietario.nome}}({{ proprietario.sigla }})
                </h1>
            </v-card-item>
        </v-card>
        <h2>Plantel</h2>
        <v-table>
        <thead>
            <tr>
                <th class  = "text">ID</th>
                <th class  = "text">Animal</th>
                <th class  = "text">Embretamento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="animal in proprietario.boiada" :key="animal.id">
                <td class  = "text-left"><strong>{{animal.id}}</strong></td>
                <td class  = "text-left">
                    <router-link :to="'/animais/'+animal.id" style="text-decoration: underline; color: var(--primary-color); font-weight: bold">
                        {{animal.nome}}
                    </router-link>
                </td>
                <td class  = "text-left">{{animal.ladoBrete}}</td>
            </tr>
        </tbody>
    </v-table>
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
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import TropeiroDataService from '@/services/TropeiroDataService';

    export default{
        name: 'CompetidorView',
        data(){
            return{
                proprietario: {},
                loading: true
            }
        },
        components: {
            FooterComponent,
            HeaderComponent
        },
        methods: {
            retrieveData(){
                TropeiroDataService.getOne(this.$route.params.id)
                .then(response=>{
                    this.proprietario = response.data;
                    this.loading = false;
                }).catch(console.error);
            }
        },
        mounted(){
            this.retrieveData();
        }
    }
</script>
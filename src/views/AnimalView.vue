<template>
    <HeaderComponent />
    <div v-if="!loading">
        <v-card variant="flat">
            <v-card-item>
                <v-img :src="require('@/assets/logo.png')" max-width="65%"></v-img>
            </v-card-item>
            <v-card-item>
                <h1>
                    {{animal.nome}}
                </h1>
                <h2>
                    CIA:
                    <router-link :to="'/proprietarios/'+animal.proprietario.id" style="text-decoration: underline; color: var(--primary-color)">
                        {{ animal.proprietario.nome }}({{ animal.proprietario.sigla }})
                    </router-link>
                </h2>
                <h3>
                    Embretamento:
                    Lado {{ (animal.ladoBrete).toLowerCase() }}
                </h3>
            </v-card-item>
        </v-card>
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
import AnimalDataService from '@/services/AnimalDataService';

    export default{
        name: 'CompetidorView',
        data(){
            return{
                animal: {},
                loading: true
            }
        },
        components: {
            FooterComponent,
            HeaderComponent
        },
        methods: {
            retrieveData(){
                AnimalDataService.getOne(this.$route.params.id)
                .then(response=>{
                    this.animal = response.data;
                    this.loading = false;
                }).catch(console.error);
            }
        },
        mounted(){
            this.retrieveData();
        }
    }
</script>
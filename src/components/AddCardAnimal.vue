<template>
    <v-card class = "competidor-card" variant="flat">
        <v-card-item class="competidor-card-container add-card" @click = "addDialog = true">
            <svg-icon type="mdi" :path="mdiPlusCircle" size="120"/>
            <p><strong>Cadastrar Animal</strong></p>
        </v-card-item>
    </v-card>

    <v-dialog
        v-model="addDialog"
        width="auto"
    >
        <v-card max-width="400" title="Cadastrar animal">
                <v-form validate-on="submit lazy" @submit.prevent="submitCadastro">
                    <v-text-field
                        v-model="animal.nome"
                        :rules="rules"
                        label="Nome do animal"
                        required
                    />
                    <v-select 
                        label="Tropeiro"
                        v-model="proprietarioData"
                        :rules="rules"
                        :items="getTropeirosSelectData()"
                        item-value="id"
                        dense
                        required
                    />
                    <v-select 
                        label="Lado embretamento"
                        v-model="animal.ladoBrete"
                        :rules="rules"
                        :items="['CERTO', 'ERRADO']"
                        dense
                        required
                    />
                    <v-btn 
                        base-color="primary"
                        text="Confirmar Cadastro"
                        type="submit"
                    />
                </v-form>
        </v-card>

    </v-dialog>

    <v-dialog
        v-model="successDialog"
        width="auto"
    >
        <v-card max-width="400" title="Sucesso!" text="Competidor cadastrado com sucesso!" style="background-color: var(--sucess-color); cursor: pointer;" @click="successDialog=false;">
            
        </v-card>

    </v-dialog>
    <v-dialog
        v-model="failureDialog"
        width="auto"
    >
        <v-card max-width="400" title="Falhou" text="Falha ao cadastrar competidor." style="background-color: var(--failure-color); cursor: pointer;" @click="failureDialog=false;">
            
        </v-card>

    </v-dialog>
</template>

<style>
    .competidor-card-container{
        border: 1px solid rgb(0, 0, 0); 
        padding: 5%;
        margin: 5% 10%;
        text-align: center;
        min-height: 25em;
    }
    .add-card{
        cursor: pointer;
    }
    .v-form{
        text-align: center;
    }
</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPlusCircle } from "@mdi/js";
import TropeiroDataService from '@/services/TropeiroDataService';
import AnimalDataService from '@/services/AnimalDataService';

export default{
    name: 'AddCardComponent',
    data(){
        return {
            mdiPlusCircle,
            addDialog: false,
            successDialog: false,
            failureDialog: false,

            // Cadastro
            rules: [
                value=>{
                    if(value) return true;
                    return "Campo obrigatório";
                }
            ],
            animal: {},
            proprietarioData: null,
            tropeiros: {}
        }
    },
    components: {
        SvgIcon
    },
    methods:{
        submitCadastro(){
            if(!this.animal.nome || !this.animal.ladoBrete) return;

            if(!this.proprietarioData) return;

            AnimalDataService.createAnimal(this.animal, this.proprietarioData)
                .then(()=>{
                    this.animal = {};
                    this.proprietarioData = null;
                    this.addDialog = false;
                    this.showSucess();
                }).catch((err)=>{
                    console.error(err);
                    this.showFailure();
                });
        },

        getTropeirosSelectData(){
            const items = [];
            for(let tropeiro in this.tropeiros){
                const obj = this.tropeiros[tropeiro];
                obj["title"] = obj.nome; 
                items.push(obj);
            }

            return items;
        },

        showFailure(){
            this.failureDialog = true;
            setTimeout(()=>{
                this.failureDialog = false;
            }, 3000);
        },
        showSucess(){
            this.successDialog = true;
            setTimeout(()=>{
                this.successDialog = false;
            }, 3000);
        }

    },  
    mounted(){

        TropeiroDataService.getAll()
            .then(response=>{
                const _tropeiros = response.data.content;
                _tropeiros.map(t=>{
                    this.tropeiros[t.id] = t;
                });
            })
            .catch(console.error);
    }
}
</script>
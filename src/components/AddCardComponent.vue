<template>
    <v-card class = "competidor-card" variant="flat">
        <v-card-item class="competidor-card-container add-card" @click = "addDialog = true">
            <svg-icon type="mdi" :path="mdiPlusCircle" size="120"/>
            <p><strong>Cadastrar Competidor</strong></p>
        </v-card-item>
    </v-card>

    <v-dialog
        v-model="addDialog"
        width="auto"
    >
        <v-card max-width="400" title="Inscrever competidor no evento">
                <v-form validate-on="submit lazy" @submit.prevent="submitCadastro">
                    <v-text-field
                        v-model="competidorCadastroData.nome"
                        :rules="rules"
                        label="Nome do Competidor"
                        required
                    />
                    <v-number-input 
                        label="Idade do Competidor"
                        v-model="competidorCadastroData.idade"
                        min="0"
                        max="99"
                        required
                    />
                    <v-select 
                        label="Estado"
                        v-model="cidadeNatalCadastro.estado"
                        :items="estados.map(e=>e.sigla)"
                        v-on:update:model-value="loadMunicipios"
                        required
                    />
                    <v-select 
                        label="Cidade"
                        v-model="cidadeNatalCadastro.municipio"
                        :items="municipios.map(m=>m.nome)"
                        :disabled="municipiosInputDisaled"
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
import { VNumberInput } from "vuetify/labs/VNumberInput";
import { mdiPlusCircle } from "@mdi/js";
import IBGEDataService from '@/services/IBGEDataService';
import CompetidorDataService from '@/services/CompetidorDataService';

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
            competidorCadastroData: {},
            cidadeNatalCadastro: {},
            estados: [],
            municipios: [],
            municipiosInputDisaled: true
        }
    },
    components: {
        SvgIcon,
        VNumberInput
    },
    methods:{
        loadMunicipios(){
            if(!this.cidadeNatalCadastro.estado){
                return;
            }
            this.municipiosInputDisaled = false;
            this.cidadeNatalCadastro.municipio = null;
            IBGEDataService.getMunicipios(this.cidadeNatalCadastro.estado)
                .then(response=>{
                    this.municipios = response.data;
                })
                .catch(console.error);
        },

        submitCadastro(){
            if(!this.competidorCadastroData.nome || !this.competidorCadastroData.idade) return;

            if(!this.cidadeNatalCadastro.municipio || !this.cidadeNatalCadastro.estado) return;

            CompetidorDataService.createCompetidor(this.competidorCadastroData, this.cidadeNatalCadastro)
                .then(()=>{
                    this.cidadeNatalCadastro = {};
                    this.competidorCadastroData = {};
                    this.addDialog = false;
                    this.showSucess();
                }).catch((err)=>{
                    console.error(err);
                    this.showFailure();
                });
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

        IBGEDataService.getEstados()
            .then(response=>{
                this.estados=response.data
            })
            .catch(console.error);
    }
}
</script>
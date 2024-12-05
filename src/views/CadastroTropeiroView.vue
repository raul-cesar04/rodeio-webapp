<template>
    <HeaderComponent />
    <div class="cadastro">
        <v-form @submit.prevent="cadastrarTropeiro">
            <h2>Dados do Tropeiro</h2>
            <fieldset>
                <v-text-field 
                    v-model="tropeiroData.nome"
                    :rules="rules"
                    label="Nome do Tropeiro"
                    max-width="50%"
                />
                <v-text-field 
                    v-model="tropeiroData.sigla"
                    :rules="rules"
                    label="Sigla"
                    max-width="20%"                
                />
            </fieldset>
            <h2>Plantel</h2>
            <fieldset>
                <v-text-field 
                    v-model="currentBullData.nome"
                    :rules="rules"
                    label="Nome do Animal"
                    max-width="50%"
                />
                <v-select 
                    label="Lado embretamento"
                    v-model="currentBullData.ladoBrete"
                    :rules="rules"
                    :items="['CERTO', 'ERRADO']"
                    max-width="20%"
                    required
                />
                <v-btn base-color="primary" @click="addBullData">
                    <svg-icon type="mdi" :path="mdiPlus" size="200">Add</svg-icon>
                </v-btn>
            </fieldset>
            <v-table>
                <thead>
                    <tr>
                        <th>Animal</th>
                        <th>Embretamento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(bull, index) in bullData" :key="index">
                        <td class="text-left">{{bull.nome}}</td>
                        <td class="text-left">{{bull.ladoBrete}}</td>
                    </tr>
                </tbody>
            </v-table>
            <v-btn base-color="primary" type="submit">
                Cadastrar Tropeiro
            </v-btn>
        </v-form>
    </div>
    <FooterComponent />

    <v-dialog
        v-model="successDialog"
        width="auto"
    >
        <v-card max-width="400" title="Sucesso!" text="Tropeiro cadastrado com sucesso!" style="background-color: var(--sucess-color); cursor: pointer;" @click="successDialog=false;">
            
        </v-card>

    </v-dialog>
    <v-dialog
        v-model="failureDialog"
        width="auto"
    >
        <v-card max-width="400" title="Falhou" text="Falha ao cadastrar tropeiro." style="background-color: var(--failure-color); cursor: pointer;" @click="failureDialog=false;">
            
        </v-card>

    </v-dialog>
</template>
<style>
fieldset{
    display: flex;
    border: 0;
    align-items: center;
}
fieldset .v-text-field{
    margin: 0 1%;
}
</style>
<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import TropeiroDataService from '@/services/TropeiroDataService';
import { SvgIcon } from "@jamescoyle/vue-icon";
import { mdiPlus } from "@mdi/js";

    export default{
        name: "CadastroTropeiroView",
        data(){
            return {
                // Icons
                mdiPlus,

                bullData: [],
                currentBullData: {},
                tropeiroData: {},

                rules: [
                    value=>{
                        if(value) return true;
                        return "Campo obrigatório";
                    }
                ],

                // Dialogs
                failureDialog: false,
                successDialog: false
            }
        },
        methods: {
            addBullData(){
                this.bullData.push({
                    nome: this.currentBullData.nome,
                    ladoBrete: this.currentBullData.ladoBrete
                });
                this.currentBullData.nome = null;
                this.currentBullData.ladoBrete = null;
            },
            cadastrarTropeiro(){
                if(!this.tropeiroData.nome || !this.tropeiroData.sigla) return;
                if(this.bullData.length == 0) return;
                
                TropeiroDataService.createTropeiro(this.tropeiroData, this.bullData)
                    .then(()=>{
                        this.showSucess();
                    })
                    .catch(error=>{
                        console.error(error);
                        this.showFailure();
                    }).finally(()=>{
                        this.tropeiroData.nome = null;
                        this.tropeiroData.sigla = null;
                        this.bullData = [];
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
        components: {
            HeaderComponent,
            FooterComponent,
            SvgIcon
        }
    }
</script>
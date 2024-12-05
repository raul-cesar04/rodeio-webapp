import httpIbge from "./external-api/http-ibge";

class IBGEDataService{
    getEstados(){
        return httpIbge.get("/estados");
    }

    getMunicipios(uf){
        return httpIbge.get("/estados/"+uf+"/municipios");
    }
}

export default new IBGEDataService();
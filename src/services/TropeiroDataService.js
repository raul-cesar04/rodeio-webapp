import http from "@/services/external-api/http-common";
class TropeiroDataService{
    
    getOne(id){
        return http.get("/tropeiro/"+id);
    }

    getAll(){
        return http.get("/tropeiro");
    }

    createTropeiro(tropeiroData, bullData){
        return http.post("/tropeiro", {
            nome: tropeiroData.nome,
            sigla: tropeiroData.sigla,
            boiada: bullData
        });
    }
}

export default new TropeiroDataService();
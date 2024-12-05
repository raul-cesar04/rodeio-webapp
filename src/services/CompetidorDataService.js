import http from "@/services/external-api/http-common";
class CompetidorDataService{
    getAll(page = 0){
        return http.get("/competidor?size=11&page="+page);
    }

    getOne(id){
        return http.get("/competidor/"+id);
    }

    searchCompetidores(term){
        return http.get("/competidor/search?nome="+term);
    }

    getEventos(id){
        return http.get("/competidor/"+id+"/evento");
    }

    createCompetidor(competidorData, cidadeNatal){
        return http.post("/competidor", {
            nome: competidorData.nome,
            idade: competidorData.idade,
            cidadeNatal:{
                cidade: cidadeNatal.municipio,
                estado: cidadeNatal.estado
            }
        });
    }

    subscribeEvento(eventoId, competidorId){
        return http.post("/competidor/"+competidorId+"/evento", {
            id: eventoId
        });
    }
}

export default new CompetidorDataService();
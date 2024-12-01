import http from "@/services/external-api/http-common";
class CompetidorDataService{
    getAll(page = 0){
        return http.get("/competidor?size=12&page="+page);
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
}

export default new CompetidorDataService();
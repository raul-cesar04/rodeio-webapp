import http from "@/services/external-api/http-common";
class CompetidorDataService{
    getAll(page = 0){
        return http.get("/competidor?size=12&page="+page);
    }

    searchCompetidores(term){
        return http.get("/competidor/search?nome="+term);
    }
}

export default new CompetidorDataService();
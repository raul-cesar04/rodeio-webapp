import http from "@/services/external-api/http-common";

class EventoDataService{
    getAll(page = 0){
        return http.get("/evento?page="+page);
    }

    getOne(id){
        return http.get("/evento/"+id);
    }
}

export default new EventoDataService();
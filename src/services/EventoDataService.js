import http from "@/services/external-api/http-common";

class EventoDataService{
    getAll(page = 0){
        return http.get("/evento?page="+page);
    }
}

export default new EventoDataService();
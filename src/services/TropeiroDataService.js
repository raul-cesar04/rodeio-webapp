import http from "@/services/external-api/http-common";
class TropeiroDataService{
    
    getOne(id){
        return http.get("/tropeiro/"+id);
    }
}

export default new TropeiroDataService();
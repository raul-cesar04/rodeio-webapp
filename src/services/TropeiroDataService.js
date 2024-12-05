import http from "@/services/external-api/http-common";
class TropeiroDataService{
    
    getOne(id){
        return http.get("/tropeiro/"+id);
    }

    getAll(){
        return http.get("/tropeiro");
    }
}

export default new TropeiroDataService();
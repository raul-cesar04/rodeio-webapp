import http from "@/services/external-api/http-common";
class AnimalDataService{
    getAll(page = 0){
        return http.get("/animal?size=12&page="+page);
    }

    searchAnimal(term){
        return http.get("/animal/search?nome="+term);
    }

    getOne(id){
        return http.get("/animal/"+id);
    }
}

export default new AnimalDataService();
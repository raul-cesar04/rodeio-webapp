import http from "@/services/external-api/http-common";
class AnimalDataService{
    getAll(page = 0){
        return http.get("/animal?size=12&page="+page);
    }

    searchAnimal(term){
        return http.get("/animal/search?nome="+term);
    }
}

export default new AnimalDataService();
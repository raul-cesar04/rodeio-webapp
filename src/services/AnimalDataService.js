import http from "@/services/external-api/http-common";
class AnimalDataService{
    getAll(page = 0){
        return http.get("/animal?size=11&page="+page);
    }

    searchAnimal(term){
        return http.get("/animal/search?nome="+term);
    }

    getOne(id){
        return http.get("/animal/"+id);
    }

    createAnimal(animalData, proprietarioId){
        return http.post("/animal", {
            nome: animalData.nome,
            ladoBrete: animalData.ladoBrete,
            proprietario: {
                id: proprietarioId
            }
        });
    }
}

export default new AnimalDataService();
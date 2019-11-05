class GameController {

    constructor(){
        this.getAllGameCatalog();
    }

    getAllGameCatalog() {

        Fetch.get('games/catalog').then(data => {
            console.log(data);
        })
    }
}
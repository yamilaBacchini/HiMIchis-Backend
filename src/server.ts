import * as express from 'express';
import {createConnection, getManager} from 'typeorm';
import {AdoptionCatRepository} from "./repository/AdoptionCat-Repository";
import {AdoptionCat} from "./entity/AdoptionCat";
import {AdoptionCatService} from "./service/AdoptionCat-Service";

createConnection().then(connection => {
    connection.synchronize();
}).catch(error => console.log(error));

const adoptionCatRepository = new AdoptionCatRepository();
const adoptionCatService = new AdoptionCatService();

const app = express();
app.use(express.json());

app.get('/getAllAdoptionCats', (req, res) => {
    adoptionCatService.getAll().then((resultado) => res.send(resultado));
});

app.get('/getAdoptionCatById/:id', (req, res) => {
    adoptionCatService.getById(Number(req.params.id)).then((resultado) => res.send(resultado));
})

app.get('/getAdoptionCatsByFilters', (req, res) => {
    adoptionCatService.getByFilters(req.body).then((resultado) => res.send(resultado));
})

app.post('/createAdoptionCat', (req, res) => {
    adoptionCatService.create(req.body).then((resultado) => res.send(resultado));
})

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});
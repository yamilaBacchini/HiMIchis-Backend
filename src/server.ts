import * as express from 'express';
import {createConnection, getManager} from 'typeorm';
import {AdoptionCatRepository} from "./repository/AdoptionCat-Repository";
import {AdoptionCat} from "./entity/AdoptionCat";

createConnection().then(connection => {
    connection.synchronize();
}).catch(error => console.log(error));

const adoptionCatRepository = new AdoptionCatRepository();

const app = express();
app.use(express.json());

app.get('/getAllAdoptionCats', (req, res) => {
    adoptionCatRepository.getAll().then((resultado) => res.send(resultado));
});

app.get('/getAdoptionCatById/:id', (req, res) => {
    adoptionCatRepository.getById(Number(req.params.id)).then((resultado) => res.send(resultado));
})

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});
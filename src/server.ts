import * as express from 'express';
import {createConnection} from 'typeorm';
import {AdoptionCatService} from "./service/AdoptionCat-Service";
// import {AdoptionCatRepository} from "./repository/AdoptionCat-Repository";
import * as cors from 'cors';


createConnection().then(connection => {
    connection.synchronize();
}).catch(error => console.log(error));

// const adoptionCatRepository = new AdoptionCatRepository();
const adoptionCatService = new AdoptionCatService();

const app = express();

var router = express.Router();

const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false,
  };

  router.use(cors(options));

//add your routes

//enable pre-flight
router.options('*', cors(options));

app.use(express.json());

router.get('/getAllAdoptionCats', (req, res) => {
    adoptionCatService.getAll().then((resultado) => res.send(resultado));
});

router.get('/getAdoptionCatById/:id', (req, res) => {
    adoptionCatService.getById(Number(req.params.id)).then((resultado) => res.send(resultado));
})

router.get('/getAdoptionCatsByFilters', (req, res) => {
    adoptionCatService.getByFilters(req.body).then((resultado) => res.send(resultado));
})

router.post('/createAdoptionCat', (req, res) => {
    adoptionCatService.create(req.body).then((resultado) => res.send(resultado));
})

app.use(router);

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});
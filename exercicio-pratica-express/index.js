const express = require('express');
const bodyParser = require('body-parser');
const Actor = require('./controllers/actor')

const app = express();
app.use(bodyParser.json());


app.get('/actors', Actor.getAllActors);
app.get('/actors/:name', Actor.getSingleActor);

app.listen(3001, () => {
console.log('Aplicação ouvindo na porta 3001'); 
});

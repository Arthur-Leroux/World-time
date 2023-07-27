//je récupere epxress
const express = require(`express`);
//j'instancie express
const app = express();
//je récupere router 
const router = require(`./router`);

//je dit a app de se servir de router pour les routes
app.use(router);

//je configure Express
app.set(`baseUrl`, `http://localhost`);
app.set(`port`,3001);
//j'écoute mon url ainsi que mon port 
const server = app.listen(app.get(`port`),() => {
    console.log(`Listening start on : ${app.get(`baseUrl`)}:${app.get(`port`)}`);
});
//j'exporte pour app
module.export = server;
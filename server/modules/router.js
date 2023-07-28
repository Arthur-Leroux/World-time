//pour créer un router j'ai besoin d'express
const express = require(`express`);
const options = require(`./otpions`);
const dayjs = require(`./dayjs`);

const capitalCities = require(`./capitalCities`);

//j'instancie mon router

const router = express.Router();

router.get(`/`, (req, res) => {
  res.sendFile(`index.html`, options);
  res.status(200);
});

router.get(`/city/:city`, (req, res) => {
  const city = req.params.city;
  //on doit comparer o_city avec city
  //
  const found = capitalCities.find(function (o_city) {
    return o_city.name.toLocaleLowerCase() === city;
  });
  //console.log(found.name);
  if (found) {
    res.send(
      `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Liste des grandes capitales du monde</title>
    </head>
    <body>
    <h1>bienvenue à ${city} ! </h1>
     nous sommes ${dayjs.tz(dayjs(), found.tz).format(`dddd DD MMMM YYYY`)}
     <p>est il est ${dayjs.utc(dayjs(), found.tz).format(`HH[h]mm[ et ]ss`)}</p>
      </body>
      </html>`
    );
  };
  res.redirect(`/404`);
});
router.get(`/404`, (req, res) => {
  res.status(404);
  res.sendFile(`404.html`, options);
  
});
module.exports = router;

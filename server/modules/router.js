//pour créer un router j'ai besoin d'express
const express = require(`express`);
const options = require(`./otpions`);



const capitalCities = require(`./capitalCties`);

//j'instancie mon router

//console.log(timeZone);
const router = express.Router();

router.get(`/`, (req, res) => {
  res.sendFile(`index.html`, options);
  res.status(200);
});

router.get(`/city/:name`, (req, res) => {

    for(element of capitalCities){
        console.log(element.tz)
        res.send(`je suis la ville de ${req.params.name}. Mon fuseau horaire est : ${element}`);
    }

});

module.exports = router;

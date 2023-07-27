//pour créer un router j'ai besoin d'express
const express = require(`express`);
const options = require(`./otpions`);
const timeZone = require(`./timezone`);

//j'instancie mon router


 
console.log(timeZone);
const router = express.Router();


router.get(`/`,(req,res)=>{
  
  

  res.sendFile(`index.html`,options);
  res.status(200);
  
});

router.get(`/city/:name`,(req,res)=>{
    res.send(`coucou je suis la route paramétré`);
})

module.exports = router;


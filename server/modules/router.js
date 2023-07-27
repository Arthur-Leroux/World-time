//pour créer un router j'ai besoin d'express
const express = require(`express`);

//j'instancie mon router
const router = express.Router();

router.get(`/`,(req,res)=>{
  
   //console.log(req.params);

  res.sendFile(`/home/arthur/Documents/repository/World-time/views/index.html`);
  res.status(200);
  
});


module.exports = router;


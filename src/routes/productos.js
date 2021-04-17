const express = require ('express');
const router = express.Router();

router.get('/Products', (req, res) =>{
    res.send('nuestros productos'); 
});

router.get('/Price', (req, res) =>{
    res.send('lista de precios'); 
});

module.exports = router;

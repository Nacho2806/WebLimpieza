const express = require ('express');
const router = express.Router();

router.get('/Cart', (req, res) =>{
    res.send('productos agregados al carrito'); 
});

module.exports = router;

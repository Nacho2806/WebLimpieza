const express = require ('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('inicio.html', { title: 'Inicio - Nacho Limpieza'});
});

router.get('/About', (req, res) =>{
    res.render('nosotros.html', {title: 'Nosotros - Nacho Limpieza'}); 
});

router.get('/Adress', (req, res) =>{
    res.render('direccion.html', {title: 'Donde Estamos - Nacho Limpieza'}); 
});

router.get('/Contact', (req, res) =>{
    res.render('contacto.html', {title: 'Contacto - Nacho Limpieza'}); 
});

module.exports = router;

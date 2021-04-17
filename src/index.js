const express = require('express');
const path = require('path');

//Initialization
const app = express();
//require('./database');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Middlewares
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/productos'));
app.use(require('./routes/carrito'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server is listening
app.listen(app.get('port'), () =>{
    console.log('Server on port:', app.get('port'));
});
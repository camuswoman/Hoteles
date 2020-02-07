const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000); //puerto

//Middlewares
app.use(morgan('dev')); //mejor forma de ver errores o peticiones
app.use(express.json()); //poder leer codigo json
app.use(cors({ origin: 'http://localhost:4200' }));
//Routes
app.use('/api/hoteles', require('./routes/hoteles.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
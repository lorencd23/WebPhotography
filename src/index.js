const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 8080);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Middleware para habilitar CORS
app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
});

// routes
app.use(require('./routes/index'));
app.use('/api/pics', require('./routes/pics'));

// starting the server
app.listen(app.get('port'), () => {
      console.log(`Server on port ${app.get('port')}`);
})
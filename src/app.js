const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

const indexRoutes = require('./routes/indexRouter');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret : 'tp session & cookies',
    resave: false,
    saveUninitialized: true,
    cookie : {}
  
  }));

app.use('/', indexRoutes);


app.listen(3000, () => console.log(`Servidor corriendo en http://localhost:3000`));
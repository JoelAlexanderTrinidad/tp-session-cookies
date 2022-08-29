const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookies = require('cookie-parser');

const indexRoutes = require('./routes/indexRouter');
const cookieCheck = require('./middlewares/cookieCheck');


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

app.use(cookies());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret : 'tp session & cookies',
    resave: false,
    saveUninitialized: true,
    cookie : {}
  
  }));

app.use(cookieCheck);


app.use('/', indexRoutes);


app.listen(3000, () => console.log(`Servidor corriendo en http://localhost:3000`));
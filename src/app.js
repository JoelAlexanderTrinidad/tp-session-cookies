const express = require('express');
const app = express();
const path = require('path');

const indexRoutes = require('./routes/indexRouter');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoutes);


app.listen(3000, () => console.log(`Servidor corriendo en http://localhost:3000`));
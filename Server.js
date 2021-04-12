const express = require('express');
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 2901;

const app = express();

app.use(express.static('Public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// fix this 
const routes = require('./Controller/burgers_controller');
app.use(routes);


app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

const express = require('express');
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 2901;

const app = express();

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
dotenv.config({path: 'main.env'});

const PORT = process.env.PORT;

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static('public'));

require('./configs/db')();

app.use('/', require('./routes/index'));

app.listen(PORT, (err) => {
    if(err) console.error(err);
    else console.log('The server is running at ' + PORT);
});
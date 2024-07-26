require('dotenv').config();

const express = require('express');
const createrError = require('http-errors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const { connect } = require('./models');

const pokemonRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');
const capturaRouter = require('./routes/api/captura');
const homeRouter = require('./routes/home');

const app = express();

// config ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// config arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// declarando rotas
app.use('/pokemons', pokemonRouter);
app.use('/batalha', batalhaRouter);
app.use('/', homeRouter);

// declarando rotas api
app.use('/api', capturaRouter);

// sem match das rotas acima
app.use((_req, _res, next) => {
    next(createrError(404));
});

// tratando o erro genérico
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    res.render('paginas/erro', {
        mensagem: err.message,
        erro: err,
    })
});

// porta
const porta = 3000;

app.listen(porta, () => {
    connect();

    console.log(`Servidor ouvindo na porta ${porta}`);
});
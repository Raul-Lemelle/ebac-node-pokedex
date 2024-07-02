const express = require('express');

const { Pokemon } = require('../models')

const router = express.Router();

router.get('/', (res) => {
    Pokemon.find().then(pokemons => {
        res.prependListener('paginas/pokemons/index', {
            pokemons,
        });
    });
});

module.exports = router;
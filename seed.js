require('dotenv').config();

const mongoose = require('mongoose');
const { connect, Pokemon } = require('./models');

const pokemonsFavoritos = [
    {
        id: 7,
        nome: 'squirtle',
        altura: 5,
        peso: 90,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        ataques: 'torrent, rain-dish',
        estatisticas: {
            hp: 44,
            attack: 48,
            defense: 65,
            'special-attack': 50,
            'special-defense': 64,
            speed: 43
        }
    },
    {
        id: 25,
        nome: 'pikachu',
        altura: 4,
        peso: 60,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        ataques: 'static, lightning-rod',
        estatisticas: {
            hp: 35,
            attack: 55,
            defense: 40,
            'special-attack': 50,
            'special-defense': 50,
            speed: 90
        }
    },
    // Adicione os outros 8 pokémons favoritos aqui
    {
        id: 1,
        nome: 'bulbasaur',
        altura: 7,
        peso: 69,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        ataques: 'overgrow, chlorophyll',
        estatisticas: {
            hp: 45,
            attack: 49,
            defense: 49,
            'special-attack': 65,
            'special-defense': 65,
            speed: 45
        }
    },
    {
        id: 4,
        nome: 'charmander',
        altura: 6,
        peso: 85,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        ataques: 'blaze, solar-power',
        estatisticas: {
            hp: 39,
            attack: 52,
            defense: 43,
            'special-attack': 60,
            'special-defense': 50,
            speed: 65
        }
    },
    {
        id: 150,
        nome: 'mewtwo',
        altura: 20,
        peso: 1220,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
        ataques: 'pressure, unnerve',
        estatisticas: {
            hp: 106,
            attack: 110,
            defense: 90,
            'special-attack': 154,
            'special-defense': 90,
            speed: 130
        }
    },
    {
        id: 94,
        nome: 'gengar',
        altura: 15,
        peso: 405,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
        ataques: 'cursed-body',
        estatisticas: {
            hp: 60,
            attack: 65,
            defense: 60,
            'special-attack': 130,
            'special-defense': 75,
            speed: 110
        }
    },
    {
        id: 143,
        nome: 'snorlax',
        altura: 21,
        peso: 4600,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
        ataques: 'immunity, thick-fat, gluttony',
        estatisticas: {
            hp: 160,
            attack: 110,
            defense: 65,
            'special-attack': 65,
            'special-defense': 110,
            speed: 30
        }
    },
    {
        id: 130,
        nome: 'gyarados',
        altura: 65,
        peso: 2350,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
        ataques: 'intimidate, moxie',
        estatisticas: {
            hp: 95,
            attack: 125,
            defense: 79,
            'special-attack': 60,
            'special-defense': 100,
            speed: 81
        }
    },
    {
        id: 6,
        nome: 'charizard',
        altura: 17,
        peso: 905,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        ataques: 'blaze, solar-power',
        estatisticas: {
            hp: 78,
            attack: 84,
            defense: 78,
            'special-attack': 109,
            'special-defense': 85,
            speed: 100
        }
    },
    {
        id: 151,
        nome: 'mew',
        altura: 4,
        peso: 40,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
        ataques: 'synchronize',
        estatisticas: {
            hp: 100,
            attack: 100,
            defense: 100,
            'special-attack': 100,
            'special-defense': 100,
            speed: 100
        }
    }
];

const populaBancoDeDados = async () => {
    try {
        await connect();
        await Pokemon.create(pokemonsFavoritos);
        console.log('Pokémons inseridos com sucesso!');
    } catch (e) {
        console.error('Erro ao inserir pokémons:', e);
    } finally {
        await mongoose.disconnect();
    }
};

populaBancoDeDados();

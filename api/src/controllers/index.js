const axios = require("axios");
const { Videogame, Genre, Platform } = require("../db.js")
require("dotenv").config();
const { API_KEY } = process.env;

const getApiGames = async () => {
    const games = [];
    for (let i = 1; i <= 5; i++) {
        const videoGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
        const gamesPage = await videoGames.data.results.forEach(game => {
        const juego = {
            id: game.id,
            name: game.name,
            img: game.background_image,
            release: game.released,
            rating: game.rating,
            genres: game.genres.map(g => g.name)
        }
        games.push(juego)
        })   
    }

    return games;
}

const getGamesDB = async () => {
    const gamesDB = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
    console.log(gamesDB);
    return gamesDB
}

const getAllGames = async () => {
    const api = await getApiGames();
    const db = await getGamesDB();
    const all = api.concat(db);
    return all;
}

const searchApiGames = async (info) => {
    const searchGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${info}&page_size=15`)
    const games = await searchGames.data.results.map(game => {
        return {
            id: game.id,
            name: game.name,
            img: game.background_image,
            release: game.released,
            rating: game.rating,
            genres: game.genres.map(g => g.name),
            platforms: game.parent_platforms.map(p => p.platform.name)
        }
    })
    return games
}

const getGameDetail = async (id) => {
    const searchGame = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    return {
        name: searchGame.data.name,
        img: searchGame.data.background_image,
        description: searchGame.data.description_raw,
        release: searchGame.data.released,
        rating: searchGame.data.rating,
        platforms: searchGame.data.parent_platforms.map(p => p.platform.name),
        genres: searchGame.data.genres.map(g => g.name)
    }
}

const getGenres = async () => {
    const genres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const allGenres = await genres.data.results.map(genre => {
        return {
            id: genre.id,
            name: genre.name
        }
    })
    return Promise.all(allGenres)
}

const getAllGenres = async () => {
    let db = await Genre.findAll()
    if (!db.length) {
        await Genre.bulkCreate(await getGenres())
        db = await Genre.findAll()
    }
    return db;
}

const getPlatforms = async () => {
    const platforms = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
    const allPlatforms = await platforms.data.results.map(p => {
        return {
            id: p.id,
            name: p.name
        }
    })
    return Promise.all(allPlatforms)
}

module.exports = {
    getAllGames,
    searchApiGames,
    getGameDetail,
    getAllGenres,
    getPlatforms
}
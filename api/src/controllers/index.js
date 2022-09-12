const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getGameDescription = async (id) => {
    const description = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    return description.data.description_raw;
}

const getApiGames = async () => {
    const videoGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    const allGames = await videoGames.data.results.map(game => {
        const juego = {
            id: game.id,
            name: game.name,
            release: game.released,
            rating: game.rating
        }
        return juego
    })
    return allGames;
}

const searchApiGames = async (info) => {
    const searchGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${info}&page_size=15`)
    const games = await searchGames.data.results.map(game => {
        return {
            id: game.id,
            name: game.name,
            release: game.released,
            rating: game.rating
        }
    })
    return games
}

module.exports = {
    getApiGames,
    getGameDescription,
    searchApiGames
}
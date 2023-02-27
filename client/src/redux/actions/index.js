import axios from "axios";
import { GET_ALL_GAMES,
         GET_GAME_DETAIL, 
         GET_GENRES, 
         GET_PLATFORMS,
         ORDER_BY_NAME,
         ORDER_BY_RATING,
         FILTER_BY_GENRE,
         FILTER_BY_CREATED,
         BROWSE_GAME,
         CREATE_GAME, 
         CLEAR_GAME} from "../action-types/index.js";

export const getAllGames = () => {
    return async function (dispatch) {
        const allGames = await axios.get("/videogames")
        dispatch({
            type: GET_ALL_GAMES,
            payload: allGames.data
        })
    }
}

export const getGameDetail = (id) => {
    return async function (dispatch) {
        const gameDetail = await axios.get(`/videogames/${id}`)
        dispatch({
            type: GET_GAME_DETAIL,
            payload: gameDetail.data
        })
    }
}

export const getGenres = () => {
    return async function (dispatch) {
        const allGenres = await axios.get("/genres")
        dispatch({
            type: GET_GENRES,
            payload: allGenres.data
        })
    }
}

export const getPlatforms = () => {
    return async function (dispatch) {
        const allPlatforms = await axios.get("/platforms")
        dispatch({
            type: GET_PLATFORMS,
            payload: allPlatforms.data
        })
    }
}

export const orderByName = (value) => {
    return async function (dispatch) {
        dispatch({
            type: ORDER_BY_NAME,
            payload: value
        })
    }
}

export const orderByRating = (value) => {
    return async function (dispatch) {
        dispatch({
            type: ORDER_BY_RATING,
            payload: value
        })
    }
}

export const filterByGenres = (genre) => {
    return async function (dispatch) {
        dispatch({
            type: FILTER_BY_GENRE,
            payload: genre
        })
    }
}

export const filterByCreated = (created) => {
    return async function (dispatch) {
        dispatch({
            type: FILTER_BY_CREATED,
            payload: created
        })
    }
}

export const setBrowseGame = (games) => {
    return async function (dispatch) {
        dispatch({
            type: BROWSE_GAME,
            payload: games
        })
    }
}

export const browseApiGame = (name) => {
    return async function (dispatch) {
        const browsed = await axios.get(`/videogames?name=${name}`)
        dispatch({
            type: BROWSE_GAME,
            payload: browsed.data
        })
    }
}

export const createGame = (game) => {
    return async function (dispatch) {
        const newGame = await axios.post("/videogames", game)
        return dispatch({
            type: CREATE_GAME,
            payload: newGame.data
        })
    }
}

export const clearGame = () => {
    return async function (dispatch) {
        dispatch({
            type: CLEAR_GAME,
            payload: {}
        })
    }
}
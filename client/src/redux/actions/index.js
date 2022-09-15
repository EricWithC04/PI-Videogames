import { GET_ALL_GAMES, GET_GAME_DETAIL, GET_GENRES, GET_PLATFORMS } from "../action-types/index.js";

export const getAllGames = () => {
    return async function (dispatch) {
        const allGames = await fetch("http://localhost:3001/videogames")
            .then(response => response.json())
        dispatch({
            type: GET_ALL_GAMES,
            payload: allGames
        })
    }
}
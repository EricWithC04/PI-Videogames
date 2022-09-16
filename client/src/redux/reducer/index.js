import { GET_ALL_GAMES, 
         GET_GAME_DETAIL, 
         GET_GENRES, 
         GET_PLATFORMS,
         ORDER_BY_NAME,
         ORDER_BY_RATING,
         FILTER_BY_GENRE,
         FILTER_BY_CREATED } from "../action-types/index.js";

const initialState = {
    allGames: [],
    gameDetail: {},
    filteredGames: [],
    allGenres: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                allGames: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                allGenres: action.payload
            }
        case ORDER_BY_NAME:
            const orderName = action.payload === "ascendente" ? state.allGames.sort((a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                return 0
            }) : state.allGames.sort((a, b) => {
                if (a.name < b.name) return 1
                if (a.name > b.name) return -1
                return 0
            })
            return {
                ...state,
                allGames: orderName
            }
        case ORDER_BY_RATING:
            const orderRating = action.payload === "ascendente" ? state.allGames.sort((a, b) => {
                return a.rating - b.rating
            }) : state.allGames.sort((a, b) => {
                return b.rating - a.rating
            })
            return {
                ...state,
                allGames: orderRating
            }
        case FILTER_BY_GENRE:
            const filterGenres = state.allGames.filter(game => game.genres.includes(action.payload))
            return {
                ...state,
                filteredGames: filterGenres
            }
        case FILTER_BY_CREATED:
            const filterCreateds = action.payload === "create" ? 
                state.allGames.filter(game => game.createDB) :
                state.allGames.filter(game => !game.createDB)
            return {
                ...state,
                filteredGames: filterCreateds
            }
        default: return state;
    }
}

export default rootReducer;
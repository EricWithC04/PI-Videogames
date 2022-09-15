import { GET_ALL_GAMES, GET_GAME_DETAIL, GET_GENRES, GET_PLATFORMS } from "../action-types/index.js";

const initialState = {
    allGames: [],
    gameDetail: {},
    filteredGames: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                allGames: action.payload
            }
        default: return state;
    }
}

export default rootReducer;
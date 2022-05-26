import { Types } from "../actions/homePageAction"
import { returnFavorites, verifyFavorites } from './../helpers/helpers';

const initialState = {
    lastHeroes: [],
    lastComics: [],
    lastSeries: [],
    loading: true
}

export default function HomePage(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_HEROES:
            return {
                ...state,
                lastHeroes: returnFavorites(action.payload.heroes, 'hero'),
                loading: false
            }
        case Types.ADD_COMICS:
            return {
                ...state,
                lastComics: returnFavorites(action.payload.comics, 'comic'),
                loading: false
            }
        case Types.ADD_SERIES:
            return {
                ...state,
                lastSeries: returnFavorites(action.payload.series, 'serie'),
                loading: false
            }
        case Types.UPDATE_HOMEPAGE:
            return {
                lastHeroes: verifyFavorites(state.lastHeroes, action.payload.favorites),
                lastComics: verifyFavorites(state.lastComics, action.payload.favorites),
                lastSeries: verifyFavorites(state.lastSeries, action.payload.favorites),
                loading: false
            }
        case Types.LOADING_HOMEPAGE:
            return {
                ...state,
                loading: action.payload.loading
            }
        default:
            return state
    }
}


import { Types } from "../actions/homePageAction"

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

//Helpers

function returnFavorites(contents, type) {
    let data = []

    contents.map(content => {
        data = [...data, { ...content, favorited: false, type: type}]
    })

    return data
}

function verifyFavorites(contents, favorites) {
    let data = []

    contents.map(content => {
        if (favorites.find(favorite => favorite.id === content.id)) {
            data = [...data, { ...content, favorited: true }]
        } else {
            data = [...data, { ...content, favorited: false }]
        }

    })

    return data
}
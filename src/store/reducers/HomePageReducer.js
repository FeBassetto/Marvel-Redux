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
                lastHeroes: returnFavorites(action.payload.heroes),
                loading: false
            }
        case Types.UPDATE_HEROES:
            return {
                ...state,
                lastHeroes: verifyFavorites(state.lastHeroes, action.payload.favorites),
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

function returnFavorites(heroes) {
    let data = []

    heroes.map(hero => {
        data = [...data, { ...hero, favorited: false }]
    })

    return data
}

function verifyFavorites(heroes, favorites) {
    let data = []

    heroes.map(hero => {
        if (favorites.find(favorite => favorite.id === hero.id)) {
            data = [...data, { ...hero, favorited: true }]
        } else {
            data = [...data, { ...hero, favorited: false }]
        }

    })

    return data
}
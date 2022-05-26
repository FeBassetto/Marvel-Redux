
import { Types } from './../actions/heroesAction';
import { returnFavorites, verifyFavorites, verifyState } from './../helpers/helpers';


const initialState = {
    search: '',
    selects: {
        nameAlf: true,
        nameCronic: false,
        modifiedDec: false,
        modifiedCre: false
    },
    offset: 1,
    limit: 0,
    heroes: [],
    loading: true,
    lastFavorites: []
}

export default function heroesReducer(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_HEROES:
            return {
                ...state,
                heroes: returnFavorites(action.payload.heroes, 'hero'),
                loading: false
            }
        case Types.UPDATE_HEROES:
            return {
                ...state,
                heroes: verifyFavorites(state.heroes, action.payload.favorites),
                loading: false
            }
        case Types.LOADING_HEROES:
            return {
                ...state,
                loading: action.payload.loading
            }
        case Types.SELECT_HEROES:
            return {
                ...state,
                selects: verifyState(action.payload.state, action.payload.type, state.selects),
                offset: 1
            }
        case Types.OFFSET_HEROES:
            return {
                ...state,
                offset: action.payload.offset
            }
        case Types.LASTFAVORITE_HEROES:
            return {
                ...state,
                lastFavorites: [...action.payload.favorites]
            }
        case Types.LIMIT_HEROES:
            return {
                ...state,
                limit: action.payload.limit
            }
            case Types.NAMESTARTS_HEROES:
                return{
                    ...state,
                    search: action.payload.name,
                    offset: 1
                }
        default:
            return state
    }
}



import { returnFavorites, verifyFavorites, verifyState } from './../helpers/helpers';
import { Types } from './../actions/comicsAction';


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
    comics: [],
    loading: true,
    lastFavorites: []
}

export default function comicsReducer(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_COMICS:
            return {
                ...state,
                comics: returnFavorites(action.payload.comics, 'comic')
            }
        case Types.UPDATE_COMICS:
            return {
                ...state,
                comics: verifyFavorites(state.comics, action.payload.favorites),
                loading: false
            }
        case Types.LOADING_COMICS:
            return {
                ...state,
                loading: action.payload.loading
            }
        case Types.SELECT_COMICS:
            return {
                ...state,
                selects: verifyState(action.payload.state, action.payload.type, state.selects),
                offset: 1
            }
        case Types.OFFSET_COMICS:
            return {
                ...state,
                offset: action.payload.offset
            }
        case Types.LASTFAVORITE_COMICS:
            return {
                ...state,
                lastFavorites: [...action.payload.favorites]
            }
        case Types.LIMIT_COMICS:
            return {
                ...state,
                limit: action.payload.limit
            }
            case Types.NAMESTARTS_COMICS:
                return{
                    ...state,
                    search: action.payload.name,
                    offset: 1
                }
        default:
            return state
    }
}


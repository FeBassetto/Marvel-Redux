
import { returnFavorites, verifyFavorites, verifyState } from './../helpers/helpers';
import { Types } from '../actions/seriesAction';


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
    series: [],
    loading: true,
    lastFavorites: []
}

export default function seriesReducer(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_SERIES:
            return {
                ...state,
                series: returnFavorites(action.payload.series, 'serie')
            }
        case Types.UPDATE_SERIES:
            return {
                ...state,
                series: verifyFavorites(state.series, action.payload.favorites),
                loading: false
            }
        case Types.LOADING_SERIES:
            return {
                ...state,
                loading: action.payload.loading
            }
        case Types.SELECT_SERIES:
            return {
                ...state,
                selects: verifyState(action.payload.state, action.payload.type, state.selects),
                offset: 1
            }
        case Types.OFFSET_SERIES:
            return {
                ...state,
                offset: action.payload.offset
            }
        case Types.LASTFAVORITE_SERIES:
            return {
                ...state,
                lastFavorites: [...action.payload.favorites]
            }
        case Types.LIMIT_SERIES:
            return {
                ...state,
                limit: action.payload.limit
            }
            case Types.NAMESTARTS_SERIES:
                return{
                    ...state,
                    search: action.payload.name,
                    offset: 1
                }
        default:
            return state
    }
}


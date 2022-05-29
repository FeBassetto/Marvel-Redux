
import { Types } from '../actions/fullComicAction';
import { returnFavorites, verifyFavorites } from '../helpers/helpers';


const initialState = {
    comic: [],
    loading: true,
    error: false
}


export default function fullComicReducer(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_FULLCOMIC:
            return {
                ...state,
                comic: returnFavorites(action.payload.comic, 'comic')
            }
        case Types.UPDATE_FULLCOMIC:
            return {
                comic: verifyFavorites(state.comic, action.payload.favorites),
                loading: false,
                error: false
            }

        case Types.LOADING_FULLCOMIC:
            return {
                ...state,
                loading: action.payload.loading
            }
            case Types.ERROR_FULLCOMIC:
                return{
                    ...state,
                    error: action.payload.error,
                    loading:false
                }
        default:
            return state
    }
}
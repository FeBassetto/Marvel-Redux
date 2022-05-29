
import { Types } from '../actions/fullSerieAction';
import { returnFavorites, verifyFavorites } from '../helpers/helpers';


const initialState = {
    serie: [],
    loading: true,
    error: false
}


export default function fullSerieReducer(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_FULLSERIE:
            return {
                ...state,
                serie: returnFavorites(action.payload.serie, 'serie')
            }
        case Types.UPDATE_FULLSERIE:
            return {
                serie: verifyFavorites(state.serie, action.payload.favorites),
                loading: false,
                error: false
            }

        case Types.LOADING_FULLSERIE:
            return {
                ...state,
                loading: action.payload.loading
            }
            case Types.ERROR_FULLSERIE:
                return{
                    ...state,
                    error: action.payload.error,
                    loading:false
                }
        default:
            return state
    }
}
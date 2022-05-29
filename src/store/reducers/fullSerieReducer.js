
import { Types } from '../actions/fullSerieAction';
import { returnFavorites, verifyFavorites } from '../helpers/helpers';


const initialState = {
    serie: [],
    loading: true
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
                loading: false
            }

        case Types.LOADING_FULLSERIE:
            return {
                ...state,
                loading: action.payload.loading
            }
        default:
            return state
    }
}
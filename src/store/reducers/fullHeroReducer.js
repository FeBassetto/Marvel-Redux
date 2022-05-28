
import { Types } from '../actions/fullHeroAction';
import { returnFavorites, verifyFavorites } from '../helpers/helpers';


const initialState = {
    hero: [],
    loading: true
}


export default function fullHeroReducer(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_FULLHERO:
            return {
                ...state,
                hero: returnFavorites(action.payload.hero, 'hero')
            }
        case Types.UPDATE_FULLHERO:
            return {
                hero: verifyFavorites(state.hero, action.payload.favorites),
                loading: false
            }

        case Types.LOADING_FULLHERO:
            return {
                ...state,
                loading: action.payload.loading
            }
        default:
            return state
    }
}
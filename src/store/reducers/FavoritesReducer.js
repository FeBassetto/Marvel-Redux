import { Types } from "../actions/favoritesActions"

const initialState = {
    favoriteItems: []
}

export default function favoriteReducer(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_FAVORITE:
            return {
                favoriteItems: [{ ...action.payload.item, favorited: true }, ...state.favoriteItems]
            }
        case Types.REMOVE_FAVORITE:
            return {
                favoriteItems: state.favoriteItems.filter(favoriteItem => favoriteItem.id !== action.payload.itemId)
            }
        default:
            return state
    }
}
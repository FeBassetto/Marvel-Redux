export const Types = {
    ADD_FAVORITE: 'favorite/ADD_FAVORITE',
    REMOVE_FAVORITE: 'favorite/REMOVE_FAVORITE'
}


export const favoriteActions = {
    addFavorite: item => ({
        type: Types.ADD_FAVORITE,
        payload: {
            item
        }
    }),
    removeFavorite: itemId => ({
        type: Types.REMOVE_FAVORITE,
        payload: {
            itemId
        }
    })
}
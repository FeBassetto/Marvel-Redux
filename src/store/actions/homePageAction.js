export const Types = {
    REQUEST_INFO: 'homePage/REQUEST_INFO',
    ADD_HEROES: 'homePage/ADD_HEROES',
    UPDATE_HEROES: 'homePage/UPDATE_HEROES',
    LOADING_HOMEPAGE: 'homePage/LOADING_HOMEPAGE'
}

export const homePageActions = {
    requestInfo: _ => ({
        type: Types.REQUEST_INFO
    }),

    addHeroes: heroes => ({
        type: Types.ADD_HEROES,
        payload: {
            heroes
        }
    }),
    updateHeroes: favorites => ({
        type: Types.UPDATE_HEROES,
        payload: {
            favorites
        }
    }),
    setLoading: loading => ({
        type: Types.LOADING_HOMEPAGE,
        payload: {
            loading
        }
    })


}
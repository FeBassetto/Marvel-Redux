export const Types = {
    REQUEST_INFO: 'homePage/REQUEST_INFO',
    ADD_HEROES: 'homePage/ADD_HEROES',
    ADD_COMICS: 'homePage/ADD_COMICS',
    ADD_SERIES: 'homePage/ADD_SERIES',
    UPDATE_HOMEPAGE: 'homePage/UPDATE_HOMEPAGE',
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
    addComics: comics => ({
        type: Types.ADD_COMICS,
        payload: {
            comics
        }
    }),
    addSeries: series => ({
        type: Types.ADD_SERIES,
        payload: {
            series
        }
    }),
    updateHomePage: favorites => ({
        type: Types.UPDATE_HOMEPAGE,
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
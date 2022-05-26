export const Types = {
    ADD_COMICS: 'comics/ADD_COMICS',
    UPDATE_COMICS: 'comics/UPDATE_COMICS',
    REQUEST_COMICS: 'comics/REQUEST_COMICS',
    LOADING_COMICS: 'comics/LOADING_COMICS',
    SELECT_COMICS: 'comics/SELECT_COMICS',
    OFFSET_COMICS: 'comics/OFFSET_COMICS',
    LASTFAVORITE_COMICS: 'comics/LASTFAVORITE_COMICS',
    LIMIT_COMICS: 'comics/LIMIT_COMICS',
    NAMESTARTS_COMICS: 'comics/NAMESTARTS_COMICS',
}

export const comicsActions = {
    addComics: comics => ({
        type: Types.ADD_COMICS,
        payload: {
            comics
        }
    }),

    updateComics: favorites => ({
        type: Types.UPDATE_COMICS,
        payload: {
            favorites
        }
    }),

    requestComics: _ => ({
        type: Types.REQUEST_COMICS
    }),

    setLoading: loading => ({
        type: Types.LOADING_COMICS,
        payload: {
            loading
        }
    }),

    setSelectComics: (state, type) => ({
        type: Types.SELECT_COMICS,
        payload: {
            state,
            type
        }
    }),

    setOffset: offset => ({
        type: Types.OFFSET_COMICS,
        payload: {
            offset
        }
    }),

    setLastFavorite: favorites => ({
        type: Types.LASTFAVORITE_COMICS,
        payload: {
            favorites
        }
    }),

    setLimiteComics: limit => ({
        type: Types.LIMIT_COMICS,
        payload: {
            limit
        }
    }),

    setNameStarts: name => ({
        type: Types.NAMESTARTS_COMICS,
        payload: {
            name
        }
    })

}
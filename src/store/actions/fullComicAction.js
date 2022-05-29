export const Types = {
    ADD_FULLCOMIC: 'fullComic/ADD_FULLCOMIC',
    UPDATE_FULLCOMIC: 'fullComic/UPDATE_FULLCOMIC',
    REQUEST_FULLCOMIC: 'fullComic/REQUEST_FULLCOMIC',
    LOADING_FULLCOMIC: 'fullComic/LOADING_FULLCOMIC',
}


export const fullComicActions = {
    addFullComic: comic => ({
        type: Types.ADD_FULLCOMIC,
        payload: {
            comic
        }
    }),

    updateFullComic: favorites => ({
        type: Types.UPDATE_FULLCOMIC,
        payload: {
            favorites
        }
    }),

    requestFullComics: id => ({
        type: Types.REQUEST_FULLCOMIC,
        payload: {
            id
        }
    }),

    setLoading: loading => ({
        type: Types.LOADING_FULLCOMIC,
        payload: {
            loading
        }
    }),

}
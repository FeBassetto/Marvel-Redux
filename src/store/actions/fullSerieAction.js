export const Types = {
    ADD_FULLSERIE: 'fullSerie/ADD_FULLSERIE',
    UPDATE_FULLSERIE: 'fullSerie/UPDATE_FULLSERIE',
    REQUEST_FULLSERIE: 'fullSerie/REQUEST_FULLSERIE',
    LOADING_FULLSERIE: 'fullSerie/LOADING_FULLSERIE',
    ERROR_FULLSERIE: 'fullSerie/ERROR_FULLSERIE',
}


export const fullSerieActions = {
    addFullSerie: serie => ({
        type: Types.ADD_FULLSERIE,
        payload: {
            serie
        }
    }),

    updateFullSerie: favorites => ({
        type: Types.UPDATE_FULLSERIE,
        payload: {
            favorites
        }
    }),

    requestFullSeries: id => ({
        type: Types.REQUEST_FULLSERIE,
        payload: {
            id
        }
    }),

    setLoading: loading => ({
        type: Types.LOADING_FULLSERIE,
        payload: {
            loading
        }
    }),

    setError: error => ({
        type: Types.ERROR_FULLSERIE,
        payload: {
            error
        }
    })

}
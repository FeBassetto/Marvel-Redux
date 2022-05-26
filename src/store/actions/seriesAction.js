export const Types = {
    ADD_SERIES: 'series/ADD_SERIES',
    UPDATE_SERIES: 'series/UPDATE_SERIES',
    REQUEST_SERIES: 'series/REQUEST_SERIES',
    LOADING_SERIES: 'series/LOADING_SERIES',
    SELECT_SERIES: 'series/SELECT_SERIES',
    OFFSET_SERIES: 'series/OFFSET_SERIES',
    LASTFAVORITE_SERIES: 'series/LASTFAVORITE_SERIES',
    LIMIT_SERIES: 'series/LIMIT_SERIES',
    NAMESTARTS_SERIES: 'series/NAMESTARTS_SERIES',
}

export const seriesActions = {
    addSeries: series => ({
        type: Types.ADD_SERIES,
        payload: {
            series
        }
    }),

    updateSeries: favorites => ({
        type: Types.UPDATE_SERIES,
        payload: {
            favorites
        }
    }),

    requestSeries: _ => ({
        type: Types.REQUEST_SERIES
    }),

    setLoading: loading => ({
        type: Types.LOADING_SERIES,
        payload: {
            loading
        }
    }),

    setSelectSeries: (state, type) => ({
        type: Types.SELECT_SERIES,
        payload: {
            state,
            type
        }
    }),

    setOffset: offset => ({
        type: Types.OFFSET_SERIES,
        payload: {
            offset
        }
    }),

    setLastFavorite: favorites => ({
        type: Types.LASTFAVORITE_SERIES,
        payload: {
            favorites
        }
    }),

    setLimiteSeries: limit => ({
        type: Types.LIMIT_SERIES,
        payload: {
            limit
        }
    }),

    setNameStarts: name => ({
        type: Types.NAMESTARTS_SERIES,
        payload: {
            name
        }
    })

}
export const Types = {
    ADD_HEROES: 'heroes/ADD_HEROES',
    UPDATE_HEROES: 'heroes/UPDATE_HEROES',
    REQUEST_HEROES: 'heroes/REQUEST_HEROES',
    LOADING_HEROES: 'heroes/LOADING_HEROES',
    SELECT_HEROES: 'heroes/SELECT_HEROES',
    OFFSET_HEROES: 'heroes/OFFSET_HEROES',
    LASTFAVORITE_HEROES: 'heroes/LASTFAVORITE_HEROES',
    LIMIT_HEROES: 'heroes/LIMIT_HEROES',
    NAMESTARTS_HEROES: 'heroes/NAMESTARTS_HEROES',
}

export const heroesActions = {
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

    requestHeroes: _ => ({
        type: Types.REQUEST_HEROES
    }),

    setLoading: loading => ({
        type: Types.LOADING_HEROES,
        payload: {
            loading
        }
    }),

    setSelectHeroes: (state, type) => ({
        type: Types.SELECT_HEROES,
        payload: {
            state,
            type
        }
    }),

    setOffset: offset => ({
        type: Types.OFFSET_HEROES,
        payload: {
            offset
        }
    }),

    setLastFavorite: favorites => ({
        type: Types.LASTFAVORITE_HEROES,
        payload: {
            favorites
        }
    }),

    setLimiteHeroes: limit => ({
        type: Types.LIMIT_HEROES,
        payload: {
            limit
        }
    }),

    setNameStarts: name => ({
        type: Types.NAMESTARTS_HEROES,
        payload: {
            name
        }
    })

}
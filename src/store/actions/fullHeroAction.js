export const Types = {
    ADD_FULLHERO: 'fullHero/ADD_FULLHERO',
    UPDATE_FULLHERO: 'fullHero/UPDATE_FULLHERO',
    REQUEST_FULLHERO: 'fullHero/REQUEST_FULLHERO',
    LOADING_FULLHERO: 'fullHero/LOADING_FULLHERO',
}


export const fullHeroActions = {
    addFullHero: hero => ({
        type: Types.ADD_FULLHERO,
        payload: {
            hero
        }
    }),

    updateFullHero: favorites => ({
        type: Types.UPDATE_FULLHERO,
        payload: {
            favorites
        }
    }),

    requestFullHero: id => ({
        type: Types.REQUEST_FULLHERO,
        payload: {
            id
        }
    }),

    setLoading: loading => ({
        type: Types.LOADING_FULLHERO,
        payload: {
            loading
        }
    }),

}
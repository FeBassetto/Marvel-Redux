import { select, call, put, takeLatest } from 'redux-saga/effects'
import { fullHeroActions } from '../actions/fullHeroAction'

import apiKey from '../../config/apiKey'
import api from '../../services/api'

import { Types } from '../actions/fullHeroAction'

function* requestFullHero({ payload }) {
    yield put(fullHeroActions.setLoading(true))

    const id = payload.id

    const favorites = yield select(state => state.favoriteReducer.favoriteItems)
    const homePageHeroes = yield select(state => state.HomePage.lastHeroes)
    const heroes = yield select(state => state.heroesReducer.heroes)
    const hero = yield select(state => state.fullHeroReducer.hero)

    const everyHeroes = homePageHeroes.concat(heroes)
    const findHero = everyHeroes.filter(hero => hero.id === id)

    const heroExists = hero.filter(fullHero => Number(fullHero.id) === Number(id))

    if (findHero.length > 0) {
        yield put(fullHeroActions.addFullHero(findHero))
        yield put(fullHeroActions.updateFullHero(favorites))
        return
    }

    if (heroExists.length > 0) {
        yield put(fullHeroActions.updateFullHero(favorites))
    }



    try {
        const fullHero = yield call(
            api.get,
            '/characters',
            {
                params: {
                    ...apiKey,
                    limit: 1,
                    id: id
                }
            }
        )

        yield put(fullHeroActions.addFullHero(fullHero.data.data.results))
        yield put(fullHeroActions.updateFullHero(favorites))

    } catch (err) {

        yield put(fullHeroActions.setError(true))

    }

}

export default function* fullHeroSaga() {
    yield takeLatest(Types.REQUEST_FULLHERO, requestFullHero)
}
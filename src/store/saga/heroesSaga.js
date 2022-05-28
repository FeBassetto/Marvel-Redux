import { select, call, put, takeLatest } from 'redux-saga/effects'
import { heroesActions } from '../actions/heroesAction'

import apiKey from '../../config/apiKey'
import api from '../../services/api'

import { Types } from '../actions/heroesAction'

function* requestHeroes() {

    const stateHeroes = yield select(state => state.heroesReducer.heroes)
    const lastFavorites = yield select(state => state.heroesReducer.lastFavorites)
    const favorites = yield select(state => state.favoriteReducer.favoriteItems)

    if (lastFavorites.length !== favorites.length && stateHeroes.length > 0) {
        yield put(heroesActions.updateHeroes(favorites))
        yield put(heroesActions.setLastFavorite(favorites))
        return
    }

    yield put(heroesActions.setLoading(true))

    const search = yield select(state => state.heroesReducer.search)
    const nameAlf = yield select(state => state.heroesReducer.selects.nameAlf)
    const nameCronic = yield select(state => state.heroesReducer.selects.nameCronic)
    const modifiedDec = yield select(state => state.heroesReducer.selects.modifiedDec)
    const modifiedCre = yield select(state => state.heroesReducer.selects.modifiedCre)
    const offset = yield select(state => state.heroesReducer.offset)

    yield put(heroesActions.setLastFavorite(favorites))

    let actualParams = { ...apiKey }

    if (search !== '') actualParams = { ...actualParams, nameStartsWith: search }
    if (nameAlf) actualParams = { ...actualParams, orderBy: 'name' }
    if (nameCronic) actualParams = { ...actualParams, orderBy: '-name' }
    if (modifiedDec) actualParams = { ...actualParams, orderBy: '-modified' }
    if (modifiedCre) actualParams = { ...actualParams, orderBy: 'modified' }
    actualParams = { ...actualParams, offset: offset }

    const heroes = yield call(
        api.get,
        '/characters',
        {
            params: {
                ...actualParams,
                limit: 8
            }
        }
    )


    yield put(heroesActions.addHeroes(heroes.data.data.results))
    yield put(heroesActions.setLimiteHeroes(heroes.data.data.total))

    yield put(heroesActions.updateHeroes(favorites))


}

export default function* requestHeroesSaga() {
    yield takeLatest(Types.REQUEST_HEROES, requestHeroes)
}
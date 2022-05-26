import { select, call, put, takeLatest } from 'redux-saga/effects'
import { comicsActions } from './../actions/comicsActions';

import apiKey from '../../config/apiKey'
import api from '../../services/api'

import { Types } from './../actions/comicsActions';

function* requestComics() {

    const stateComics = yield select(state => state.comicsReducer.comics)
    const lastFavorites = yield select(state => state.comicsReducer.lastFavorites)
    const favorites = yield select(state => state.favoriteReducer.favoriteItems)

    if (lastFavorites.length !== favorites.length&& favorites.length > 0 && stateComics.length > 0) {
        yield put(comicsActions.updateComics(favorites))
        yield put(comicsActions.setLastFavorite(favorites))
        return
    }

    yield put(comicsActions.setLoading(true))

    const search = yield select(state => state.comicsReducer.search)
    const nameAlf = yield select(state => state.comicsReducer.selects.nameAlf)
    const nameCronic = yield select(state => state.comicsReducer.selects.nameCronic)
    const modifiedDec = yield select(state => state.comicsReducer.selects.modifiedDec)
    const modifiedCre = yield select(state => state.comicsReducer.selects.modifiedCre)
    const offset = yield select(state => state.comicsReducer.offset)

    yield put(comicsActions.setLastFavorite(favorites))

    let actualParams = { ...apiKey }

    if (search !== '') actualParams = { ...actualParams, titleStartsWith: search }
    if (nameAlf) actualParams = { ...actualParams, orderBy: 'title' }
    if (nameCronic) actualParams = { ...actualParams, orderBy: '-title' }
    if (modifiedDec) actualParams = { ...actualParams, orderBy: '-modified' }
    if (modifiedCre) actualParams = { ...actualParams, orderBy: 'modified' }
    actualParams = { ...actualParams, offset: offset }

    const comics = yield call(
        api.get,
        '/comics',
        {
            params: {
                ...actualParams,
                limit: 8
            }
        }
    )


    yield put(comicsActions.addComics(comics.data.data.results))
    yield put(comicsActions.setLimiteComics(comics.data.data.total))

    yield put(comicsActions.updateComics(favorites))


}

export default function* requestComicsSaga() {
    yield takeLatest(Types.REQUEST_COMICS, requestComics)
}
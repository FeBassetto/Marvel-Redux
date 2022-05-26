import { select, call, put, takeLatest } from 'redux-saga/effects'
import { seriesActions } from './../actions/seriesAction';

import apiKey from '../../config/apiKey'
import api from '../../services/api'

import { Types } from './../actions/seriesAction';

function* requestSeries() {

    const stateSeries = yield select(state => state.seriesReducer.series)
    const lastFavorites = yield select(state => state.seriesReducer.lastFavorites)
    const favorites = yield select(state => state.favoriteReducer.favoriteItems)

    if (lastFavorites.length !== favorites.length&& favorites.length > 0 && stateSeries.length > 0) {
        yield put(seriesActions.updateSeries(favorites))
        yield put(seriesActions.setLastFavorite(favorites))
        return
    }

    yield put(seriesActions.setLoading(true))

    const search = yield select(state => state.seriesReducer.search)
    const nameAlf = yield select(state => state.seriesReducer.selects.nameAlf)
    const nameCronic = yield select(state => state.seriesReducer.selects.nameCronic)
    const modifiedDec = yield select(state => state.seriesReducer.selects.modifiedDec)
    const modifiedCre = yield select(state => state.seriesReducer.selects.modifiedCre)
    const offset = yield select(state => state.seriesReducer.offset)

    yield put(seriesActions.setLastFavorite(favorites))

    let actualParams = { ...apiKey }

    if (search !== '') actualParams = { ...actualParams, titleStartsWith: search }
    if (nameAlf) actualParams = { ...actualParams, orderBy: 'title' }
    if (nameCronic) actualParams = { ...actualParams, orderBy: '-title' }
    if (modifiedDec) actualParams = { ...actualParams, orderBy: '-modified' }
    if (modifiedCre) actualParams = { ...actualParams, orderBy: 'modified' }
    actualParams = { ...actualParams, offset: offset }

    const series = yield call(
        api.get,
        '/series',
        {
            params: {
                ...actualParams,
                limit: 8
            }
        }
    )


    yield put(seriesActions.addSeries(series.data.data.results))
    yield put(seriesActions.setLimiteSeries(series.data.data.total))

    yield put(seriesActions.updateSeries(favorites))


}

export default function* requestSeriesSaga() {
    yield takeLatest(Types.REQUEST_SERIES, requestSeries)
}
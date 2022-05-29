import { select, call, put, takeLatest } from 'redux-saga/effects'
import { fullSerieActions } from '../actions/fullSerieAction'

import apiKey from '../../config/apiKey'
import api from '../../services/api'

import { Types } from '../actions/fullSerieAction'

function* requestFullSerie({ payload }) {
    yield put(fullSerieActions.setLoading(true))

    const id = payload.id

    const favorites = yield select(state => state.favoriteReducer.favoriteItems)
    const homePageSeries = yield select(state => state.HomePage.lastSeries)
    const series = yield select(state => state.seriesReducer.series)
    const serie = yield select(state => state.fullSerieReducer.serie)

    const everySeries = homePageSeries.concat(series)
    const findSerie = everySeries.filter(serie => serie.id === id)

    const serieExists = serie.filter(fullSerie => Number(fullSerie.id) === Number(id))

    if (findSerie.length > 0) {
        yield put(fullSerieActions.addFullSerie(findSerie))
        yield put(fullSerieActions.updateFullSerie(favorites))
        return
    }

    if (serieExists.length > 0) {
        yield put(fullSerieActions.updateFullSerie(favorites))
    }



    try{
        const fullSerie = yield call(
            api.get,
            '/series',
            {
                params: {
                    ...apiKey,
                    limit: 1,
                    id: id
                }
            }
        )
    
        yield put(fullSerieActions.addFullSerie(fullSerie.data.data.results))
        yield put(fullSerieActions.updateFullSerie(favorites))

    }catch(err){

        yield put(fullSerieActions.setError(true))

    }

}

export default function* fullSerieSaga() {
    yield takeLatest(Types.REQUEST_FULLSERIE, requestFullSerie)
}
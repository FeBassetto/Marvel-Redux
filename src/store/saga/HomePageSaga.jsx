import { select, call, put, all, takeLatest } from 'redux-saga/effects'
import { homePageActions } from '../actions/homePageAction'

import apiKey from '../../config/apiKey'
import api from '../../services/api'

import { Types } from '../actions/homePageAction'

function* requestInfo() {

    yield put(homePageActions.setLoading(true))

    const lastHeroesExists = yield select(state => state.HomePage.lastHeroes)

    if (!lastHeroesExists.length > 0) {
        const lastHeroes = yield call(
            api.get,
            '/characters',
            {
                params: {
                    ...apiKey,
                    limit: 8,
                    offset: 0,
                    orderBy: '-modified'
                }
            }
        )

        const comics = yield call(
            api.get,
            '/comics',
            {
                params: {
                    ...apiKey,
                    limit: 8,
                    offset: 0,
                    orderBy: '-modified'
                }
            }
        )

        const series = yield call(
            api.get,
            '/series',
            {
                params: {
                    ...apiKey,
                    limit: 8,
                    offset: 0,
                    orderBy: '-modified'
                }
            }
        )


        yield put(homePageActions.addHeroes(lastHeroes.data.data.results))
        yield put(homePageActions.addComics(comics.data.data.results))
        yield put(homePageActions.addSeries(series.data.data.results))

    } else {

        const favorites = yield select(state => state.favoriteReducer.favoriteItems)

        yield put(homePageActions.updateHomePage(favorites))
    }

}

export default all([
    takeLatest(Types.REQUEST_INFO, requestInfo)
])
import { select, call, put, takeLatest } from 'redux-saga/effects'
import { fullComicActions } from '../actions/fullComicAction'

import apiKey from '../../config/apiKey'
import api from '../../services/api'

import { Types } from '../actions/fullComicAction'

function* requestFullComic({ payload }) {
    yield put(fullComicActions.setLoading(true))

    const id = payload.id

    const favorites = yield select(state => state.favoriteReducer.favoriteItems)
    const homePageComics = yield select(state => state.HomePage.lastComics)
    const comics = yield select(state => state.comicsReducer.comics)
    const comic = yield select(state => state.fullComicReducer.comic)

    const everyComics = homePageComics.concat(comics)
    const findComic = everyComics.filter(comic => comic.id === id)

    const comicExists = comic.filter(fullComic => Number(fullComic.id) === Number(id))

    if (findComic.length > 0) {
        yield put(fullComicActions.addFullComic(findComic))
        yield put(fullComicActions.updateFullComic(favorites))
        return
    }

    if (comicExists.length > 0) {
        yield put(fullComicActions.updateFullComic(favorites))
    }


    try {

        const fullComic = yield call(
            api.get,
            '/comics',
            {
                params: {
                    ...apiKey,
                    limit: 1,
                    id: id
                }
            }
        )

        yield put(fullComicActions.addFullComic(fullComic.data.data.results))
        yield put(fullComicActions.updateFullComic(favorites))

    }catch(err){

        yield put(fullComicActions.setError(true))

    }

}

export default function* fullComicSaga() {
    yield takeLatest(Types.REQUEST_FULLCOMIC, requestFullComic)
}
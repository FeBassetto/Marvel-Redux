import {all, fork} from 'redux-saga/effects'

import HomePageSaga from './homePageSaga'
import heroesSaga from './heroesSaga'
import comicsSaga from './comicsSaga'
import seriesSaga from './seriesSaga'

export default function* saga(){
    yield all([
        fork(HomePageSaga),
        fork(heroesSaga),
        fork(comicsSaga),
        fork(seriesSaga)
    ])
}
import {all, fork} from 'redux-saga/effects'

import HomePageSaga from './homePageSaga'
import heroesSaga from './heroesSaga'

export default function* saga(){
    yield all([
        fork(HomePageSaga),
        fork(heroesSaga)
    ])
}
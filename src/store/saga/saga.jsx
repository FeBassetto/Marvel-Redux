import {all} from 'redux-saga/effects'

import HomePageSaga from './HomePageSaga'

export default function* saga(){
    return yield all([
        HomePageSaga
    ])
}
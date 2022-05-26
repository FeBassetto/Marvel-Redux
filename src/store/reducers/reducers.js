import { combineReducers } from 'redux'
import themeReducer from './themeReducer'
import HomePage from './homePageReducer'
import favoriteReducer from './favoritesReducer';
import heroesReducer from './heroesReducer';
import comicsReducer from './comicsReducer';
import seriesReducer from './seriesReducer';

export default combineReducers({
    themeReducer,
    HomePage,
    favoriteReducer,
    heroesReducer,
    comicsReducer,
    seriesReducer
})
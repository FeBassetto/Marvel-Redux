import { combineReducers } from 'redux'
import themeReducer from './themeReducer'
import HomePage from './homePageReducer'
import favoriteReducer from './favoritesReducer';
import heroesReducer from './heroesReducer';
import comicsReducer from './comicsReducer';
import seriesReducer from './seriesReducer';
import fullHeroReducer from './fullHeroReducer';
import fullComicReducer from './fullComicReducer';
import fullSerieReducer from './fullSerieReducer';

export default combineReducers({
    themeReducer,
    HomePage,
    favoriteReducer,
    heroesReducer,
    comicsReducer,
    seriesReducer,
    fullHeroReducer,
    fullComicReducer,
    fullSerieReducer
})
import { combineReducers } from 'redux'
import themeReducer from './themeReducer'
import HomePage from './HomePageReducer'
import favoriteReducer from './FavoritesReducer';

export default combineReducers({
    themeReducer,
    HomePage,
    favoriteReducer
})
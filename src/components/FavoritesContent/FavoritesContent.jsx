import React from "react";
import style from './FavoritesContent.module.css'
import TitleSection from './../TitleSection/TitleSection';
import { connect } from 'react-redux';
import FavoriteBoxItems from "./FavoriteBoxItems/FavoriteBoxItems";


const FavoritesContent = (props) => {

    return (
        <section className={style.favoritesContent}>
            <TitleSection text={`${props.favorites.length > 0 ? props.favorites.length + ' itens favoritados' : 'Nenhum item favoritado'}`} />
            <FavoriteBoxItems favorites={props.favorites} />
        </section>
    )
}

const mapStateToProps = state => ({
    favorites: state.favoriteReducer.favoriteItems
})

export default connect(mapStateToProps, null)(FavoritesContent)
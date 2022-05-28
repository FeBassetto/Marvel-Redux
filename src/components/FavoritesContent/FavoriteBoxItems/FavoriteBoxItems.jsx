import React from "react";
import style from './FavoriteBoxItems.module.css';
import { BsTrash } from 'react-icons/bs'
import { bindActionCreators } from 'redux';
import { favoriteActions } from "../../../store/actions/favoritesAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const FavoriteBoxItems = (props) => {

    const type = {
        hero: 'Herói',
        comic: 'Quadrinho',
        serie: 'Série'
    }

    const link = {
        hero: 'heroes',
        comic: 'comics',
        serie: 'series'
    }

    return (
        <>
            {props.favorites.length > 0 && (
                props.favorites.map(favorite => (
                    <Link to={`/${link[favorite.type]}/${favorite.id}`}>
                    {console.log(favorite.id)}
                        <div className={style.favoriteBox} key={favorite.id}>
                            <img
                                src={`${favorite.thumbnail.path}.${favorite.thumbnail.extension}`}
                                alt={favorite.name ? favorite.name : favorite.title}
                                className={style.containerBox__image}
                            />
                            <div className={style.favoriteBox__infos}>
                                <h1 className={style.infos__name} >{favorite.name ? favorite.name : favorite.title}</h1>
                                <h2 className={style.infos__type} >Tipo: {type[favorite.type]}</h2>
                                <div className={style.infos__exclude}>
                                    <BsTrash onClick={() => props.removeFavorite(favorite.id)} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(favoriteActions, dispatch)

export default connect(null, mapDispatchToProps)(FavoriteBoxItems)
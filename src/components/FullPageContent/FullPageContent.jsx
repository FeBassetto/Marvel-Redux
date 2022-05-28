import React from "react";
import { favoriteActions } from "../../store/actions/favoritesAction";
import style from './FullPageContent.module.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

//Events, stories

const fullPageContent = ({ content, removeFavorite, addFavorite }) => {

    const modifiedDate = new Date(content.modified).getTime()
    const actualDate = new Date().getTime()

    const diffDate = actualDate - modifiedDate

    const secondDiff = diffDate / 1000
    const minuteDiff = secondDiff / 60
    const hourDiff = minuteDiff / 60
    const dayDiff = parseInt(hourDiff / 24)


    return (
        <div className={style.fullPageContainer}>
            <div className={style.fullPageContainer__top}>
                <img
                    src={`${content.thumbnail.path}.${content.thumbnail.extension}`}
                    alt={content.name ? content.name : content.title}
                    className={style.fullPageContainer__image}
                />
                <div className={style.containerBox__favorite}>
                    {content.favorited ?
                        <MdOutlineFavorite onClick={() => removeFavorite(content.id)} />
                        :
                        <MdOutlineFavoriteBorder onClick={() => addFavorite(content)} />}
                </div>
            </div>
            <div className={style.fullPageContainer__bottom}>
                <h1 className={style.bottom__name}>{content.name ? content.name : content.title}</h1>
                <h2 className={style.bottom__description}>{content.description ? content.description : 'Sem descrição'}</h2>
                <div className={style.bottom__container}>
                    <h1 className={style.bottom__lastModified}>Última modificação há {dayDiff === 1 ? `${dayDiff} dia` : `${dayDiff} dias`}</h1>
                    <h2>Eventos: {content.events.available}</h2>
                    <h2>Histórias: {content.stories.available}</h2>
                    {content.comics && (
                        <h2>Quadrinhos: {content.comics.available}</h2>
                    )}
                    {content.series && (
                        <h2>Séries: {content.series.available}</h2>
                    )}
                    {content.characters && (
                        <h2>Personagens: {content.characters.available}</h2>
                    )}
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(favoriteActions, dispatch)


export default connect(null, mapDispatchToProps)(fullPageContent)
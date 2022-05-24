import React from "react";
import style from './ContainerBoxItems.module.css'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { favoriteActions } from "../../store/actions/favoritesActions";

const StyledBox = styled.div`
    background-color: ${props => props.theme.colorPrimary};
    color: ${props => props.theme.backgroundPrimary} ;
    border: solid ${props => props.theme.backgroundPrimary};
    border-width: 0px 3px 3px 3px;
`

const StyledButton = styled.button`
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.colorPrimary};
`

const ContainerBoxItems = (props) => {

    return (
        <div className={style.containerBox}>
            {props.contents.map(content => (
                <div key={content.id} className={style.containerBox__box}>
                    <div className={style.containerBox__top}>
                        <img
                            src={`${content.thumbnail.path}.${content.thumbnail.extension}`}
                            alt={content.name ? content.name : content.title}
                            className={style.containerBox__image}
                        />
                        <div className={style.containerBox__favorite}>
                            {content.favorited ?
                                <MdOutlineFavorite onClick={() => props.removeFavorite(content.id)} />
                                :
                                <MdOutlineFavoriteBorder onClick={() => props.addFavorite(content)} />}
                        </div>
                    </div>
                    <StyledBox className={style.containerBox__bottom}>
                        <h1>{content.name ? content.name : content.title}</h1>
                        <p>{
                            content.description ? content.description.length > 149 ?
                                content.description.substring(0, 150).padEnd(156, '.')
                                :
                                content.description

                                : 'Não contém descrição'
                        }</p>
                        <Link to={`/heroes/${content.id}`}>
                            <StyledButton>Veja Mais</StyledButton>
                        </Link>
                    </StyledBox>
                </div>
            ))}
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(favoriteActions, dispatch)

export default connect(null, mapDispatchToProps)(ContainerBoxItems)
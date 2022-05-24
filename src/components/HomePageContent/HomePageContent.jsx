import React from "react";
import ContainerBoxItems from "../ContainerBoxItems/ContainerBoxItems";
import TitleSection from "../TitleSection/TitleSection";
import { useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { homePageActions } from "../../store/actions/homePageAction";
import Loading from "../Loading/Loading";
import style from './HomePageContent.module.css'


const HomePageContent = (props) => {

    const { favorites } = props

    useEffect(() => {
        props.requestInfo()
    }, [favorites])

    return (
        <>
            {!props.loading && (
                <section className={style.homePageContent}>
                    <TitleSection text='Últimos heróis modificados' />
                    <ContainerBoxItems contents={props.characters} />
                    <TitleSection text='Últimos quadrinhos modificados' />
                    <ContainerBoxItems contents={props.comics} />
                    <TitleSection text='Últimas séries modificados' />
                    <ContainerBoxItems contents={props.series} />
                </section>
            )}

            {props.loading && (
                <Loading />
            )}
        </>
    )
}


const mapDispatchToProps = dispatch => bindActionCreators(homePageActions, dispatch)

const mapStateToProps = state => ({
    characters: state.HomePage.lastHeroes,
    comics: state.HomePage.lastComics,
    series: state.HomePage.lastSeries,
    loading: state.HomePage.loading,
    favorites: state.favoriteReducer.favoriteItems,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContent)
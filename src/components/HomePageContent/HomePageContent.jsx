import React from "react";
import ContainerBoxItems from "../ContainerBoxItems/ContainerBoxItems";
import TitleSection from "../TitleSection/TitleSection";
import { useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { homePageActions } from "../../store/actions/homePageAction";


const HomePageContent = (props) => {

    const { favorites } = props

    useEffect(() => {
        props.requestInfo()
    }, [favorites])

    return (
        <>
            {!props.loading && (
                <section>
                    <TitleSection text='Últimos heróis modificados' />
                    <ContainerBoxItems contents={props.characters} />
                </section>
            )}
        </>
    )
}


const mapDispatchToProps = dispatch => bindActionCreators(homePageActions, dispatch)

const mapStateToProps = state => ({
    characters: state.HomePage.lastHeroes,
    favorites: state.favoriteReducer.favoriteItems,
    loading: state.HomePage.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContent)
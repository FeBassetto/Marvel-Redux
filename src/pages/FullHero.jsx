import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TitlePage from '../components/TitlePage/TitlePage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fullHeroActions } from './../store/actions/fullHeroAction';
import FullPageContent from './../components/FullPageContent/FullPageContent';
import Loading from './../components/Loading/Loading';
import Button from './../components/Button/Button';

const FullHero = (props) => {

    const { heroId } = useParams()


    useEffect(() => {
        props.requestFullHero(heroId)
    }, [heroId, props.favorites])

    const hero = props.hero[0]

    return (
        <>
            {!props.loading && !props.error && (
                <>
                    <TitlePage firstText='Tudo sobre' span={hero.name} />
                    <FullPageContent content={hero} />
                </>
            )
            }

            {props.error && (
                <>
                    <TitlePage firstText='OPS... Não conseguimos encontrar este' span='herói' />
                    <Button text='Procure outro herói' link='/heroes' />
                </>
            )}

            {
                props.loading && (
                    <Loading />
                )
            }
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(fullHeroActions, dispatch)

const mapStateToProps = state => ({
    hero: state.fullHeroReducer.hero,
    loading: state.fullHeroReducer.loading,
    error: state.fullHeroReducer.error,
    favorites: state.favoriteReducer.favoriteItems
})

export default connect(mapStateToProps, mapDispatchToProps)(FullHero)
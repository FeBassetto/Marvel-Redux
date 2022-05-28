import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TitlePage from '../components/TitlePage/TitlePage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fullHeroActions } from './../store/actions/fullHeroAction';
import FullPageContent from './../components/FullPageContent/FullPageContent';
import Loading from './../components/Loading/Loading';

const FullHero = (props) => {

    const { heroId } = useParams()


    useEffect(() => {
        props.requestFullHero(heroId)
    }, [heroId, props.favorites])

    const hero = props.hero[0]

    console.log(props.hero)

    return (
        <>
            {!props.loading && (
                <>
                    <TitlePage firstText='Tudo sobre' span={hero.name} />
                    <FullPageContent content={hero} />
                </>
            )
            }

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
    favorites: state.favoriteReducer.favoriteItems
})

export default connect(mapStateToProps, mapDispatchToProps)(FullHero)
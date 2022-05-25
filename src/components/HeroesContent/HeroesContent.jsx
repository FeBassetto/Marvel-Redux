import React from "react";
import style from './HeroesContent.module.css'
import Filter from './../Filter/Filter';
import ContainerBoxItems from './../ContainerBoxItems/ContainerBoxItems';
import { connect } from "react-redux";
import SearchInput from './../SearchInput/SearchInput';


const HeroesContent = (props) => {
    return (
        <section className={style.heroesContent}>
            

            <Filter
                filter='Nome'
                nameCronic={false}
                nameAlf={false}
                modifiedDec={false}
                modifiedCre={false}
            />

            <div className={style.containerHeroes}>
                <ContainerBoxItems contents={props.characters} link='' />
            </div>

        </section>
    )
}

const mapStateToProps = state => ({
    characters: state.HomePage.lastHeroes
})

export default connect(mapStateToProps, null)(HeroesContent)
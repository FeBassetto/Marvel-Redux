import React from "react";
import style from './DesktopHeader.module.css'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import HeaderIcons from "../HeaderIcons/HeaderIcons";


const StyledHeader = styled.header`
    background-color: ${props => props.theme.backgroundPrimary};
    box-shadow: 0 0 1.5rem ${props => props.theme.shadowPrimary};
`

const StyledLogo = styled.div`
    color: ${props => props.theme.colorPrimary};
`

const StyledNavigation = styled.nav`
    color: ${props => props.theme.colorPrimary}
`

const DesktopHeader = () => {
    return (
        <StyledHeader className={style.header}>
            <StyledLogo className={style.header__logo}>
                <Link to='/'>
                    MARVEL HEROES
                </Link>
            </StyledLogo>

            <StyledNavigation className={style.header__navigation}>
                <ul>
                    <li className={style.navigation__item}>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className={style.navigation__item}>
                        <Link to='/heroes'>
                            Heróis
                        </Link>
                    </li>
                    <li className={style.navigation__item}>
                        <Link to='/comics'>
                            Quadrinhos
                        </Link>
                    </li>
                    <li className={style.navigation__item}>
                        <Link to='/series'>
                            Séries
                        </Link>
                    </li>
                </ul>
            </StyledNavigation>

            <HeaderIcons />

        </StyledHeader>
    )
}

export default DesktopHeader
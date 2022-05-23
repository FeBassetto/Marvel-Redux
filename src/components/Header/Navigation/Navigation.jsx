import React from "react";
import style from './Navigation.module.css'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const StyledNavigation = styled.nav`
    color: ${props => props.theme.colorPrimary}
`

const DesktopNavigation = () => {
    return (
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
    )
}

export default DesktopNavigation
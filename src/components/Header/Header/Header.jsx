import React from "react";
import style from './Header.module.css'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import DesktopNavigation from "../Navigation/Navigation";
import HeaderIcons from './../HeaderIcons/HeaderIcons';


const StyledHeader = styled.header`
    background-color: ${props => props.theme.backgroundPrimary};
    box-shadow: 0 0 1.5rem ${props => props.theme.shadowPrimary};
`

const StyledLogo = styled.div`
    color: ${props => props.theme.colorPrimary};
`



const Header = () => {
    return (
        <StyledHeader className={style.header}>
            <StyledLogo className={style.header__logo}>
                <Link to='/'>
                   <span className={style.logo__desktop}>MARVEL HEROES</span>
                   <span className={style.logo__mobile}>MH</span>
                </Link>
            </StyledLogo>
            <DesktopNavigation />
            <HeaderIcons />
        </StyledHeader>
    )
}

export default Header
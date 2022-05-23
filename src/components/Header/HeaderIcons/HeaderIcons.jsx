import React from "react";
import style from './HeaderIcons.module.css'

import { MdFavorite } from 'react-icons/md'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import ThemeChange from '../ThemeChange/ThemeChange';
import LateralMenu from "./LateralMenu/LateralMenu";

const StyledIcons = styled.div`
    color:${props => props.theme.colorPrimary}
`

const HeaderIcons = () => {
    return (
        <>
            <StyledIcons className={style.header__icons}>
                <ThemeChange />
                <Link to='/favorites'>
                    <MdFavorite />
                </Link>
                    <LateralMenu/>
            </StyledIcons>
        </>
    )
}

export default HeaderIcons
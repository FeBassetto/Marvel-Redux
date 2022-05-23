import React from "react";
import style from './LateralMenu.module.css'

import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react";
import { Link } from 'react-router-dom';

const StyledLateralMenu = styled.nav`
    background-color:${props => props.theme.backgroundPrimary}
`



const LateralMenu = () => {

    const [openMenu, setOpenMenu] = useState(false)

    function toggleMenu() {
        setOpenMenu(lastOpen => !lastOpen)
    }

    return (
        <>
            <GiHamburgerMenu
                className={style.icons__hamburger}
                onClick={() => toggleMenu()}
            />
            {openMenu && (
                <StyledLateralMenu
                    className={`${style.lateralMenu}`}
                >
                    <ul>
                        <li className={style.lateralMenu__closeIcon}>
                            <AiOutlineClose onClick={() => toggleMenu()} />
                        </li>

                        <li className={style.lateralMenu__logo} onClick={() => toggleMenu()}>
                            <Link to='/'>Marvel Heroes</Link>
                        </li>

                        <li className={style.lateralMenu__item} onClick={() => toggleMenu()}>
                            <Link to='/'>Home</Link>
                        </li>

                        <li className={style.lateralMenu__item} onClick={() => toggleMenu()}>
                            <Link to='/heroes'>Heróis</Link>
                        </li>

                        <li className={style.lateralMenu__item} onClick={() => toggleMenu()}>
                            <Link to='/comics'>Quadrinhos</Link>
                        </li>

                        <li className={style.lateralMenu__item} onClick={() => toggleMenu()}>
                            <Link to='series'>Séries</Link>
                        </li>
                    </ul>
                </StyledLateralMenu>
            )}
        </>
    )
}

export default LateralMenu
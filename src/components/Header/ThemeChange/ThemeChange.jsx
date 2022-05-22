import React, { useState } from "react";
import style from './ThemeChange.module.css'
import { GiPalette } from 'react-icons/gi'
import styled from 'styled-components';

const StyledPalette = styled.div`
    background-color: ${props => props.theme.backgroundHeader}
`

const ThemeChange = () => {

    const [openPalette, setOpenPalette] = useState(false)

    function togglePalette(e) {
        const palette = document.getElementById('palette')
        if (!openPalette) {
            palette.classList.remove(`${style.palette__dropdown___closed}`)
            palette.classList.add(`${style.palette__dropdown___open}`)
            setOpenPalette(true)
        } else {
            palette.classList.remove(`${style.palette__dropdown___open}`)
            palette.classList.add(`${style.palette__dropdown___closed}`)
            setOpenPalette(false)
        }
    }

    return (
        <StyledPalette className={style.palette}>
            <GiPalette
                className={style.palette__icon}
                onClick={e => togglePalette(e)}
            />
            <ul
                className={`${style.palette__dropdown} ${style.palette__dropdown___closed}`}
                id='palette'
            >
                <li className={style.dropdown__white}></li>
                <li className={style.dropdown__black}></li>
                <li className={style.dropdown__blue}></li>
            </ul>
        </StyledPalette>
    )
}

export default ThemeChange
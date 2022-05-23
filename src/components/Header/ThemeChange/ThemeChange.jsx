import React, { useState } from "react";
import style from './ThemeChange.module.css'
import { GiPalette } from 'react-icons/gi'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { themeActions } from "../../../store/actions/themeAction";

const StyledPalette = styled.div`
    background-color: ${props => props.theme.backgroundPrimary}
`

const ThemeChange = (props) => {

    const [openPalette, setOpenPalette] = useState(false)

    function togglePalette() {
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
                onClick={_ => togglePalette()}
            />
            <ul
                className={`${style.palette__dropdown} ${style.palette__dropdown___closed}`}
                id='palette'
            >
                <li
                    className={style.dropdown__white}
                    onClick={() => {
                        if (props.theme !== 'red') {
                            props.changeColor('red')
                            togglePalette()
                        }
                    }}
                ></li>

                <li
                    className={style.dropdown__black}
                    onClick={() => {
                        if (props.theme !== 'black') {
                            props.changeColor('black')
                            togglePalette()
                        }
                    }}
                ></li>

                <li
                    className={style.dropdown__blue}
                    onClick={() => {
                        if (props.theme !== 'blue') {
                            props.changeColor('blue')
                            togglePalette()
                        }
                    }}
                ></li>
            </ul>
        </StyledPalette>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(themeActions, dispatch)

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeChange)
import React, { useState } from "react";
import style from './SearchInput.module.css'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components';

const StyledInput = styled.div`
    background-color:${props => props.theme.backgroundSecondary};
    color:${props => props.theme.colorPrimary};
    border: .3rem solid ${props => props.theme.backgroundPrimary};
`

const SearchInput = (props) => {

    const activateInput = (e) => {
        e.target.parentNode.firstChild.focus()
    }

    const [searchValue, setSearchValue] = useState('')

    return (
        <StyledInput className={style.search}>
            <input
                type="text"
                className={style.search__input}
                placeholder="."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />

            <label
                className={style.search__placeHolder}
                onClick={e => activateInput(e)}>
                {props.placeHolder}
            </label>

            <FaSearch
                className={style.search__icon}
            />
        </StyledInput>
    )
}

export default SearchInput
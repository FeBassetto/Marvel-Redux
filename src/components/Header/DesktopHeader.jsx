import React from "react";
import style from './DesktopHeader.module.css'


const DesktopHeader = () => {
    return(
        <header className={style.header}>
            <div className={style.header__logo}>
                MARVEL
            </div>
        </header>
    )
}

export default DesktopHeader
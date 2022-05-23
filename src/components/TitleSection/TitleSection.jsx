import React from "react";
import style from './TitleSection.module.css'


const TitleSection = ({text}) => {
    return(
        <h1 className={style.titleSection}>{text}</h1>
    )
}

export default TitleSection
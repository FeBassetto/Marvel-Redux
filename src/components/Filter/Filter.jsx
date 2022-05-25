import React from "react";
import style from './Filter.module.css'

const Filter = (props) => {
    return (
        <div className={style.filter}>
            <h1 className={style.filter__firstTitle}>Filtros</h1>
            <div className={style.filter__container}>
                <h2 className={style.container__secondTitle}>{props.filter}</h2>
                <div className={style.container__checkbox}>
                    <input type="checkbox" checked={props.nameAlf} />
                    <h3>Alfabética</h3>
                </div>
                <div className={style.container__checkbox}>
                <input type="checkbox" checked={props.nameCronic}  />
                    <h3>Cronológica</h3>
                </div>
            </div>
            <div className={style.filter__container}>
                <h2 className={style.container__secondTitle}>Modificação</h2>
                <div className={style.container__checkbox}>
                    <input type="checkbox" checked={props.modifiedDec}  />
                    <h3>Decrescente</h3>
                </div>
                <div className={style.container__checkbox}>
                <input type="checkbox" checked={props.modifiedCre}  />
                    <h3>Crescente</h3>
                </div>
            </div>
        </div>
    )
}

export default Filter
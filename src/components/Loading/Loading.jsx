import React from "react";
import style from './Loading.module.css';
import { VscLoading } from 'react-icons/vsc'

const Loading = () => {
    return (
        <section className={style.loading}>
            <VscLoading />
        </section>
    )
}

export default Loading
import React from "react";
import style from './Pagination.module.css'


const Pagination = ({ offset }) => {

    const initialPagination = [1, 2, 3, 4, 5]
    const customPagination = [offset - 2, offset - 1, offset, offset + 1, offset + 2]

    return (
        <div className={style.paginationContainer}>
            {offset < 3 ? (
                <>
                    {initialPagination.map(box => {
                        if (box === offset) return (<div className={`${style.box___active} ${style.box}`}>{box}</div>)
                        return (<div className={style.box}>{box}</div>)
                    })}
                </>
            )
                :
                (
                    <>
                        {customPagination.map(box => {
                            if (box === offset) return (<div className={`${style.box___active} ${style.box}`}>{box}</div>)
                            return (<div className={style.box}>{box}</div>)
                        })}
                    </>
                )
            }
        </div>
    )
}

export default Pagination
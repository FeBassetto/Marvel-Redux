import React from "react";
import style from './Pagination.module.css'


const Pagination = ({ offset, limit, setOffset }) => {

    const limitPages = Math.ceil(limit / 8)

    const lessPages = []

    for (let i = 1; i <= limitPages; i++) {
        lessPages.push(i)
    }

    const sliced = offset - 2 > 0 && offset + 2 <= limitPages && lessPages.slice(offset - 3, offset + 2)

    const min = offset - 2 < 1 && [1, 2, 3, 4, 5]

    const max = offset + 2 > limitPages && lessPages.slice(
        offset - 3 - (offset + 2 - limitPages),
        offset + (2 - (offset + 2 - limitPages))
    )

    const activeBox = (box) => {
        if (limitPages > 1) {
            if (box === offset) return (
                <div
                    key={box}
                    className={`${style.box} ${style.box___active}`}
                    onClick={() => setOffset(box)}
                >
                    {box}
                </div>
            )
            return (
                <div
                    key={box}
                    className={`${style.box}`}
                    onClick={() => setOffset(box)}
                >
                    {box}
                </div>
            )
        } else {
            return (<></>)
        }
    }

    //React

    return (
        <div className={style.paginationContainer}>
            {limitPages <= 5 && (
                lessPages.map(box => {
                    return activeBox(box)
                })
            )
            }

            {limitPages > 5 && (
                <>
                    {max && max.map(box => {
                        return activeBox(box)
                    })}

                    {min && min.map(box => {
                        return activeBox(box)
                    })}

                    {sliced && sliced.map(box => {
                        return activeBox(box)
                    })}
                </>
            )}
        </div>
    )
}

export default Pagination
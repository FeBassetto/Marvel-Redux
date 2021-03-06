import React from "react";
import style from './DataContent.module.css'
import Filter from '../Filter/Filter';
import ContainerBoxItems from '../ContainerBoxItems/ContainerBoxItems';
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";


const DataContent = (props) => {
    return (
        <section className={style.dataContent}>
            <Filter
                filter={props.filter}
                nameCronic={props.nameCronic}
                nameAlf={props.nameAlf}
                modifiedDec={props.modifiedDec}
                modifiedCre={props.modifiedCre}
                setSelect={props.setSelect}
            />

                <div className={style.containerData}>
                    <>
            {!props.loading ?
                        <ContainerBoxItems
                            contents={props.data}
                            link={''}
                        />
                :
                <>
                    <Loading />
                </>
            }
                        <Pagination
                            offset={props.offset}
                            limit={props.limit}
                            setOffset={props.setOffset}
                        />
                    </>
                </div>

        </section>
    )
}



export default DataContent
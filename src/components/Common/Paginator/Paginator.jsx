import React, { useState } from "react";
import s from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // Кіль-сть порцій 
    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    // Щоб узнати який номер лівої границі в кожній порції, ми викор-мо формулу: (p - 1) * ps + 1.
    // p(portion) -- це номер порції; ps(portionSize) - це кількість юзерів в сторінці;
    // (Необов'язковий) + 1 - це коли номерування хочемо почати з 1, а не з 0
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    // Тут нам показує праву сторону, тобто кінець кожної порції. У нас вийде 10 (кінець першої порції)
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.pagination}>
        {portionNumber > 1 && 
        <button onClick={() => { setPortionNumber(portionNumber - 1)}}>Back</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return ( 
                <span 
                    className={ cn({
                        [s.selectedPage]: currentPage === p
                    }, [s.pageNumber]) } 
                    key={p} 
                    onClick={(e) => {onPageChange(p)}}>{p}
                </span>)
            })
        }
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}> Next </button>}
    </div>
}

export default Paginator;

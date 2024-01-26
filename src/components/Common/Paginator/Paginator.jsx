import React from "react";
import s from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return <div className={s.pagination}>
        {pages.map(p => {
            return <span className={currentPage === p && s.active} onClick={(e) => {onPageChange(p)}}>{p}</span>
        })}
    </div>
}

export default Paginator;

import React from "react";
import loading from '../../../assets/img/loading.svg';
import s from './Loading.module.css';

let Loading = () => {
    return <div className={s.pageLoading}>
        <img src={loading} alt="loading" />
    </div>
}

export default Loading;
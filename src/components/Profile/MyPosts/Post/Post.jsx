import React from "react";
import s from './Post.module.css';

export const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.post__content}>
        <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614397461_33-p-kartinki-na-avu-temnii-fon-54.jpg" alt="avatar" />
        {props.massage}
      </div>
      <div className={s.post__like}>
        <button>like</button>
        Like: {props.likeCount}
      </div>
    </div>
  );
}
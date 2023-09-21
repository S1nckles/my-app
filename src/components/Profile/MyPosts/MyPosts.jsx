import React from "react";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

let post = [
  {id: 1, message: 'Hi, how are you?', likeCount: 13},
  {id: 2, message: 'Nice, and you', likeCount: 20},
  {id: 3, message: 'React is very good', likeCount: 39},
  {id: 4, message: 'Look at me', likeCount: -1}
]


export const MyPosts = () => {

  let messagesElem = post.map((p) => <Post massage={p.message} likeCount={p.likeCount}/> )
  
  return (
      <div className={s.content__mypost}>
        <h3>My post</h3>
        <div className={s.mypostWrapper}>
          <textarea className={s.mypostWrapper__input} type="text" placeholder="Write your text.."/>
          <button className={s.mypostWrapper__btn}>Send</button>
        </div>
        <div className={s.posts}>
          {messagesElem}
        </div>
      </div>
  );
}
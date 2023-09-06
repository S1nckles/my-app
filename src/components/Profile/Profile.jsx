import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import s from './Profile.module.css';

export const Profile = () => {
    return (
      <main className={s.content}>
        <div className={s.content__background}>
          <img src='https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2150394443.jpg?w=996&t=st=1693906152~exp=1693906752~hmac=b5abefcd43bc2e6fa3ed09eab7c30dff6a863ef1804ab2247e21709404ca367c'/>
        </div>
        <div className={s.content__profile}>
          ava + desc
        </div>
        <MyPosts />
      </main>
    );
}
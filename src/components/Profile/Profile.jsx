import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';
import { Navigate } from "react-router-dom";

export const Profile = (props) => {

  if(props.isAuth === false) return <Navigate to={"/login"} />

  return (
    <main className={s.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </main>
  );
}

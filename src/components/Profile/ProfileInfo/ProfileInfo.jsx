import React from "react";
import s from './ProfileInfo.module.css';

export const ProfileInfo = (props) => {
  return (
    <div>
      {props.profile && (
        <div className={s.content__backgroundPhoto}>
          <img src={props.profile.photos?.large} alt='backgroundPhoto'/>
        </div>
      )}
      {props.profile && (
        <div className={s.content__profile}>
          <div className={s.profileImg}>
            <img src={props.profile.photos?.small} alt="avatar" />
          </div>
          <h2>{props.profile.fullName}</h2>
          <h4 className={s.profileAboutMe}>{props.profile.aboutMe}</h4>
          <div className={s.profileJob}>
            <div className={s.lookingForAJob}>{props.profile.lookingForAJob}</div>
            <div className={s.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</div>
          </div>
          {props.profile.contacts && (
          <div className={s.profileContacts}>
            <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a>
            <a href={props.profile.contacts.website}>{props.profile.contacts.website}</a>
            <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a>
            <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a>
            <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a>
            <a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a>
            <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a>
          </div>)}
        </div>
      )}
    </div>
  );
}

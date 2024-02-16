import React, { useState } from "react";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from "../../../assets/img/user.png";
import ProfileDataForm from "./ProfileDataForm";

export const ProfileInfo = ({profile, savePhoto, isOwner, status, updateStatus, saveProfile}) => {
  let [editMode, setEditMode] = useState(false);

  const onMainPhotoChange = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  let onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    });
  }  

  return (
    <div>
      {profile && (
        <div className={s.content__backgroundPhoto}>
          <img src={profile.photos?.large ? profile.photos?.large : `https://wallpaperaccess.com/full/3909258.jpg` } alt='backgroundPhoto'/>
        </div>
      )}
      {profile && (
        <div className={s.content__profile}>
          <div className={s.profileImg}>
            <img src={profile.photos?.small ? profile.photos?.small : UserPhoto} alt="avatar" />
            {!isOwner && <input type={"file"} onChange={onMainPhotoChange} />}
          </div>
          {editMode 
          // InitialValues це дані, які прийшли як дефолт з сервера, але ті значення можемо змінити на сайті коли змінюємо наш профіль, через EditMode 
          // проблема в initialValues в profile
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
          : <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} /> }
        </div>
      )}
    </div>
  );
}

const ProfileData = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
  return (
    <div>
      <div><button onClick={goToEditMode}>Edit</button></div>
      <h2>{profile.fullName}</h2>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div className={s.profileJob}>
        <div className={s.lookingForAJob}> <b>Looking a Job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}</div> 
        <div className={s.lookingForAJobDescription}> <b>Skills</b>: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'No'}</div>
      </div>
      <div className={s.aboutMe}>
        <b>About me</b>: {profile.aboutMe}
      </div>
      {profile.contacts && (
        <div className={s.profileContacts}>
          { profile.contacts === null && <><span><b>Contacts</b>:</span><div className={s.contactsItem}>{Object.keys(profile.contacts).map(key => {
            return profile.contacts[key] ? <Contact key={key} contactName={key} contactValue={profile.contacts[key]} /> : '';
          })}</div></>
          }
        </div>
      )}
    </div>
  )
}

export const Contact = ({contactName, contactValue}) => {
  return <div className={s.contactItem}><b>{contactName}</b>:  <a href={contactValue}>{contactValue}</a></div>
}
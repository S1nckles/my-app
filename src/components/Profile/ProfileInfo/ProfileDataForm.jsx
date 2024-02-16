import React, { useEffect, useState } from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../Common/FormsControl/FormsControl";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { required } from "../../../utils/validators/validators";

import style from "../../Common/FormsControl/FormsControl.module.css";


const ProfileDataForm = ({  handleSubmit, status, updateStatus, profile, error}) => {

    return <form onSubmit={handleSubmit}>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div><button>Save</button></div>
        <h2>Full name: {createField('fullName', Input, [required], "text", 'Full name ...')} </h2>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div className={s.profileJob}>
            <div className={s.lookingForAJob}> <b>Looking a Job</b>: {createField('lookingAJob', Input, null, "checkbox" )}</div> 
            <div className={s.lookingForAJobDescription}> <b>Skills</b>: {createField('lookingForAJobDescription', Input, [required], "text", 'Your skills ....')}</div>
        </div>
        <div className={s.aboutMe}>
            <b>About me</b>: {createField('aboutMe', Textarea, [required], "text", 'About me ...')}
        </div>
        <div className={s.profileContacts}>
            <h2><b>Contacts</b>:</h2> {Object.keys(profile.contacts).map(key => {
                return <div className={s.contactItems}>
                    <b>{key}: {createField('contacts.' + key, Input, null, "text", key + '...')}</b>
                </div>
            })}
        </div>
    </form>
}

export default reduxForm({
    form: 'edit-profile'
})(ProfileDataForm);
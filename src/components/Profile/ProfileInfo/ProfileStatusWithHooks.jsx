import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    //Тут використовується Деструктуризація, тобто editMode і setEditMode присвоюють значення, яке написано в useState(...)
    //Завжди буде editMode значенням а setEditMode - функцією
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);
    

    let activateEditMode = () => {
        setEditMode(true);
        // Коли щось змінюємо, то присвоюємо функції (setEditMode)
    }
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '----------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} />
                </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;
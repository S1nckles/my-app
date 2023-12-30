import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControl/FormsControl";
import s from "../Dialogs.module.css";

let AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div className={s.dialogs__input}>
            <Field component={Textarea} validate={[required, maxLength(50)]} name={'newMessageBody'} placeholder="Write..." type="text"/> <button>send</button>
        </div>
    </form>
    )
}

export default reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);
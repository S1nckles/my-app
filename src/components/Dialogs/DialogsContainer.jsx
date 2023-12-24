import { Dialogs } from "./Dialogs";
import { addMessage, updateNewMessageText } from "../../redux/reducers/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewMessageText: (text) => {
//             dispatch(updateNewMessageText(text));
//         },
//         addMessage: () => {
//             dispatch(addMessage());
//         }
//     }
// }

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let DialogsContainer = connect(mapStateToProps, {
    updateNewMessageText,
    addMessage
})(AuthRedirectComponent);

export default DialogsContainer;
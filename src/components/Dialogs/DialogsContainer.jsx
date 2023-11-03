import { Dialogs } from "./Dialogs";
import { addMessage, updateNewMessageText } from "../../redux/reducers/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
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

let DialogsContainer = connect(mapStateToProps, {
    updateNewMessageText,
    addMessage
})(Dialogs);

export default DialogsContainer;
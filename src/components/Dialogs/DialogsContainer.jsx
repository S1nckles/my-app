import { Dialogs } from "./Dialogs";
import { addMessage, updateNewMessageText } from "../../redux/reducers/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

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

export default compose(
    connect(mapStateToProps, { updateNewMessageText, addMessage }),
    withAuthRedirect
)(Dialogs);
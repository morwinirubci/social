import Dialogs from '../Dialogs' ;
import {connect} from 'react-redux';
import {updateMessageFieldBtnActionCreator, addMessageBtnActionCreator} from "../../../redux/dialog-reducer";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (textMsg) => {
            dispatch(updateMessageFieldBtnActionCreator(textMsg));
            },
        addMessage: () => {
            dispatch(addMessageBtnActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;
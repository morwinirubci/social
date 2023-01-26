import Dialogs from '../Dialogs' ;
import {connect} from 'react-redux';
import {addMessageBtnActionCreator} from "../../../redux/dialog-reducer";
import { withAithRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';




let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => {
            dispatch(addMessageBtnActionCreator(newMessage));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAithRedirect
)(Dialogs);





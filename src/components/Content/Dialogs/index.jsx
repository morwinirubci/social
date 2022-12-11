import React from 'react';
import DialogItem from './DialogItem/';
import Messages from './Messages/';
import style from './Dialogs.module.css';
import {addMessageBtnActionCreator, updateMessageFieldBtnActionCreator} from '../../../redux/dialog-reducer';

const Dialogs = (props) => {

let dataElement = props.dialogPage.dialogDate.map(dialogMap => <DialogItem id={dialogMap.id} name={dialogMap.name} personNum={dialogMap.personNum}/>);
let messageElement = props.dialogPage.messageData.map(messageMap =>  <Messages id={messageMap.id} message={messageMap.message}/>);

    let linkElementMsg = React.createRef();

    let addMessageBtn = () => {
        props.dispatch(addMessageBtnActionCreator());
    };
    let updateMessageField = () => {
        let textMsg = linkElementMsg.current.value;
        props.dispatch(updateMessageFieldBtnActionCreator(textMsg));
    };

    return (
            <div className={style.dialogItems}>
                    <div className={style.dialogsItem}>
                        {dataElement}
                    </div>
                    <div className={style.dialogsItem}>
                        {messageElement}
                        <div className={style.sendmsg}>
                            <textarea ref={linkElementMsg} onChange={ updateMessageField }  value={props.dialogPage.newDialogMessage} placeholder="Add message.."></textarea>
                            <button onClick={addMessageBtn}>Send</button>
                        </div>
                    </div>

            </div>
    )
}
export default Dialogs;
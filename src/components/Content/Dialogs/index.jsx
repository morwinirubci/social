import React from "react";
import DialogItem from "./DialogItem/";
import Messages from "./Messages/";
import style from "./Dialogs.module.css";
import { Navigate } from "react-router-dom";
import {useForm} from "react-hook-form";

const Dialogs = (props) => {

  const {register, formState:{errors,isValid},handleSubmit, reset} = useForm ({mode:"onBlur"})




  let dataElement = props.dialogPage.dialogDate.map((dialogMap) => (
    <DialogItem
      id={dialogMap.id}
      name={dialogMap.name}
      personNum={dialogMap.personNum}
    />
  ));
  let messageElement = props.dialogPage.messageData.map((messageMap) => (
    <Messages id={messageMap.id} message={messageMap.message} />
  ));

 

  let onSubmit = (data) => {

    props.addMessage(data.textField);
    reset();
  }


  return (
    <div className={style.dialogItems}>
      <div className={style.dialogsItem}>{dataElement}</div>
      <div className={style.dialogsItem}>
        {messageElement}
        <div className={style.sendmsg}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("textField")}
            placeholder="Add message.."
          ></textarea>
          <button >Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;

import React, { useState } from "react";

const ProfileStatusHooks = (props) => {
  debugger
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{status ||  "Status is here"} </span>
        </div>
      )}
      {editMode && (
        <input
          onBlur={deactivateEditMode}
          autoFocus={true}
          onChange={onStatusChange}
          type="text"
          value={status}
        />
      )}
    </>
  );
};

export default ProfileStatusHooks;

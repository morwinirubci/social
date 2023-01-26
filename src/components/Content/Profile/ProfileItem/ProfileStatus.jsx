import React, { useState } from "react";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    debugger
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>{this.state.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            type="text"
            value={this.state.status}
          />
        )}
      </>
    );
  }
}

export default ProfileStatus;

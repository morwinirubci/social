import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth:state.auth.isAuth
    }
}

export const withAithRedirect = (Component) => {

  const RedirectComponent = ({ ...props }) => {

    if (!props.isAuth) {
        return <Navigate to="/login"/>
      }
  return <Component {...props} />;
}

let ConnectAuthRedirectHOC = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectAuthRedirectHOC;
};

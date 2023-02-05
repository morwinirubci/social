import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});

export const authThunkCreator = () => async (dispatch) => {
  let response = await authAPI.authUser();
  let { id, email, login } = response.data.data;
  if (response.data.resultCode === 0) {
    dispatch(setUserData(id, email, login, true));
  }
};

export const loginThunkCreator =
  (email, password, rememberMe, setError) => async (dispatch) => {
    let response = await authAPI.loginUser(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      dispatch(authThunkCreator());
    } else {
      setError("server", {
        message: response.data.messages,
      });
      console.log(setError);
    }
  };

export const logoutThunkCreator = () => async (dispatch) => {
  let response = await authAPI.logoutUser();
  if (response.data.resultCode === 0) {
    dispatch(authThunkCreator(null, null, null, false));
  }
};

export default authReducer;

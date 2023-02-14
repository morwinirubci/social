import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_TEXT_FIELD = "UPDATE-TEXT-FIELD";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postData: [
    { id: 1, message: "Hello, world!", like: "12" },
    { id: 2, message: "Post message", like: "5" },
    { id: 3, message: "Today I am learning react", like: "0" },
    { id: 4, message: "Today too", like: "56" },
  ],
  profile: "",
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newMesage,
        like: 1,
      };

      let stateCopy = { ...state };
      stateCopy.postData = [...stateCopy.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newTextChange = "";
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (newMesage) => ({ type: ADD_POST, newMesage });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });



export const userProfileThunkCreator = (params) => (dispatch) => {
 return profileAPI.getUserProfile(params).then((response) => {

    dispatch(setUserProfile(response.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  return profileAPI.getUserStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateUserStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;

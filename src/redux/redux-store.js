import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import appReducer from './app-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    friendsPage: friendsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
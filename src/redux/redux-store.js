import {combineReducers, legacy_createStore as createStore} from 'redux';
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from "./friends-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    friendsPage: friendsReducer
});

let store = createStore(redusers);


export default store;
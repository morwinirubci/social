import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import friendsReducer from "./friends-reducer";

let store = {
    _state: {
        profilePage:{
            postData:[
                {id:1, message:"Hello, world!", like:"12"},
                {id:2, message:"How are you??", like:"5"},
                {id:3, message:"Che,che", like:"0"},
                {id:4, message:"Opa, nihua", like:"56"}
            ],
            newTextChange: ''
        },
        dialogPage:{
            dialogDate:[
                {id:1, name:'Алёша', personNum:'1'},
                {id:2, name:'Петя', personNum:'2'},
                {id:3, name:'Жора', personNum:'3'},
                {id:4, name:'Гриша', personNum:'4'}
            ],
            messageData:[
                {id:1, message:'Приветики'},
                {id:2, message:'Как делишечки?'},
                {id:3, message:'Как здоровьице?'},
                {id:4, message:'Как мама?'}
            ],
            newDialogMessage: ''
        },

        friendsPage:{
            friendsList:[
                {id:1, icon: "https://i.quotev.com/mui2yxiqszwa.jpg", name:"Леха"},
                {id:2, icon: "https://i.quotev.com/mui2yxiqszwa.jpg", name:"Жека"},
                {id:3, icon: "https://i.quotev.com/mui2yxiqszwa.jpg", name:"Зинка"}
            ],
        },
    },
    _callSubscriber () {
        console.log('State changed');
        },

    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)
    },
}



export default store;
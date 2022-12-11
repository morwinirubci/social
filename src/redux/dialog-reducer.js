const ADD_MESSAGE_BTN = "ADD-MESSAGE-BTN";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_MESSAGE_BTN:
                let newMessage = {
                    id: 5,
                    message: state.newDialogMessage
                };
                state.messageData.push(newMessage);
                state.newDialogMessage = "";
                return state;

            case UPDATE_MESSAGE_TEXT:
                state.newDialogMessage = action.textMessage;
                return state;

            default:
                return state;
        }
    };


export const addMessageBtnActionCreator = () => ({type: ADD_MESSAGE_BTN});
export const updateMessageFieldBtnActionCreator = (textMsg) => ({type: UPDATE_MESSAGE_TEXT, textMessage: textMsg});

export default dialogReducer;
const ADD_MESSAGE_BTN = "ADD-MESSAGE-BTN";

let initialState = {
    dialogDate: [
        {id: 1, name: 'Алёша', personNum: '1'},
        {id: 2, name: 'Петя', personNum: '2'},
        {id: 3, name: 'Жора', personNum: '3'},
        {id: 4, name: 'Гриша', personNum: '4'}
    ],
    messageData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Im ok'},
        {id: 4, message: 'Message'}
    ],
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_BTN: {
            let newMessage = {
                id: 5,
                message: action.newMessage
            };

            let stateCopy = {...state};
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(newMessage);
            return stateCopy;
        }
       
        default:
            return state;
    }
};


export const addMessageBtnActionCreator = (newMessage) => ({type: ADD_MESSAGE_BTN, newMessage});


export default dialogReducer;
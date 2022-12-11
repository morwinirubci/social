const ADD_POST = "ADD-POST";
const UPDATE_TEXT_FIELD = "UPDATE-TEXT-FIELD";

let initialState = {
    postData:[
        {id:1, message:"Hello, world!", like:"12"},
        {id:2, message:"How are you??", like:"5"},
        {id:3, message:"Che,che", like:"0"},
        {id:4, message:"Opa, nihua", like:"56"}
    ],
    newTextChange: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newTextChange,
                like: 1
            };
            state.postData.push(newPost);
            state.newTextChange = "";
            return state;

        case UPDATE_TEXT_FIELD:
            state.newTextChange = action.newText;
            return state;

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateTextFieldActionCreator = (text) => ({type: UPDATE_TEXT_FIELD, newText: text});

export default profileReducer;
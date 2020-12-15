import { ADD_MESSAGE, FETCH_MESSAGE, REMOVE_MESSAGE, SHOW_LOADER } from "../types"

const handlers = {
    [SHOW_LOADER]: (state => ({...state, loading: true})),
    [ADD_MESSAGE]: (state, {payload}) => ({
        ...state, 
        chatform: [...state.chatform, payload]
    }),
    [FETCH_MESSAGE]: (state, {payload}) => ({...state, chatform: payload, loading: false}),
    [REMOVE_MESSAGE]: (state, {payload}) => ({
        ...state,
        chatform: state.chatform.filter(message => message.id !== payload)
    }),
    DEFAULT: state => state
}


export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle (state, action)
}
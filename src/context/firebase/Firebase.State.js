import React, { useReducer } from 'react'
import axios from 'axios'
import { firebaseReducer } from './firebase.Reducer'
import { FirebaseContext } from './firebaseContext'
import { ADD_MESSAGE, FETCH_MESSAGE, REMOVE_MESSAGE, SHOW_LOADER } from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
    const initialState = {
        chatform: [],
        loading: false
    }
    
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch ({ type: SHOW_LOADER})

    const fetchMessage = async () => {
        showLoader()
        const res = await axios.get(`${url}/chatform.json`)

        const payload = Object.keys(res.data || {}).map( key =>{
            return {
                ...res.data[key],
                id: key
            }
        })

        dispatch({type: FETCH_MESSAGE, payload})

        // console.log('fetchMessage', res.data)
    }

    const addMessage = async title => {
        const messageInChat = {
            title, date: new Date().toJSON()
        }

        try {
            const res = await axios.post(`${url}/chatform.json`, messageInChat)
            // console.log('addMessage', res.data)
            const payload = {
                ...messageInChat,
                id: res.data.name
            }

            dispatch ({type: ADD_MESSAGE, payload})
        
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const removeMessage = async id => {
        await axios.delete( `${url}/chatform/${id}.json`)

        dispatch ({
            type: REMOVE_MESSAGE,
            payload: id
        })
    }
    

    return (
        <FirebaseContext.Provider value = {{
            showLoader, addMessage, removeMessage, fetchMessage,
            loading: state.loading,
            chatform: state.chatform
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}

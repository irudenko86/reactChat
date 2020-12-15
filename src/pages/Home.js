import React, { Fragment, useContext, useEffect } from 'react'
import {Form} from '../components/Form'
import {ChatForm} from '../components/ChatForm'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { Loader } from '../components/Loader'

export const Home = () => {
    // const chatform = new Array (3)
    //     .fill('')
    //     .map( (_, i) => ({ id: i, title: `Message ${i + 1}`}))

    const {loading, chatform, fetchMessage, removeMessage} = useContext(FirebaseContext)

    useEffect ( () => {
        fetchMessage()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            
            {loading
                ? <Loader />
                : <ChatForm chatform={chatform} onRemove={removeMessage}/>
            }

            <br />

            <Form />
        </Fragment>
    )
}
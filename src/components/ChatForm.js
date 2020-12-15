import React from 'react'

export const ChatForm = ({chatform, onRemove}) => (
    <ul className="list-group">
            {chatform.map(message =>(
                <li className="list-group-item button-del" key={message.id}>
                    <div>
                        <strong>{message.title}</strong>
                        <small> {message.date} </small>
                    </div>
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onRemove(message.id)}
                        >&times;</button>
                </li>
            ))}
        </ul>
)
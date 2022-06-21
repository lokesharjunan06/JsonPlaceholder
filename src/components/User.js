import React from 'react'
import './user.css'

const User = ({id,title,body,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{title}</span>
            <span>{body}</span>
            <span>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default User

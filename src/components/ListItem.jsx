import React from 'react'

export const ListItem = (props) => {

    return (
        <div>
            <p onClick={() => props.deleteitem(props.id)} >{props.text}</p>
        </div>
    )
}

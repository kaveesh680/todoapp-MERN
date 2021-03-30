import React from 'react'
import { ListItem } from './ListItem';

export const ItemList = (props) => {
    return (
        <div>
            <ul>
                {props.texts.map((text, index) =>

                    <ListItem deleteitem={props.deleteitem} id={index} key={index} text={text} />

                )}
            </ul>

        </div>
    )
}

import React from 'react'

import './css/item.css'

function Item(props) {
    return (
        <div className="Item">
            <h1 className="Item-name">{ props.name }</h1>
            <p className="Item-description">{ props.description }</p>
        </div>
    )
}

export default Item
import React from 'react'

import './css/items.css'

import Item from './item'
import './css/items.css'

function Items(props) {
    return(
        <div className="Items">
            {
                props.items.map(item => <Item {...item}/>)
            }
        </div>
    )
}

export default Items
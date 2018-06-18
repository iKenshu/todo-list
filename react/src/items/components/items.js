import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import './css/items.css'

import Item from './item'
import './css/items.css'

function Items(props) {
  return(
    <CSSTransitionGroup className="Items"
      transitionName="example"
      transitionEnterTimeout={500}
    >
      {
        props.items.map(item => {
          return(<Item
                                  item={ item }
                                  key={ item.id }
                                  icons={ props.icons }
                                />)
        })
      }
    </CSSTransitionGroup>
  )
}

export default Items
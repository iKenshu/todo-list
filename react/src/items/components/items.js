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
        props.items.map(item => <Item
                                  item={ item }
                                  handleDelete={ props.handleDelete }
                                  key={ item.id }
                                />)
      }
    </CSSTransitionGroup>
  )
}

export default Items
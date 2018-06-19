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
      {
        props.items.length === 0 &&
          <Item
            item={{
              name: 'Notification',
              description: 'No registered items found.s \n' +
              '\n' +
              'Register one or try again later.',
              date: Date.now()
            }}
            icons = {[]}
          />
      }
    </CSSTransitionGroup>
  )
}

export default Items
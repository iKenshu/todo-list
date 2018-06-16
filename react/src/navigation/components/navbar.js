import React from 'react'
import Item from './navbarItem'

import './css/navbar.css'

function Navbar(props) {
  return(
    <nav className='Navbar'>
      <ul className='Navbar-list'>
        <Item
          text='Home'
          url='/home'
        />
        {
          props.isLogin === '1' &&
            <Item
              text='New Item'
              url='/add'
              handleClick={ props.handleAdd }
            />
        }

        {
          props.isLogin === '1' &&
            <Item
              text='Logout'
              url='/logout'
              handleClick={ props.handleLogout }
            />
        }

      </ul>
    </nav>
  )
}

export default Navbar
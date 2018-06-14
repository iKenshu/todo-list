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
        <Item
          text='New Item'
          url='/add'
          handleClick={ props.handleAdd }
        />
        {
          props.isLogin &&
            <Item
              text='Logout'
              url='/logout'
              handleLogout={ props.handleLogout }
              handleExit={ props.handleExit }
            />
        }

      </ul>
    </nav>
  )
}

export default Navbar
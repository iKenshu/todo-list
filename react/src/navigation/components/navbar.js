import React from 'react'
import NavItem from './navbarItem'

import './css/navbar.css'

function Navbar(props) {
  return(
    <nav className='Navbar'>
      <ul className='Navbar-list'>
        {
          props.isLogin &&
            props.items.map(item => <NavItem {...item}/>)
        }
      </ul>
    </nav>
  )
}

export default Navbar
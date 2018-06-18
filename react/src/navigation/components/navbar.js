import React from 'react'
import Item from './navbarItem'

import './css/navbar.css'

function Navbar(props) {
  return(
    <nav className='Navbar'>
      <ul className='Navbar-list'>
        {
          this.props.isLogin &&
            props.items.map(item => <Item {...item}/>)
        }
      </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import Item from './navbarItem'

import './css/navbar.css'

function Navbar(props) {
    return(
        <nav className='Navbar'>
            <ul className='Navbar-list'>
                <Item
                    text='Inicio'
                    url='/home'
                />
                <Item
                    text='Agregar'
                    url='/agregar'
                    handleClick={ props.handleAdd }
                />
            </ul>
        </nav>
    )
}

export default Navbar
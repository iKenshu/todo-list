import React from 'react'
import Item from './navbarItem'

import './css/navbar.css'

function Navbar(props) {
    return(
        <nav className='Navbar'>
            <ul className='Navbar-list'>
                <Item
                    text='Inicio'
                    url='#'
                />
                <Item
                    text='Agregar'
                    url='#'
                    handleClick={ props.handleAdd }
                />
            </ul>
        </nav>
    )
}

export default Navbar
import React from 'react'

import './css/navbarItem.css'

function NavbarItem(props) {
    return(
        <li className='Navbar-item'>
            <a
                href={ props.url }
                className='Navbar-link'
            >
                { props.text }
            </a>
        </li>
    )
}

export default NavbarItem
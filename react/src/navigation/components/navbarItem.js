import React, {PureComponent} from 'react'

import './css/navbarItem.css'

class NavbarItem extends PureComponent {

  handleLink = event => {
    this.props.handleLink(event)
  }

  render(){
    return(
      <li className='Navbar-item'>
          <a
              href={ this.props.url }
              className='Navbar-link'
              onClick={this.handleLink}
          >
              { this.props.text }
          </a>
      </li>
  )
  }
}

export default NavbarItem
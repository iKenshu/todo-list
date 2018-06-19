import React, { PureComponent } from 'react'
import FontAwesome from 'react-fontawesome'

import './css/icon.css'

class Icon extends PureComponent {

  handleClick = event => {
    this.props.handleLink(event, this.props.item)
  }

  render() {
    return(
      <a
        className={ "Icon Icon-" + this.props.cssName }
        onClick={ this.handleClick }
      >
        <FontAwesome
        name={ this.props.name }
        ariaLabel={ this.props.label }
        size={ this.props.size }
        />
      </a>
    )
  }

}

export default Icon
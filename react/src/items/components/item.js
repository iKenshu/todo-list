import React, { PureComponent } from 'react'
import FontAwesome from 'react-fontawesome'

import './css/item.css'
import './css/icon.css'

class Item extends PureComponent {

  handleDelete = event => {
    this.props.handleDelete(event, this.props.item )
  }

  render(){
    return (
      <div className="Item">
          <a
            className='deleteIcon'
            onClick={ this.handleDelete }
          >
            <FontAwesome
            name="times"
            ariaLabel='Delete'
            size='2x'
          />
        </a>
        <h1 className="Item-name">
          { this.props.item.name }
        </h1>
          <p className="Item-description">{ this.props.item.description }</p>
          <p className="Item-description">{ this.props.item.pub_date }</p>
      </div>
    )
  }
}

export default Item
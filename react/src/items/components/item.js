import React, { PureComponent } from 'react'
import moment from 'moment'
moment.locale('es')

import FontAwesome from 'react-fontawesome'

import './css/item.css'
import './css/icon.css'

class Item extends PureComponent {

  handleDelete = event => {
    this.props.handleDelete(event, this.props.item )
  }

  render(){
    const { name, description } = this.props.item
    const date = moment(this.props.item.pub_date).fromNow()

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
          { name }
        </h1>
          <p className="Item-description">{ description }</p>
          <span className="Item-date">{ date }</span>
      </div>
    )
  }
}

export default Item
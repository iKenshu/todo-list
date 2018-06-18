import React, { PureComponent } from 'react'
import moment from 'moment'

import Icon from './icon'

import './css/item.css'
import './css/icon.css'

moment.locale('es')

class Item extends PureComponent {

  render(){
    const { name, description } = this.props.item
    const date = moment(this.props.item.pub_date).fromNow()

    return (
      <div className="Item">
        {
          this.props.icons.map(icon => <Icon {...icon} item={this.props.item}/>)
        }
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
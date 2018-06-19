import React, { PureComponent } from 'react'
import moment from 'moment'
import Icon from './icon'
import Icons from './icons'

import './css/item.css'

moment.locale('es')

class Item extends PureComponent {

  render(){
    const { name, description } = this.props.item
    const date = moment(this.props.item.pub_date).fromNow()

    return (
      <div className="Item">
        <h1 className="Item-name">
          { name }
        </h1>
          <p className="Item-description">{ description }</p>
          <span className="Item-date">{ date }</span>
        <Icons>
          {
            this.props.icons.map(icon => <Icon {...icon} item={this.props.item}/>)
          }
        </Icons>
      </div>
    )
  }
}

export default Item
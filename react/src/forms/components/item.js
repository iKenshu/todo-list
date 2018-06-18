import React, { PureComponent } from 'react'

import './css/item.css'

class Item extends PureComponent {

    handleSubmit = event => {
        this.props.createItem(event)
    }

    render() {
        return (
            <form
                className='Item-form'
                action=""
                onSubmit={ this.handleSubmit }
            >
                <div className='Form-element'>
                    <label htmlFor="id_name">Name: </label>
                    <input
                        id='id_name'
                        name='name'
                        required='true'
                        type='text'
                    />
                </div>

                <div className='Form-element'>
                    <label htmlFor="id_description">Description: </label>
                    <textarea id='id_description'
                              name='description'
                              required='true'
                              cols='40'
                              rows='10'
                    >
                    </textarea>
                </div>

           <button className='Form-button'
                    type="submit">Agregar</button>

            </form>
        )
    }
}

export default Item
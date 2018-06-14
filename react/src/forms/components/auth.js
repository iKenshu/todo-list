import React, { PureComponent } from 'react'

class Auth extends PureComponent {

  handleSubmit = event => {
    event.preventDefault()
    let username = event.target[0].value
    let password = event.target[1].value
    let data = {
        username,
        password,
    }
    this.props.handleLogin(data)
  }

  render() {
    return(
      <form
        className='Item-form'
        action=''
        onSubmit={ this.handleSubmit }
      >
        <div className="Auth-Form-Item">
          <label htmlFor='username'>
            Username
          </label>
          <input name="username" className="form-control" type="text" id="name" />
        </div>
        <div className="Auth-Form-Item">
          <label htmlFor='password'>
            Password
          </label>
          <input name="password" className="form-control" type="password" id="password" />
        </div>
        <button className='Form-button'
                type="submit">Login
        </button>
      </form>
    )
  }
}

export default Auth
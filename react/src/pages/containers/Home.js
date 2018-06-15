//import { CookiesProvider, withCookies, Cookies } from 'react-cookie'
import React, { Component } from 'react'
import Items from '../../items/components/items'
import Navbar from '../../navigation/components/navbar'
import Layout from '../components/homeLayout'
import Form from '../../forms/components/item'
import Auth from '../../forms/components/auth'

class Home extends Component {
  state = {
    items: [],
    url: '/api/items/?format=json',
    newItemUrl: '/api/items/new',
    loginUrl: '/api/token/',
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    isLogin: localStorage.getItem('isLogin'),
    showCreate: false,
  }

  handleError = error => {
    if (error.message === 'e.results is undefined'){
      this.logout()
    }
  }

  getData = () => {
    this.setState({
      items: []
    })
    fetch(this.state.url, {
      'method': 'GET',
       headers: {
        'Content-Type':'application/json',
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(items => {
        items.results.reverse().forEach(item => {
          let data = {
            name: item.name,
            description: item.description,
            pub_date: item.pub_date
          }
          this.setState({
            items: this.state.items.concat([data])
          })
        })
    })
      .catch(error => this.handleError(error))
  }

  createItem = data => {
    fetch(this.state.newItemUrl, {
      method:  "POST",
      headers: {
        'Content-Type':'application/json',
        Authorization: `JWT ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        "user": this.state.username,
        "name": data.name,
        "description": data.description
      })
    })
    .then(response => {
      return response.json()
    })
    .then(item => {
      let data = {
      name: item.name,
      description: item.description,
      pub_date: item.pub_date
    }
      this.setState({
        items: this.state.items.concat([data]),
        showCreate: false,
      })
    })
  }

  sendData = data => {
    this.createItem(data)
  }

  login = data => {
    fetch(this.state.loginUrl, {
      'method': 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "username": data.username,
        "password": data.password
      })
    })
      .then(response => response.json())
      .then(json => {
        localStorage.setItem('token', json.token)
        localStorage.setItem('username', json.user.username)
        localStorage.setItem('isLogin', '1')
        if (json.token) {
          this.setState({
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            isLogin: localStorage.getItem('isLogin'),
          })
          this.getData()
        }
      })
  }

  logout = event => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.setState({ token: '', username: '', isLogin: false })
  }

  handleClickAdd = event => {
    this.setState({
      showCreate: !this.state.showCreate,
    })
  }

  componentDidMount() {
    if(this.state.token !== '') {
      this.getData()
    }
  }

  render() {
    return (
      <Layout>
        <Navbar
          handleAdd={ this.handleClickAdd }
          isLogin={ this.state.isLogin }
          handleLogout={ this.logout }
        />
        {
          this.state.token === '' &&
            <Auth handleLogin={this.login }/>
        }

        {
          this.state.token !== '' &&
            this.state.showCreate &&
              <Form
                sendData={this.sendData}
              />
        }

        {
          this.state.token !== '' &&
            <Items
              items={ this.state.items }
            />
        }

        </Layout>
    )
  }

}

export default Home
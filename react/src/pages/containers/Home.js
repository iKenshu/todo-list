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
    urls: {
      list: '/api/items/?format=json',
      new: '/api/items/new',
      delete:'/api/items/delete',
      login: '/api/token/'
    },
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
    fetch(this.state.urls.list, {
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
            id: item.id,
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
    fetch(this.state.urls.new, {
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
    .then(response => response.json())
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
    fetch(this.state.urls.login, {
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

  handleDelete = (event, item) => {
    event.preventDefault()
    let newItems = this.state.items.slice()
    //Define rules to use /api/items/delete/pk
    console.log(`${this.state.urls.delete}/${item.id}/`)
    fetch(`${this.state.urls.delete}/${item.id}`, {
      'method': 'DELETE',
       headers: {
        'Content-Type':'application/json',
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    })
    .then(response => {console.log(response)})
      //.then(resul => {console.log(resul)})


    newItems = newItems.filter(el => el.id!==item.id)
    this.setState({items: newItems})
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
              handleDelete={ this.handleDelete }
            />
        }

        </Layout>
    )
  }

}

export default Home
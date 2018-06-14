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
    loginUrl: '/api/rest-auth/login/',
    token: '',
  }

  getData = () => {
    this.setState({
      items: []
    })
    fetch(this.state.url, {
      'method': 'GET',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "key": this.state.key
      })
    })
      .then(response => response.json())
      .then(items => {
        items.results.forEach(item => {
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
  }
  setData = item => {
    let last_data = this.state.items
    this.setState({
      items: []
    })
    this.setState({
      items: this.state.items.concat([item])
    })
    last_data.forEach(element => {
      this.setState({
        items: this.state.items.concat([element])
      })
    })
  }
  createItem = data => {
    fetch(this.state.newItemUrl, {
      method:  "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
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
    //items = items.concat([last_data])
    this.setData(data)
    //this.getData()
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
      .then(token => {
        console.log(token)
        if (token.key) {
          this.setState({
            token: token.token
          })
          //this.getData()
        }
      })
    fetch('/rest-auth/user/')
            .then(response => console.log(response))
  }


  componentDidMount() {
    if(this.state.token !== '') {
      this.getData()
    }
  }

  render() {
    return (
      <Layout>
          <Navbar />
          {
            this.state.token === '' &&
            <Auth handleLogin={this.login }/>
          }

          <Form
            sendData={this.sendData}
          />
          <Items
            items={ this.state.items }
          />
        </Layout>
    )
  }

}

export default Home
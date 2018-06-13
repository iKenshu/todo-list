import React, { Component } from 'react'
import Items from '../../items/components/items'
import Navbar from '../../navigation/components/navbar'
import Layout from '../components/homeLayout'
import Form from '../../forms/components/item'

class Home extends Component {
    state = {
        items: [],
        url: 'http://127.0.0.1:8000/api/items/?format=json',
        newItemUrl: 'http://127.0.0.1:8000/api/items/new'
    }

    getData = () => {
        this.setState({
            items: []
        })
        fetch(this.state.url)
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
        console.log(last_data)
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


    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <Layout>
                <Navbar />
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
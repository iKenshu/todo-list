import React, { Component } from 'react'
import Items from '../../items/components/items'
import Navbar from '../../navigation/components/navbar'
import Layout from '../components/homeLayout'

import './css/Home.css'

class Home extends Component {
    state = {
        items: []
    }

    getData = () => {
        fetch('http://127.0.0.1:8000/api/items/?format=json')
            .then(response => response.json())
            .then(items => {
                items.forEach(item => {
                    let data = {
                        name: item.name,
                        description: item.description,
                        slug: item.slug,
                        pub_date: item.pub_date
                    }
                    this.setState({
                        items: this.state.items.concat([data])
                    })
                })
            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <Layout>
                <Navbar />
                <Items
                    items={ this.state.items }
                />
            </Layout>
        )
    }

}

export default Home
import React, { Component } from 'react'
import './home.css'
// Components
import Panel from './Panel'
import CardList from './CardList'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Panel />
                <CardList />
            </div>
        )
    }
}

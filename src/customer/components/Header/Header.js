import React, { Component } from 'react'
import { Layout, Divider } from 'antd'
import './header.css'
// Components
import TopHeader from './TopHeader'
import Menu from './Menu'

const { Header } = Layout
export default class CustomerHeader extends Component {
    render() {
        return (
            <Header className='header-custom'>
                <TopHeader {...this.props} />
                <Divider style={{ margin: '0 -50px', width: 'unset' }} />
                <Menu />
            </Header>
        )
    }
}

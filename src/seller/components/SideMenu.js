import React from 'react'
import { Layout, Menu, Affix } from 'antd';
import { Link } from 'react-router-dom';
import sellerMenu from '../../_mocks/sellerMenu'

const { Sider } = Layout
const { Item } = Menu

export default function SideMenu({ collapsed, role, location }) {
    return (
        <Sider
            trigger={null}
            width={220}
            className='sider-container'
        >
            <Affix>
                <a href="#">
                    <img src={require('../_media/image/logo.png')} className="logo" />
                </a>
                <Menu
                    // mode="inline"
                    defaultSelectedKeys={['products']}
                    className='sidemenu-custom'
                >
                    {sellerMenu.map(item => {
                        let Icon = item.icon
                        return (
                            <Item key={item.name.toLowerCase()}>
                                <Icon style={{ fontSize: 16 }} />
                                <Link to={item.link} className='menu-item-link'>
                                    {item.name}
                                </Link>
                            </Item>
                        )
                    })}
                </Menu>
            </Affix>
        </Sider>
    )
}
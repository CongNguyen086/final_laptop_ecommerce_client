import React from 'react'
import { Menu, Divider } from 'antd'

const { Item } = Menu
export default function CategoryList({ categoryList, ...menu }) {
    return (
        <div>
            <div className='menu-title'>Category</div>
            <Menu className='category-menu' defaultSelectedKeys='all' {...menu}>
                <Item key='all' className='category-item'>All dresses</Item>
                <Item key='divider' style={{ height: 1, padding: '0' }}>
                    <Divider className='category-divider' />
                </Item>
                {categoryList.map(item => {
                    return (
                        <Item key={item.slug} className='category-item'>
                            {item.name}
                        </Item>
                    )
                })}
            </Menu>
        </div>
    )
}

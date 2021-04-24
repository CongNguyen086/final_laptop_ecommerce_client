import React from 'react'
import { Menu } from 'antd'

const { Item } = Menu
export default function SizeFilter({ sizeList, ...eventHandler }) {
    return (
        <Menu
            mode='horizontal'
            className='size-list'
            multiple={true}
            {...eventHandler}
        >
            {sizeList.map(item => {
                return (
                    <Item key={item} className='size-item'>{item}</Item>
                )
            })}
        </Menu>
    )
}

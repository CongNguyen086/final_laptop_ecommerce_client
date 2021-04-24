import React, { useState } from 'react'
import { Dropdown, Button, Menu } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const MenuCustom = styled(Menu)`
    font-family: 'Montserrat', sans-serif;
`;
export default function SortBox({ sortBy, sortOptions, handleSortClick }) {
    const [isActive, setActiveBox] = useState(false)
    
    const onMenuClick = e => {
        setActiveBox(false)
        handleSortClick(e)
    }
    const renderSortOpt = (
        <MenuCustom selectable onClick={onMenuClick}>
            {sortOptions.map(item => (
                <Menu.Item key={item.id}>
                    {item.text}
                </Menu.Item>
            ))}
        </MenuCustom>
    )
    const onBoxClick = () => {
        setActiveBox(!isActive)
    }
    
    return (
        <Dropdown
            overlay={renderSortOpt}
            trigger={['click']}
            onVisibleChange={onBoxClick}
        >
            <Button>
                <span>
                    Sort By: <b>{sortBy}</b>
                </span>
                {
                    isActive
                    ? <UpOutlined className='suffix-icon' />
                    : <DownOutlined className='suffix-icon' />
                }
            </Button>
        </Dropdown>
    )
}

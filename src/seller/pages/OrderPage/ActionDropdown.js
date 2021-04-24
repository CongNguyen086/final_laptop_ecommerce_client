import React, { useState } from 'react'
import { Dropdown, Menu } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const MenuCustom = styled(Menu)`
    font-family: 'Montserrat', sans-serif;
`;
const actions = [
    {
        key: 'Completed',
        name: 'Mark as Completed',
        color: '#82bf11',
    },
    {
        key: 'Canceled',
        name: 'Mark as Canceled',
        color: '#f05d62',
    }
]
export default function ActionDropdown({ handleStatus }) {
    const [isActive, setActiveBox] = useState(false)

    const onMenuClick = item => {
        setActiveBox(false)
        handleStatus(item.key)
    }
    const renderActions = (
        <MenuCustom selectable onClick={onMenuClick}>
            {actions.map(item => {
                return (
                    <Menu.Item key={item.key} icon={<span style={{ fontSize: 50, color: item.color }}>.&nbsp;</span>}>
                        {item.name}
                    </Menu.Item>
                )
            })}
        </MenuCustom>
    )
    const onBoxClick = () => {
        setActiveBox(!isActive)
    }
    return (
        <Dropdown
            overlay={renderActions}
            trigger={['click']}
            onVisibleChange={onBoxClick}
        >
            <div>
                <b>Actions</b>
                {
                    isActive
                        ? <UpOutlined className='suffix-icon' />
                        : <DownOutlined className='suffix-icon' />
                }
            </div>
        </Dropdown>
    )
}

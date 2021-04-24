import React, { useState } from 'react'
import { Dropdown, Button, Menu } from 'antd'
import { EditFilled, DeleteFilled, DownOutlined, UpOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const MenuCustom = styled(Menu)`
    font-family: 'Montserrat', sans-serif;
`;
const actions = [
    {
        name: 'Edit',
        icon: EditFilled,
    },
    {
        name: 'Remove',
        icon: DeleteFilled,
    }
]
export default function ActionDropdown() {
    const [isActive, setActiveBox] = useState(false)

    const onMenuClick = e => {
        setActiveBox(false)
    }
    const renderActions = (
        <MenuCustom selectable onClick={onMenuClick}>
            {actions.map(item => {
                let Icon = item.icon
                return (
                    <Menu.Item key={item.name} icon={<Icon />}>
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

import React, { useState } from 'react'
import { Dropdown, Button, Menu } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const MenuCustom = styled(Menu)`
    font-family: 'Montserrat', sans-serif;
`;
const StyledButton = styled(Button)`
    height: auto;
    padding: 10px 20px;
`;
export default function SortBox({ sortBy, sortOptions, handleClick }) {
    const [isActive, setActiveBox] = useState(false)

    const onMenuClick = e => {
        setActiveBox(false)
        handleClick(e)
    }
    const renderSortOpt = (
        <MenuCustom selectable onClick={onMenuClick}>
            {sortOptions.map(item => (
                <Menu.Item key={item}>
                    {item}
                </Menu.Item>
            ))}
        </MenuCustom>
    )
    const onBoxClick = () => {
        setActiveBox(!isActive)
    }

    return (
        <div>
            <span style={{ marginRight: 20 }}>
                SORT BY
            </span>
            <Dropdown
                overlay={renderSortOpt}
                trigger={['click']}
                onVisibleChange={onBoxClick}
            >
                <StyledButton>
                    <b>{sortBy}</b>
                    {
                        isActive
                            ? <UpOutlined className='suffix-icon' />
                            : <DownOutlined className='suffix-icon' />
                    }
                </StyledButton>
            </Dropdown>
        </div>
    )
}

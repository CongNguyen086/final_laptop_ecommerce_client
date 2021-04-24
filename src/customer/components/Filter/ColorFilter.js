import React, { useState } from 'react'
import { Row, Col, Button } from 'antd'
import ColorButton from './ColorButton'
// import styled from 'styled-components'

// const ColorButton = styled(Button)`
//     background-color: ${props => props.color} !important;
//     border: ${props => props.active ? '0.5px solid rgba(0, 0, 0, 0.12)' : 'none'};
//     box-shadow: ${props => props.active ? '0 4px 12px 0 rgba(0, 0, 0, 0.12)' : 'none'};
// `;
// const TextBtn = styled.span`
//     color: ${props => props.textColor};
//     font-size: 1px;
// `;
export default function ColorFilter({ colorList, selectedColor, style, ...rest }) {
    return (
        <Row align='middle' gutter={[10, 10]}>
            {colorList.map(color => {
                let active = color == selectedColor ? true : false
                return (
                    <Col key={color} style={style} className='color-button'>
                        <ColorButton btnColor={color} active={active} {...rest} />
                    </Col>
                )
            })}
        </Row>
    )
}

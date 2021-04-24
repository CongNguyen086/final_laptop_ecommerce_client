import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

const ItemPhoto = styled.img`
    object-fit: cover;
    width: 55px;
`;
export default function ProductCell({ name, photo }) {
    return (
        <Row gutter={10}>
            <Col span={10}>
                <ItemPhoto src={photo} alt='' />
            </Col>
            <Col span={14}>
                <Row style={{ textAlign: 'left' }}>{name}</Row>
                <Row align='bottom' style={{ height: 43 }}>
                    <a className='cart-action'>Change |</a>
                    <a className='cart-action'>&nbsp;Remove</a>
                </Row>
            </Col>
        </Row>
    )
}

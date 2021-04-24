import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

const ItemPhoto = styled.img`
    object-fit: cover;
    width: 55px;
`;
const Name = styled(Row)`
    text-align: left;
`;
const Category = styled(Row)`
    height: 38px;
    font-size: 12px;
    color: #acacac;
`;
export default function ProductCell({ name, photo }) {
    return (
        <Row gutter={10}>
            <Col span={10}>
                <ItemPhoto src={require('../../../customer/_media/image/products/product_2.png')} alt='' />
            </Col>
            <Col span={14}>
                <Name>{name}</Name>
                <Category align='bottom'>Ladies, Casual dresses</Category>
            </Col>
        </Row>
    )
}

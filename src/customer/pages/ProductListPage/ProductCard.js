import React from 'react'
import { Card } from 'antd'
import { addZeroes } from '../../../utils'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const ProductName = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: var(--dark-grey);
    white-space: break-spaces;
`;
const ProductPhoto = styled.img`
    object-fit: cover;
    height: 269px;
`;
export default function ProductCard({ product }) {
    const { name, photo, price, slug } = product
    return (
        <Link to={`/product/details/${slug}`}>
            <Card
                hoverable
                bordered={false}
                cover={<ProductPhoto alt='' src={photo} />}
                bodyStyle={{ padding: '20px 0 0 0' }}
                style={{ padding: 10 }}
            >
                <Card.Meta
                    title={<ProductName>{name}</ProductName>}
                    description={<span>${addZeroes(price)}</span>}
                />
            </Card>
        </Link>
    )
}

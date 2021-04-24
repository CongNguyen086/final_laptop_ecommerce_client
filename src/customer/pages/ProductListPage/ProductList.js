import React from 'react'
import { Row, Col } from 'antd'
// Components
import ProductCard from './ProductCard'
import EmptyData from '../../components/EmptyData'

export default function ProductList({ productList }) {
    return (
        <Row
            // justify='space-between'
            gutter={20}
            className='product-list-container'
        >
            {productList.length
                ? productList.map(product => (
                    <Col key={product._id} className='product-card'>
                        <ProductCard product={product} />
                    </Col>
                ))
                : <EmptyData description='No result found' />
            }
        </Row>
    )
}

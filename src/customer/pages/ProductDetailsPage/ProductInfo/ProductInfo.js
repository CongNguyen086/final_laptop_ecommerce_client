import React from 'react'
import { Row, Col } from 'antd'
// Components
import PhotoGroup from './PhotoGroup'
import MainContent from './MainContent'
import BrandRecommendation from './BrandRecommendation'

export default function ProductInfo({ product }) {
    return (
        <Row gutter={60} justify='space-between' className='product-details-container'>
            <Col span={11}>
                <PhotoGroup photos={product.photos} />
            </Col>
            <Col span={10}>
                <MainContent product={product} />
            </Col>
            <Col span={3}>
                <BrandRecommendation photos={product.photos} />
            </Col>
        </Row>
    )
}

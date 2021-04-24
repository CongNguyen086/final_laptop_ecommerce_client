import React, { useState, useEffect } from 'react'
import { Breadcrumb, Spin } from 'antd'
import { useParams, withRouter } from 'react-router-dom'
import { BASE_URL } from '../../../config/api'
import { arrayBufferToBase64 } from '../../../utils/index'
import './product_details.css'
// Components
import ProductInfo from './ProductInfo/ProductInfo'
import Review from './Review/Review'
import ExtraRecommendation from './ExtraRecommnendation'

const productApiUrl = BASE_URL + '/products'
function ProductDetailsPage() {
    const { slug } = useParams()
    const [product, setProduct] = useState({})

    const convertPhotoBufferToBase64 = product => {
        let photos = [...product.photos]
        let base64Photos = []
        if (photos.length) {
            photos.forEach(photo => {
                base64Photos.push(arrayBufferToBase64(photo.data))
            })
        }
        product.photos = [...base64Photos]
    }
    useEffect(() => {
        fetch(productApiUrl + `/${slug}/details`)
            .then(res => res.json())
            .then(product => {
                convertPhotoBufferToBase64(product)
                setProduct(product)
            })
            .catch(error => { console.log(error) })
    }, [])

    if (!Object.keys(product).length) {
        return (
            <div style={{ textAlign: 'center', paddingTop: 100 }}>
                <Spin size='large' />
            </div>
        )
    }
    return (
        <div>
            <Breadcrumb className='page-breadcrumb'>
                <Breadcrumb.Item>Ladies</Breadcrumb.Item>
                <Breadcrumb.Item>Dresses</Breadcrumb.Item>
                <Breadcrumb.Item>Collete Stretch Linen Minidress</Breadcrumb.Item>
            </Breadcrumb>
            <ProductInfo product={product} />
            <Review />
            <ExtraRecommendation />
        </div>
    )
}

export default withRouter(ProductDetailsPage)
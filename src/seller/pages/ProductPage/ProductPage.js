import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../config/api'
import { arrayBufferToBase64 } from '../../../utils'
import { axiosInstance } from '../../../axios'
// Components
import SortBox from '../../components/SortBox'
import SearchInput from '../../components/SearchInput'
import ProductTable from './ProductTable'
import ExportButton from '../../components/ExportButton'

import './product.css'

const productApiUrl = BASE_URL + '/products'
const sortOptions = ['Date added', 'A - Z', 'Z - A']
export default function ProductPage() {
    const [data, setData] = useState([])
    const [sortBy, setSortBy] = useState(sortOptions[0])
    
    useEffect(() => {
        axiosInstance(BASE_URL + '/products/table/details')
            .then((response) => setData(response.data));
    }, [])
    const onSortChange = e => {
        setSortBy(e.key)
    }
    const sortProps = {
        sortOptions: sortOptions,
        sortBy: sortBy,
        handleClick: onSortChange
    }
    return (
        <div>
            <Row align='middle' justify='space-between' gutter={10}>
                <Col span={11}>
                    <SortBox {...sortProps} />
                </Col>
                <Col span={6}>
                    <SearchInput />
                </Col>
                <Col span={3}>
                    <Button className='default-btn'>
                        <Link to='/seller/products/create'>
                            <span style={{ fontSize: 18, marginRight: 8 }}>+</span>
                            <b>Add product</b>
                        </Link>
                    </Button>
                </Col>
                <Col span={3}>
                    <ExportButton />
                </Col>
            </Row>
            <ProductTable data={data} />
        </div>
    )
}

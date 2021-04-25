import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Row, Col, Breadcrumb, Pagination, Divider, Spin } from 'antd'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../../config/api'
import { sizeList, colorList, statusList } from '../../../_mocks/filterOptions'
import { axiosInstance } from '../../../axios'
import { arrayBufferToBase64 } from '../../../utils'
// Components
import SortBox from '../../components/SortBox'
import ProductList from './ProductList'
import FilterOptions from './FilterContainer/FilterOptions'

import './product_list.css'

const sortOptions = [
    {
        id: '0',
        text: 'Name',
        sortType: 'name asc'
    },
    {
        id: '1',
        text: 'Price(low to high)',
        sortType: 'price asc'
    },
    {
        id: '2',
        text: 'Price(high to low)',
        sortType: 'price desc'
    },
    {
        id: '3',
        text: 'Popularity',
        sortType: 'popularity desc'
    },
]
const productApiUrl = BASE_URL + '/products'
const brandApiUrl = BASE_URL + '/brands'

export default function ProductListPage() {
    const isInitialMount = useRef(true);
    const { categorySlug } = useParams()
    const [loading, setLoading] = useState(true)
    const [sortOption, setSortBy] = useState(sortOptions[0])
    const [currentProductList, setProductList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [numberPerPage, setNumberPerPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [brandList, setBrandList] = useState([])
    const [filterOptions, setFilterOptions] = useState({
        size: '',
        color: '',
        brandList: [],
        priceRange: [0, 300],
        available: null,
    })

    const convertPhotoBufferToBase64 = productList => {
        productList.products.forEach(product => {
            if (product.photo) {
                product.photo = arrayBufferToBase64(product.photo.data)
            }
        })
    }
    const handleProductListChange = productList => {
        setProductList(productList.products)
        setNumberPerPage(productList.limit)
        setTotalPages(productList.totalPages)
        setLoading(false)
    }
    const fetchAllProducts = async (currentPage, filterOptions, order = 'name asc') => {
        const res = await fetch(productApiUrl + `/category/${categorySlug}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                page: currentPage,
                order: order,
                filterOptions: filterOptions

            })
        })
        const productList = await res.json()
        convertPhotoBufferToBase64(productList)
        handleProductListChange(productList)
        return productList
    }
    const fetchProductsByCategory = async (currentPage, currentCategory, order = 'name asc') => {
        const res = await fetch(productApiUrl
            + `/${currentCategory}?page=${currentPage}&order=${order}`)
        const productList = await res.json()
        convertPhotoBufferToBase64(productList)
        console.log(productList)
        handleProductListChange(productList)
        return productList
    }

    const fetchBrandList = async () => {
        const res = await fetch(brandApiUrl)
        const list = await res.json()
        setBrandList(list)
    }

    useEffect(() => {
        axiosInstance.get('/product/getFilterOptions')
            .then((response) => setFilterOptions(response.data));
    }, []);

    useEffect(() => {
        setLoading(true)
        fetchAllProducts(currentPage, filterOptions)
        fetchBrandList()
    }, [currentPage]);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else  {
            setLoading(true)
            fetchProductsByCategory(1, 'android', sortOption.sortType)
        }
    }, [filterOptions, sortOption])

    const onSort = e => {
        const id = e.key
        setSortBy(sortOptions[id])
    }
    const handlePaginationChange = (value) => {
        setCurrentPage(value)
    }
    const handleSizeFilter = item => {
        const selectedKeys = item.selectedKeys
        setFilter('size', item.key)
        selectedKeys.splice(0, selectedKeys.length, item.key)
        setCurrentPage(1)
    }
    const handleClearSizeFilter = item => {
        setFilter('size', '')
        setCurrentPage(1)
    }
    const handleColorFilter = e => {
        setFilter('color', e.target.innerText)
        setCurrentPage(1)
    }
    const handleBrandFilter = values => {
        setFilter('brandList', values)
        setCurrentPage(1)
    }
    const handlePriceFilter = values => {
        setFilter('priceRange', values)
        setCurrentPage(1)
    }
    const handleStatusFilter = values => {
        if (values.length == 1) {
            values[0] == 'available' ? setFilter('available', true) : setFilter('available', false)
        } else {
            setFilter('available', null)
        }
        setCurrentPage(1)
    }
    const setFilter = (option, value) => {
        setFilterOptions({
            ...filterOptions,
            [option]: value
        })
    }

    const sizeProps = {
        sizeList: sizeList,
        onSelect: handleSizeFilter,
        onDeselect: handleClearSizeFilter,
    }
    const colorProps = {
        colorList: colorList.map(item => item.value),
        selectedColor: filterOptions.color,
        onClick: handleColorFilter,
    }
    const brandProps = {
        list: brandList,
        onChange: handleBrandFilter,
    }
    const priceProps = {
        onChange: handlePriceFilter,
    }
    const statusProps = {
        list: statusList,
        onChange: handleStatusFilter
    }

    console.log(currentProductList)
    return (
        <div>
            <Breadcrumb className='page-breadcrumb'>
                <Breadcrumb.Item>Android</Breadcrumb.Item>
            </Breadcrumb>
            <Row className='product-list-page'>
                <Col span={5}>
                    {/* <FilterList
                        categoryList={categoryList}
                        colorList={colorList}
                        onSelect={handleSelectedCategory}
                    /> */}
                    {/* <CategoryList
                        categoryList={categoryList}
                        onSelect={handleSelectedCategory}
                    /> */}
                    {/* <Divider className='side-divider' /> */}
                    <FilterOptions
                        sizeProps={sizeProps}
                        colorProps={colorProps}
                        brandProps={brandProps}
                        priceProps={priceProps}
                        statusProps={statusProps}
                    />
                </Col>
                <Col span={19} style={{ paddingLeft: 20 }}>
                    <Row>
                        <Col span={12}>
                            <SortBox
                                sortBy={sortOption.text}
                                sortOptions={sortOptions}
                                handleSortClick={onSort}
                            />
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Pagination
                                simple
                                current={currentPage}
                                defaultPageSize={numberPerPage}
                                total={totalPages}
                                onChange={handlePaginationChange}
                            />
                        </Col>
                    </Row>
                    {
                        loading
                            ? <div style={{ textAlign: 'center', paddingTop: 100 }}>
                                <Spin size='large' />
                            </div>
                            : <ProductList productList={currentProductList} />
                    }
                    <Pagination
                        simple
                        current={currentPage}
                        defaultPageSize={numberPerPage}
                        total={totalPages}
                        onChange={handlePaginationChange}
                        style={{ textAlign: 'right' }}
                    />
                </Col>
            </Row>
        </div>
    )
}

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import { Row, Col, Breadcrumb, Pagination, Divider, Spin } from 'antd'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';

import { BASE_URL } from '../../../config/api'
import { sizeList, colorList, statusList } from '../../../_mocks/filterOptions'
import { axiosInstance } from '../../../axios'
import { arrayBufferToBase64 } from '../../../utils'
// Components
import SortBox from '../../components/SortBox'
import ProductList from './ProductList'
import FilterContainer from './FilterContainer'

import './product_list.css'
import selectors from '../../../redux/selectors';
import actions from '../../../redux/actions';

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

function ProductListPage({ categoryList, filterOptions, setFilterOptions }) {
  const isInitialMount = useRef(true);
  const { categorySlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortBy] = useState(sortOptions[0]);
  const [currentProductList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPerPage, setNumberPerPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [brandList, setBrandList] = useState([]);
  console.log("🚀 ~ file: ProductListPage.js ~ line 50 ~ ProductListPage ~ currentProductList", currentProductList)
  // const [filterOptions, setFilterOptions] = useState({
  //     brand: [],
  //     ram: [],
  //     storage: [],
  //     camera: [],
  //     specialFeature: [],
  //     available: [],
  // });

  const newFilterOptions = useMemo(() => ({
    brandId: filterOptions.brand.flatMap((item) => item.values),
    ramId: filterOptions.ram.flatMap((item) => item.values),
    cameraId: filterOptions.camera.flatMap((item) => item.values),
    featureId: filterOptions.specialFeature.flatMap((item) => item.values),
  }), [filterOptions]);
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
  const fetchAllProducts = useCallback(async (currentPage, filterOptions, order = 'name asc') => {
    console.log("🚀 ~ file: ProductListPage.js ~ line 84 ~ fetchAllProducts ~ filterOptions", filterOptions)
    const currentCategory = categoryList.find((category) => category.slug === categorySlug);
    console.log("🚀 ~ file: ProductListPage.js ~ line 87 ~ fetchAllProducts ~ categoryList", categoryList)
    console.log("🚀 ~ file: ProductListPage.js ~ line 85 ~ fetchAllProducts ~ currentCategoryId", currentCategory)
    if (!currentCategory) {
      return;
    }
    axiosInstance.post(BASE_URL + `/product/findAll/${currentCategory.id}`,
      {
        page: currentPage,
        order: order,
        filterOptions
      },
      // {
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      // }
    ).then((response) => {
      const productList = response.data;
      convertPhotoBufferToBase64(productList)
      handleProductListChange(productList)
    });
  }, [currentPage, newFilterOptions, categoryList]);

  const fetchProductsByCategory = async (currentPage, currentCategory, order = 'name asc') => {
    const res = await fetch(productApiUrl
      + `/${currentCategory}?page=${currentPage}&order=${order}`)
    const productList = await res.json()
    convertPhotoBufferToBase64(productList)
    // console.log(productList)
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
    fetchAllProducts(currentPage, newFilterOptions)
    fetchBrandList()
  }, [fetchAllProducts]);

  // useEffect(() => {
  //     if (isInitialMount.current) {
  //         isInitialMount.current = false;
  //     } else {
  //         setLoading(true)
  //         fetchProductsByCategory(1, 'android', sortOption.sortType)
  //     }
  // }, [filterOptions, sortOption])

  const onSort = e => {
    const id = e.key
    setSortBy(sortOptions[id])
  }
  const handlePaginationChange = (value) => {
    setCurrentPage(value)
  }
  // const handleSizeFilter = item => {
  //     const selectedKeys = item.selectedKeys
  //     setFilter('size', item.key)
  //     selectedKeys.splice(0, selectedKeys.length, item.key)
  //     setCurrentPage(1)
  // }
  // const handleClearSizeFilter = item => {
  //     setFilter('size', '')
  //     setCurrentPage(1)
  // }
  // const handleColorFilter = e => {
  //     setFilter('color', e.target.innerText)
  //     setCurrentPage(1)
  // }
  // const handleBrandFilter = values => {
  //     setFilter('brandList', values)
  //     setCurrentPage(1)
  // }
  // const handlePriceFilter = values => {
  //     setFilter('priceRange', values)
  //     setCurrentPage(1)
  // }
  // const handleStatusFilter = values => {
  //     if (values.length == 1) {
  //         values[0] == 'available' ? setFilter('available', true) : setFilter('available', false)
  //     } else {
  //         setFilter('available', null)
  //     }
  //     setCurrentPage(1)
  // }

  // const sizeProps = {
  //     sizeList: sizeList,
  //     onSelect: handleSizeFilter,
  //     onDeselect: handleClearSizeFilter,
  // }
  // const colorProps = {
  //     colorList: colorList.map(item => item.value),
  //     selectedColor: filterOptions.color,
  //     onClick: handleColorFilter,
  // }
  // const brandProps = {
  //     list: brandList,
  //     onChange: handleBrandFilter,
  // }
  // const priceProps = {
  //     onChange: handlePriceFilter,
  // }
  // const statusProps = {
  //     list: statusList,
  //     onChange: handleStatusFilter
  // }

  return (
    <div>
      <Breadcrumb className='page-breadcrumb'>
        <Breadcrumb.Item>Android</Breadcrumb.Item>
      </Breadcrumb>
      <Row className='product-list-page'>
        <Col span={4}>
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
          <FilterContainer onFilter={() => setCurrentPage(1)} />
        </Col>
        <Col span={20} style={{ paddingLeft: 20 }}>
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

const mapStateToProps = (state) => ({
  categoryList: selectors.getCategoryList(state),
  filterOptions: selectors.getCurrentFilterOptions(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFilterOptions: (list) => dispatch(actions.setFilterOptions(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
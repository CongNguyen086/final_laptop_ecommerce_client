import React from 'react'
import { Divider } from 'antd'
// Components
import CategoryList from './CategoryList'
import FilterOptions from './FilterOptions'

export default function FilterList({ colorList, ...categoryList }) {
    return (
        <div>
            <CategoryList {...categoryList} />
            <Divider className='side-divider' />
            <FilterOptions colorList={colorList} />
        </div>
    )
}

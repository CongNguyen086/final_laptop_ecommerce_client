import React from 'react'
import { Input } from 'antd'

export default function SearchInput() {
    return (
        <Input.Search
            placeholder="Search product"
            onSearch={value => console.log(value)}
            className='seller-search-product'
        />
    )
}

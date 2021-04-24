import React, { useState, useEffect } from 'react'
import { Card, Table } from 'antd'
import { addZeroes } from '../../../utils'
// Components
import PlusMinusBox from '../../components/PlusMinusBox'
import EmptyData from '../../components/EmptyData'
import ProductCell from './ProductCell'
import ColorButton from '../../components/Filter/ColorButton'

export default function CartTable({ data, handleQuantity, onSelectRow: onSelectRow }) {
    const columns = [
        {
            key: 'product',
            title: 'Product',
            dataIndex: 'name',
            render: (name, row) => <ProductCell name={name} photo={row.photo} />,
            // width: '180px',
            align: 'center',
        },
        {
            key: 'color',
            title: 'Color',
            dataIndex: ['colorCode', 'value'],
            render: color => <ColorButton btnColor={color} />, 
            // width: '80px',
            align: 'center',
        },
        {
            key: 'size',
            title: 'Size',
            dataIndex: 'size',
            // width: '150px',
            align: 'center',
        },
        {
            key: 'quantity',
            title: 'Quantity',
            dataIndex: 'quantity',
            render: quantity => (
                <PlusMinusBox defaultValue={quantity} onChange={handleQuantity} />
            ),
            // width: '200px',
            align: 'center',
        },
        {
            key: 'amount',
            title: 'Amount',
            dataIndex: 'price',
            render: amount => <span>${addZeroes(amount)}</span>,
            // width: '150px',
            align: 'center',
        },
    ];
    
    if (!data) return <EmptyData description='No product in cart' />
    return (
        <Card bordered={false} className='table-container'>
            <Table
                columns={columns}
                dataSource={data}
                // rowSelection={{
                //     selectedRowKeys,
                //     onChange: this.onSelectedRowKeysChange,
                // }}
                onRow={record => ({
                    onClick: () => {
                        onSelectRow(record)
                    }
                })}
                pagination={false}
            />
        </Card>
    )
}

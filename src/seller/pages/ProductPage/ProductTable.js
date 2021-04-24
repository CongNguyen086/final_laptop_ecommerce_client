import React from 'react'
import { Card, Table } from 'antd'
import moment from 'moment'
// Components
import ActionDropdown from './ActionDropdown'
import ProductCell from './ProductCell';

export default function ProductTable({ data }) {
    const pagination = {
        pageSize: 5,
        showQuickJumper: true,
    }
    const columns = [
        {
            key: 'product',
            title: 'PRODUCTS',
            dataIndex: 'name',
            render: (name, row) => <ProductCell name={name} />,
            width: '350px',
            align: 'center',
        },
        {
            key: 'sold',
            title: 'SOLD',
            dataIndex: 'sold',
            // width: '80px',
            align: 'center',
        },
        {
            key: 'date_added',
            title: 'DATE ADDED',
            dataIndex: 'date_added',
            render: date => <span>{moment(date).format('dddd, Do MMM, YYYY')}</span>,
            // width: '150px',
            align: 'center',
        },
        {
            key: 'profit',
            title: 'PROFIT ($)',
            dataIndex: 'profit',
            // width: '200px',
            align: 'center',
        },
        {
            key: 'action',
            render: () => <ActionDropdown />,
            // width: '120px',
            align: 'center',
        },
    ];
    return (
        <Card bordered={false} className='table-container'>
            <Table
                // loading={loading}
                columns={columns}
                dataSource={data}
                pagination={pagination}
            />
        </Card>
    )
}

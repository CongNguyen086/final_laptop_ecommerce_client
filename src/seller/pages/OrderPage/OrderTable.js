import React from 'react'
import { Card, Table } from 'antd'
import moment from 'moment'
import styled from 'styled-components'
import { addZeroes } from '../../../utils'
// Components
import ActionDropdown from './ActionDropdown'

const StatusContainer = styled.div`
    padding: 5px;
    border-radius: 12px;
    color: white;
    background-color: ${props => {
        switch (props.status) {
            case 'Pending':
                return '#fbba4e'
            case 'Completed':
                return '#82bf11'
            case 'Canceled':
                return '#f05d62'
            default:
                break;
        }
    }};
`;
export default function OrderTable({ data, loading, handleStatus, onSelectRow}) {
    const pagination = {
        pageSize: 5,
        showQuickJumper: true,
    }
    
    const columns = [
        {
            key: 'orderId',
            title: 'ORDER ID',
            dataIndex: 'order_id',
            // width: '180px',
            align: 'center',
        },
        {
            key: 'date',
            title: 'ORDERED DATE',
            dataIndex: 'date',
            render: date => <span>{moment(date).format('dddd, Do MMM, YYYY')}</span>,
            // width: '80px',
            align: 'center',
        },
        {
            key: 'detail',
            title: 'DETAIL',
            dataIndex: ['order_line[0]', 'product', 'name'],
            render: (name, row) => {
                let details = `${row.order_line[0].product.name} (${row.order_line[0].size}) x ${row.order_line[0].quantity}`
                return <span>{details}</span>
            },
            // width: '150px',
            align: 'center',
        },
        {
            key: 'total',
            title: 'TOTAL ($)',
            dataIndex: 'total',
            render: total => <span>{addZeroes(total)}</span>,
            // width: '200px',
            align: 'center',
        },
        {
            key: 'status',
            title: 'STATUS',
            dataIndex: 'status',
            render: status => <StatusContainer status={status}>{status}</StatusContainer>,
            // width: '150px',
            align: 'center',
        },
        {
            key: 'action',
            render: () => <ActionDropdown handleStatus={handleStatus} />,
            // width: '120px',
            align: 'center',
        },
    ];
    return (
        <Card bordered={false} className='table-container'>
            <Table
                loading={loading}
                columns={columns}
                dataSource={data}
                onRow={record => ({
                    onClick: () => {
                        onSelectRow(record)
                    }
                })}
                pagination={pagination}
            />
        </Card>
    )
}

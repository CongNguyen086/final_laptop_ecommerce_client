import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Button } from 'antd'
import { BASE_URL } from '../../../config/api'
import './order.css'
// Components
import ExportButton from '../../components/ExportButton'
import OrderTable from './OrderTable'
import SortDate from './SortDate'
import SearchInput from '../../components/SearchInput'

const orderApiUrl = BASE_URL + '/orders'
export default function OrderPage() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedRow, setSelectedRow] = useState('')
    const [changedStatus, setChangedStatus] = useState('')
    let isMounted = useRef(true)
    useEffect(() => {
        fetch(orderApiUrl)
            .then(res => res.json())
            .then(orders => {
                setData(orders)
                setLoading(false)
            })
    }, [])
    useEffect(() => {
        if (isMounted.current) {
            isMounted.current = false
        } else {
            updateStatus(selectedRow, changedStatus)
        }
    }, [changedStatus])

    const updateStatus = async (id, status) => {
        const res = await fetch(orderApiUrl + '/update', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id: id,
                status: status
            })
        })
        const newOrder = await res.json()
        let updateIndex = data.findIndex(item => item._id == id)
        let newData = [...data]
        newData[updateIndex].status = status
        setData(newData)
    }
    const handleStatus = status => {
        setChangedStatus(status)
    }
    const onSelectRow = record => {
        console.log(record)
        setSelectedRow(record._id)
    }
    return (
        <div>
            <Row align='middle' justify='space-between' gutter={10}>
                <Col span={15}>
                    <SortDate />
                </Col>
                <Col span={6}>
                    <SearchInput />
                </Col>
                <Col span={3}>
                    <ExportButton />
                </Col>
            </Row>
            <OrderTable
                loading={loading}
                data={data}
                handleStatus={handleStatus}
                onSelectRow={onSelectRow}
            />
        </div>
    )
}

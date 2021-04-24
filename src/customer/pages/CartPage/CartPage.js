import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col, message } from 'antd';
import { BASE_URL } from '../../../config/api'
import './cart.css'
// Components
import CartTable from './CartTable';
import CartTotal from './CartTotal';
import DefaultButton from '../../components/DefaultButton'

const Title = styled.div`
    font-size: 24px;
`;
const orderApiUrl = BASE_URL + '/orders'
export default function CartPage() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('cartList')))
    const [selectedRow, setSelectedRow] = useState('')
    const [changedQuantity, setChangedQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (data) {
            setTotal(calculateTotal(data))
        }
    }, [])
    useEffect(() => {
        let current = [...data]
        setQuantity(current, selectedRow, changedQuantity)
    }, [selectedRow, changedQuantity])
    const onSelectRow = record => {
        setSelectedRow(record._id)
    }
    const handleQuantity = value => {
        setChangedQuantity(value)
    }
    const calculateTotal = data => {
        return data.reduce((prev, current) => prev + current.price * current.quantity, 0)
    }
    const setQuantity = (data, id, quantity) => {
        data.forEach(item => {
            if (item._id == id) {
                item.quantity = quantity
            }
        })
        setTotal(calculateTotal(data))
    }
    const handleCheckout = () => {
        const customerId = JSON.parse(localStorage.getItem('customerInfo')).customerId
        var order = {
            total: total,
            customer: customerId,
            order_line: []
        }
        data.forEach(item => {
            order.order_line.push({
                product: item._id,
                size: item.size,
                color: item.color,
                quantity: item.quantity,
                subtotal: item.quantity*item.price
            })
        })
        console.log(order)
        fetch(orderApiUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ order })
        })
            .then(res => res.json())
            .then(order => {
                console.log(order)
                message.success('Your purchase has been added')
                setData([])
                localStorage.removeItem('cartList')
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div>
            <Title>MY BAG</Title>
            <Row justify='space-between' gutter={60} className='cart-wrapper'>
                <Col span={16}>
                    <CartTable
                        data={data}
                        handleQuantity={handleQuantity}
                        onSelectRow={onSelectRow}
                    />
                </Col>
                <Col span={8}>
                    <CartTotal total={total} />
                    <DefaultButton
                        name='Check out'
                        block
                        onClick={handleCheckout}
                        style={{
                            marginTop: 12,
                            backgroundColor: '#ff5f6d'
                        }}
                    />
                </Col>
            </Row>
        </div>
    )
}

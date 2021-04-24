import React, { useState } from 'react'
import { Dropdown, List, Row, Col, Badge } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Icon from '@ant-design/icons'
import { ReactComponent as CartIcon } from '../../_media/icon/cart.svg'
import styled from 'styled-components'
// Components
import EmptyData from '../../components/EmptyData'

const CartContainer = styled.div`
    box-shadow: 0 14px 30px 0 rgba(0, 0, 0, 0.14);
    border: solid 0.5px #eaeaea;
    background-color: #fbfbfb;
    margin-top: 18px;
    padding: 0 20px 0 15px;
`;
const ListItem = styled(List.Item)`
    border-bottom: solid 0.5px #eaeaea !important;
`;
const ItemPhoto = styled.img`
    object-fit: cover;
    width: 45px;
`;
const ItemName = styled.span`
    font-weight: bold;
    color: #4d4d4d;
`;
const ItemDescription = ({ price, size, color, quantity }) => {
    let details = size + ' - ' + color + ' - ' + quantity + ' pcs'
    return (
        <Row justify='space-between' align='bottom' style={{ height: 43 }}>
            <Col>
                <span>${price}</span>
            </Col>
            <Col>
                <span>{details}</span>
            </Col>
        </Row>
    )
}
const CartList = ({ cartList, onClick }) => (
    <CartContainer>
        <List
            dataSource={cartList}
            className='cart-dropdown-list'
            renderItem={item => {
                let description = {
                    price: item.price,
                    size: item.size,
                    color: item.colorCode.color,
                    quantity: item.quantity
                }
                return (
                    <ListItem key={item._id}>
                        <List.Item.Meta
                            avatar={<ItemPhoto src={item.photo} alt='' />}
                            title={<ItemName>{item.name}</ItemName>}
                            description={<ItemDescription {...description} />}
                        />
                    </ListItem>
                )
            }}
        />
        <div className='view-cart-link'>
            <Link to='/mycart' onClick={onClick}>
                View cart
            </Link>
        </div>
    </CartContainer>
)
export default function CartDropdown() {
    // let cartList = JSON.parse(localStorage.getItem('cartList'))
    // console.log(cartList)
    const cartList = useSelector(state => state.cart)
    const [visible, setVisible] = useState(false)
    // const [itemCount, setItemCount] = useState()
    const handleVisibleChange = flag => {
        setVisible(flag)
    }
    
    const handleViewCart = () => { setVisible(false) }
    const renderCart = (
        cartList.length
            ? <CartList cartList={cartList} onClick={handleViewCart} />
            : <CartContainer>
                <EmptyData
                    description='Cart is empty'
                    padding='10px 20px'
                />
            </CartContainer>
    )
    return (
        <Badge count={cartList.length} style={{ backgroundColor: '#ffa15f' }}>
            <Dropdown
                overlay={renderCart}
                trigger={['click']}
                placement='bottomRight'
                onVisibleChange={handleVisibleChange}
                visible={visible}
            >
                <Icon component={CartIcon} style={{ fontSize: 20, color: '#ffa15f' }} />
            </Dropdown>
        </Badge>
    )
}

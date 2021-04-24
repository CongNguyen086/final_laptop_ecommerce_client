import React, { useState, useEffect } from 'react'
import { Rate, Divider } from 'antd'
import styled from 'styled-components'
import { addZeroes } from '../../../../utils/index'
import { colorList } from '../../../../_mocks/filterOptions'
// import { addToCart } from '../../../../_actions'
import { useDispatch } from 'react-redux'
import _ from 'lodash/lang'
// Components
import SizeFilter from '../../../components/Filter/SizeFilter'
import ColorFilter from '../../../components/Filter/ColorFilter'
import PlusMinusBox from '../../../components/PlusMinusBox'
import AddToCartButton from '../../../components/AddToCartButton'

const Title = styled.div`
    font-size: 24px;
`;
const Price = styled.div`
    font-size: 22px;
`;
const InfoContainer = styled.div`
    margin-bottom: 26px;
`;
const InfoTitle = styled.div`
    margin-bottom: 7px; 
`;
const StyledRate = styled(Rate)`
    border-right: 0.2px solid var(--white-four);
    margin-right: 10px;
    padding-right: 10px;
`;
const ButtonContainer = styled.div`
    margin: 32px 0;
`;
const StyledDivider = styled(Divider)`
    margin: 0;
    background: #d4d3d3;
`;
const Description = styled.div`
    margin-top: 32px;
`;
const SplittedDescription = ({ description }) => {
    let textArray = description.split(/(?=- )/g)
    return (
        <Description>
            {textArray.map(text => <div key={text}>{text}</div>)}
        </Description>
    )
}
export default function MainContent({ product }) {
    const { _id, name, price, sizes, colors, quantity, photos, description } = product
    const dispatch = useDispatch()
    const [selectedProduct, setSelectedProduct] = useState({})

    useEffect(() => {
        let defaultSelectedProduct = {
            _id: _id,
            name: name,
            price: price,
            size: sizes[0],
            color: colors[0],
            photo: photos[0],
            quantity: 1,
            description: description,
        }
        setSelectedProduct(defaultSelectedProduct)
    }, [])
    const updateCart = (cartList, newItem) => {
        if (!cartList) {
            cartList = []
        }
        for (let i = 0; i < cartList.length; i++) {
            if (_.isEqual(newItem, cartList[i])) {
                console.log('Already added')
                return cartList
            }
        }
        // dispatch(addToCart(newItem))
        cartList.push(newItem)
        return cartList
    }
    const addToCartHandler = () => {
        let colorCode = colorList.find(item => item.value == selectedProduct.color)
        let newItem = {
            ...selectedProduct,
            colorCode: colorCode,
        }
        let cartList = JSON.parse(localStorage.getItem('cartList'))
        cartList = updateCart(cartList, newItem)
        localStorage.setItem('cartList', JSON.stringify(cartList))
    }

    const handleSizeFilter = item => {
        const selectedKeys = item.selectedKeys
        selectedKeys.splice(0, selectedKeys.length, item.key)
        setSelectedProduct(prevState => ({
            ...prevState,
            size: item.key,
        }))
    }
    const handleColorFilter = e => {
        setSelectedProduct(prevState => ({
            ...prevState,
            color: e.target.innerText,
        }))
    }
    const handleQuantity = value => {
        setSelectedProduct(prevState => ({
            ...prevState,
            quantity: value,
        }))
    }
    // console.log(selectedProduct)
    return (
        <div>
            <Title>{name}</Title>
            <Price>${addZeroes(price)}</Price>
            <InfoContainer>
                <StyledRate value={4} disabled />
                <span>0 Review</span>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Size</InfoTitle>
                <SizeFilter
                    sizeList={sizes}
                    defaultSelectedKeys={[sizes[0]]}
                    onSelect={handleSizeFilter}
                />
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Color</InfoTitle>
                <ColorFilter
                    colorList={colors}
                    selectedColor={selectedProduct.color}
                    onClick={handleColorFilter}
                    style={{ width: '10%' }}
                />
            </InfoContainer>

            <InfoContainer>
                <span style={{ marginRight: 20 }}>Quantity</span>
                <PlusMinusBox maximum={quantity} onChange={handleQuantity} />
            </InfoContainer>

            <ButtonContainer>
                <AddToCartButton
                    block
                    disabled={quantity ? false : true}
                    name='Add to cart'
                    onClick={addToCartHandler}
                />
            </ButtonContainer>
            <StyledDivider />
            <SplittedDescription description={description} />
        </div>
    )
}

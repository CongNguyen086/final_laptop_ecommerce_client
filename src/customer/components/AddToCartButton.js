import React from 'react'
import { Button } from 'antd'

export default function AddToCartButton({ name, ...buttonProps }) {
    return (
        <Button
            {...buttonProps}
            className='add-cart-btn'
        >
            <b>{name}</b>
        </Button>
    )
}

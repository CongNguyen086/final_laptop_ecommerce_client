import React from 'react'
import { Button } from 'antd'

export default function LightButton({ name, textClassName, ...buttonProps }) {
    return (
        <Button
            {...buttonProps}
            className='light-btn'
        >
            <b className={textClassName}>{name}</b>
        </Button>
    )
}

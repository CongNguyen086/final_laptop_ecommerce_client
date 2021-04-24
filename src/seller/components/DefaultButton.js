import React from 'react'
import { Button } from 'antd'

export default function DefaultButton({ name, textClassName, ...buttonProps }) {
    return (
        <Button
            {...buttonProps}
            className='default-btn'
        >
            <b className={textClassName}>{name}</b>
        </Button>
    )
}

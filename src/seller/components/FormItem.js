import React from 'react'
import { Form } from 'antd'
import styled from 'styled-components'

const Label = styled.span`
    font-weight: bold;
    font-size: 12px
`

export default function FormItem({ name, label, rules, children, ...rest }) {
    return (
        <Form.Item
            name={name}
            label={<Label>{label.toUpperCase()}</Label>}
            rules={rules}
            colon={false}
            style={{ alignItems: 'center' }}
            {...rest}
        >
            {children}
        </Form.Item>
    )
}

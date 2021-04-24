import React from 'react'
import { Form, Input } from 'antd'
import styled from 'styled-components'

const Label = styled.span`
    font-weight: bold;
    font-size: 12px
`

export default function FormItem({ name, label, rules, type, placeholder }) {
    return (
        <Form.Item
            name={name}
            label={<Label>{label}</Label>}
            rules={rules}
        >
            <Input className='form-input' type={type} placeholder={placeholder} />
        </Form.Item>
    )
}

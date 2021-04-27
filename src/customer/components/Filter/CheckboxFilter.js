import React from 'react'
import { Checkbox, Row } from 'antd'

export default function CheckboxFilter({ list, onChange }) {
    return (
        <Checkbox.Group className='checkbox-filter-container' onChange={onChange}>
            {list.map(item => (
                <Row align='middle' key={item.label}>
                    <Checkbox value={item}>{item.label}</Checkbox>
                </Row>
            ))}
        </Checkbox.Group>
    )
}

import React from 'react'
import { Checkbox, Row } from 'antd'

export default function CheckboxFilter({ list, onChange }) {
    return (
        <Checkbox.Group className='checkbox-filter-container' onChange={onChange}>
            {list.map(item => (
                <Row align='middle' key={item}>
                    <Checkbox value={item._id}>{item.name}</Checkbox>
                </Row>
            ))}
        </Checkbox.Group>
    )
}

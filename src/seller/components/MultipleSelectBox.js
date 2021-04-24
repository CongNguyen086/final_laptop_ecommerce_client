import React, { useState } from 'react'
import { Select, Divider, Input } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'

const { Option } = Select
export default function MultipleSelectBox({ value = [], onChange, list, placeholder, addField = false }) {
    const [itemList, setItemList] = useState(list)
    const [addedItem, setAddedItem] = useState('')

    const onInputChange = e => {
        setAddedItem(e.target.value)
    }
    const addItem = () => {
        if (addedItem) setItemList([...itemList, addedItem])
        setAddedItem('')
    }

    const renderAddField = () => (
        addField
            ? <React.Fragment>
                <Divider style={{ margin: '4px 0' }} />
                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                    <Input value={addedItem} onChange={onInputChange} style={{ flex: 'auto' }} />
                    <a
                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                        onClick={addItem}
                    >
                        <PlusCircleFilled /> Add item
                 </a>
                </div>
            </React.Fragment>
            : null
    )
    console.log(list)
    return (
        <Select
            mode='multiple'
            placeholder={placeholder}
            className='select-status'
            // onSelect={}
            dropdownRender={menu => (
                <div>
                    {menu}
                    {renderAddField()}
                </div>
            )}
        >
            {list.map(item => (
                <Option key={item._id} value={item._id}>{item.name}</Option>
            ))}
        </Select>
    )
}

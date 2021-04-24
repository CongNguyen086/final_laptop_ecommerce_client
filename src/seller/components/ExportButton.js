import React from 'react'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

export default function ExportButton() {
    return (
        <Button className='light-btn'>
            <DownloadOutlined className='export-icon' />
            <b>Export</b>
        </Button>
    )
}

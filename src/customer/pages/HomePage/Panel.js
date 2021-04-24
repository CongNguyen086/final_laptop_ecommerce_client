import React from 'react'
import { Card } from 'antd'
// Components
import DefaultButton from '../../components/DefaultButton'

export default function Panel() {
    return (
        <Card bordered={false} className='home-card main-panel'>
            <div className='panel-title-container'>
                <span>OUTFIT OF THE WEEK</span>
            </div>
            <div className='panel-btn-container'>
                <DefaultButton
                    name='Shop now'
                    style={{ width: 180 }}
                    textClassName='panel-btn-text'
                />
            </div>
        </Card>
    )
}

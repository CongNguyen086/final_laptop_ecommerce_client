import React from 'react'
import { Card } from 'antd'
// Components
import DefaultButton from '../../components/DefaultButton'

export default function CardCatalog({ bgImage, name }) {
    return (
        <Card
            bordered={false}
            style={{ backgroundImage: `url(${bgImage})` }}
            className='home-card catalog-card'
        >
            <div className='card-container'>
                <div className='card-title'>
                    <span>{name}</span>
                </div>
                <div className='card-btn-container'>
                    <DefaultButton
                        name='Shop now'
                        style={{ width: 140 }}
                        textClassName='panel-btn-text'
                    />
                </div>
            </div>
        </Card>
    )
}

import React from 'react'
import { Row, Col } from 'antd'
// Components
import genderList from '../../../_mocks/genderList'
import menImage from '../../_media/image/men.jpg'
import ladiesImage from '../../_media/image/ladies.jpg'
import girlsImage from '../../_media/image/girls.jpg'
import boysImage from '../../_media/image/boys.jpg'
import CardCatalog from './CardCatalog'

const renderList = (genderCatalog) => {
    return genderCatalog.map(item => (
        <Col key={item.gender}>
            <CardCatalog bgImage={item.image} name={item.gender} />
        </Col>
    ))
}

export default function CardList() {
    const imageList = [menImage, ladiesImage, girlsImage, boysImage]
    const genderCatalog = genderList.map((item, index) => {
        let genderObject = {}
        // let imageUrl = item.toLowerCase() + '.jpg'
        genderObject.gender = item
        genderObject.image = imageList[index]
        return genderObject
    })

    return (
        // <List
        //     grid={{ gutter: 12, column: column }}
        //     dataSource={genderCatalog}
        //     renderItem={renderItem}
        //     className='card-panel'
        // />
        <Row justify='space-between' className='card-panel'>
            {renderList(genderCatalog)}
        </Row>
    )
}

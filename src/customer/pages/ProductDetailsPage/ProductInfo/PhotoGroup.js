import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

const ExtraImage = styled.img`
    margin-bottom: 25px;
    object-fit: cover;
    width: 100%;
`;
const MainImage = styled.img`
    object-fit: cover;
    height: 567px;
    width: 100%;
`;
export default function PhotoGroup({ photos }) {
    return (
        <Row gutter={20} >
            <Col span={5} style={{ marginBottom: -25 }}>
                {photos.slice(1).map((item, index) => (
                    <ExtraImage key={index} src={item} alt='' />
                ))}
            </Col>
            <Col span={19}>
                <MainImage src={photos[0]} alt='' />
            </Col>
        </Row>
    )
}

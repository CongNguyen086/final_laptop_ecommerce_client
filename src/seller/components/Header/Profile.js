import React from 'react'
import { Row, Col, Avatar } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const StyledAvatar = styled(Avatar)`
    margin: 10px;
    box-shadow: 0 5px 20px 0 rgba(61, 61, 63, 0.2);
`;
export default function Profile({ name }) {
    return (
        <Row align='middle' gutter={5}>
            <Col>
                <StyledAvatar src={require('../../_media/image/avatar.jpg')} size='large' />
            </Col>
            <Col>
                <b>{name}</b>
            </Col>
            <Col>
                <CaretDownOutlined />
            </Col>
        </Row>
    )
}

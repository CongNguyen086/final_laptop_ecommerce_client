import React from 'react'
import { Layout, Row, Col, Badge, Button } from 'antd'
import styled from 'styled-components'
import './header.css'
// Components
import Profile from './Profile';

const { Header } = Layout
const StyledButton = styled(Button)`
    margin-left: 30px;
    padding: 0;
    height: auto;
    background-color: unset;
    border: none;
`;
export default function SellerHeader({ title }) {
    const sellerName = JSON.parse(localStorage.getItem('sellerInfo')).name
    return (
        <Header className='seller-header'>
            <Row align='middle' justify='space-between'>
                <Col flex={40}>
                    {title}
                </Col>
                <Col flex={2}>
                    <Profile name={sellerName} />
                </Col>
                <Col flex={1}>
                    <Badge count={10} overflowCount={9} style={{ fontSize: 11 }}>
                        <StyledButton>
                            <img src={require('../../_media/icon/mail.png')} className='header-icon' />
                        </StyledButton>
                    </Badge>
                </Col>
                <Col flex={2}>
                    <Badge count={10} overflowCount={9} style={{ fontSize: 11 }}>
                        <StyledButton>
                            <img src={require('../../_media/icon/notification.png')} className='header-icon' />
                        </StyledButton>
                    </Badge>
                </Col>
            </Row>
        </Header>
    )
}

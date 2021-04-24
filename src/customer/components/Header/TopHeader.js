import React from 'react'
import { Row, Col, Input, Button, Avatar } from 'antd'
import logo from '../../_media/image/logo.png'
import styled from 'styled-components'
// Components
import CartDropdown from './CartDropdown'

const { Search } = Input
const RightCol = styled(Col)`
    text-align: center;
`;
const StyledAvatar = styled(Avatar)`
    margin: 10px;
    box-shadow: 0 5px 20px 0 rgba(61, 61, 63, 0.2);
`;
export default function TopHeader({ isLogin, name, setRegisterVisible, setLoginVisible }) {
    const renderAuthentication = () => {
        if (isLogin) {
            return (
                <Col span={13} style={{ textAlign: 'right' }}>
                    <StyledAvatar src={require('../../_media/image/avatar.jpg')} size='large' />
                </Col>
            )
        }
        return (
            <React.Fragment>
                <RightCol span={6} onClick={setRegisterVisible}>
                    <a className='register-link'>Register</a>
                </RightCol>
                <RightCol span={7}>
                    <Button className='login-btn' onClick={setLoginVisible}>Login</Button>
                </RightCol>
            </React.Fragment>
        )
    }

    return (
        <Row align='middle' gutter={12} className='TopHeader__wrapper'>
            <Col span={8}>
                <Search
                    placeholder="Search"
                    onSearch={value => console.log(value)}
                    className='search-product'
                />
            </Col>
            <Col span={8} style={{ textAlign: 'center' }}>
                <img src={logo} alt='' />
            </Col>
            <Col span={8}>
                <Row align='middle' gutter={24}>
                    <Col span={7} />
                    {renderAuthentication()}
                    {/* <RightCol span={4} style={{ paddingRight: 40 }}>
                        <CartDropdown />
                    </RightCol> */}
                </Row>
            </Col>
        </Row>
    )
}

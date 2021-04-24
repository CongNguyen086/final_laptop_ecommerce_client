import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

const TotalContainer = styled.div`
    background-color: #f9f9f9;
    padding: 32px 30px;
`;
const SubTotalContainer = styled.div`
    margin-top: 15px;
    padding-top: 5px;
    border-top: solid 0.5px var(--brown-grey);
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
`;
export default function CartTotal({ total, onClick }) {
    return (
        <TotalContainer>
            <Row justify='space-between'>
                <Col>
                    Shipping &amp; Handling:
                </Col>
                <Col>
                    Free
                </Col>
            </Row>
            <Row justify='space-between'>
                <Col>
                    Subtotal:
                </Col>
                <Col>
                    ${total}
                </Col>
            </Row>
            <SubTotalContainer>
                <Row justify='space-between'>
                    <Col>
                        Total
                    </Col>
                    <Col>
                        ${total}
                    </Col>
                </Row>
            </SubTotalContainer>
        </TotalContainer>
    )
}

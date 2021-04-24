import React from 'react'
import { DatePicker, Row, Col, Button } from 'antd'
import styled from 'styled-components'
import moment from 'moment'

const SortText = styled.span`
    margin-right: 20px;
`;
const dateFormat = 'DD/MM/YYYY'
export default function SortDate() {
    return (
        <div>
            <Row align='middle' gutter={10}>
                <Col>
                    <span>ORDER DATE</span>
                </Col>
                <Col className="date-picker">
                    <DatePicker.RangePicker
                        bordered={false}
                        format={dateFormat}
                        defaultValue={[moment(), moment().add(1, 'days')]}
                        style={{ fontSize: '20px' }}
                    />
                </Col>
                <Col>
                    <Button className='sort-date-btn'>
                        Today
                    </Button>
                </Col>
                <Col>
                    <Button className='sort-date-btn'>
                        Yesterday
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

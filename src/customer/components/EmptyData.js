import React from 'react'
import { Empty } from 'antd'
import styled from 'styled-components'

const EmptyContainer = styled.div`
    width: 100%;
    padding: ${props => props.padding};
`;
export default function EmptyData({ padding, description }) {
    return (
        <EmptyContainer padding={padding}>
            <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={description}
            />
        </EmptyContainer>
    )
}

EmptyData.defaultProps = {
    padding: '100px 0'
}

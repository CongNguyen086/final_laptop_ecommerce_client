import React, { useState } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    background-color: ${props => props.color} !important;
    border: ${props => props.active ? '3px solid #979797' : 'none'};
    box-shadow: ${props => props.active ? '0 4px 12px 0 rgba(0, 0, 0, 0.12)' : 'none'};
`;
const TextBtn = styled.span`
    color: ${props => props.textColor};
    font-size: 1px;
`;
export default function ColorButton({ btnColor, active, onClick }) {
    return (
        <StyledButton
            color={btnColor}
            active={active}
            shape='circle'
            size='middle'
            onClick={onClick}
        >
            <TextBtn textColor={btnColor}>{btnColor}</TextBtn>
        </StyledButton>
    )
}

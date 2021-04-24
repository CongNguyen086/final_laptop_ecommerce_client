import React, { useState ,useEffect } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

const Box = styled.div`
    padding: 10px 0;
    border: solid 1px #d4d3d3;
    display: inline;
`;
const StyledText = styled.span`
    margin: 0 5px;
`;
export default function PlusMinusBox({ defaultValue, minimum = 0, maximum = 100, onChange }) {
    const [value, setValue] = useState(defaultValue ? defaultValue : 1)
    const onClick = e => {
        let newValue
        if (e.target.innerText == '-' && value > minimum) {
            newValue = value - 1
        } else if (e.target.innerText == '+' && value < maximum) {
            newValue = value + 1
        } else {
            return
        }
        setValue(newValue)
    }
    useEffect(() => {
        onChange(value)
    }, [value])
    return (
        <Box>
            <Button className='plus-minus-btn' onClick={onClick}>-</Button>
            <StyledText>{value}</StyledText>
            <Button className='plus-minus-btn' onClick={onClick}>+</Button>
        </Box>
    )
}

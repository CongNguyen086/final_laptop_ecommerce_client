import React from 'react'
import { Slider } from 'antd'
import styled from 'styled-components'

const marks = {
    0: '$0',
    300: '$300',
}
const StyledToolTip = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
`;
export default function PriceFilter({ onChange }) {
    return (
        <Slider
            range
            min={0}
            max={300}
            defaultValue={[0, 300]}
            marks={marks}
            tooltipPlacement='bottom'
            tipFormatter={value => <StyledToolTip>${value}</StyledToolTip>}
            onChange={onChange}
            className='slider-filter'
        />
    )
}

import React from 'react'
import styled from 'styled-components'

const ExtraImage = styled.img`
    margin-bottom: 10px;
    object-fit: cover;
    width: 93%;
`;
export default function BrandRecommendation({ photos }) {
    return (
        <div>
            <div style={{ fontWeight: 'bold' }}>More from</div>
            <div style={{ marginBottom: 10 }}>Zara</div>
            {photos.slice(1).map((item, index) => (
                <ExtraImage key={index} src={item} alt='' />
            ))}
        </div>
    )
}

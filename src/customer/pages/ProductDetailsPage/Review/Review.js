import React from 'react'
import { Divider } from 'antd'
import styled from 'styled-components'
// Components
import PostReview from './PostReview'
import ReviewList from './ReviewList'

const ReviewTitle = styled(Divider)`
    margin: 0 !important;
`;
export default function Review() {
    return (
        <div className='review-container'>
            <ReviewTitle orientation='left'>
                Reviews
            </ReviewTitle>
            <PostReview />
            <ReviewList />
        </div>
    )
}

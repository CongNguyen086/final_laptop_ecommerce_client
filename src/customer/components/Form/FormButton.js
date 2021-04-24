import React from 'react'
import DefaultButton from '../DefaultButton'

export default function FormButton(props) {
    return (
        <DefaultButton
            htmlType='submit'
            block
            {...props}
        />
    )
}

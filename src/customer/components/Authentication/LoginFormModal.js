import React from 'react'
import { Checkbox, Row, Col } from 'antd'
import styled from 'styled-components'
// Components
import FormItem from '../../components/Form/FormItem'
import FormModal from '../../components/Form/FormModal'

const FormExtra = styled(Row)`
    line-height: 1.57;
    margin-bottom: 5px;
`;
const FormFooterText = styled.div`
    text-align: center;
    line-height: 1.57;
`;
const CustomText = styled.span`
    font-weight: bold;
    color: #ff7413;
`;

const ExtraComponent = ({ onChange }) => {
    return (
        <FormExtra justify='space-between' align='middle'>
            <Col>
                <Checkbox onChange={onChange}>
                    Remember password
                </Checkbox>
            </Col>
            <Col>
                <b>Forgot your password?</b>
            </Col>
        </FormExtra>
    )
}

const Footer = () => {
    return (
        <FormFooterText>
            <span>Don't have an account? </span>
            <CustomText>Register</CustomText>
        </FormFooterText>
    )
}

export default function RegisterFormModal(props) {
    const validateMessages = {
        types: {
            email: 'Please enter a valid ${name}!',
        },
    }

    const renderFormInput = () => {
        return (
            <React.Fragment>
                <FormItem
                    name='email'
                    label='E-MAIL'
                    rules={[{
                        type: 'email'
                    }]}
                    placeholder='Enter your email...'
                />
                <FormItem
                    name='password'
                    label='PASSWORD'
                    type='password'
                    placeholder='Enter your password...'
                />
            </React.Fragment>
        )
    }

    const onChangeCheckBox = () => {
        console.log('Remember password')
    }

    return (
        <FormModal
            title='Login'
            formName='login_form'
            validateMessages={validateMessages}
            renderFormInput={renderFormInput()}
            extraComponent={<ExtraComponent onChange={onChangeCheckBox} />}
            footer={<Footer />}
            btnName='Login'
            {...props}
        />
    )
}
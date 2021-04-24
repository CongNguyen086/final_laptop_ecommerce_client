import React from 'react'
import styled from 'styled-components'
// Components
import FormItem from '../../components/Form/FormItem'
import FormModal from '../../components/Form/FormModal'

const FormExtraText = styled.div`
    text-align: center;
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

const ExtraText = () => {
    return (
        <FormExtraText>
            <span>By creating an account you agree to the</span><br />
            <CustomText><u>Terms of Service </u></CustomText><span>and </span>
            <CustomText><u>Privacy Policy</u></CustomText>
        </FormExtraText>
    )
}

const Footer = () => {
    return (
        <FormFooterText>
            <span>Do you have an account? </span>
            <CustomText>Log in</CustomText>
        </FormFooterText>
    )
}

export default function RegisterFormModal(props) {
    const validateMessages = {
        required: 'Please enter a valid ${name}!',
        whitespace: 'Please enter a valid ${name}!',
        types: {
            email: 'Please enter a valid ${name}!',
        },
        string: {
            min: 'Your ${name} must be more than 6 characters!'
        },
        pattern: {
            mismatch: 'Please enter a valid ${name}!',
        },
    }

    const renderFormInput = () => {
        return (
            <React.Fragment>
                <FormItem
                    name='name'
                    label='NAME'
                    rules={[{
                        required: true,
                        type: 'string',
                        whitespace: true,
                        pattern: /^([^0-9]*)$/,
                    }]}
                    placeholder='Enter your name...'
                />
                <FormItem
                    name='email'
                    label='E-MAIL'
                    rules={[{
                        required: true,
                        type: 'email',
                    }]}
                    placeholder='Enter your email...'
                />
                <FormItem
                    name='password'
                    label='PASSWORD'
                    rules={[{
                        required: true,
                        type: 'string',
                        min: 7
                    }]}
                    type='password'
                    placeholder='Enter your password...'
                />
            </React.Fragment>
        )
    }

    return (
        <FormModal
            title='Register'
            formName='register_form'
            validateMessages={validateMessages}
            renderFormInput={renderFormInput()}
            extraComponent={<ExtraText />}
            footer={<Footer />}
            btnName='Register'
            {...props}
        />
    )
}

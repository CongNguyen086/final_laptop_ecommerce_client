import React, { useState } from 'react'
import { Form, Button, message } from 'antd'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { BASE_URL } from '../../../config/api'
// Components
import FormItem from '../../components/Form/FormItem'

const FormFooterText = styled.div`
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: white;
`;

const sellerApiUrl = BASE_URL + '/sellers'
function LoginForm(props) {
    const { history } = props
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
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
                    label='EMAIL'
                    rules={[{
                        type: 'email'
                    }]}
                    placeholder='email@sample.com'
                />
                <FormItem
                    name='password'
                    label='PASSWORD'
                    type='password'
                    placeholder='Enter your password'
                />
            </React.Fragment>
        )
    }
    const onFinish = (value) => {
        setLoading(true)
        // fetch api
        fetch(sellerApiUrl + '/login', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({
                email: value.email,
                password: value.password
            })
        })
            .then(res => res.json())
            .then(seller => {
                localStorage.setItem('sellerInfo', JSON.stringify(seller))
                props.history.push('/admin/products')
            })
            .catch(err => {
                setLoading(false)
                onFail('Your email or password is invalid')
            })
    }
    const onFail = msg => {
        message.error(msg)
    }

    return (
        <Form
            form={form}
            layout='vertical'
            name='seller-login'
            validateMessages={validateMessages}
            onFinish={onFinish}
            className='seller-login-form'
        >
            <Form.Item>
                <div className='login-title'>Log in</div>
            </Form.Item>
            {renderFormInput()}
            <Form.Item>
                <Button
                    htmlType='submit'
                    block
                    loading={loading}
                    className='seller-login-btn'
                >
                    <b>Log in</b>
                </Button>
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
                <FormFooterText>Forgot password</FormFooterText>
            </Form.Item>
        </Form>
    )
}

export default withRouter(LoginForm)
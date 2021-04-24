import React, { useState } from 'react'
import { Layout, message } from 'antd'
import { BASE_URL } from '../../config/api'
import './style.css'
// Components
import CustomerHeader from '../components/Header/Header'
import CustomerFooter from '../components/Footer/Footer'
import RegisterFormModal from '../components/Authentication/RegisterFormModal'
import LoginFormModal from '../components/Authentication/LoginFormModal'
import CustomerContent from './PageRouter'

const customerApiUrl = BASE_URL + '/customers'

function CustomerLayout() {
    const [customerInfo, setCustomerInfo] = useState(JSON.parse(localStorage.getItem('customerInfo')))
    const [isRegisterVisible, setRegisterVisible] = useState(false)
    const [isLoginVisible, setLoginVisible] = useState(false)
    const [isFormLoading, setFormLoading] = useState(false)
    const [isLogin, setAuthenticate] = useState(customerInfo ? true : false)
    
    const onRegisterVisible = () => {
        setFormLoading(false)
        setRegisterVisible(true)
    }

    const onLoginVisible = () => {
        setFormLoading(false)
        setLoginVisible(true)
    }

    const onRegisterHidden = () => {
        setRegisterVisible(false)
    }

    const onLoginHidden = () => {
        setLoginVisible(false)
    }

    const onFinish = async (value) => {
        setFormLoading(true)
        if (isRegisterVisible) {
            await fetchRegister(value)
        } else if (isLoginVisible) {
            let data = await fetchLogin(value)
            if (data) {
                let loginData = {
                    customerId: data._id,
                    customerName: data.name,
                }
                localStorage.setItem('customerInfo', JSON.stringify(loginData))
                setAuthenticate(true)
                setCustomerInfo(JSON.parse(localStorage.getItem('customerInfo')))
            }
        }
    }

    const fetchRegister = async (formValue) => {
        const res = await fetch(customerApiUrl + '/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                customer: formValue
            })
        })
        const data = await res.json()
        if (data.success) {
            const message = "You have successfully registered. Let's login"
            onSuccess(setRegisterVisible, message)
        }
    }

    const fetchLogin = async (formValue) => {
        const res = await fetch(customerApiUrl + '/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: formValue.email,
                password: formValue.password,
            })
        })
        const data = await res.json()
        console.log(data)
        if (data.id) {
            const message = "Login successfully"
            onSuccess(setLoginVisible, message)
            return data
        } else {
            onFailed(data.message)
            return
        }
    }

    const onSuccess = (setVisible, msg) => {
        setVisible(false)
        message.success(msg)
    }

    const onFailed = msg => {
        message.error(msg)
        setFormLoading(false)
        
    }
    
    return (
        <Layout className='main-layout'>
            <CustomerHeader
                setRegisterVisible={onRegisterVisible}
                setLoginVisible={onLoginVisible}
                isLogin={isLogin}
            />
            <CustomerContent />

            {/* <FormModal isVisible={isRegisterVisible} onCancel={onRegisterHidden}>
                <RegisterFormModal onFinish={onFinish} isLoading={isFormLoading} />
            </FormModal> */}
            <RegisterFormModal
                visible={isRegisterVisible}
                loading={isFormLoading}
                onFinish={onFinish}
                handleCancel={onRegisterHidden}
            />
            <LoginFormModal
                visible={isLoginVisible}
                loading={isFormLoading}
                onFinish={onFinish}
                handleCancel={onLoginHidden}
            />
        </Layout>
    )
}

export default CustomerLayout

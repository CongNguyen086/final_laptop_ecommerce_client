import React from 'react'
import './login.css'
// Components
import LoginForm from '../../components/Form/LoginForm'

export default function LoginPage() {
    return (
        <div className='login-container'>
            <div style={{ flex: 1 }}>
                <img src={require('../../_media/image/logo.png')} className="logo" />
            </div>
            <LoginForm />
        </div>
    )
}

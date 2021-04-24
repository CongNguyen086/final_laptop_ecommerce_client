import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './style.css'
// Components
import LoginPage from '../pages/LoginPage/LoginPage'
import MainLayout from './MainLayout'

export default function SellerLayout() {
    return (
        <Switch>
            <Route path='/seller/login' exact component={LoginPage} />
            <Route path='/seller' component={MainLayout} />
        </Switch>
    )
}

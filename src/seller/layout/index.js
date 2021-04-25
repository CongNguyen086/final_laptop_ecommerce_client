import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './style.css'
// Components
import LoginPage from '../pages/LoginPage/LoginPage'
import MainLayout from './MainLayout'

export default function SellerLayout() {
    return (
        <Switch>
            <Route path='/admin/login' exact component={LoginPage} />
            <Route path='/admin' component={MainLayout} />
        </Switch>
    )
}

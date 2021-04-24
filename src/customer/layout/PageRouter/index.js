import React from 'react'
import { Layout } from 'antd'
import { Switch, Route, withRouter } from 'react-router-dom'
// Component
import HomePage from '../../pages/HomePage/HomePage'
import ProductListPage from '../../pages/ProductListPage/ProductListPage'
import ProductDetailsPage from '../../pages/ProductDetailsPage/ProductDetailsPage'
import CartPage from '../../pages/CartPage/CartPage'

const { Content } = Layout
function CustomerContent(props) {
    const { match } = props
    return (
        <Content className='main-container'>
            <Switch>
                {/* <Route path='/' /> */}
                <Route path={`${match.url}`} exact component={HomePage} />
                <Route path={`${match.url}:rootCategorySlug/:categorySlug`} exact component={ProductListPage} />
                <Route path={`${match.url}product/details/:slug`} exact component={ProductDetailsPage} />
                <Route path={`${match.url}mycart`} exact component={CartPage} />
            </Switch>
        </Content>
    )
}

export default withRouter(CustomerContent)

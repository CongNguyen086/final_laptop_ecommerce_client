import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
// Components
import SideMenu from '../../components/SideMenu'
import SellerHeader from '../../components/Header/Header'
import OrderPage from '../../pages/OrderPage/OrderPage'
import CreateForm from '../../pages/CreateProductPage/CreateForm'
import ProductPage from '../../pages/ProductPage/ProductPage'

const { Content } = Layout

const Title = styled.span`
    font-size: 28px;
    font-weight: bold;
    line-height: 1.29;
`;

const TitleWithBreadcrumb = ({ text }) => (
    <div>
        <Title>{text}</Title>
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to='/admin/products'>Products</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Add product</Breadcrumb.Item>
        </Breadcrumb>
    </div>
)
const getTitle = pathname => {
    let title = null
    switch (pathname) {
        case '/admin/products':
            title = <Title>Products</Title>
            break;
        case '/admin/products/create':
            title = <TitleWithBreadcrumb text='Add product' />
            break;
        default:
            break;
    }
    return title
}
function MainLayout(props) {
    const { match, location } = props
    const { pathname } = location
    return (
        <Layout className='seller-layout'>
            <SideMenu />
            <Layout className='main-seller-container'>
                <SellerHeader title={getTitle(pathname)} />
                <Content className='content-container'>
                    <Switch>
                        <Route path={`${match.url}/orders`} exact component={OrderPage} />
                        <Route path={`${match.url}/products/create`} exact component={CreateForm} />
                        <Route path={`${match.url}/products`} exact component={ProductPage} />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}

export default withRouter(MainLayout)

import React from 'react'
import { Layout } from 'antd'
import { Switch, Route, withRouter } from 'react-router-dom'
// Component
import RouterConfig from '../../navigation'
import HomePage from '../../pages/HomePage/HomePage'
import ProductListPage from '../../pages/ProductListPage/ProductListPage'
import ProductDetailsPage from '../../pages/ProductDetailsPage/ProductDetailsPage'
import CartPage from '../../pages/CartPage/CartPage'

const { Content } = Layout
function CustomerContent(props) {
    const { match } = props
    console.log("🚀 ~ file: index.js ~ line 18 ~ CustomerContent ~ match.url", match.url)
    return (
        <Content className='main-container'>
            <Switch>
                {RouterConfig.map((route, i) => (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => {
                            window.scrollTo(0, 0);
                            const Component = route.component;
                            return <Component
                                {...props}
                                pageTitle={route.pageTitle}
                            />;
                        }}
                    />
                ))}
            </Switch>
        </Content>
    )
}

export default withRouter(CustomerContent)

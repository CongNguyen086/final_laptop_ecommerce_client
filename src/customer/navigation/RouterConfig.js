import React from 'react';
import { Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ProductListPage from '../pages/ProductListPage/ProductListPage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';
import CartPage from '../pages/CartPage/CartPage';

const RouterConfig = [
  {
    path: '/',
    component: () => <Redirect to="/homepage" />,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop',
  },
  {
    path: '/homepage',
    component: HomePage,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop - Homepage',
  },
  {
    path: '/:categorySlug',
    component: ProductListPage,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop - Product',
  },
  {
    path: '/product/details',
    component: ProductDetailsPage,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop - Product',
  },
  {
    path: '/mycart',
    component: CartPage,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop - Cart',
  },
];

export default RouterConfig;

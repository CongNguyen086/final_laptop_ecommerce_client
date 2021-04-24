import {
    BarChartOutlined,
    ShoppingCartOutlined,
    BarsOutlined,
    DollarCircleOutlined,
    TagOutlined,
    SettingOutlined

} from '@ant-design/icons';

export default [
    {
        name: 'Overview',
        icon: BarChartOutlined,
        link: '/seller/overview'
    },
    {
        name: 'Orders',
        icon: ShoppingCartOutlined,
        link: '/seller/orders'
    },
    {
        name: 'Products',
        icon: BarsOutlined,
        link: '/seller/products'
    },
    {
        name: 'Payments',
        icon: DollarCircleOutlined,
        link: '/seller/payments'
    },
    {
        name: 'Promotions',
        icon: TagOutlined,
        link: '/seller/promotions'
    },
    {
        name: 'Setting',
        icon: SettingOutlined,
        link: '/seller/setting'
    }
]
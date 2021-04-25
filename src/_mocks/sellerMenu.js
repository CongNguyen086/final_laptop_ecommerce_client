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
        link: '/admin/overview'
    },
    {
        name: 'Orders',
        icon: ShoppingCartOutlined,
        link: '/admin/orders'
    },
    {
        name: 'Products',
        icon: BarsOutlined,
        link: '/admin/products'
    },
    {
        name: 'Payments',
        icon: DollarCircleOutlined,
        link: '/admin/payments'
    },
    {
        name: 'Promotions',
        icon: TagOutlined,
        link: '/admin/promotions'
    },
    {
        name: 'Setting',
        icon: SettingOutlined,
        link: '/admin/setting'
    }
]
import React, { useState, useEffect } from 'react'
import { List, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { BASE_URL } from '../../../config/api'
import { axiosInstance } from '../../../axios'
import { NavLink } from 'react-router-dom'
import capitalize from 'lodash/capitalize';

// const SubMenuList = ({ menuItem, subMenu }) => {
//     const column = subMenu.length
//     return (
//         <List
//             grid={{ column: column }}
//             dataSource={subMenu}
//             className='menu-item-container'
//             renderItem={item => (
//                 <List.Item className='submenu-item'>
//                     <Link to={`/${menuItem.slug}/${item.slug}`} replace={true} style={{ color: '#202124' }}>
//                         <span>{item.name}</span>
//                     </Link>
//                 </List.Item>
//             )}
//         />
//     )
// }

function Menu() {
    const [categoryMenu, setMenu] = useState([]);
    useEffect(() => {
        axiosInstance(BASE_URL + '/category/all')
            .then((response) => {
                const categories = response.data;
                console.log(categories);
                setMenu(categories.map((category) => ({
                    name: capitalize(category.name),
                    url: `/product/${category.name}`,
                    onClick: () => { },
                })));
            })
    }, []);

    const menuList = [
        {
          name: 'Home',
          url: '/homepage',
          onClick: () => { },
        },
        ...categoryMenu,
      ];
    const handleClickMenuItem = (item) => item.onClick && item.onClick();

    if (!categoryMenu.length) return null
    return (
        <List
            grid={{ gutter: 24, column: menuList.length }}
            className='menu-container'
            dataSource={menuList}
            renderItem={(item) => (
                <List.Item className='submenu-item'>
                    <NavLink
                        to={item.url}
                        onClick={() => handleClickMenuItem(item)}
                        className='Menu__item'
                        activeClassName='Menu__item-active'
                    >
                        <span>{capitalize(item.name)}</span>
                    </NavLink>
                </List.Item>
                // <List.Item style={{ marginBottom: 0 }}>
                //     {/* <Dropdown
                //         overlay={<SubMenuList menuItem={item} subMenu={item.categories} />}
                //         placement='bottomCenter'
                //     > */}
                //     <a className='menu-item'>
                //         <span>{item.name} </span>
                //         <DownOutlined />
                //     </a>
                //     {/* </Dropdown> */}
                // </List.Item>
            )}
        />
    )
}

export default Menu;

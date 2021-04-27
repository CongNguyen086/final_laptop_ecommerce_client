import React, { useState, useEffect } from 'react'
import { List, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { connect } from 'react-redux';

import { BASE_URL } from '../../../config/api'
import { axiosInstance } from '../../../axios'
import { NavLink } from 'react-router-dom'
import capitalize from 'lodash/capitalize';
import actions from '../../../redux/actions';
import selectors from '../../../redux/selectors';

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

function Menu({ categoryList, setCategoryList }) {
    useEffect(() => {
        axiosInstance(BASE_URL + '/category/all')
            .then((response) => {
                const categories = response.data;
                setCategoryList(categories.map((category) => ({
                    ...category,
                    name: capitalize(category.name),
                    url: `/${category.slug}`,
                    onClick: () => {},
                })));
            })
    }, []);

    const menuList = [
        {
          name: 'Home',
          url: '/homepage',
          onClick: () => { },
        },
        ...categoryList,
      ];
    const handleClickMenuItem = (item) => item.onClick && item.onClick();

    if (!categoryList.length) return null
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

const mapStateToProps = (state) => ({
    categoryList: selectors.getCategoryList(state),
});

const mapDispatchToProps = (dispatch) => ({
    setCategoryList: (list) => dispatch(actions.setCategoryList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

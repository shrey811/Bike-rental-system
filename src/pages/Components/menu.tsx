import { DashboardOutlined, InfoCircleOutlined, LoginOutlined, LogoutOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Input, Menu, MenuProps, Row } from 'antd';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Services/Authprovider';

import Logo from "./Logo.png";



type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}



// const items: MenuProps['items'] = [


//     {
//         label: ' Home',
//         key: 'home',
//         icon: < PieChartOutlined />,
//     },
//     {
//         label: 'inventory',
//         key: 'inventory',
//         icon: < DashboardOutlined />,

//     },
//     {
//         label: 'About',
//         key: 'about',
//         icon: < InfoCircleOutlined />,
//     },



// ]

// const itemslogin: MenuProps['items'] = [
//     {
//         label: ' Login',
//         key: "login",
//         icon: <UserOutlined />,

//     },
//     {
//         label: ' Sign UP',
//         key: 'signup',
//         icon: < LoginOutlined />,

//     }

// ]




const MenuList = () => {
  const [current, setCurrent] = useState('home');

  const { isAuthenticated } = useAuth();
  const { Search } = Input;
  // const history = useHistory();

  // function handleMenuClick(router) {
  //     history.push(router);





  // const onClick: MenuProps['onClick'] = (e) => {
  //     // console.log('click ', e);
  //     setCurrent(e.key);
  //     navigate('/login')


  return (
    <div style={{
      position: "sticky",
      top: 0,
      zIndex: 1
    }}>
      <Row  >
        <Col  >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(247, 245, 245)" }} >
            <Col span={1}></Col>
            <Col span={2}  >


              <img src={Logo}
                width={"120rem"} height={"77rem"} />


            </Col>


            <Menu mode="horizontal" className='menu'>
              <Menu.Item key="home">
                <Link to="/dashboard"> < PieChartOutlined /> Home</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about"> < InfoCircleOutlined /> About</Link>
              </Menu.Item>
              <Menu.Item key="inventory">
                <Link to="/inventory"> < DashboardOutlined /> Inventory</Link>
              </Menu.Item>
              <Menu.Item key="Contact">
                <Link to="/contact-us"> < DashboardOutlined /> Contact</Link>
              </Menu.Item>

            </Menu>

            <Col >
              <Search style={{ width: "20rem", marginLeft: "15em" }} ></Search>
            </Col>
            <Menu className='menu'>
              {isAuthenticated ? (
                <>
                  <Menu.Item key="logout" style={{ float: 'right' }}>
                    <Link to="/"><LogoutOutlined /> Logout</Link>
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item key="login" style={{ float: 'right' }}>
                    <Link to="/">  <UserOutlined /> Login</Link>
                  </Menu.Item>
                  <Menu.Item key="register" style={{ float: 'right' }}>
                    <Link to="/register"> < LoginOutlined /> Sign In</Link>
                  </Menu.Item>
                </>
              )}
            </Menu>
          </div>



        </Col>
      </Row >


    </div >

  )

}

export default MenuList
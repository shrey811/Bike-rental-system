import { DashboardOutlined, EnvironmentOutlined, InfoCircleOutlined, LoginOutlined, MailOutlined, PhoneOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Menu, MenuProps, Row, Select } from 'antd';
import React, { useState } from 'react';
import { Link,  } from 'react-router-dom';
import { useAuth } from '../../Services/Authprovider';


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
    // const history = useHistory();

    // function handleMenuClick(router) {
    //     history.push(router);





    // const onClick: MenuProps['onClick'] = (e) => {
    //     // console.log('click ', e);
    //     setCurrent(e.key);
    //     navigate('/login')


    return (
        <div >
            <Row  >
                <Col span={24} >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" ,backgroundColor: "rgba(247, 245, 245)"  }} >
                        <Col span={2}></Col>
                        <Col span={2}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOu5OD_aXGOn6A-2WAsF5xTldronHXQzq9Q&usqp=CAU'
                                width={"100rem"} height={"77rem"} />
                        </Col>
                        <Col >
                            <Select className="user_search_box" showSearch ></Select>
                        </Col>

                        {/* <Menu className='menu'

                            mode="horizontal"  >
                            <Menu.Item >
                                <Link to="/"> < PieChartOutlined /> Home</Link>
                            </Menu.Item>
                            <Menu.Item >
                                <Link to="/about">  < InfoCircleOutlined /> About</Link>

                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/inventory">  < DashboardOutlined />  Inventory</Link>

                            </Menu.Item>

                        </Menu>
                            
                        <Menu className='menu'
                            mode="horizontal" >
                            <Menu.Item >
                                <Link to="/login"> <UserOutlined /> Login</Link>
                            </Menu.Item>
                            <Menu.Item >
                                <Link to="/register"> < LoginOutlined /> Sign UP</Link>

                            </Menu.Item>
                        </Menu> */}
                        <Menu  mode="horizontal" className='menu'>
      <Menu.Item key="home">
        <Link to="/dashboard"> < PieChartOutlined /> Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about"> < InfoCircleOutlined /> About</Link>
      </Menu.Item>
      <Menu.Item key="inventory">
        <Link to="/inventory"> < DashboardOutlined /> Inventory</Link>
      </Menu.Item>
      {isAuthenticated ? (
        <>
          <Menu.Item key="logout" style={{ float: 'right' }}>
            <Link to="/">Logout</Link>
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
import { DashboardOutlined, EnvironmentOutlined, InfoCircleOutlined, LoginOutlined, MailOutlined, PhoneOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Menu, MenuProps, Row, Select } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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



const items: MenuProps['items'] = [


    {
        label: ' Home',
        key: 'home',
        icon: < PieChartOutlined />,
    },
    {
        label: 'Inventory',
        key: 'Inventory',
        icon: < DashboardOutlined />,
    },
    {
        label: 'About',
        key: 'about',
        icon: < InfoCircleOutlined />,
    },



]

const itemslogin: MenuProps['items'] = [
    {
        label: ' Login',
        key: "login",
        icon: <UserOutlined />,

    },
    {
        label: ' Sign UP',
        key: 'signup',
        icon: < LoginOutlined />,

    }

]




const MenuList = () => {
    const [current, setCurrent] = useState('home');
    const navigate = useNavigate()

    const onClick: MenuProps['onClick'] = (e) => {
        // console.log('click ', e);
        setCurrent(e.key);
        navigate('/login')

    };
    return (
        <div >
            <Row  >
                <Col span={24} >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <Col span={2}></Col>
                        <Col span={2}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOu5OD_aXGOn6A-2WAsF5xTldronHXQzq9Q&usqp=CAU'
                                width={"100rem"} height={"77rem"} />
                        </Col>
                        <Col >
                            <Select className="user_search_box" showSearch ></Select>
                        </Col>

                        <Menu className='menu'

                            mode="horizontal" items={items} />

                        <Menu className='menu'
                            mode="horizontal" items={itemslogin} onClick={onClick} selectedKeys={[current]} />

                    </div>

                </Col>
            </Row >


        </div >

    )

}

export default MenuList
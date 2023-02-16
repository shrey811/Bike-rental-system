import { ContactsOutlined, DashboardOutlined, EnvironmentOutlined, InfoCircleOutlined, LoginOutlined, MailOutlined, PhoneOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Menu, MenuProps, Row } from 'antd';
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
                <Col span={24} style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }} >

                    <Row>
                        <Col span={3}></Col>
                        <Col span={3} >
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOu5OD_aXGOn6A-2WAsF5xTldronHXQzq9Q&usqp=CAU'
                                width={"100rem"} height={"120rem"} />
                        </Col>
                        <Col span={5} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <EnvironmentOutlined sizes={"0.5rem"} style={{ color: "rgba(46, 60, 187, 0.8)" }} /> <p> Nepal Kathmandu</p>
                        </Col>
                        <Col span={5} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <PhoneOutlined sizes={"0.5rem"} style={{ color: "rgba(46, 60, 187, 0.8)" }} /> <p>Contact Us 98444444444</p>
                        </Col>
                        <Col span={5} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <MailOutlined sizes={"0.5rem"} style={{ color: "rgba(46, 60, 187, 0.8)" }} /><p> Abc@gmail.com</p>
                        </Col>
                    </Row>



                </Col>


                <Col span={24} >
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }} >

                        <Menu style={{
                            height: "4rem", width: '100vw', display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#c8cfe2"
                        }}
                            mode="horizontal" items={items} />

                        <Menu style={{ width: '90vw', height: "4rem", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#c8cfe2" }}
                            mode="horizontal" items={itemslogin} onClick={onClick} selectedKeys={[current]} />
                    </div>
                </Col>
            </Row >


        </div >

    )

}

export default MenuList
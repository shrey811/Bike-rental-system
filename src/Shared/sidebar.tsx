import { DashboardOutlined, InfoCircleOutlined, LogoutOutlined, PhoneOutlined, PieChartOutlined } from '@ant-design/icons';
import { Divider, Layout, Menu, Row } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';

import { Link } from 'react-router-dom';



export const Sidebar = () => {


    const [collapsed, setCollapsed] = useState(false);


    return (
        <Layout hasSider >
            <Sider breakpoint="sm"
                collapsible
                collapsed={collapsed}
                collapsedWidth="0"
                onCollapse={(collapsed: boolean) => setCollapsed(collapsed)}
                // trigger={null}
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}

                style={{
                    backgroundColor: "white",
                    height: '100vh',
                    width: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,

                }}
            >
                <div className="logo" >
                    <Row>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOu5OD_aXGOn6A-2WAsF5xTldronHXQzq9Q&usqp=CAU'
                            width={"150rem"} height={"60rem"} style={{ marginLeft: "20px" }} />

                        <h3 style={{ marginLeft: "30px" }}>  BIKERS CHOICE</h3>
                    </Row>
                </div>


                <Menu mode="inline" style={{ marginTop: "10rem", backgroundColor: "white", color: "black", fontSize: "19px" }}>
                    <Menu.Item key="home">
                        <Link to="/dashboard">
                            {collapsed ? <PieChartOutlined style={{ fontSize: "19px" }} /> : null}
                            <span> <PieChartOutlined style={{ fontSize: "19px" }} /> Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/about">
                            {collapsed ? <InfoCircleOutlined style={{ fontSize: "19px" }} /> : null}
                            <span> <InfoCircleOutlined style={{ fontSize: "19px" }} /> About</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="inventory">
                        <Link to="/inventory">
                            {collapsed ? <DashboardOutlined style={{ fontSize: "19px" }} /> : null}
                            <span> <DashboardOutlined style={{ fontSize: "19px" }} /> Inventory</span>
                        </Link>

                    </Menu.Item>
                    <Menu.Item key="Contact">
                        <Link to="/contact">
                            {collapsed ? <DashboardOutlined style={{ fontSize: "19px" }} /> : null}
                            <span> <PhoneOutlined style={{ fontSize: "19px" }} /> Contact</span></Link>
                    </Menu.Item>
                    <Divider style={{ backgroundColor: "black", marginTop: "25rem" }} />
                    <Menu.Item key="logout" >
                        <Link to="/">
                            {collapsed ? <LogoutOutlined style={{ fontSize: "15px" }} /> : null}
                            <span style={{ fontSize: "15px" }}><LogoutOutlined style={{ fontSize: "15px" }} /> Logout</span>
                        </Link>

                    </Menu.Item>
                </Menu>
            </Sider>
        </Layout>
    )
}

import { DashboardOutlined, LogoutOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Divider, Layout, Menu, Row } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import AddEntry from './addentry';
import DemoLine from './dashboard';



import InventoryAdmin from './inentory';
import Rent from './rent';
import ReviewTable from './review';
import UserList from './userList';
import Logo from "../Logo/Logo.png";



const Admin: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [showAddEntry, setShowAddEntry] = useState(false);
    const [showInventory, setShowInventory] = useState(false);
    const [showUserList, setShowUserList] = useState(false);
    const [showRentList, setShowrentList] = useState(false);
    const [dashboard, setDashboard] = useState(true);
    const [showReview, setShowReview] = useState(false);
    const handleMenuItemClick = (menu: string) => {
        if (menu === "dashboard") {
            setShowAddEntry(false);
            setShowInventory(false);
            setShowUserList(false);
            setShowrentList(false);
            setDashboard(true);
            setShowReview(false);

        } else if (menu === "inventory") {
            setShowAddEntry(false);
            setShowInventory(true);
            setShowUserList(false);
            setShowrentList(false);
            setDashboard(false);
            setShowReview(false);

        } else if (menu === "userlist") {
            setShowAddEntry(false);
            setShowInventory(false);
            setShowUserList(true);
            setShowrentList(false);
            setDashboard(false);
            setShowReview(false);
        }

        else if (menu === "rentList") {
            setShowAddEntry(false);
            setShowInventory(false);
            setShowUserList(false);
            setShowrentList(true);
            setDashboard(false);
            setShowReview(false);
        }
        else if
            (menu === "addEntry") {
            setShowAddEntry(true);
            setShowInventory(false);
            setShowUserList(false);
            setShowrentList(false);
            setDashboard(false);
            setShowReview(false);
        }
        else if
            (menu === "showReview") {
            setShowAddEntry(false);
            setShowInventory(false);
            setShowUserList(false);
            setShowrentList(false);
            setDashboard(false);
            setShowReview(true);
        }
    };


    // default to 10 if pageSize is not specified


    return (
        <div style={{ backgroundColor: "#f1f1f1" }}>
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
                        backgroundColor: "black",
                        height: '100vh',
                        width: '20vw',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,

                    }}
                >
                    {/* <div className="logo" > */}
                    <Row>
                        <img src={Logo}
                            width={"150rem"} height={"130rem"} style={{ marginLeft: "20px" }} />

                        {/* <h3 style={{ marginLeft: "30px" }}>  BIKERS CHOICE</h3> */}
                    </Row>
                    {/* </div> */}

                    <Menu mode="inline" className="menuinventory" style={{ marginTop: "10rem", backgroundColor: "black", color: "white", fontSize: "19px" }}>
                        <Menu.Item key="addEntry" onClick={() => handleMenuItemClick("addEntry")}>
                            {collapsed ? <PhoneOutlined style={{ fontSize: "19px" }} /> : null}
                            <span> <PhoneOutlined style={{ fontSize: "19px" }} /> Add Entry</span>
                        </Menu.Item>
                        <Menu.Item key="inventory" onClick={() => handleMenuItemClick("inventory")}>
                            {collapsed ? <DashboardOutlined style={{ fontSize: "19px" }} /> : null}
                            <span> <DashboardOutlined style={{ fontSize: "19px" }} /> Inventory</span>
                        </Menu.Item>
                        <Menu.Item key="userlist" onClick={() => handleMenuItemClick("userlist")}>
                            {collapsed ? <UserOutlined style={{ fontSize: "19px" }} /> : null}
                            <span> <UserOutlined style={{ fontSize: "19px" }} /> Userlist</span>
                        </Menu.Item>
                        <Menu.Item key="dashboard" onClick={() => handleMenuItemClick("dashboard")}>
                            {collapsed ? <UserOutlined style={{ fontSize: "19px" }} /> : null}
                            <span> <UserOutlined style={{ fontSize: "19px" }} />Dashboard</span>
                        </Menu.Item>
                        <Menu.Item key="rentList" onClick={() => handleMenuItemClick("rentList")}>
                            {collapsed ? <UserOutlined style={{ fontSize: "19px" }} /> : null}
                            <span> <UserOutlined style={{ fontSize: "19px" }} /> Rent List</span>
                        </Menu.Item>
                        <Menu.Item key="showReview" onClick={() => handleMenuItemClick("showReview")}>
                            {collapsed ? <UserOutlined style={{ fontSize: "19px" }} /> : null}
                            <span> <UserOutlined style={{ fontSize: "19px" }} />Review</span>
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

            <Layout style={{
                marginLeft: collapsed ? 90 : 200,
                transition: 'margin 0.2s',
            }}  >
                <Header style={{ padding: 0, background: "rgb(230, 227, 227)", display: "flex", alignItems: "center", justifyContent: "START", marginBottom: "20px" }}></Header>

                <Content
                    style={{
                        // margin: collapsed ? '24px 16px' : '24px calc(15% + 10px)',
                        padding: 26,
                        minHeight: 280,
                        background: ' rgb(255, 255, 255)',
                        transition: 'margin 0.2s',
                        maxWidth: collapsed ? '90vw' : '100vw',
                    }}
                >
                    {showAddEntry && <AddEntry />}
                    {showInventory && <InventoryAdmin />}
                    {showUserList && <UserList />}
                    {showRentList && <Rent />}
                    {dashboard && <DemoLine />}
                    {showReview && <ReviewTable />}
                </Content>


            </Layout>
        </div>
    )
}

export default Admin





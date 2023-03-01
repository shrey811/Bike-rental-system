import { DashboardOutlined, InfoCircleOutlined, LoadingOutlined, LogoutOutlined, PhoneOutlined, PieChartOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Layout, Menu, message, Modal, QRCode, Radio, Row, Upload, UploadProps } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Bike } from '../models/Inventory';
import { API_URL } from '../Services/ajaxservice';
import { required } from './constants';




const CustomCard: React.FC<Bike> = ({ id, name, imageUrl, rating, kmRun, milage, numberPlate, brandId, description }) => {

    const [collapsed, setCollapsed] = useState(false);
    const [sFirstModalOpen, setIsFirstModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsFirstModalOpen(true);
    };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 20 },
    };




    return (

        <Layout>
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
            <Layout style={{
                marginLeft: collapsed ? 90 : 200,
                transition: 'margin 0.2s',
            }}  >

                <Header style={{ padding: 0, background: "rgb(230, 227, 227)", display: "flex", alignItems: "center", justifyContent: "START" }}>

                    <h2> INVENTORY </h2>

                </Header>


                <Content
                    style={{
                        // margin: collapsed ? '24px 16px' : '24px calc(15% + 10px)',
                        padding: 24,
                        minHeight: 280,
                        background: ' rgb(255, 255, 255)',
                        transition: 'margin 0.2s',
                        maxWidth: collapsed ? '90vw' : '100vw',
                    }}
                >
                    <Row justify="center">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div style={{ marginLeft: '1rem' }}>
                                {/* <img src={imageUrl} alt={name} style={{ width: '15rem' }} /> */}
                                <img src="https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code_335657-2370.jpg?w=2000"
                                    width={"100%"} height={"97%"} />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                            <h2 style={{ marginTop: "8rem" }}>{name}</h2>
                            <div className="moreinfoContainer">

                                <div className="moreinfo">

                                    <p><h4> Rating:</h4> {rating}</p>

                                    <Row gutter={16}>
                                        <Col span={6}  >
                                            <div ><p> <h4> KM Run:</h4>{kmRun}</p></div>
                                        </Col>
                                        <Col span={6} >
                                            <div ><p><h4> Milage:</h4> {milage}</p></div>
                                        </Col>
                                        <Col  >
                                            <div ><p><h4> NumberPlate:</h4>{numberPlate}</p></div>
                                        </Col>
                                        <Col  >
                                            <div ><p><h4> Description:</h4> {description}</p></div>
                                        </Col>
                                    </Row>





                                    <Button size="large" type='primary' onClick={handleOpenModal}>Rent Now</Button>


                                </div>

                            </div>
                        </Col>

                        {/* </div> */}
                    </Row >
                    {/* 
                    <Button onClick={() => setIsFirstModalOpen(true)}>Open Modal</Button> */}


                </Content>
            </Layout >
        </Layout >
    );
};

export { CustomCard };

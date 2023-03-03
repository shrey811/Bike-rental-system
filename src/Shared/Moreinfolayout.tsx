import { DashboardOutlined, InfoCircleOutlined, LoadingOutlined, LogoutOutlined, PhoneOutlined, PieChartOutlined, PlusOutlined, RollbackOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Layout, Menu, message, Modal, QRCode, Radio, Rate, Row, Upload, UploadProps } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    const [value, setValue] = useState(rating);
    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    };


    return (

        <Layout >
            <Layout hasSider >
                <Sider
                    breakpoint="sm"
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
                            <Link to="/contact-us">
                                {collapsed ? <DashboardOutlined style={{ fontSize: "19px" }} /> : null}
                                <span> <PhoneOutlined style={{ fontSize: "19px" }} /> Contact</span></Link>
                        </Menu.Item>

                        <Button style={{ fontSize: "19px", marginTop: "24rem" }} type="text" onClick={handleBackClick}> <RollbackOutlined style={{ fontSize: "19px" }} /> Back</Button>
                        <Divider style={{ backgroundColor: "black", marginTop: "30px" }} />
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

                <Header style={{ padding: 0, background: "rgb(230, 227, 227)", display: "flex", alignItems: "center", justifyContent: "center" }}>

                    <h6 style={{
                        fontSize: "3rem"
                    }}>{name}</h6>

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
                        {/* <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                            <h6 style={{ marginTop: "8rem" }}>{name}</h6>
                        </Col> */}
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div style={{ marginLeft: '1rem', marginTop: "12rem" }}>
                                {/* <img src={imageUrl} alt={name} style={{ width: '15rem' }} /> */}
                                <img src="https://www.pngarts.com/files/4/Motorcycle-Free-PNG-Image.png"
                                    width={"97%"} height={"97%"} />
                            </div>
                            <div style={{ textAlign: 'center', display: "flex", alignItems: "center", justifyContent: "center", gap: "30px" }}>
                                <Button className="filled_edit_button" onClick={handleOpenModal}>Rent Now</Button>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} >

                            <Form


                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Form.Item>

                                </Form.Item>
                                <Form.Item>
                                    <Rate
                                        style={{ display: 'flex', alignItems: "center", justifyContent: "center", gap: "30px" }}

                                        disabled
                                        defaultValue={2}
                                        value={value}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <div style={{ textAlign: 'right', display: "flex", gap: "30px" }}>
                                        <h6> Rating:</h6>
                                        <p className='writing'> {rating}</p>


                                    </div>
                                </Form.Item>

                                <Form.Item>
                                    <div style={{ textAlign: 'right', display: "flex", gap: "30px" }}>

                                        <h6> KM Run:</h6>
                                        <p className='writing'>{kmRun}</p>
                                    </div>
                                </Form.Item>


                                <Form.Item>
                                    <div style={{ textAlign: 'right', display: "flex", gap: "30px" }} >
                                        <h6> Milage:</h6>
                                        <p className='writing'> {milage}</p>
                                    </div>
                                </Form.Item>


                                <Form.Item>
                                    <div style={{ textAlign: 'right', display: "flex", gap: "30px" }} >
                                        <h6> NumberPlate:</h6>
                                        <p className='writing'>  {numberPlate}</p>
                                    </div>
                                </Form.Item>


                                <Form.Item>
                                    <div style={{ display: "flex", gap: "30px" }}>
                                        <h6> Description:</h6>
                                        <p className='writing'> {description}</p>
                                    </div>
                                </Form.Item>
                                <Form.Item>

                                </Form.Item>

                            </Form>







                        </Col>


                    </Row >



                </Content>
                <Footer style={{ textAlign: 'center' }}>Bikers Choice Since 2013 @ABC ABC</Footer>
            </Layout >
        </Layout >
    );
};

export { CustomCard };

import {
    DashboardOutlined,
    InfoCircleOutlined,
    LoadingOutlined,
    LogoutOutlined,
    PhoneOutlined,
    PieChartOutlined,
    PlusOutlined,
    RollbackOutlined,
} from "@ant-design/icons";
import {
    Button,
    Col,
    Divider,
    Form,
    Layout,
    Menu,
    message,
    Modal,
    QRCode,
    Radio,
    Rate,
    Row,
    Upload,
    UploadProps,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";
import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Bike } from "../models/Inventory";
import { API_URL } from "../Services/ajaxservice";
import { required } from "./constants";
import { MakeBgWhite } from "./ContentLayout";
import Logo from "../pages/Logo/Logo.png";

const CustomCard: React.FC<Bike> = ({
    id,
    name,
    imageUrl,
    rating,
    kmRun,
    milage,
    numberPlate,
    brandId,
    price,
    description,
}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [sFirstModalOpen, setIsFirstModalOpen] = useState(false);

    // const handleOpenModal = () => {
    //     setIsFirstModalOpen(true);
    // };
    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    const [value, setValue] = useState(rating);
    const history = useHistory();
    const [loading, setLoading] = useState<boolean>(false);
    const handleBackClick = () => {
        history.goBack();
    };
    const handleOpenModal = () => {
        setLoading(true);
        history.push(`/more-info/${id}?modal=open`);
        console.log("clicked");
    }

    return (
        <Layout style={{ background: "black", color: "white", height: "100vh" }}>
            <Layout hasSider style={{ background: "black", color: "white" }}>
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
                        backgroundColor: "black",
                        color: "white",
                        height: "100vh",
                        width: "100vh",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                >
                    <div  >
                        <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                            <img src={Logo}
                                width={"50%"} height={"80%"} />

                            {/* <h3 style={{backgroundColor: "black", color: "white", marginLeft: "30px" }}>  BIKERS CHOICE</h3> */}
                        </Row>
                    </div>

                    <Menu
                        mode="inline"
                        className="menuinventory"
                        style={{
                            marginTop: "10rem",
                            backgroundColor: "black",
                            color: "white",
                            fontSize: "19px",
                        }}
                    >
                        <Menu.Item key="home">
                            <Link to="/dashboard">
                                {collapsed ? (
                                    <PieChartOutlined style={{ fontSize: "19px" }} />
                                ) : null}
                                <span>
                                    {" "}
                                    <PieChartOutlined style={{ fontSize: "19px" }} /> Home
                                </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">
                                {collapsed ? (
                                    <InfoCircleOutlined style={{ fontSize: "19px" }} />
                                ) : null}
                                <span>
                                    {" "}
                                    <InfoCircleOutlined style={{ fontSize: "19px" }} /> About
                                </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="inventory">
                            <Link to="/inventory">
                                {collapsed ? (
                                    <DashboardOutlined style={{ fontSize: "19px" }} />
                                ) : null}
                                <span>
                                    {" "}
                                    <DashboardOutlined style={{ fontSize: "19px" }} /> Inventory
                                </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="Contact">
                            <Link to="/contact-us">
                                {collapsed ? (
                                    <DashboardOutlined style={{ fontSize: "19px" }} />
                                ) : null}
                                <span>
                                    {" "}
                                    <PhoneOutlined style={{ fontSize: "19px" }} /> Contact
                                </span>
                            </Link>
                        </Menu.Item>

                        <Button
                            style={{ fontSize: "19px", marginTop: "24rem" }}
                            type="text"
                            onClick={handleBackClick}
                        >
                            {" "}
                            <RollbackOutlined style={{ fontSize: "19px" }} /> Back
                        </Button>
                        <Divider style={{ backgroundColor: "black", marginTop: "30px" }} />
                        <Menu.Item key="logout">
                            <Link to="/">
                                {collapsed ? (
                                    <LogoutOutlined style={{ fontSize: "15px" }} />
                                ) : null}
                                <span style={{ fontSize: "15px" }}>
                                    <LogoutOutlined style={{ fontSize: "15px" }} /> Logout
                                </span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
            <Layout
                style={{
                    background: "black",
                    color: "white",
                    marginLeft: collapsed ? 90 : 200,
                    transition: "margin 0.2s",
                }}
            >
                {/* <Header style={{ padding: 0, background: "rgb(230, 227, 227)", display: "flex", alignItems: "center", justifyContent: "center" }}>

                   

                </Header> */}

                <Content
                    style={{
                        // margin: collapsed ? '24px 16px' : '24px calc(15% + 10px)',
                        // : 24,
                        minHeight: 280,

                        background: "black",
                        // color:"red",
                        transition: "margin 0.2s",
                        maxWidth: collapsed ? "90vw" : "100vw",
                    }}
                >
                    <Row> </Row>
                    <Row> </Row>
                    {/* <MakeBgWhite> */}
                    <Row
                        style={{
                            backgroundImage: "linear-gradient(to right, #323131, #2f2d2e, #2b2a2a, #282627, #242324, #202020, #1c1c1d, #191919, #151515, #0f0f0f, #080808, #000000)",
                            padding: "2rem",
                            borderRadius: "40px ",
                        }}

                    >
                        {/* <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                            <h6 style={{ marginTop: "8rem" }}>{name}</h6>
                        </Col> */}

                        {/* </Row>

                    <Row> */}
                        <Col xs={24} sm={24} md={12} lg={12} xl={10}
                        // style={{ backgroundColor: "red" }}
                        >
                            <h6
                                style={{
                                    fontSize: "3rem",
                                    fontFamily: "Merriweather",
                                    color: "white",
                                    alignContent: 'center',
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            >
                                {name}
                            </h6>
                            <Form
                                style={{ color: "white" }}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Form.Item></Form.Item>
                                <Form.Item>
                                    <Rate
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "30px",
                                        }}
                                        disabled
                                        defaultValue={2}
                                        value={value}
                                    />
                                </Form.Item>
                                {/* <Form.Item>
                                    <div
                                        style={{
                                            textAlign: "right",
                                            display: "flex",
                                            gap: "30px",


                                            color: "white"

                                        }}
                                    >
                                        <h6 > Rating:</h6>
                                        <p className="writing"> {rating}</p>
                                    </div>
                                </Form.Item> */}
                                <Form.Item>
                                    <div style={{ display: "flex", gap: "30px", color: "white" }}>
                                        <h6 style={{
                                            fontSize: "1.2rem",

                                        }}> Description:</h6>
                                        <p style={{
                                            fontSize: "1rem",

                                        }} className="writing"> {description}</p>
                                    </div>
                                </Form.Item>
                            </Form>
                            <Row gutter={16}>
                                <Col xl={12}>
                                    <div
                                        style={{
                                            // textAlign: "right",
                                            display: "flex",
                                            gap: "30px",
                                            color: "white"
                                        }}
                                    >
                                        <h6 style={{
                                            fontSize: "1.2rem",

                                        }}> KM Run:</h6>
                                        <p style={{
                                            fontSize: "1rem",

                                        }} className="writing">{kmRun}</p>
                                    </div>
                                </Col>

                                <Col xl={12}>
                                    <div
                                        style={{
                                            // textAlign: "right",
                                            display: "flex",
                                            gap: "30px",
                                            color: "white"
                                        }}
                                    >
                                        <h6 style={{
                                            fontSize: "1.2rem",

                                        }}> Milage:</h6>
                                        <p style={{
                                            fontSize: "1rem",

                                        }} className="writing"> {milage}  kmpl</p>
                                    </div>
                                </Col>
                            </Row>
                            <br>
                            </br>
                            <Row>
                                <Col xl={12}>
                                    <div
                                        style={{
                                            // textAlign: "right",
                                            display: "flex",
                                            gap: "30px",
                                            color: "white"
                                        }}
                                    >
                                        <h6 style={{
                                            fontSize: "1.2rem",

                                        }}> NumberPlate:</h6>
                                        <p style={{
                                            fontSize: "1rem",

                                        }} className="writing"> {numberPlate}</p>
                                    </div>
                                </Col>

                                <Col xl={12}>
                                    <div style={{ display: "flex", gap: "30px", color: "white" }}>
                                        <h6 style={{
                                            fontSize: "1.2rem",

                                        }}> Price:</h6>
                                        <p style={{
                                            fontSize: "1rem",

                                        }} className="writing"> {price}  NRS/Hour</p>
                                    </div>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>

                                <Col xl={24}
                                    style={{
                                        alignContent: 'center',
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>
                                    <Button
                                        size="large"
                                        style={{
                                            backgroundColor: "darkcyan",
                                            color: "white",

                                        }}
                                        onClick={handleOpenModal}

                                        loading={loading}
                                    >
                                        Rent now
                                    </Button>

                                </Col>
                            </Row>
                        </Col>
                        <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div style={{ marginLeft: "1rem" }}>
                                {/* <img src={imageUrl} alt={name} style={{ width: '15rem' }} /> */}
                                <img
                                    src={imageUrl}
                                    style={{ borderRadius: "30px", fillOpacity: "0.5" }}
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </div>
                        </Col>
                    </Row>
                    {/* </MakeBgWhite> */}
                </Content>
            </Layout>
        </Layout>
    );
};

export { CustomCard };

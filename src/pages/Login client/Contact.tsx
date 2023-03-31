import { MailOutlined, PhoneOutlined, PushpinOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Footer } from 'antd/es/layout/layout'
import React from 'react'
import { useHistory } from 'react-router-dom'
import ContentLayout, { Layout } from '../../Shared/ContentLayout'
import MenuList from '../Components/menu'

const Contact = () => {

    const [form] = Form.useForm();
    const history = useHistory();
    function handleNavigate() {
        history.push('/inventory');
    }
    return (
        <div style={{}}>
            <MenuList />
            <ContentLayout pageTitle={''} >

                <Layout

                    imageUrl="https://etatsug.com/contact.svg"
                    header="Contact Us Now"
                    description="At Biker Choice, we understand the importance of keeping your motorcycle in top condition for optimal performance and safety. That's why we offer a range of repair and maintenance services to help you maintain your ride. From routine oil changes and tire replacements to more extensive engine repairs and customization, our team of experienced mechanics is equipped to handle it all. We use high-quality parts and equipment to ensure your bike stays running smoothly and reliably for years to come. Whether you're a seasoned rider or just starting out, trust Biker Choice for all your motorcycle repair and maintenance needs."
                    imageRight={true}

                >

                    <Button onClick={handleNavigate} style={{ boxShadow: "rgb(0 0 0 / 40%) 0px 3px 8px ", }} size="large" > GET STARTED NOW </Button>

                </Layout>

                <Row>
                    <Col >
                        <div className='content'>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "20px", marginTop: "30px", marginBottom: "30px" }}>

                            </div>
                        </div>
                    </Col>
                    <Col xl={24}>
                        <Layout

                            imageUrl="https://etatsug.com/contact.svg"
                            header="For Futher Queries "
                            description=""
                            // If you have any further queries, please feel free to contact us at the following 
                            // 01-5230380 / 9847337476 / 9811308122
                            //  or  Bikerchoice@gmail.com . We will be more than happy to assist you. For email queries, we aim to reply within 24 hours
                            imageRight={false}

                        >

                            <Footer className="footer" style={{ backgroundColor: "black", color: "white" }}>
                                <h3 style={{ color: "white" }}>Bikers Choice Since 2013 @ABC</h3>

                                <br></br>
                                <br></br>
                                <h5> <PushpinOutlined />   Address:
                                </h5>
                                <br></br>
                                <p style={{ fontSize: "17px" }}> Lalitpur - 14, Chapagau</p>
                                <br></br>
                                <br></br>
                                <h5> <MailOutlined />   Email:
                                </h5>
                                <br></br>
                                <p style={{ fontSize: "17px" }}> Bikerchoice@gmail.com</p>
                                <br></br>
                                <h5> <PhoneOutlined />   Contact:
                                </h5>
                                <br></br>
                                <p style={{ fontSize: "17px" }}> 01-5230380 / 9847337476 / 9811308122 </p>

                                {/* <Row>
                                    <Col >
                                        <h5> <PushpinOutlined />   Address:
                                        </h5>
                                        <br></br>
                                        <p style={{ fontSize: "17px" }}> Lalitpur - 14, Chapagau</p>
                                    </Col>
                                    <Col>
                                        <h5> <MailOutlined />   Email:
                                        </h5>
                                        <br></br>
                                        <p style={{ fontSize: "17px" }}> Bikerchoice@gmail.com</p>

                                    </Col>
                                    <Col >
                                        <h5> <PhoneOutlined />   Contact:
                                        </h5>
                                        <br></br>
                                        <p style={{ fontSize: "17px" }}> 01-5230380 / 9847337476 / 9811308122 </p>
                                    </Col>
                                </Row> */}

                            </Footer>

                        </Layout>
                        {/* <div className="contactContainer">
                            <div className="contact"> */}
                        {/* <h1>Get in touch with us
                                </h1> */}
                        {/* <p style={{ fontSize: "16px" }}> Our team is here to help you!</p> */}
                        {/* <Form
                                    name="registerForm"
                                    form={form}
                                    layout="vertical"
                                    style={{ padding: "30px" }}
                                //    labelCol={{ span: 8 }}
                                // wrapperCol={{ span: 20 }}
                                // onFinish={handleSubmit}
                                >
                                    <h2>Get in touch with us
                                    </h2>
                                    <p style={{ fontSize: "16px" }}> Our team is here to help you!</p>
                                    <br></br>
                                    <br></br>
                                    <Row gutter={10}>

                                        <Col xl={12}>
                                            <Form.Item label="Name">
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={12} >
                                            <Form.Item label="Email">
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={24}>
                                            <Form.Item label="Message">
                                                <TextArea rows={5} cols={80} />
                                            </Form.Item>
                                        </Col>
                                        <Button htmlType='submit' >Submit </Button>
                                    </Row>

                                </Form> */}
                        {/* </div>
                </div>*/}
                    </Col>

                </Row>


            </ContentLayout >
        </div >
    )
}

export default Contact
import { UserOutlined } from '@ant-design/icons'
import { Divider, Form, message } from 'antd'
import Button from 'antd/es/button'
import Checkbox from 'antd/es/checkbox'
import Input from 'antd/es/input'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthService } from '../../Services/authServices'

import Logo from "../Logo/Logo.png";
const Login = () => {
    const history = useHistory();
    const [loading, setLoading] = useState<boolean>(false);
    const authService = new AuthService();
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleSubmit = async (values: any) => {
        setLoading(true);
        try {

            // check if the email and password are "admin" and "admin"
            if (values.email === "admin" && values.password === "admin") {
                history.push('/admin');
                return;
            }
            const isLoggedIn = await authService.login(values);
            if (isLoggedIn) {
                history.push('/dashboard');
            } else {
                message.error('Login unsucessfull')
            }
        } catch (error) {
            message.error('Login unsucessfull')
        } finally {
            setLoading(false);
        }
    };

    return (
        <>

            <div className="loginContainer">
                <div className="loginCard">
                    {/* <Row gutter={10} justify="center">
                <Col span={8} className="img"> */}
                    <div className='first-child'>
                        <img src='https://img.freepik.com/free-vector/skeleton-rigind-motorbike_1415-115.jpg?w=826&t=st=1672655650~exp=1672656250~hmac=82ad28b19fffc37fd8c1341aaafa1a43618cbb1b162ca66686e010a1b36a1b66'
                            width={"100%"} height={"100%"} />
                        {/* </Col>

                <Col span={8} > */}
                    </div>
                    <div className='last-child'>
                        <div style={{ display: "flex", justifyContent: "cener", alignItems: "center", marginBottom: "1rem" }}>
                            <img src={Logo}
                                width={"100rem"} height={"85rem"} />


                        </div>
                        <Form
                            name="Login"
                            className="login-form"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            initialValues={{ remember: true }}
                            onFinish={handleSubmit}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                    // {
                                    //     pattern: emailRegex,
                                    //     message: 'Please input a valid email address!',
                                    // },
                                ]}
                            >
                                <Input size='middle' name="email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                            </Form.Item>
                            <Form.Item

                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}

                            >
                                <Input.Password

                                    size='middle'
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                {/* <Form.Item valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item> */}

                                <a className="login-form-forgot" href="/forget-password">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <div >
                                    <Button style={{ width: "15rem", backgroundColor: "darkcyan" }} size='middle' type="primary" htmlType="submit" loading={loading}>
                                        Log in
                                    </Button>

                                </div>
                            </Form.Item>
                            <Divider style={{ fontWeight: "10px" }} />
                            <div style={{ fontSize: "15px" }}>
                                OR  <a href="/register">Register Now!</a>
                            </div>
                        </Form>
                        {/* <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 20 }}
                                initialValues={{ remember: true }}
                                onFinish={FormSubmitButton}
                                autoComplete="off"
                            >
                                <img src="images/Capture.PNG" width="100px" height="50px" alt="logo" />
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password name='password' />
                                </Form.Item>

                                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                    <Checkbox> Remember me</Checkbox>
                                </Form.Item >
                                <Form.Item >
                                    <Button type="link" block>
                                        Forgot Password ?
                                    </Button>
                                </Form.Item>

                                <Form.Item >
                                    <Space direction="vertical" style={{ width: '100%' }}>
                                        <Button type="primary" block >

                                            <LoginOutlined />
                                            Submit
                                        </Button>
                                    </Space>
                                </Form.Item>
                                <Divider>Register Now </Divider>
                                <Form.Item >
                                    <p>havent register register now?  </p><Button type="link" >   Register now </Button>
                                </Form.Item>
                            </Form >
                            {/* </Col> */}
                        {/* </Row > */}
                    </div>
                </div >
            </div >
        </>
    );
};
export default Login
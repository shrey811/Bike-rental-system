import { UserOutlined } from '@ant-design/icons'
import { Form } from 'antd'
import Button from 'antd/es/button'
import Checkbox from 'antd/es/checkbox'
import Input from 'antd/es/input'
import axios from 'axios'
import { useState } from 'react'
import { LoginData } from '../../models/user'
import MenuList from '../Components/menu'

import { AuthService } from '../../Services/authServices'


const Login = () => {
    const authService = new AuthService();
    const [token, setToken] = useState<string>("");

    const handleFormSubmit = async (values: LoginData) => {
        try {
            const response = await axios.post("http://localhost:5279/api/user/login", values);
            setToken(response.data.token);
            // do something with the token
        } catch (error) {
            console.error(error);
            // handle error
        }
    };
    if (token) {
        return (
            <MenuList />
        )
    }




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
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOu5OD_aXGOn6A-2WAsF5xTldronHXQzq9Q&usqp=CAU" width="100px" height="50px" alt="logo" />
                            BikersChoice

                        </div>
                        <Form
                            name="Login"
                            className="login-form"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 20 }}
                            initialValues={{ remember: true }}
                            onFinish={handleFormSubmit}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input name="email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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


                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button size='large' type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="/register">register now!</a>
                            </Form.Item>
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
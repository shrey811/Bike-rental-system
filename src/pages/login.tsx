import { LoginOutlined } from '@ant-design/icons'
import { Form, Space } from 'antd'
import Button from 'antd/es/button'
import Checkbox from 'antd/es/checkbox'
import Divider from 'antd/es/divider'
import Input from 'antd/es/input'
import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../Services/Authprovider'
import axios from '../Services/axios'


const LOGIN_URL = '/auth';

export const Login = () => {

    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    // const handleSubmit = async (e: { preventDefault: () => void }) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post(LOGIN_URL,
    //             JSON.stringify({ user, pwd }),
    //             {
    //                 headers: { 'Content-Type': 'application/json' },
    //                 withCredentials: true
    //             }
    //         );
    //         console.log(JSON.stringify(response?.data));
    //         //console.log(JSON.stringify(response));
    //         const accessToken = response?.data?.accessToken;
    //         const roles = response?.data?.roles;
    //         // setAuth({ user, pwd, roles, accessToken });
    //         setUser('');
    //         setPwd('');
    //         setSuccess(true);
    //     } catch (err) {
    //         // if (!err?.response) {
    //         //     setErrMsg('No Server Response');
    //         // } else if (err.response?.status === 400) {
    //         //     setErrMsg('Missing Username or Password');
    //         // } else if (err.response?.status === 401) {
    //         //     setErrMsg('Unauthorized');
    //         // } else {
    //         //     setErrMsg('Login Failed');
    //         // }
    //         // errRef.current.focus();
    //     }
    // }

    const navigate = useNavigate();
    return (
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
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 20 }}
                        initialValues={{ remember: true }}
                        // onFinish={handleSubmit}
                        autoComplete="off"
                    >
                        <img src="images/Capture.PNG" width="100px" height="50px" alt="logo" />
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input onChange={(e) => setUser(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password onChange={(e) => setPwd(e.target.value)} />
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
                                <Button type="primary" block>

                                    <LoginOutlined />
                                    Submit
                                </Button>
                            </Space>
                        </Form.Item>
                        <Divider>Register Now </Divider>
                        <Form.Item >
                            <p>havent register register now?  </p><Button type="link" onClick={() => navigate("/register")}>   Register now </Button>
                        </Form.Item>
                    </Form >
                    {/* </Col>
            </Row > */}
                </div>
            </div >
        </div >
    );
};



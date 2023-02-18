import { LockOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Space } from 'antd'
import Button from 'antd/es/button'
import Checkbox from 'antd/es/checkbox'
import Divider from 'antd/es/divider'
import Input from 'antd/es/input'
import { Component } from 'react'
import { Navigate } from 'react-router-dom'
import * as Yup from "yup"
import AuthService from '../../Services/authServices'
import { FormSubmitButton } from '../../Shared/Commoncomponent'
import MenuList from '../Components/menu'


type Props = {};

type State = {
    redirect: string | null,
    username: string,
    password: string,
    loading: boolean,
    message: string
};

//     const LOGIN_URL = '/auth';



// // const { setAuth } = useContext(AuthContext);
// const userRef = useRef();
// const errRef = useRef();

// const [user, setUser] = useState('');
// const [pwd, setPwd] = useState('');
// const [errMsg, setErrMsg] = useState('');
// const [success, setSuccess] = useState(false);


const Login = () => {


    // constructor(props: Props) {
    //     super(props);
    //     this.handleLogin = this.handleLogin.bind(this);

    //     this.state = {
    //         redirect: null,
    //         username: "",
    //         password: "",
    //         loading: false,
    //         message: ""
    //     };
    // }

    // componentDidMount() {
    //     const currentUser = AuthService.getCurrentUser();

    //     if (currentUser) {
    //         this.setState({ redirect: "/profile" });
    //     };
    // }

    // componentWillUnmount() {
    //     window.location.reload();
    // }

    // validationSchema() {
    //     return Yup.object().shape({
    //         username: Yup.string().required("This field is required!"),
    //         password: Yup.string().required("This field is required!"),
    //     });
    // }

    // handleLogin(formValue: { username: string; password: string }) {
    //     const { username, password } = formValue;

    //     this.setState({
    //         message: "",
    //         loading: true
    //     });


    //     AuthService.login(username, password).then(
    //         () => {
    //             this.setState({
    //                 redirect: "/profile"
    //             });
    //         },
    //         error => {
    //             const resMessage =
    //                 (error.response &&
    //                     error.response.data &&
    //                     error.response.data.message) ||
    //                 error.message ||
    //                 error.toString();

    //             this.setState({
    //                 loading: false,
    //                 message: resMessage
    //             });
    //         }
    //     );
    // }

    // render() {
    //     if (this.state.redirect) {
    //         return <Navigate to={this.state.redirect} />
    //     }

    //     const { loading, message } = this.state;

    //     const initialValues = {
    //         username: "",
    //         password: "",
    //     };

    // const onFinish = values => {
    //     console.log('Received values of form: ', values);
    // };

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
                            initialValues={{
                                remember: true,
                            }}

                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
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
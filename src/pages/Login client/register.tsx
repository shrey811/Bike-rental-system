
import { Button, Col, Form, Input, InputNumber, message, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { registration } from '../../models/registration';
import { postData } from '../../Services/ajaxservice';
import { FORMROWGUTTER } from '../../Shared/constants';


const Register = () => {
    const [form] = Form.useForm();
    const history = useHistory();

    const validateConfirmPassword = async (_: any, value: string) => {
        const { password } = form.getFieldsValue();
        if (value !== password) {
            throw new Error('Passwords do not match');
        }
    };
    const handlenavigate = () => {
        history.push('/');
    }

    const handleSubmit = async (values: registration) => {
        try {
            await postData('user/register', values);
            message.success('Registration successful!');
            form.resetFields();
            history.push('/');
        } catch (error) {
            message.error('Registration failed');
        }
    };

    return (
        <>
            <div className="registerContainer">

                <div className="register">

                    <Form
                        name="registerForm"
                        form={form}
                        layout="vertical"
                        style={{ marginTop: '2rem' }}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        onFinish={handleSubmit}
                    >
                        <h4 style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>Register Now</h4>
                        <Row gutter={FORMROWGUTTER}>
                            <Col span={11}>
                                <Form.Item
                                    label="First Name"
                                    name="firstName"
                                    rules={[{ required: true, message: 'Please input your first name!' }]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <Form.Item
                                    label="Last Name"
                                    name="lastName"
                                    rules={[{ required: true, message: 'Please input your last name!' }]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            </Col>

                            <Col span={11}>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: 'Please input your email!' },
                                        { type: 'email', message: 'Please input a valid email!' },
                                    ]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <Form.Item
                                    label="Contactnumber"
                                    name="phone"
                                    rules={[
                                        { required: true, message: 'Please input your contact number!' }

                                    ]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            </Col>


                            <Col span={11}>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        { required: true, message: 'Please input your password!' },
                                        { min: 8, message: 'Password should be at least 8 characters!' },
                                    ]}
                                >
                                    <Input.Password size="large" />
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <Form.Item
                                    label="Confirm Password"

                                    rules={[
                                        { required: true, message: 'Please confirm your password!' },
                                        { validator: validateConfirmPassword },
                                    ]}
                                >
                                    <Input.Password size="large" />
                                </Form.Item>
                            </Col>

                            <Col span={20}>
                                <Form.Item>
                                    <Button.Group>
                                        <Button size="large" type="primary" htmlType="submit">
                                            Register
                                        </Button>
                                        <Button size="large" type="dashed" onClick={handlenavigate}>
                                            Go Back
                                        </Button>
                                    </Button.Group>
                                </Form.Item>
                                <Form.Item>

                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </>
    );
};
export default Register;
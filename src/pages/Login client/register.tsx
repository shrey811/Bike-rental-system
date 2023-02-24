
import { Button, Col, Form, Input, InputNumber, message, Row } from 'antd';
import { registration } from '../../models/registration';
import { postData } from '../../Services/ajaxservice';
import { FORMROWGUTTER } from '../../Shared/constants';


const Register = () => {
    const [form] = Form.useForm();

    const validateConfirmPassword = async (_: any, value: string) => {
        const { password } = form.getFieldsValue();
        if (value !== password) {
            throw new Error('Passwords do not match');
        }
    };

    const handleSubmit = async (values: registration) => {
        try {
            await postData('user/register', values);
            message.success('Registration successful!');
            form.resetFields();
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
                        onFinish={handleSubmit}
                    >
                        <Row gutter={FORMROWGUTTER}>
                            <Col span={12}>
                                <Form.Item
                                    label="First Name"
                                    name="firstName"
                                    rules={[{ required: true, message: 'Please input your first name!' }]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Last Name"
                                    name="lastName"
                                    rules={[{ required: true, message: 'Please input your last name!' }]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
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
                            <Col span={12}>
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


                            <Col span={12}>
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
                            <Col span={12}>
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

                            <Col span={24}>
                                <Form.Item>
                                    <Button size="large" type="primary" htmlType="submit">
                                        Register
                                    </Button>
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
import { Form } from 'antd'
import Button from 'antd/es/button'
import Checkbox from 'antd/es/checkbox'
import Divider from 'antd/es/divider'
import FormItem from 'antd/es/form/FormItem'
import { Col } from 'antd/es/grid'
import Input from 'antd/es/input'

export const Dashboard = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (


        <Form
            name="basic"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 10 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
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
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Col>
                    <Checkbox> Remember me</Checkbox>
                </Col>
                <Col>
                    <Button type="link" block>
                        Forgot Password ?
                    </Button>
                </Col>
            </Form.Item >

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            <Divider />
            <FormItem wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary">
                    Primary
                </Button>
            </FormItem>
        </Form >

    );
};




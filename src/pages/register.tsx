
import { CloseCircleFilled, InboxOutlined, LoginOutlined, SaveFilled } from '@ant-design/icons';
import { Button, Space, UploadProps } from 'antd';
import { Col, Form, Input, InputNumber, message, Row, Tabs, Upload } from 'antd';
import { FORMROWGUTTER } from '../Shared/constants';

const { Dragger } = Upload;
interface formSubmitButtonProps {
    submitLoading?: boolean;
    cancleLoading?: boolean;
    onClickSubmit?: () => void;
    onClickCancle?: () => void;
    isNextButton?: boolean

}
export const FormSubmitButton = (props: formSubmitButtonProps) => {


    return (
        <Space>
            <Button
                icon={<SaveFilled />}
                type="primary"
                htmlType='submit'
                loading={props.submitLoading}
                onClick={props.onClickSubmit}
            >
                {props.isNextButton ? ("Next") : ("Save")}
            </Button>

            <Button
                type="default"
                icon={<CloseCircleFilled />}
                onClick={props.onClickCancle}
                disabled={props.cancleLoading}
            >
                {"Cancel"}
            </Button>
        </Space>
    );
};
const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};


const Register = () => {

    const AccountInfoForm = (
        <>

            <Form
                name="basic"

                initialValues={{ remember: true }}

                autoComplete="off"
            >
                <Row gutter={FORMROWGUTTER} >
                    <Col style={{ width: '24vw', marginBottom: '2.5rem' }} >
                        < Form.Item
                            label="First Name"
                            name="firstName"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                    <Col style={{ width: '24vw' }}>
                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Col>

                    <Col style={{ width: '24vw', marginBottom: '2.5rem' }} >
                        <Form.Item
                            label="Email"
                            name="emai;"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                    <Col style={{ width: '24vw' }}>
                        <Form.Item
                            label="Contact No"
                            name="contact"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <InputNumber min={10} max={10} size="large" style={{ width: '22.5vw' }} />
                        </Form.Item>
                    </Col>
                    <Col style={{ width: '24vw' }}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password size="large" />
                        </Form.Item>
                    </Col>

                    <Col style={{ width: '24vw', marginBottom: '2.5rem' }}>
                        <Form.Item
                            label="Confirm Password"
                            name="confirmPassword"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password size="large" />
                        </Form.Item>
                    </Col>


                </Row>
            </Form >


        </>
    )
    const Attachments = (
        <>
            <Row gutter={FORMROWGUTTER}>
                <Col style={{ width: '24vw' }}>
                    < Form.Item
                        label="License"
                        name="license"

                    >

                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>

                        </Dragger>
                    </Form.Item>
                </Col>
                <Col style={{ width: '24vw' }}>
                    < Form.Item
                        label="Citizenship"
                        name="citizenship"

                    >
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>

                        </Dragger>
                    </Form.Item>
                </Col>
            </Row>


        </>
    )
    const [form] = Form.useForm();
    return (
        <>
            {/* <h1>CREATE NEW ACCOUNT</h1> */}
            <div className="registerContainer">
                <div className="register">

                    <Form
                        name="loanRenewForm"
                        form={form}
                        layout='vertical'
                        style={{ marginTop: "2rem" }}
                    >
                        <Tabs size='large'>
                            <Tabs.TabPane key="1" tab={"AccountInfo"}>
                                {AccountInfoForm}
                            </Tabs.TabPane>

                            <Tabs.TabPane key="2" tab={"Attachments"}>
                                {Attachments}
                            </Tabs.TabPane>
                        </Tabs>

                        {/* <div className='mt_1 mb_1'>
                            <FormSubmitButton
                                isNextButton={activeKey == "1" ? true : false}
                            />
                        </div>

                        <Button>
                            Cancel
                        </Button> */}


                    </Form>

                </div>
            </div>
        </>

    )
}


export default Register
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, message, Modal, QRCode, Row, Upload } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'


const attachmentsService = axios.create({
    baseURL: '/attachment',
});

const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await attachmentsService.post('/temp', formData);
    return response.data.url;
};
const Payment = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    const handleFirstModalCancel = () => {
        setIsFirstModalOpen(false);
    };

    const handleFirstModalOk = () => {
        setIsFirstModalOpen(false);
        setIsSecondModalOpen(true);
    };

    const handleSecondModalCancel = () => {
        setIsSecondModalOpen(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const [licenseImageUrl, setLicenseImageUrl] = useState<string | null>(null);
    const [citizenshipImageUrl, setCitizenshipImageUrl] = useState<string | null>(null);
    const [licenseFile, setLicenseFile] = useState<File>();
    const [citizenshipFile, setCitizenshipFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const handleLicenseUpload = async (file: File) => {
        setLoading(true);
        try {
            const imageUrl = await uploadFile(file);
            setLoading(false);
            setLicenseImageUrl(imageUrl);
            form.setFieldsValue({ license: imageUrl });
        } catch (error) {
            setLoading(false);
            message.error('License upload failed');
        }
    };

    const handleCitizenshipUpload = async (file: File) => {
        setLoading(true);
        try {
            const imageUrl = await uploadFile(file);
            setLoading(false);
            setCitizenshipImageUrl(imageUrl);
            form.setFieldsValue({ citizenship: imageUrl });
        } catch (error) {
            setLoading(false);
            message.error('Citizenship upload failed');
        }
    };

    const handleLicenseBeforeUpload = (file: File) => {
        setLicenseFile(file);
        return false;
    };

    const handleCitizenshipBeforeUpload = (file: File) => {
        setCitizenshipFile(file);
        return false;
    };

    const licenseUploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload License</div>
        </div>
    );

    const citizenshipUploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload Citizenship</div>
        </div>
    );

    return (
        <>
            <Modal
                title="Choose a payment method"
                visible={isFirstModalOpen}
                onCancel={handleFirstModalCancel}
                footer={[
                    <Button key="back" onClick={handleFirstModalCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleFirstModalOk}>
                        Next
                    </Button>
                ]}
            >
                <Form form={form}>
                    <Row>
                        <Col>
                            <Form.Item
                                name="license"
                                rules={[{ required: true, message: 'Please upload a license' }]}
                            >
                                <Upload
                                    name="license"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    beforeUpload={handleLicenseBeforeUpload}
                                // onChange={() => handleLicenseUpload(licenseFile)}
                                >
                                    {licenseImageUrl ? <img src={licenseImageUrl} alt="avatar" style={{ width: '100%' }} /> : licenseUploadButton}
                                </Upload>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="license"
                                rules={[{ required: true, message: 'Please upload a license' }]}>
                                <Upload
                                    name="citizenship"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    beforeUpload={handleCitizenshipBeforeUpload}
                                // onChange={() => handleCitizenshipUpload(citizenshipFile)}
                                >
                                    {citizenshipImageUrl ? (
                                        <img src={citizenshipImageUrl} alt="avatar" style={{ width: '100%' }} />
                                    ) : (
                                        citizenshipUploadButton
                                    )}
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>

            <Modal
                title="Payment"
                visible={isSecondModalOpen}
                onCancel={handleSecondModalCancel}
                footer={[
                    <Button key="back" onClick={handleSecondModalCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleSecondModalCancel}>
                        Skip
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleSecondModalCancel}>
                        Done
                    </Button>
                ]}
            >
                <Row>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <QRCode value="https://ant.design/" />
                    </Col>




                </Row>
            </Modal>
        </>
    )
}

export default Payment
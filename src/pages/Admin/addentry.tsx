// import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, message, Row, Upload } from 'antd';
import { RcFile } from 'antd/es/upload';
import { Bike } from '../../models/Inventory';
import { addBike } from '../../Services/axios';
import { Cloudinary } from '@cloudinary/base';
import { UploadOutlined } from '@ant-design/icons';

const AddEntry = () => {



    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = async (values: any) => {
//         const cloudinary = new Cloudinary({
//             cloud: {
//                 cloudName: 'your_cloud_name',
//                 apiKey: 'your_api_key',
//                 apiSecret: 'your_api_secret',
//             },
//         });
        const bike: Bike = {
            id: 0,
            name: values.name,
            numberPlate: values.numberPlate,
            brandId: 2,
            rating: values.rating,
            kmRun: values.kmRun,
            description: values.description,
            milage: values.milage,
            imageUrl: '',
        };

        // try {
        //     // Upload the image to Cloudinary
        //     const uploadedImage = await cloudinary.upload(values.imageUrl.originFileObj);

        //     // Set the image URL in the bike object
        //     bike.imageUrl = uploadedImage.url;

        //     // Post the bike object to the API
        //     await addBike(bike);

        //     message.success('Bike added successfully');
        //     form.resetFields();
        // } catch (error) {
        //     console.error(error);
        //     message.error('Error adding bike');
        // }
        // const file: RcFile = values.imageUrl[0].originFileObj;
        // const result = await cloudinary.upload(file, { folder: 'bike' });
        // bike.imageUrl = result.secure_url;

        // await addBike(bike);
    };

    const [form] = Form.useForm();

    return (
        <Row>
            <Col xl={12}>
                <h4 style={{ display: "flex", alignItems: "center ", justifyContent: "center", marginBottom: "20px" }}> ADD Bikes </h4>
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    form={form}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="NumberPlate" name="numberPlate" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="rating" name="rating" rules={[{ min: 0, max: 5 }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="kmRun" name="kmRun" rules={[{ min: 1 }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="milage" name="milage" rules={[{ min: 1 }]} >
                        <Input />
                    </Form.Item>
<!--                     <Form.Item label="imageUrl" name="imageUrl" valuePropName="file" getValueFromEvent={(e: any) => e.file} rules={[{ required: true }]}>
<!--                         <Upload accept=".jpg,.jpeg,.png,.gif" showUploadList={false}>
                            <Button icon={<UploadOutlined />}>Upload Image</Button>
                        </Upload> -->
                    </Form.Item> -->
                    <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default AddEntry 

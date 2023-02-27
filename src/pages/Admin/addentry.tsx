import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';
import { Bike } from '../../models/Inventory';
import { addBike } from '../../Services/axios';

const AddEntry = () => {


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = async (values: any) => {
        const bike: Bike = {
            id: 0,
            name: values.name,
            numberPlate: values.numberPlate,
            brandId: 2,
            rating: values.rating,
            kmRun: values.kmRun,
            description: values.description,
            milage: values.milage,
            // imageUrl: values.imageUrl,
            // brandName: values.name,
            imageUrl: ''
        };
        await addBike(bike);

    };


    return (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
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
            <Form.Item label="imageUrl" name="imageUrl" >

                <Upload >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>
            <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>


        </Form>
    )
}

export default AddEntry


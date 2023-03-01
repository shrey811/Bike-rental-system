import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';
import { Bike } from '../../models/Inventory';
import { addBike } from '../../Services/axios';

import { v4 as uuidv4 } from 'uuid';
import { RcFile } from 'antd/es/upload';

const CLOUDINARY_UPLOAD_PRESET = 'ubhs0eba';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dvqdtqrou/upload';



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
            imageUrl: values.imageUrl
        };
        await addBike(bike);

    };

    // const handleBeforeUpload = (file: RcFile, fileList: RcFile[]): BeforeUploadValueType => {
    //     const formData = new FormData();
    //     const public_id = `images/${uuidv4()}`; // generate a unique ID for the image file
    //     formData.append('file', file);
    //     formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    //     formData.append('public_id', public_id);

    //     return new Promise((resolve, reject) => {
    //         // Send a request to Cloudinary's API to upload the file
    //         fetch(CLOUDINARY_UPLOAD_URL, {
    //             method: 'POST',
    //             body: formData
    //         })
    //             .then(response => {
    //                 // If the file upload is successful, resolve the promise and return the image URL
    //                 if (response.ok) {
    //                     response.json().then(data => {
    //                         resolve({
    //                             public_id: data.public_id,
    //                             url: data.secure_url
    //                         });
    //                     });
    //                 } else {
    //                     reject(response.statusText);
    //                 }
    //             })
    //             .catch(error => {
    //                 reject(error);
    //             });
    //     });
    //     return true;
    // };
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

                <Upload
                // beforeUpload={handleBeforeUpload}
                // showUploadList={false}
                >
                    <Button icon={<UploadOutlined />} > Upload</Button>
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


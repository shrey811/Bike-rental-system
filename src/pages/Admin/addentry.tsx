    // import { UploadOutlined } from '@ant-design/icons';
    import { Button, Col, Form, Input, message, Row, Select, Upload } from 'antd';
    import { RcFile } from 'antd/es/upload';
    import { Bike } from '../../models/Inventory';
    import { addBike } from '../../Services/axios';
    import { UploadOutlined } from '@ant-design/icons';
    import { Bikepost } from '../../models/bike';
    import axios from 'axios';

    import { AdvancedImage } from '@cloudinary/react';
    import {  CloudinaryImage } from '@cloudinary/url-gen';

    import { fill } from "@cloudinary/url-gen/actions/resize";
    import IApiConfig from '@cloudinary/url-gen/config/interfaces/Config/IApiConfig';
    import { useEffect, useState } from 'react';
    import { API_URL } from '../../Services/ajaxservice';
    // import { Uploader } from '@cloudinary/base';
    import { Cloudinary } from 'cloudinary-core';


    interface Brand {
        id: number;
        brandName: string;
        manufacturer: string;
    }
    
    const cloudinary = new Cloudinary({
        cloud_name: 'dvqdtqrou',
        api_key:  '989338837878285',

      });
      
    const AddEntry = () => {
    
        const [brands, setBrands] = useState<Brand[]>([]);

        const [selectedBrandId, setSelectedBrandId] = useState<number | undefined>(undefined); 

        // const cloudinary = new Cloudinary({
        //     cloud: {
        //     cloudName: 'dvqdtqrou',
        //     },
        //     api: {
        //         apiKey: '989338837878285',
        //         api_secret: 'hrxjmrGD-lBJuVokpgpiMQq3C0E'
        //     } as IApiConfig,
        // });
        

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };


       
const handleUpload = async (file: string | Blob) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Bike');
  
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dvqdtqrou`,
        {
          method: 'POST',
          body: formData,
        }
      );
  
      const result = await response.json();
      const imageUrl = cloudinary.url(result.public_id);
      return imageUrl;
    } catch (err) {
      message.error('Failed to upload image');
      console.error(err);
    }
  };


        // const handleChange = async (info: any) => {
        //     const { status, response } = info.file;
        //     if (status === "done") {
        //     const imageUrl = response.secure_url;
        //     setBike({ ...bike, imageUrl });
        //     }
        // };

    
        useEffect(() => {
        axios.get(`${API_URL}/brand`)
            .then(response => setBrands(response.data))
            .catch(error => console.error(error));
        }, []);

        const handleBrandSelect = (value: number) => {
            setSelectedBrandId(value); // Update selectedBrandId when an Option is clicked
        }
    
        const onFinish = async (values: any) => {
        
        
            const bike: Bikepost = {
                name: values.name,
                numberPlate: values.numberPlate,
                brandId: selectedBrandId ?? 0,
                kmRun: values.kmRun,
                description: values.description,
                milage: values.milage,
                imageUrl:'' ,
                price: values.price,
            };
            await addBike(bike);
        
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
    <Form.Item label="Brand" name="Brand" rules={[{ required: true }]}>
                        <Select placeholder="Select a brand" onSelect={handleBrandSelect} >
                            {brands.map(brand => (
                            <Select.Option key={brand.id} value={brand.id}>
                            {brand.brandName}
                            </Select.Option>
                                ))}
                        </Select>
                        </Form.Item>
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
                        <Form.Item label="price" name="price"  >
                            <Input />
                        </Form.Item>
                    
                        
                        <Form.Item label="imageUrl" name="imageUrl" valuePropName="file" rules={[{ required: true }]}>
                        {/* <Upload customRequest={handleUpload}>
  <Button icon={<UploadOutlined />}>Click to Upload</Button>
</Upload> */}
                        
    <Upload
    action={`http://res.cloudinary.com/dvqdtqrou`}
    data={{ upload_preset: "Bike" }}
    listType="picture"
    // onChange={handleChange}
    >
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
                </Col>
            </Row>
        )
    }


    export default AddEntry 



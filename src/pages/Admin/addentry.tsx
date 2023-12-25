// import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, FormInstance, Input, InputNumber, Layout, message, Row, Select } from 'antd';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Bikepost } from '../../models/bike';
import { API_URL } from '../../Services/ajaxservice';
import { addBike } from '../../Services/axios';
// import { Uploader } from '@cloudinary/base';

// import { CloudinaryImage } from '@cloudinary/url-gen';




interface Brand {
  id: number;
  brandName: string;
  manufacturer: string;
}


const AddEntry = () => {



  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrandId, setSelectedBrandId] = useState<number>();
  const formRef = useRef<FormInstance>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);



  useEffect(() => {
    axios
      .get(`${API_URL}/brand`)
      .then((response) => setBrands(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleBrandSelect = (value: number) => {
    setSelectedBrandId(value);
  };

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };
  const onFinish = async (values: any) => {
    setIsLoading(true);
    if (!image) {
      message.error('Please upload an image');
      return;
    }

    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'TestImage');
    data.append('cloud_name', 'dvqdtqrou');

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dvqdtqrou/image/upload',
        {
          method: 'post',
          body: data,
        }
      );

      if (response.ok) {
        const data = await response.json();
        const bike: Bikepost = {
          name: values.name,
          numberPlate: values.numberPlate,
          brandId: selectedBrandId ?? 0,
          kmRun: values.kmRun,
          description: values.description,
          milage: values.milage,
          imageUrl: data.url,
          price: values.price,
        };
        await addBike(bike);
        formRef.current?.resetFields();
        message.success('Bike added successfully');
      } else {
        message.error('Failed to upload image');

      }
    } catch (error) {
      console.error(error);
      message.error('Failed to add bike');
    }
    setIsLoading(false);
  };

  return (
    <Row>
      <Col xl={12}>
        <h4 style={{ display: "flex", alignItems: "center ", justifyContent: "center", marginBottom: "20px" }}> ADD Bikes </h4>

        <Form
          ref={formRef}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="nest-messages"
          onFinish={onFinish}
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
          <Form.Item label="Number Plate" name="numberPlate" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Rating" name="rating" rules={[{ min: 0, max: 5 }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Km Run" name="kmRun" rules={[{ min: 1 }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Milage" name="milage" rules={[{ min: 1 }]} >
            <Input />
          </Form.Item>
          <Form.Item label="Price" name="price"  >
            <InputNumber />
          </Form.Item>


          <Form.Item label="Image Of Bike" name="imageUrl" rules={[{ required: true }]}>
            <div>
              <div>
                <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} />
                {/* <button onClick={handleImageChange}>Upload</button> */}
              </div>
            </div>
          </Form.Item>








          <Form.Item name="description" label="Description" rules={[{ required: true }]}>
            <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: "20rem" }} loading={isLoading }>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}


export default AddEntry


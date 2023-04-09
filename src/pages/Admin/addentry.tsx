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
    
        // const [brands, setBrands] = useState<Brand[]>([]);

        // const [selectedBrandId, setSelectedBrandId] = useState<number | undefined>(undefined); 
        // const [image, setImage] = useState<File | null>(null);
    
        // const submitImage = () => {
        //     if (!image) {
        //         return;
        //     }
        
        //     const data = new FormData();
        //     data.append("file", image);
        //     data.append("upload_preset", "TestImage");
        //     data.append("cloud_name", "dvqdtqrou");
        
        //     fetch("https://api.cloudinary.com/v1_1/dvqdtqrou/image/upload", {
        //         method: "post",
        //         body: data,
        //     })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             console.log(data);
        //         });
        // };
    

       
      

        // const layout = {
        //     labelCol: { span: 8 },
        //     wrapperCol: { span: 16 },
        // };


    

    
        // useEffect(() => {
        // axios.get(`${API_URL}/brand`)
        //     .then(response => setBrands(response.data))
        //     .catch(error => console.error(error));
        // }, []);

        // const handleBrandSelect = (value: number) => {
        //     setSelectedBrandId(value); // Update selectedBrandId when an Option is clicked
        // }
    
        // const onFinish = async (values: any) => {
        
        
        //     const bike: Bikepost = {
        //         name: values.name,
        //         numberPlate: values.numberPlate,
        //         brandId: selectedBrandId ?? 0,
        //         kmRun: values.kmRun,
        //         description: values.description,
        //         milage: values.milage,
        //         imageUrl:values.imgUrl ,
        //         price: values.price,
        //     };
        //     await addBike(bike);
        
        // };

        // const [form] = Form.useForm();
        
        const [brands, setBrands] = useState<Brand[]>([]);
        const [selectedBrandId, setSelectedBrandId] = useState<number>();
        const formRef = useRef<FormInstance>(null);
 
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
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item>
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


// import { UploadOutlined } from '@ant-design/icons';
// import { Button, Col, Form, Input, message, Row, Select, Upload } from 'antd';
// import axios from 'axios';
// import { Bikepost } from '../../models/bike';
// import { addBike } from '../../Services/axios';
// import { useEffect, useState } from 'react';
// import { API_URL } from '../../Services/ajaxservice';
// import { CloudinaryImage } from '@cloudinary/url-gen';
// import { fill } from "@cloudinary/url-gen/actions/resize";
// import { Cloudinary } from 'cloudinary-core';

// interface Brand {
//   id: number;
//   brandName: string;
//   manufacturer: string;
// }

// const AddEntry = () => {
//   const [brands, setBrands] = useState<Brand[]>([]);
//   const [selectedBrandId, setSelectedBrandId] = useState<number | undefined>(undefined);
//   const [imageUrl, setImageUrl] = useState<string | null>(null);

//   const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
//   };

//   useEffect(() => {
//     axios.get(`${API_URL}/brand`)
//       .then(response => setBrands(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleBrandSelect = (value: number) => {
//     setSelectedBrandId(value); // Update selectedBrandId when an Option is clicked
//   }

//   const onFinish = async (values: any) => {
//     const bike: Bikepost = {
//       name: values.name,
//       numberPlate: values.numberPlate,
//       brandId: selectedBrandId ?? 0,
//       kmRun: values.kmRun,
//       description: values.description,
//       milage: values.milage,
//       imageUrl: imageUrl ?? '',
//       price: values.price,
//     };
//     await addBike(bike);
//   };

//   const [form] = Form.useForm();

//   const submitImage = () => {
//     if (!image) {
//       return;
//     }

//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", "TestImage");
//     data.append("cloud_name", "dvqdtqrou");

//     fetch("https://api.cloudinary.com/v1_1/dvqdtqrou/image/upload", {
//       method: "post",
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setImageUrl(data.secure_url);
//       });
//   };

//   const [image, setImage] = useState<File | null>(null);

//   const onFileChange = (e: any) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const file = e.target.files[0];
//       setImage(file);
//     }
//   };

//   return (
//     <Row>
//       <Col xl={12}>
//         <h4 style={{ display: "flex", alignItems: "center ", justifyContent: "center", marginBottom: "20px" }}> ADD Bikes </h4>

//         <Form
//           {...layout}
//           name="nest-messages"
//           onFinish={onFinish}
//           form={form}
//           style={{ maxWidth: 600 }}
//               >
//                   <Form.Item label="Brand" name="Brand" rules={[{ required: true }]}>
//                                        <Select placeholder="Select a brand" onSelect={handleBrandSelect} >
//                                            {brands.map(brand => (
//                                            <Select.Option key={brand.id} value={brand.id}>
//                                            {brand.brandName}
//                                            </Select.Option>
//                                                ))}
//                                        </Select>
//                                        </Form.Item>
                  
//                   <Form.Item label="Name" name="name" rules={[{ required: true }]}>
//               <Input />
//             </Form.Item>
      
//             <Form.Item label="Number Plate" name="numberPlate" rules={[{ required: true }]}>
//               <Input />
//             </Form.Item>
      
//             <Form.Item label="Kilometers Run" name="kmRun" rules={[{ required: true }]}>
//               <Input type="number" min={0} />
//             </Form.Item>
      
//             <Form.Item label="Description" name="description">
//               <Input.TextArea />
//             </Form.Item>
      
//             <Form.Item label="Milage" name="milage">
//               <Input type="number" min={0} />
//             </Form.Item>
      
//             <Form.Item label="Price" name="price" rules={[{ required: true }]}>
//               <Input type="number" min={0} />
//             </Form.Item>
      
//             <Form.Item label="Image" name="image">
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//           <UploadOutlined style={{ fontSize: 30 }} />
//           <div style={{ marginTop: 8 }}>Click to Upload</div>
//           <Upload accept="image/*" showUploadList={false} beforeUpload={() => false} onChange={(info) => onFileChange(info)}>
//             <Button>Upload Image</Button>
//           </Upload>
//           <Button style={{ marginTop: 16 }} type="primary" onClick={submitImage}>Submit Image</Button>
//           {imageUrl && (
//             <div style={{ marginTop: 16 }}>
//               <img src={imageUrl} alt="Uploaded Image" style={{ width: "100%" }} />
//             </div>
//           )}
//         </div>
//       </Form.Item>
    
           
      
//             <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//               <Button type="primary" htmlType="submit">
//                 Submit
//               </Button>
//             </Form.Item>
//           </Form>
//         </Col>
//       </Row>
//       );
//       };
      
//       export default AddEntry;
      
// import React, { useState } from 'react';
// import { Card, Button, Rate, Modal, QRCode, Radio, Col, Row, Badge, Divider } from 'antd';
// import { useHistory } from 'react-router-dom';

// import { Bike } from '../../models/Inventory';
// import { CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// export const CustomCard: React.FC<Bike> = ({ id, name, description, rating, kmRun, imageUrl, milage, numberPlate, rentalStatus, price }) => {
//   const [value, setValue] = useState(rating);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const history = useHistory();

//   const toggleDetails = () => {
//     history.push(`/more-info/${id}`);
//     setShowDetails(!showDetails);
//   };

//   const handleClick = () => {
//     if (rentalStatus.id === 1) {
//       setIsModalOpen(true);
//     }
//   };

//   return (
//     <>
//       <Card
//         style={{ margin: '10px' ,height:"700px"}}
//         hoverable
//         // onClick={toggleDetails}
//         // title={
//         //   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         //     {name}
//         //   </div>
//         // }
//         cover={
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <div style={{ flex: 1, marginRight: 8, alignContent: 'center' }}>
//               <img src={imageUrl} style={{ width: '100%',height:'50%' }} />
//             </div>
          
//           </div>
//         }
//       >
//         <span>
//           <Rate
//             style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}
//             tooltips={desc}
//             disabled
//             defaultValue={2}
//             value={value}
//           />
//         </span>
//         <Row gutter={16}>
          
//         <Col>
            
//             <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,fontSize:"20px",fontWeight:"bold", marginBottom: '10px'}}> {name} </p>
//             </Col>
//         </Row>
//         <Row gutter={16}>
//           <Col >
//           <p style={{ marginBottom: '10px' ,fontSize:"20px"}}>Price: {price} NRS/Hour</p>
//           </Col>
//           <Col >
            
//             <p style={{ fontSize:"20px"}}>Milage: {milage} kmpl</p>
//             </Col>
//           <Divider style={{ fontSize: "100px" }} />
//           <Col >
//             <InfoCircleOutlined onClick={handleClick} style={{ fontSize: "20px",marginTop: '5px' }} />
//           </Col>
//           <Col >
//           <p style={{ marginBottom: '10px' ,fontSize:"18px",fontWeight:"bold"}}>
//           {rentalStatus.id === 2 && (
//             <Badge style={{ marginLeft: '1rem' ,fontWeight:"bold"}}   status="error"  text="Rented" />
//             )}
//             {rentalStatus.id === 1 && (
//               <Badge  style={{ marginLeft: '1rem',fontWeight:"bold" }}   status="success"  text="Available" />
//               )}
//             </p>
//           </Col>
         
            
//         </Row>
//         <Row>
//           <Col xl={10}>
//           <p style={{ marginBottom: '10px' ,fontSize:"20px"}}>Rating: {rating}</p>
//           </Col>
//           <Col  xl={10}>
//           <p style={{ marginBottom: '10px' ,fontSize:"20px" }}>Km Run: {kmRun}</p>
//           </Col>
         
          
//         </Row>
        
       
       
      
      
//         {rentalStatus.id === 1 ? (
//           <Button style={{ marginLeft: '6rem', marginTop: '20px' }} className='button1' type='primary' onClick={toggleDetails}>
//             Rent Now
//           </Button>
//         ) : (
//           <Button style={{ marginLeft: '6rem', marginTop: '20px' }} className='button1' type='primary' disabled>
//             Rented
//           </Button>
//         )}
//         {showDetails && (
//           <div>
//             <p className='card-text'>DESCRIPTION: {description}</p>
//             <p className='card-text'>NUMBER PLATE: {numberPlate}</p>
//           </div>
//         )}
//       </Card>
//     </>
//   );
// };


import React, { useState } from 'react';
import { Card, Button, Rate, Modal, Radio, Col, Row, Badge, Divider } from 'antd';
import { useHistory } from 'react-router-dom';
import { CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './CustomCard.css';

import { Bike } from '../../models/Inventory';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export const CustomCard: React.FC<Bike> = ({ id, name, description, rating, kmRun, imageUrl, milage, numberPlate, rentalStatus, price }) => {
  const [value, setValue] = useState(rating);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const history = useHistory();

  const toggleDetails = () => {
    history.push(`/more-info/${id}`);
    setShowDetails(!showDetails);
  };

  const handleClick = () => {
    if (rentalStatus.id === 1) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Card
        className='custom-card'
        hoverable
        cover={
          <div className='card-image-container'>
            <img src={imageUrl} alt={name} className='card-image' />
          </div>
        }
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <h3 className='card-title'>{name}</h3>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className='card-status'>
              {rentalStatus.id === 2 && (
                <Badge status='error' text='Rented'  className='badge-rented' style={{ color: 'white' }} />
              )}
              {rentalStatus.id === 1 && (
                <Badge status='success' text='Available' className='badge-available' style={{ color: 'white' }}  />
              )}
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <p className='card-text'>
              <span className='card-text-bold'>Price:</span> {price} NRS/Hour
            </p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <p className='card-text'>
              <span className='card-text-bold'>Milage:</span> {milage} kmpl
            </p>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <p className='card-text'>
              <span className='card-text-bold'>Rating:</span> {rating}
            </p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <p className='card-text'>
              <span className='card-text-bold'>Km Run:</span> {kmRun}
            </p>
          </Col>
        </Row>
        <Divider />
        {rentalStatus.id === 1 ? (
           <Button className='button1' type='primary' onClick={toggleDetails}>
             Rent Now
           </Button>
         ) : (
            <Button style={{
              backgroundColor: "black",
              color: "white",
           }} type='primary' disabled>
             Rented
           </Button>
         )}
         {showDetails && (
           <div>
             <p className='card-text'>DESCRIPTION: {description}</p>
             <p className='card-text'>NUMBER PLATE: {numberPlate}</p>
           </div>
         )}
        {/* <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={24} xl={24}>
<Button type='primary' onClick={handleClick}>
Rent now
</Button>
<Button type='ghost' onClick={toggleDetails}>
{showDetails ? 'Hide details' : 'Show details'}
</Button>
</Col>
</Row>
<Modal
title='Confirm Rental'
visible={isModalOpen}
onCancel={() => setIsModalOpen(false)}
footer={[
<Button key='cancel' onClick={() => setIsModalOpen(false)}>
Cancel
</Button>,
<Button
key='rent'
type='primary'
icon={<CheckCircleOutlined />}
onClick={() => setIsModalOpen(false)}
>
Rent
</Button>,
]}
>
<p>Are you sure you want to rent this bike?</p>
</Modal> */}
</Card>
</>
);
};




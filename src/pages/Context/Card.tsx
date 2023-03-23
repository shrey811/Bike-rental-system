// import React, { useState } from 'react';
// import { Card, Button, Rate, Modal, QRCode, Radio, Col, Row } from 'antd';
// import { useHistory } from 'react-router-dom';

// import { Bike } from '../../models/Inventory';



// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// export const CustomCard: React.FC<Bike> = ({ id, name, description, rating, kmRun, imageUrl, mileage, numberPlate, }) => {
//   const [value, setValue] = useState(rating);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     history.push(`/more-info/${id}`);
//     setShowDetails(!showDetails);

//   };



//   const handleClick = () => {

//   };



//   const history = useHistory();

//   return (
//     <>
//       <Card
//         style={{ margin: "10px" }}
//         hoverable
//         title={name}
//         cover={
//           <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
//             <div style={{ flex: 1, marginRight: 8, alignContent: "center" }}>
//               <img src={imageUrl} style={{ width: '100%' }} />
//             </div>
//           </div>
//         }
//       >
//         <span>
//           <Rate
//             style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}
//             tooltips={desc}
//             disabled
//             defaultValue={2}
//             value={value}
//           />
//         </span>



//         <p style={{ marginBottom: "10px" }}>Rating: {rating}</p>
//         <p style={{ marginBottom: "10px" }}>Km Run: {kmRun}</p>
//         <p className="card-text">Milage: {mileage} kmpl</p>

//         <Button style={{ marginLeft: "6rem", marginTop: "20px" }} className='button1' type="primary" onClick={toggleDetails}>
//           {showDetails ? 'Hide Details' : 'More Info'}
//         </Button>
//         {showDetails && (
//           <div>
//             <p className="card-text">DESCRIPTION :{description}</p>
//             <p className="card-text">NUMBER PLATE: {numberPlate}</p>

//           </div>
//         )}


//       </Card>


//     </>
//   );
// };

// import React, { useState } from 'react';
// import { Card, Button, Rate } from 'antd';
// import { useHistory } from 'react-router-dom';
// import { Bike } from '../../models/Inventory';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// export const CustomCard: React.FC<Bike> = ({ id, name, description, rating, kmRun, imageUrl, mileage, numberPlate, price, rentalStatus }) => {
//   const [value, setValue] = useState(rating);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const history = useHistory();

//   const toggleDetails = () => {
//     history.push(`/more-info/${id}`);
//     setShowDetails(!showDetails);
//   };

//   const handleClick = () => {
//     // handle button click here
//   };

//   return (
//     <Card
//       style={{ margin: '10px' }}
//       hoverable
//       title={name}
//       cover={
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <div style={{ flex: 1, marginRight: 8, alignContent: 'center' }}>
//             <img src={imageUrl} style={{ width: '100%' }} alt={name} />
//           </div>
//         </div>
//       }
//     >
//       <span>
//         <Rate
//           style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//           tooltips={desc}
//           disabled
//           defaultValue={2}
//           value={value}
//         />
//       </span>

//       <p style={{ marginBottom: '10px' }}>Rating: {rating}</p>
//       <p style={{ marginBottom: '10px' }}>Km Run: {kmRun}</p>
//       <p className='card-text'>Milage: {mileage} kmpl</p>
//       <p className='card-text'>Price: {price} INR</p>
//       <p className='card-text'>Rental Status: {rentalStatus ? 'Available' : 'Rented'}</p>

//       <Button style={{ marginLeft: '6rem', marginTop: '20px' }} className='button1' type='primary' onClick={toggleDetails}>
//         {showDetails ? 'Hide Details' : 'More Info'}
//       </Button>
//       {showDetails && (
//         <div>
//           <p className='card-text'>DESCRIPTION: {description}</p>
//           <p className='card-text'>NUMBER PLATE: {numberPlate}</p>
//         </div>
//       )}
//     </Card>
//   );
// };


// import React, { useState } from 'react';
// import { Card, Button, Rate, Modal, QRCode, Radio, Col, Row, Badge } from 'antd';
// import { useHistory } from 'react-router-dom';

// import { Bike } from '../../models/Inventory';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// export const CustomCard: React.FC<Bike> = ({ id, name, description, rating, kmRun, imageUrl, mileage, numberPlate, price, rentalStatus }) => {
//   const [value, setValue] = useState(rating);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     history.push(`/more-info/${id}`);
//     setShowDetails(!showDetails);
//   };

//   const history = useHistory();

// ;

//   return (
//     <>
//       <Card
//         style={{ margin: '10px' }}
//         hoverable
//         title={
//           <>
//             {name}
           
//           </>
//         }
//         cover={
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <div style={{ flex: 1, marginRight: 8, alignContent: 'center' }}>
//               <img src={imageUrl} style={{ width: '100%' }} />
//             </div>
//           </div>
//         }
//       >
//         <span>
//           <Rate
//             style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//             tooltips={desc}
//             disabled
//             defaultValue={2}
//             value={value}
//           />
//         </span>

//         <p style={{ marginBottom: '10px' }}>Rating: {rating}</p>
//         <p style={{ marginBottom: '10px' }}>Km Run: {kmRun}</p>
//         <p className="card-text">Milage: {mileage} kmpl</p>
//         <p className="card-text">Price: {price}</p>

//         {/* <Button
//           style={{ marginLeft: '6rem', marginTop: '20px' }}
//           className='button1'
//           type="primary"
//           onClick={toggleDetails}
//           disabled={isRented}
//         >
//           {showDetails ? 'Hide Details' : 'More Info'}
//         </Button>
//         {showDetails && (
//           <div>
//             <p className="card-text">DESCRIPTION: {description}</p>
//             <p className="card-text">NUMBER PLATE: {numberPlate}</p>
//             <p className="card-text">RENTAL STATUS: {rentalStatus}</p>
//           </div>
//         )} */}

// <Button
//   style={{ marginLeft: "6rem", marginTop: "20px" }}
//   className='button1'
//   type="primary"
//   onClick={toggleDetails}
//   disabled={rentalStatus.value === "Rented"}
// >
//   {showDetails ? 'Hide Details' : 'More Info'}
//   {rentalStatus.value === "Available" && <span style={{color: "green", marginLeft: "10px"}}>&#9679;</span>}
//   {rentalStatus.value === "Rented" && <span style={{color: "red", marginLeft: "10px"}}>&#9679;</span>}
// </Button>

//       </Card>
//     </>
//   );
// };

import React, { useState } from 'react';
import { Card, Button, Rate, Modal, QRCode, Radio, Col, Row, Badge, Divider } from 'antd';
import { useHistory } from 'react-router-dom';

import { Bike } from '../../models/Inventory';
import { CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

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
        style={{ margin: '10px' ,height:"700px"}}
        hoverable
        // onClick={toggleDetails}
        // title={
        //   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        //     {name}
        //   </div>
        // }
        cover={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: 1, marginRight: 8, alignContent: 'center' }}>
              <img src={imageUrl} style={{ width: '100%',height:'50%' }} />
            </div>
          
          </div>
        }
      >
        <span>
          <Rate
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}
            tooltips={desc}
            disabled
            defaultValue={2}
            value={value}
          />
        </span>
        <Row gutter={16}> 
          
        <Col>
            
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,fontSize:"20px",fontWeight:"bold", marginBottom: '10px'}}> {name} </p>
            </Col>
        </Row>
        <Row gutter={16}> 
          <Col >
          <p style={{ marginBottom: '10px' ,fontSize:"20px"}}>Price: {price} NRS/Hour</p>
          </Col>
          <Col >
            
            <p style={{ fontSize:"20px"}}>Milage: {milage} kmpl</p>
            </Col>
          <Divider style={{ fontSize: "100px" }} />
          <Col >
            <InfoCircleOutlined onClick={handleClick} style={{ fontSize: "20px",marginTop: '5px' }} />
          </Col>
          <Col >
          <p style={{ marginBottom: '10px' ,fontSize:"18px",fontWeight:"bold"}}>
          {rentalStatus.id === 2 && (
            <Badge style={{ marginLeft: '1rem' ,fontWeight:"bold"}}   status="error"  text="Rented" />
            )}
            {rentalStatus.id === 1 && (
              <Badge  style={{ marginLeft: '1rem',fontWeight:"bold" }}   status="success"  text="Available" />
              )}
            </p>
          </Col>
         
            
        </Row>
        <Row>
          <Col xl={10}>
          <p style={{ marginBottom: '10px' ,fontSize:"20px"}}>Rating: {rating}</p>
          </Col> 
          <Col  xl={10}>
          <p style={{ marginBottom: '10px' ,fontSize:"20px" }}>Km Run: {kmRun}</p>
          </Col>
         
          
        </Row>
        
       
       
      
      
        {rentalStatus.id === 1 ? (
          <Button style={{ marginLeft: '6rem', marginTop: '20px' }} className='button1' type='primary' onClick={toggleDetails}>
            Rent Now
          </Button>
        ) : (
          <Button style={{ marginLeft: '6rem', marginTop: '20px' }} className='button1' type='primary' disabled>
            Rented
          </Button>
        )}
        {showDetails && (
          <div>
            <p className='card-text'>DESCRIPTION: {description}</p>
            <p className='card-text'>NUMBER PLATE: {numberPlate}</p>
          </div>
        )}
      </Card>
    </>
  );
};

// import React, { useState } from 'react';
// import { Card, Button, Rate, Modal, QRCode, Radio, Col, Row } from 'antd';
// import { useHistory } from 'react-router-dom';


// interface Cards {
//   id: number;
//   title: string;
//   body: string;
//   imageUrl1: string;
//   imageUrl2: string;
//   onRent: () => void;
// }
// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// export const CustomCard: React.FC<Cards> = ({ id, title, body, imageUrl1 }) => {
//   const [value, setValue] = useState(3);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleRentClick = () => {

//     history.push('/rent-now');
//   }
//   const handleClick = () => {

//     history.push(`/more-info/${id}`);

//   }
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };


//   const handleOk = () => {
//     <Modal>
//       <p>dfjalufhapieuh</p>
//     </Modal>
//   };
//   const history = useHistory();

//   return (
//     <>
//       <Card

//         hoverable
//         title={title}
//         cover={
//           <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
//             <div style={{ flex: 1, marginRight: 8, alignContent: "center" }}>
//               <img src={imageUrl1} style={{ width: '100%' }} />
//             </div>

//           </div>
//         }
//       >
//         <span>
//           <Rate style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} tooltips={desc} disabled defaultValue={2} value={value} />

//         </span>


//         <p style={{ marginBottom: "10px" }}> {body}</p>

//         {/* <Button className='button1' type="primary" onClick={showModal}>Rent Now</Button> */}
//         <Button style={{ marginLeft: "6rem" }} className='button1' type="primary" onClick={handleClick}>More Info</Button>
//       </Card>

//       <Modal style={{ justifyContent: "center", display: "flex", alignItems: "center" }} title="Choose a payment method" open={isModalOpen} onOk={handleCancel}
//         onCancel={handleCancel}
//         footer={[
//           <Button key="back" onClick={handleCancel}>
//             Return
//           </Button>,
//           <Button key="submit" type="primary" onClick={handleOk}>
//             Next
//           </Button>

//         ]}
//       >
//         <Row >
//           <Col style={{ marginRight: "4rem" }}>

//             <QRCode value="https://ant.design/" />

//           </Col>
//           <Col style={{ fontSize: "25px" }}>
//             <p>OR</p>
//             <Radio style={{ fontSize: "25px" }}>Cash in hand  </Radio>
//           </Col>
//         </Row>
//       </Modal>
//     </>
//   );
// };

import React, { useState } from 'react';
import { Card, Button, Rate, Modal, QRCode, Radio, Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';

import { Bike } from '../../models/Inventory';



const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export const CustomCard: React.FC<Bike> = ({ id, name, description, rating, kmRun, imageUrl, milage, numberPlate, }) => {
  const [value, setValue] = useState(rating);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    history.push(`/more-info/${id}`);
    setShowDetails(!showDetails);

  };



  const handleClick = () => {

  };



  const history = useHistory();

  return (
    <>
      <Card
        hoverable
        title={name}
        cover={
          <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
            <div style={{ flex: 1, marginRight: 8, alignContent: "center" }}>
              <img src={imageUrl} style={{ width: '100%' }} />
            </div>
          </div>
        }
      >
        <span>
          <Rate
            style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}
            tooltips={desc}
            disabled
            defaultValue={2}
            value={value}
          />
        </span>



        <p style={{ marginBottom: "10px" }}>Rating: {rating}</p>
        <p style={{ marginBottom: "10px" }}>Km Run: {kmRun}</p>
        <p className="card-text">Milage: {milage} kmpl</p>

        <Button style={{ marginLeft: "6rem", marginTop: "20px" }} className='button1' type="primary" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'More Info'}
        </Button>
        {showDetails && (
          <div>
            <p className="card-text">DESCRIPTION :{description}</p>
            <p className="card-text">NUMBER PLATE: {numberPlate}</p>

          </div>
        )}

        {/* <Button style={{ marginLeft: "6rem" }} className='button1' type="primary" onClick={handleClick}>
          More Info
        </Button>
        <Button className='button1' type="primary" onClick={showModal}>
          Rent Now
        </Button> */}
      </Card>


    </>
  );
};

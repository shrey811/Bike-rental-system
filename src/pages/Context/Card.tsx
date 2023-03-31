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
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const toggleDetails = () => {
    setLoading(true);
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

      >
        <Row style={{ gap: "20px" }}>
          <Col xl={10} span={12}>

            <img src={imageUrl} height={"60%"} width={"100%"} />

          </Col>
          <Col xl={10}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                <h3 style={{ fontFamily: 'Merriweather', fontSize: "25px" }} className='card-title'>{name}</h3>
              </Col>


              <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                <p className='card-text'>
                  <span className='card-text-bold'>Price:</span> {price} NRS/Hour
                </p>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                <p className='card-text'>
                  <span className='card-text-bold'>Milage:</span> {milage} kmpl
                </p>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                <p className='card-text'>
                  <span className='card-text-bold'>Rating:</span> {rating}
                </p>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                <p className='card-text'>
                  <span className='card-text-bold'>Km Run:</span> {kmRun}
                </p>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                <div className='card-status'>
                  {rentalStatus.id === 2 && (
                    <Badge status='error' text='Rented' className='badge-rented' style={{ color: 'white' }} />
                  )}
                  {rentalStatus.id === 1 && (
                    <Badge status='success' text='Available' className='badge-available' style={{ color: 'white' }} />
                  )}
                </div>
              </Col>

            </Row>


          </Col>
        </Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={24} >
          <Divider style={{ color: "white", backgroundColor: 'white' }} />
          {rentalStatus.id === 1 ? (
            <Button style={{
              backgroundColor: "darkcyan",
              color: "white",
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              // marginLeft: "10px"

            }} onClick={toggleDetails}
              loading={loading}>
              More Info
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
        </Col>
      </Card>


    </>
  );
};



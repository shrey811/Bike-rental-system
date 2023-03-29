import { Button, Col, DatePicker, Form, Input, Modal, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Bike } from '../../models/Inventory';
import { rentModel } from '../../models/Rent';
import { API_URL } from '../../Services/ajaxservice';
import { getCards, getUser } from '../../Services/axios';
import { CustomCard } from '../../Shared/Moreinfolayout';


import RentModal from '../Context/Khalti.payment';

interface CardParams {
    id: string;
}

const Moreinfo: React.FC = () => {

    const [selectedCard, setSelectedCard] = useState<Bike | null>(null);
    const [inventory, setInventory] = useState<Bike[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams<CardParams>();
    const history = useHistory();
    const [secondModalVisible, setSecondModalVisible] = useState(false);
    const [rentalPeriod, setRentalPeriod] = useState(selectedCard?.price);
    const [userId, setUserId] = useState<number>();

    useEffect(() => {
      async function fetchUser() {
        const user = await getUser();
        setUserId(user.id);
      }
      fetchUser();
    }, []);
  
 

const handleRentalDatesChange = (dates: any) => {
  if (dates && dates.length === 2) {
    const [rentedOn, rentUntil] = dates;
    const period = moment.duration(rentUntil.diff(rentedOn));
    setRentalPeriod(period.asDays()); // set the rental period in days
  } 
    };


    
    const handleBackClick = () => {
        history.goBack();
    };

    async function init() {
        getCards(1, 10).then((response) => {
            setInventory(response.data);
        });
    }

    // Find the selected card from the inventory based on the ID in the URL params
    React.useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        if (inventory.length !== 0) {
            const cardId = parseInt(id);
            const foundCard = inventory.find((card) => card.id === cardId);
            if (!foundCard) {
                setErrorMessage(`No card found with ID ${cardId}`);
            } else {
                setSelectedCard(foundCard);
            }
        }
    }, [id, inventory]);

    if (errorMessage) {
        return <div>{errorMessage}</div>;
    }

    if (!selectedCard) {
        return <div>Loading...</div>;
    }


    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      setVisible(false);
      setSecondModalVisible(true);
    };
  
    const handleCancel = () => {
      setVisible(false);
    };
  

  
    const handleSecondModalOk = () => {
      setSecondModalVisible(false);
    };
  
    const handleSecondModalCancel = () => {
      setSecondModalVisible(false);
    };
    const handleSubmit = async (value: any)  => {
    const formData = await form.validateFields();
        const rental:rentModel = {
            rentedOn: formData.rentedOn,
            rentedUntil: formData.rentedUntil,
            remarks: formData.remarks,    
            bikeId: selectedCard.id,
            price: selectedCard.price,
            userId: 1,
        };
       
        try {
            const response = await axios.post(`${API_URL}/Rent/rent`, rental);
            console.log(response);
            // show success message
          } catch (error) {
            console.error(error);
            // show error message
      }
       history.push('/inventory');
      // Show success message
      Modal.success({
        content: 'Thanks for renting!',
      });
      localStorage.setItem('hasRentOrder', 'true');
      console.groupCollapsed('My Logs');
      console.log(localStorage.getItem('hasRentOrder'));
      console.groupEnd();
 
     };

    return (
      <div>
      <Row>
          <Col xl={24}>
         
            <CustomCard
                id={selectedCard.id}
                name={selectedCard.name}
                imageUrl={selectedCard.imageUrl}
                rating={selectedCard.rating}
                kmRun={selectedCard.kmRun}
                milage={selectedCard.milage}
                numberPlate={selectedCard.numberPlate}
                brandId={selectedCard.brandId}
                description={selectedCard.description}
                rentalStatus={selectedCard.rentalStatus}
                price={selectedCard.price}
            
            />
            
          </Col>
          <Col xl={12 }></Col>
            <Col>
          
            <Button type="primary" onClick={showModal} >
      Rent now
          </Button>
        </Col>
        </Row>
        <Modal title="Please Fill The Following Information"
       
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}>
                <Form form={form}
                >
      <Form.Item label="Rental date" name={"rentedOn"}>
          <DatePicker  onChange={handleRentalDatesChange}  />
        </Form.Item>
        <Form.Item label="Rent until" name={"rentedUntil"}>
          <DatePicker  onChange={handleRentalDatesChange}/>
     </Form.Item>
         <Form.Item label="price">
         
         <Input disabled  value={selectedCard.price }/>
        </Form.Item>
                    <Form.Item label="Remarks" name={"remarks"}>
          <Input.TextArea placeholder="Remarks" />
        </Form.Item>
        {/* <Form.Item label="Images">
          <Upload>
            <Button icon={<UploadOutlined />}>Select files to upload</Button>
          </Upload>
        </Form.Item> */}
 
          </Form>
          {/* <Button type="primary"  onClick={handleSubmit}>
            Submit
          </Button> */}
        </Modal>
        <RentModal
        visible={secondModalVisible}
        onOk={handleSubmit}
        onCancel={handleSecondModalCancel}
      />
      </div>
     
    );
};

export default Moreinfo;

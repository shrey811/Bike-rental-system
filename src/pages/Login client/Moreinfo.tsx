import { background } from "@cloudinary/base/qualifiers/focusOn";
import { Button, Col, DatePicker, Form, Input, message, Modal, Row } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Bike } from "../../models/Inventory";
import { rentModel } from "../../models/Rent";
import { API_URL } from "../../Services/ajaxservice";
import { getCards, getUser } from "../../Services/axios";
import { CustomCard } from "../../Shared/Moreinfolayout";

import RentModal from "../Context/Khalti.payment";

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
  const [image, setImage] = useState<File | null>(null);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const modalParam = searchParams.get('modal');
    if (modalParam === 'open') {
      setVisible(true);
    }
  }, [location.search]);

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
    form.validateFields()
      .then(() => {
        setVisible(false);
        setSecondModalVisible(true);
      })
      .catch((error) => {
        console.log('Validation error:', error);
      });
    // setVisible(false);
    // setSecondModalVisible(true);
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

  const onFinish = async (value: any) => {
    setIsLoading(true)

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
        const formData = await form.validateFields();
        const data = await response.json();
        const rental: rentModel = {
          rentedOn: formData.rentedOn,
          rentedUntil: formData.rentedUntil,
          remarks: formData.remarks,
          bikeId: selectedCard.id,
          price: selectedCard.price,
          userId: 2,
          imageUrl: data.url,
        };

        try {
          const response = await axios.post(`${API_URL}/Rent/rent`, rental);
          console.log(response);
          // show success message
        } catch (error) {
          console.error(error);
          // show error message
        }

        history.push("/inventory");
        // Show success message
        Modal.success({
          content: "Thanks for renting!",
        });
        localStorage.setItem("hasRentOrder", "true");
        console.groupCollapsed("My Logs");
        console.log(localStorage.getItem("hasRentOrder"));
        console.groupEnd();
      };
    } catch (error) {
      console.error(error);
      // show error message
    }
    setIsLoading(false);
  }

  return (
    <div>
      <Row style={{ backgroundColor: "black", color: "white" }}>
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
        <Col xl={12}></Col>
        {/* <Col>
          <Button
            style={{
              backgroundColor: "darkcyan",
              color: "white",
            }}
            onClick={showModal}
          >
            Rent now
          </Button>
        </Col> */}
      </Row>
      <Modal
        title="Please Fill The Following Information"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Form form={form} labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }} onFinish={onFinish} >
          <Form.Item label="Rental date" name={"Rente On"} rules={[{ required: true }]}>
            <DatePicker onChange={handleRentalDatesChange} />
          </Form.Item>

          <Form.Item label="Citizen Ship OR License" name="Image" rules={[{ required: true }]}>
            <div>
              <div>
                <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} />
                {/* <button onClick={handleImageChange}>Upload</button> */}
              </div>
            </div>
          </Form.Item>
          <Form.Item label="Rent until" name={"Rent Until"} rules={[{ required: true }]}>
            <DatePicker onChange={handleRentalDatesChange} />
          </Form.Item>
          <Form.Item label="Price">
            <Input disabled value={selectedCard.price} />
          </Form.Item>
          <Form.Item label="Remarks" name={"Remarks"} rules={[{ required: true }]}>
            <Input.TextArea placeholder="For any extra help like delevery" />
          </Form.Item>

        </Form>

      </Modal>
      <RentModal
        visible={secondModalVisible}
        onOk={onFinish}
        onCancel={handleSecondModalCancel}

      />
    </div>
  );
};

export default Moreinfo;

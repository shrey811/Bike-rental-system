import { useState, useEffect } from 'react';
import { Button, Form, Input, Modal, Rate, Select } from 'antd';
import axios from 'axios';
import { API_URL } from '../../Services/ajaxservice';
import Inventory from './inventory';
import { Bike } from '../../models/Inventory';
import { useHistory } from 'react-router-dom';

const Popup = () => {
  const [visible, setVisible] = useState(false);
  const [bikes, setBikes] = useState<Bike[]>([]);
  const history = useHistory();
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    const hasRentOrder = localStorage.getItem('hasRentOrder');

    if (hasRentOrder) {
      setVisible(true);
        localStorage.removeItem('hasRentOrder');
        console.groupCollapsed('My Logs');

        console.log('hasRentOrder');
        console.groupEnd();
    }
  }, []);

  const handleOk = () => {
    setVisible(false);
  };


 

  useEffect(() => {
    async function fetchBikes() {
      const response = await axios.get(`${API_URL}/bike`);
      setBikes(response.data);
    }
    fetchBikes();
  }, []);


 

  const onFinish = async (values: any) => {
    setSubmitting(true);
    try {
      const response = await axios.post(`${API_URL}/review`, values);
      console.log("Review submitted:", response.data);
      form.resetFields();
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
    setSubmitting(false);
    history.push('/dashboard');
  };

  return (
    <Modal
      title="Thank You!"
      visible={visible}
      onOk={handleOk}
    >
      <p>Thank you for your rent order.</p>
      <p>Please give us review about how u liked the ride </p>
      <p>Please rate our services</p>
      <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item
        name="bikeId"
        label="Bike ID"
        rules={[{ required: true, message: "Please select a bike" }]}
      >
      <Select style={{ width: 200 }}>
      {bikes.map(bike => (
        <Select.Option key={bike.id} value={bike.id}>{bike.name}</Select.Option>
      ))}
      </Select>
      </Form.Item>

      <Form.Item
        name="message"
        label="Message"
        rules={[{ required: true, message: "Please enter a message" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        name="rating"
        label="Rating"
        rules={[{ required: true, message: "Please rate the bike" }]}
      >
        <Rate />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={submitting}>
          Submit
        </Button>
      </Form.Item>
    </Form>

    </Modal>
  );
};

export default Popup;

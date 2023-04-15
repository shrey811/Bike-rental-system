import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card, message } from 'antd';
import { API_URL } from '../../Services/ajaxservice';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


interface updatebike {
  id: number,
  firstName: string,
  lastName: string,
  password: string,
  email: string,
  phone: string
}
const EmailVerification = () => {
  const [showOTP, setShowOTP] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [email, setEmail] = useState('');
  const history = useHistory();
  const handleNextClick = (values: { email: any; otp: number; newPassword: string }) => {


    if (!showOTP) {
      // call the OTP API endpoint
      axios.post(`${API_URL}/otp`, { email: values.email })
        .then(response => {
          if (response) {
            setShowOTP(true);
            setEmail(values.email);
          } else {
            // show error message
          }
        })
        .catch(error => {
          // handle error
        });
    } else if (!showNewPassword) {
      // call the OTP verification API endpoint
      axios.get(`${API_URL}/otp/${values.otp}`)
        .then(response => {
          if (response.data === true) {
            setShowNewPassword(true);
          } else {
            message.error('Invalid OTP! Please try again.');
          }
        })
        .catch(error => {
          console.log(error.message);
          // handle error
        });
    } else {
      // find user with provided email and update password
      axios.get(`${API_URL}/user/users`)
        .then(response => {
          const users = response.data;
          const filteredUser = users.filter((user: { email: any; }) => user.email === email)[0];
          if (filteredUser) {
            // Found the user with the provided email, now update the password
            filteredUser.password = values.newPassword;
            const updatedUser: updatebike = {
              id: filteredUser.id,
              firstName: filteredUser.firstName,
              lastName: filteredUser.lastName,
              password: filteredUser.password,
              email: filteredUser.email,
              phone: filteredUser.phoneNumber,
            };
            // Make a post request to update the user with new details

            axios.put(`${API_URL}/user/update`, updatedUser)
              .then(response => {
                if (response) {
                  message.success('Password updated successfully.');
                  history.push("./");
                } else {
                  message.error('Password was not updated.');
                }
              })
              .catch(error => {
                console.log(error.message);
                // handle error
              });
          } else {
            // show error message that user not found with provided email
          }
        })
        .catch(error => {
          console.log(error.message);
          // handle error
        });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', backgroundImage: "linear-gradient(107deg, #f0f7f5, #bce1ff, #cddef5, #dadee3)" }}>
      <Col span={8}>
        <Card style={{
          boxShadow: "rgb(0 0 0 / 20%) 3px 5px 10px"
        }}>

          <Form
            onFinish={handleNextClick}

          >
            {!showOTP && (
              <>
                <h2> Please Enter Your Email </h2>
                <br>
                </br>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                  <Input />

                </Form.Item>

                <br>
                </br>


              </>
            )}
            {showOTP && !showNewPassword && (
              <>
                <h2> Please Enter Your OTP </h2>
                <br>
                </br>
                <Form.Item name="otp" label="OTP" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </>
            )}
            {showNewPassword && (
              <>
                <h2> Change Your Password</h2>
                <br>
                </br>
                <Form.Item name="newPassword" label="New Password" rules={[
                  { required: true, message: 'Please input your password!' },
                  { min: 8, message: 'Password should be at least 8 characters!' },
                ]}>
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  dependencies={['newPassword']}
                  rules={[
                    { required: true },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords do not match.'));
                      },
                    }),
                  ]}
                >

                  <Input.Password />
                </Form.Item>
              </>
            )}
            <Form.Item>
              <Button type="primary" htmlType='submit' >
                {showNewPassword ? 'Save' : 'Next'}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
export default EmailVerification;
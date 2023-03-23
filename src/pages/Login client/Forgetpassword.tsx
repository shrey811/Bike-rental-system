import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';

const EmailVerification = () => {
  const [showOTP, setShowOTP] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleNextClick = () => {
    if (!showOTP) {
      setShowOTP(true);
    } else if (!showNewPassword) {
      setShowNewPassword(true);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <Card>
          <h2>Email Verification</h2>
          <Form onFinish={handleNextClick}>
            {!showOTP && (
              <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                <Input />
              </Form.Item>
            )}
            {showOTP && !showNewPassword && (
              <Form.Item name="otp" label="OTP" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            )}
            {showNewPassword && (
              <>
                <Form.Item name="newPassword" label="New Password" rules={[{ required: true }]}>
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
              <Button type="primary" htmlType="submit">
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

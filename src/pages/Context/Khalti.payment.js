import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";
import { Col, Modal, Radio, Row } from "antd";

const RentModal = ({ visible, onOk, onCancel }) => {
    let checkout = new KhaltiCheckout(config);

    let buttonStyles = {
        backgroundColor: "purple",
        padding: "10px",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold",
        border: "1px solid white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
    };


    return (
        <div>
            <Modal
                title="Rent Confirmation"
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
            >
                <Row>
                    <Col span={8}>
                        <button
                            onClick={() => checkout.show({ amount: 10000 })}
                            style={buttonStyles}
                        >
                            Pay Via Khalti
                        </button>
                    </Col>
                    <Col span={3}>
                        <p style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                        }} >
                            or
                        </p>
                    </Col>
                    <Col>

                        <Radio>
                            Pay Via Cash
                        </Radio>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
}
export default RentModal;
import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";
import { Modal, Radio } from "antd";

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
            <button
                onClick={() => checkout.show({ amount: 10000 })}
                style={buttonStyles}
            >
                Pay Via Khalti
                </button>
                <br></br>
                or
                <Radio>
                    Pay Via Cash
                </Radio>
        </Modal>
        </div>
    );
}
export default RentModal;
import { MailOutlined, PhoneOutlined, PushpinOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import React, { ReactNode } from "react";
import MenuList from "../pages/Components/menu";
import "./ContentStyle.scss";
import FloatButton from "./Floatbutton";




interface Props {
  pageTitle: string;
  children: ReactNode;
  returnNode?: ReactNode;
  referenceTitle?: string;
}

const { Paragraph } = Typography;

const ContentLayout = ({
  pageTitle,
  children,
  returnNode,
  referenceTitle,
}: Props) => {
  const isReferenceTitle = () => {
    if (referenceTitle && referenceTitle !== "undefined") return true;
    return false;
  };

  // const headerStyle = () => {
  //   if (isReferenceTitle())
  //     return {
  //       paddingBottom: "0.5rem",
  //     };
  // };

  return (
    <>
      <React.Fragment>



        <div className="main_root">
          {/* <div className="menu_bar">
          <MenuList />
        </div> */}
          <div className="header_wrapper" >
            <div>
              <h1>{pageTitle}</h1>
              {isReferenceTitle() && (<Paragraph className="refenenceTitle">{`( ${referenceTitle} )`}</Paragraph>)}
            </div>

            <div>{returnNode}</div>
          </div>

          <div className="body_part">{children}</div>
        </div>
        <Footer className="footer" style={{ backgroundColor: "black", color: "white" }}>
          <h3 style={{ color: "white" }}>Bikers Choice Since 2013 @ABC</h3>

          <br></br>
          <br></br>

          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}>
              <h5> <PushpinOutlined />   Address:
              </h5>
              <br></br>
              <p style={{ fontSize: "17px" }}> Lalitpur - 14, Chapagau</p>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <h5> <MailOutlined />   Email:
              </h5>
              <br></br>
              <p style={{ fontSize: "17px" }}> Bikerchoice@gmail.com</p>
              <br></br>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <h5> <PhoneOutlined />   Contact:
              </h5>
              <br></br>
              <p style={{ fontSize: "17px" }}> 01-5230380 / 9847337476 / 9811308122 </p>
            </Col>
          </Row>

        </Footer>
        {/* <FloatButton /> */}
      </React.Fragment>
    </>
  );
};

export default ContentLayout;

// white bg wrapper
interface makeProps {
  children: ReactNode;
  padding?: number | string;
}
export const MakeBgWhite = ({ padding, children }: makeProps) => {
  return (

    <div
      style={{
        // background: "black",
        color: "white",
        padding: padding ? padding : "1rem",
        // background: "rgba(56, 56, 56, 0.8)",
        backgroundImage: " linear-gradient(to right top, #a6a6a6, #8f8f8f, #7a7979, #646464, #504f4f, #434242, #363535, #2a2929, #212020, #191818, #0f0f0f, #000000)",
        margin: "2rem",
        borderRadius: "20px",
      }}
    >
      {children}
    </div>
  );
};
interface makeProps {
  children: ReactNode;
  padding?: number | string;
}
export const MakeBgyellow = ({ padding, children }: makeProps) => {
  return (
    <div
      style={{
        background: "black",
        color: "white",

        padding: padding ? padding : "1rem",
        margin: " 2rem",
        borderRadius: "0.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "rgb(0 0 0 / 20%) 0px 3px   10px"
      }}
    >
      {children}
    </div>
  );
};
interface makeProps {
  children: ReactNode;
  padding?: number | string;
}
export const MakeBgblue = ({ padding, children }: makeProps) => {
  return (
    <div
      style={{
        // background: "black",
        color: "white",
        padding: padding ? padding : "1rem",
        background: "rgba(56, 56, 56, 0.8)",
        margin: "2rem",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // gap: "1rem",
        boxShadow: "rgb(0 0 0 / 20%) 0px 3px   10px",
        width: "97%",
      }}
    >
      {children}
    </div>
  );
};

interface makeProps {
  children: ReactNode;
  padding?: number | string;
}
export const MakeBggrey = ({ padding, children }: makeProps) => {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: padding ? padding : "1rem",

        margin: " 2rem",
        borderRadius: "0.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        boxShadow: "rgb(0 0 0 / 20%) 0px 3px   10px",
      }}
    >
      {children}
    </div>
  );
};


interface LayoutProps {
  imageUrl: string;
  header: string;
  description: string;
  imageRight?: boolean;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, imageUrl, header, description, imageRight = false }) => {
  return (
    <div className="layout">
      <div className={`row ${imageRight ? 'reverse' : ''}`}>
        <div className="col">
          <img src={imageUrl} alt="Content Image" />
        </div>
        <div className="col">
          <h1 style={{ color: "whitesmoke", fontFamily: "Mouse Memoirs" }}>{header}</h1>
          <p style={{ marginTop: "10px", fontFamily: "sans-serif" }}>{description}</p>
          <p style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>{children}</p>
        </div>
      </div>

    </div>
  );
};


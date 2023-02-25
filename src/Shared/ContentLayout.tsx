import { Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import React, { ReactNode } from "react";
import MenuList from "../pages/Components/menu";
import "./ContentStyle.scss";




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
        <Footer style={{ padding: "10em", textAlign: 'center', marginTop: "2em", backgroundColor: "grey" }}>Bikers Choice Since 2013 @ABC ABC</Footer>
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
        background: "white",
        padding: padding ? padding : "1rem",
        margin: "2rem",
        borderRadius: "0.2rem",
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
        background: "#e1e2c8",

        padding: padding ? padding : "1rem",
        margin: " 2rem",
        borderRadius: "0.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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
        background: "#91c0bc",
        padding: padding ? padding : "1rem",
        margin: " 2rem",
        borderRadius: "0.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem"
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
}

export const Layout: React.FC<LayoutProps> = ({ imageUrl, header, description, imageRight = false }) => {
  return (
    <div className="layout">
      <div className={`row ${imageRight ? 'reverse' : ''}`}>
        <div className="col">
          <img src={imageUrl} alt="Content Image" />
        </div>
        <div className="col">
          <h1>{header}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};


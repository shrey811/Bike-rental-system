import { DashboardOutlined, InfoCircleOutlined, LogoutOutlined, PhoneOutlined, PieChartOutlined } from '@ant-design/icons';
import { Col, Divider, Layout, Menu, PaginationProps, Row, Select, message } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { getCards } from '../../Services/axios';
import Logo from "../Logo/Logo.png";

import { Input } from 'antd';
// import { CustomCard } from '../Context /Card';
import { Bike } from '../../models/Inventory';
import { CustomCard } from '../Context/Card';

const Inventory: React.FC = () => {


  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(4);
  const [total, setTotal] = useState<number>(0);
  const { Search } = Input;



  const [collapsed, setCollapsed] = useState(false);

  const [cardData, setCardData] = useState<Bike[]>([]);

  const handleSearch = async (value: string) => {
    const { data } = await getCards(1, 10, value);
    setCardData(data);
    if (data.length === 0) {
      message.error("Oops! No bikes found.");
    };
  }

  const handleSort = async (value: string) => {
    const { data } = await getCards(1, 10, undefined, value);
    setCardData(data);
  };

  useEffect(() => {
    getCards(1, 10).then((response) => {
      setCardData(response.data);
    });
  }, []);

  // };

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };



  return (
    <div style={{
      backgroundColor: "black",
      height: "100vh"
    }}>
      <Layout style={{
        background: "black",
        color: "white",
      }}>

        <Layout hasSider  >
          <Sider breakpoint="sm"
            collapsible
            collapsed={collapsed}
            collapsedWidth="0"
            onCollapse={(collapsed: boolean) => setCollapsed(collapsed)}
            // trigger={null}
            onBreakpoint={(broken) => {
              console.log(broken);
            }}

            style={{
              backgroundColor: "black",
              color: 'white',
              height: '100vh',
              width: "200rem",
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,

            }}
          >
            <div  >
              <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                <img src={Logo}
                  width={"50%"} height={"80%"} />

                {/* <h3 style={{backgroundColor: "black", color: "white", marginLeft: "30px" }}>  BIKERS CHOICE</h3> */}
              </Row>
            </div>


            <Menu mode="inline" className="menuinventory" style={{ marginTop: "10rem", backgroundColor: "black", color: "white", fontSize: "20px" }}>
              <Menu.Item key="home">
                <Link to="/dashboard">
                  {collapsed ? <PieChartOutlined style={{ fontSize: "19px" }} /> : null}
                  <span> <PieChartOutlined style={{ fontSize: "19px" }} /> Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">
                  {collapsed ? <InfoCircleOutlined style={{ fontSize: "19px" }} /> : null}
                  <span> <InfoCircleOutlined style={{ fontSize: "19px" }} /> About</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="inventory">
                <Link to="/inventory">
                  {collapsed ? <DashboardOutlined style={{ fontSize: "19px" }} /> : null}
                  <span> <DashboardOutlined style={{ fontSize: "19px" }} /> Inventory</span>
                </Link>

              </Menu.Item>
              <Menu.Item key="Contact">
                <Link to="/contact-us">
                  {collapsed ? <DashboardOutlined style={{ fontSize: "19px" }} /> : null}
                  <span> <PhoneOutlined style={{ fontSize: "19px" }} /> Contact</span></Link>
              </Menu.Item>
              <Divider style={{ backgroundColor: "black", marginTop: "25rem" }} />
              <Menu.Item key="logout" >
                <Link to="/">
                  {collapsed ? <LogoutOutlined style={{ fontSize: "15px" }} /> : null}
                  <span style={{ fontSize: "15px" }}><LogoutOutlined style={{ fontSize: "15px" }} /> Logout</span>
                </Link>

              </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
        <Layout style={{
          marginLeft: collapsed ? 90 : 200,
          transition: 'margin 0.2s',
          backgroundColor: "	rgba(0.0, 0.0, 0.0, 1.0)",
        }}  >

          {/* <Header style={{ padding: 0, background: "rgb(230, 227, 227)", display: "flex", alignItems: "center", justifyContent: "START" }}>

          <h2> INVENTORY </h2>

        </Header> */}


          <Content
            style={{
              // margin: collapsed ? '24px 16px' : '24px calc(15% + 10px)',
              padding: 24,
              minHeight: 280,
              background: ' black',
              color: 'white',
              transition: 'margin 0.2s',
              maxWidth: collapsed ? '90vw' : '100vw',
              backgroundColor: "	rgba(0.0, 0.0, 0.0, 1.0)",

            }}
          >



            <Row gutter={[16, 16]} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }} >
              <Col xs={24} sm={26} md={24} lg={24} xl={12} style={{ display: "flex", justifyContent: "flex-start", backgroundColor: "black", color: "white" }}>
                <h2 style={{
                  marginLeft: "4rem",
                  marginRight: "1rem",
                  color: "white",
                  fontSize: "16px"
                }}> SORT BY :-</h2>
                <Select
                  dropdownMatchSelectWidth
                  defaultValue="Price"
                  style={{ width: "20rem", backgroundColor: "black", color: "white" }}
                  onChange={handleSort}
                  options={[
                    {
                      value: 'rating',
                      label: 'Rating',
                    },
                    {
                      value: 'milage',
                      label: 'Milage',
                    },
                    {
                      value: 'price',
                      label: 'Price',
                    },
                  ]}
                />
              </Col>
              <Col xs={24} sm={26} md={24} lg={24} xl={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                {/* <Search
                placeholder="Search bikes"
                allowClear
                // onSearch={handleSearch}
                style={{ width: 200, margin: '0 20px' }}
              ></Search> */}

                {/* 
    <Search
  placeholder="Search inventory"
  onSearch={(value: any ) => {
    getCards(value);
    // setPage(1);
  }}
  enterButton
  allowClear
/> */}
                <Search
                  placeholder="Search inventory"
                  onSearch={handleSearch}
                  enterButton
                  allowClear
                  style={{ width: 200, margin: '0 20px', backgroundColor: "black", color: "white" }}

                />
              </Col>
              {cardData.length === 0 && <div>Oops! No bikes found.</div>}

              {cardData.map((card) => (
                <Col xs={24} md={24} lg={12} xl={7} key={card.id}>
                  <CustomCard

                    id={card.id}
                    name={card.name}
                    imageUrl={card.imageUrl}
                    rating={card.rating}
                    kmRun={card.kmRun}
                    milage={card.milage}
                    numberPlate={card.numberPlate}
                    brandId={card.brandId}
                    // brandName={card.brandName}
                    description={card.description}
                    rentalStatus={card.rentalStatus}
                    price={card.price} />
                </Col>
              ))}
            </Row>


            {/* <Pagination
            style={{ textAlign: 'end', marginTop: "20px", marginBottom: "20px" }}
            current={page}
            pageSize={pageSize}
            total={total}
            // onChange={handlePageChange} onChange={handlePageChange}
            showSizeChanger
            pageSizeOptions={['10', '20', '50']}
            itemRender={itemRender}

          /> */}
          </Content>


        </Layout>

      </Layout >
    </div>
  )
}

export default Inventory





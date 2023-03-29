import { DashboardOutlined, InfoCircleOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PhoneOutlined, PieChartOutlined } from '@ant-design/icons';
import { Avatar, Badge, Col, Divider, Layout, Menu, Pagination, PaginationProps, Row, Select, Space } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { getCards } from '../../Services/axios';
import MenuList from '../Components/menu';
import Logo from "./Logo.png";

import { Input } from 'antd';
// import { CustomCard } from '../Context /Card';
import axios from 'axios';
import { API_URL } from '../../Services/ajaxservice';
import { CustomCard } from '../Context/Card';
import { Bike } from '../../models/Inventory';

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
  };

  const handleSort = async (value: string) => {
    const { data } = await getCards(1, 10, undefined, value);
    setCardData(data);
  };

  useEffect(() => {
    getCards(1, 10).then((response) => {
       setCardData(response.data);
    }); 
  }, []);

  // useEffect(() => {
  //   axios.get(`${API_URL}/bike`).then((response) => {
  //     setData(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //    async function fetchCards(searchText?: string) {
  //     const { data, total } = await getCards(page, pageSize);
  //     setCardData(data);
  //     setTotal(total);
  //   };
  //   fetchCards();
  // }, [page, pageSize]);
  // function handlePageChange(page: number, pageSize?: number) {
  //   setPage(page);
  //   // default to 10 if pageSize is not specified
  // }

  // const handleSort = (field) => {
  //   const sortedData = [...data].sort((a, b) => {
  //     if (sortOrder === "asc") {
  //       return a[field] - b[field];
  //     } else {
  //       return b[field] - a[field];
  //     }
  //   });
  //   setData(sortedData);
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
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
    <Layout>

      <Layout hasSider >
        <Sider breakpoint="sm"
          //  collapsible
          // collapsed={collapsed}
          collapsedWidth="0"
          onCollapse={(collapsed: boolean) => setCollapsed(collapsed)}
          // trigger={null}
          onBreakpoint={(broken) => {
            console.log(broken);
          }}

          style={{
            backgroundColor: "black",
            color:'white',
            height: '100vh',
            width:"200rem",
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,

          }}
        >
          <div  >
            <Row>
            <img src={Logo}
                                width={"170rem"} height={"85rem"} />

              {/* <h3 style={{backgroundColor: "black", color: "white", marginLeft: "30px" }}>  BIKERS CHOICE</h3> */}
            </Row>
          </div>


          <Menu mode="inline" style={{ marginTop: "10rem", backgroundColor: "black", color: "white", fontSize: "20px",marginLeft:"25px" }}>
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
            <Col xs={24} sm={26} md={24} lg={24} xl={12} style={{ display: "flex", justifyContent: "flex-start" }}>
            <Select
      dropdownMatchSelectWidth
      defaultValue="Price"
      style={{ width: "20rem" }}
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
                style={{ width: 200, margin: '0 20px',backgroundColor:"black",color:"white" }}
      />
            </Col>

            {cardData.map((card) => (
              <Col xs={24} md={12} lg={6} key={card.id}>
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


          <Pagination
            style={{ textAlign: 'end', marginTop: "20px", marginBottom: "20px" }}
            current={page}
            pageSize={pageSize}
            total={total}
            // onChange={handlePageChange} onChange={handlePageChange}
            showSizeChanger
            pageSizeOptions={['10', '20', '50']}
            itemRender={itemRender}

          />
        </Content>
      

      </Layout>

    </Layout >
  )
}

export default Inventory





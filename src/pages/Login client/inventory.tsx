import { DashboardOutlined, InfoCircleOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons';
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
import CustomCard from '../Context /Card';

import { Input } from 'antd';


const Inventory: React.FC = () => {

  const [cardData, setCardData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);
  const [total, setTotal] = useState<number>(0);
  const { Search } = Input;

  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    async function fetchCards() {
      const { data, total } = await getCards(page, pageSize);
      setCardData(data);
      setTotal(total);
    };
    fetchCards();
  }, [page, pageSize]);
  function handlePageChange(page: number, pageSize?: number) {
    setPage(page);
    // default to 10 if pageSize is not specified
  }

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Layout>

      <Layout hasSider >
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
            backgroundColor: "white",
            height: '100vh',
            width: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="logo" >
            <Row>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOu5OD_aXGOn6A-2WAsF5xTldronHXQzq9Q&usqp=CAU'
                width={"70rem"} height={"60rem"} />

              <h3>  BIKERS CHOICE</h3>
            </Row>
          </div>


          <Menu mode="inline" style={{ marginTop: "10rem", backgroundColor: "white", color: "black", fontSize: "19px" }}>
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
            <Divider style={{ backgroundColor: "black", marginTop: "30rem" }} />
            <Menu.Item key="logout" >
              <Link to="/">
                {collapsed ? <LogoutOutlined style={{ fontSize: "15px" }} /> : null}
                <span style={{ fontSize: "15px" }}><LogoutOutlined style={{ fontSize: "15px" }} /> Logout</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
      <Layout className="site-layout" >

        <Header style={{ padding: 0, background: "rgb(230, 227, 227)", display: "flex", alignItems: "center", justifyContent: "START" }}>



        </Header>


        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: ' rgb(255, 255, 255)'
          }}
        >



          <Row gutter={[16, 16]} style={{ marginLeft: " 12rem", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }} >
            <Col xs={24} sm={26} md={24} lg={24} xl={12} style={{ display: "flex", justifyContent: "flex-start" }}>
              <Select
                dropdownMatchSelectWidth
                defaultValue="Price"
                style={{ width: "20rem" }}
                onChange={handleChange}
                options={[
                  {
                    value: 'Price',
                    label: 'Price',
                  },
                  {
                    value: 'Rating',
                    label: 'Rating',
                  },
                  {
                    value: 'KM/Milage',
                    label: 'Disabled',
                  },

                ]}
              />
            </Col>
            <Col xs={24} sm={26} md={24} lg={24} xl={12} style={{ display: "flex", justifyContent: "flex-end" }}>
              <Search
                style={{ width: "20rem" }} ></Search>
            </Col>

            {
              cardData.map((card) => (
                <Col xs={24} md={12} lg={6} key={card.id} style={{ marginRight: "10px" }}>
                  <CustomCard

                    title={card.title}
                    body={card.body}
                    imageUrl1="https://images.unsplash.com/photo-1547549082-6bc09f2049ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=601" imageUrl2={''}
                  />
                </Col>
              ))
            }
          </Row>


          <Pagination
            style={{ textAlign: 'end', marginTop: "20px", marginBottom: "20px" }}
            current={page}
            // pageSize={pageSize}
            total={total}
            onChange={handlePageChange}
            showSizeChanger
            // pageSizeOptions={['10', '20', '50']}
            itemRender={itemRender}

          />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Bikers Choice Since 2013 @ABC ABC</Footer>

      </Layout>

    </Layout >
  )
}

export default Inventory





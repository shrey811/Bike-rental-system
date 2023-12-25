import { DashboardOutlined, InfoCircleOutlined, LoginOutlined, LogoutOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { background } from '@cloudinary/base/qualifiers/focusOn';
import { Col, Input, Menu, MenuProps, Row } from 'antd';

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Bike } from '../../models/Inventory';
import { useAuth } from '../../Services/Authprovider';
import { getCards } from '../../Services/axios';

import Logo from "./Logo.png";



type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const MenuList = () => {

  const { isAuthenticated } = useAuth();


  return (
    <div style={{
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: "black",

      color: "white",
    }}>
      <Row  >
        <Col  >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "black", color: "white", boxShadow: "rgb(255 255 255 / 22%) 0px 3px 10px" }} >
            <Col span={1}></Col>
            <Col span={2}  >


              {/* <img src={Logo}
                width={"120rem"} height={"77rem"} /> */}


            </Col>


            <Menu mode="horizontal" className='menu'>
              <Menu.Item key="home">
                <Link to="/dashboard"> < PieChartOutlined /> Home</Link>
              </Menu.Item>

              <Menu.Item key="about">
                <Link to="/about"> < InfoCircleOutlined /> About</Link>
              </Menu.Item>

              <Menu.Item key="inventory">
                <Link to="/inventory"> < DashboardOutlined /> Inventory</Link>
              </Menu.Item>

              <Menu.Item key="Contact">
                <Link to="/contact-us"> < DashboardOutlined /> Contact</Link>
              </Menu.Item>

            </Menu>

            <Col >

            </Col>
            <Menu className='menu'>
              {isAuthenticated ? (
                <>
                  <Menu.Item key="logout" style={{ display: 'flex', alignItems: "flex-end", justifyContent: "flex-end" }}>
                    <Link to="/"><LogoutOutlined /> Logout</Link>
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item key="login" style={{ float: 'right' }}>
                    <Link to="/">  <UserOutlined /> Login</Link>
                  </Menu.Item>
                  <Menu.Item key="register" style={{ float: 'right' }}>
                    <Link to="/register"> < LoginOutlined /> Sign In</Link>
                  </Menu.Item>
                </>
              )}
            </Menu>
          </div>



        </Col>
      </Row >


    </div >

  )

}

export default MenuList
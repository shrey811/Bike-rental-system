import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Card, Col, Pagination, Row, Select } from 'antd'
import React from 'react'
import Swiper, { EffectCoverflow } from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ContentLayout from '../../Shared/ContentLayout';


const Inventory = () => {

    return (
        <ContentLayout pageTitle={' Bike and Motorcycle Rental Services '} >
            <Select className="search_box" showSearch ></Select>

            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card hoverable
                            style={{ width: 300 }}
                            cover={
                                <img src="https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" />

                            } bordered={false} actions={[
                                <Button style={{ height: "2rem" }}>
                                    <SettingOutlined key="setting" /> ENQUIRE NOW
                                </Button>

                            ]}>
                            {/* {carsdata.map((item: { id: any; }) => (
              <Bikes item={item} key={item.id} /> */}
            {/* ))} */}
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable
                            style={{ width: 300 }}
                            cover={
                                <img src="https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" />

                            } bordered={false}
                            actions={[
                                <Button style={{ height: "2rem" }}>
                                    <SettingOutlined key="setting" /> ENQUIRE NOW
                                </Button>

                            ]}>

                            Card content
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card hoverable
                            style={{ width: 300 }}
                            cover={
                                <img src="https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" />

                            } bordered={false}
                            actions={[
                                <Button style={{ height: "2rem" }}>
                                    <SettingOutlined key="setting" /> ENQUIRE NOW
                                </Button>

                            ]}>
                            Card content
                        </Card>
                    </Col>
                </Row>
            </div>

        </ContentLayout>
    )
}

export default Inventory



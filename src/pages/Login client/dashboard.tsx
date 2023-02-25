import React, { useEffect, useState } from "react";
// Import Swiper React components

// Import Swiper styles



// import required modules
import { CalendarOutlined, ContainerOutlined, DesktopOutlined, EditOutlined, EllipsisOutlined, EnvironmentOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Carousel, Col, FloatButton, Pagination, PaginationProps, Row } from "antd";
import Meta from "antd/es/card/Meta";
import ContentLayout, { MakeBgblue, MakeBgWhite, MakeBgyellow } from "../../Shared/ContentLayout";
import Textstyles from "../Components/textstyles";
import { getCards } from "../../Services/axios";
import { CustomCard } from "../Context /Card";
import MenuList from "../Components/menu";






export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const [theme, setTheme] = useState('light');
    const [cardData, setCardData] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(3);
    const [total, setTotal] = useState<number>(0);


    const handleRentClick = () => {
        // logic for opening rental page goes here
        console.log("Opening rental page...");
    };

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
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const contentStyle: React.CSSProperties = {
        height: '93vh',
        width: '100vw',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',

    };
    return (

        <>
            <MenuList />
            {/* <MenuList></MenuList> */}
            <ContentLayout pageTitle="" returnNode={<FloatButton onClick={toggleTheme} icon={theme === 'light' ? <DesktopOutlined /> : <ContainerOutlined />} />}>

                <Carousel autoplay style={{ marginBottom: "2rem" }} >
                    <div className="carousel">

                        <img style={contentStyle} src="https://images.unsplash.com/photo-1508357941501-0924cf312bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />

                        <div className="click">
                            <Textstyles />

                        </div>
                    </div>
                    <div className="carousel" >
                        <img style={contentStyle} src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                        <div className="click">
                            <Textstyles></Textstyles>




                        </div>
                    </div>
                    <div className="carousel" >
                        <img style={contentStyle} src="https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />

                        <div className="click">
                            <Textstyles></Textstyles>


                        </div>
                    </div>
                    <div className="carousel">
                        <img style={contentStyle} src="https://images.unsplash.com/photo-1547549082-6bc09f2049ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
                        <div className="click">
                            <Textstyles></Textstyles>


                        </div>
                    </div>

                </Carousel>



                <MakeBgblue>

                    <h4 style={{ fontFamily: "merriweather" }}> Trending Now</h4>
                    <div style={{

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>

                        {
                            cardData.map((card) => (
                                <Col xs={24} md={12} lg={6} key={card.id} style={{ marginRight: "10px" }}>
                                    <CustomCard

                                        title={card.title}
                                        body={card.body}
                                        imageUrl1="https://images.unsplash.com/photo-1547549082-6bc09f2049ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=601"
                                        imageUrl2={''}
                                        onRent={handleRentClick}
                                    />
                                </Col>
                            ))
                        }
                    </div>

                    <Pagination
                        style={{ alignSelf: "end" }}
                        current={page}
                        // pageSize={pageSize}
                        total={total}
                        onChange={handlePageChange}
                        // showSizeChanger
                        // pageSizeOptions={['10', '20', '50']}
                        itemRender={itemRender}

                    />


                </MakeBgblue>
                <MakeBgyellow>
                    <Row gutter={16}>
                        <h1>20+ BIKE TYPE & BRANDS </h1>
                        <Col xs={12} md={12} lg={6} xl={6}>
                            <Card hoverable style={{ width: 300, height: "250px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <CalendarOutlined style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
                                <p>Reservation Anytime You Want
                                </p>
                                <p>24/7 Online Reservationt</p>
                            </Card>
                        </Col>
                        <Col xs={12} md={12} lg={6} xl={6}>
                            <Card hoverable style={{ width: 300, height: "250px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <EnvironmentOutlined style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
                                <p>Lots of Picking Locations

                                </p>
                                <p>250+ Locations</p>
                            </Card>
                        </Col>

                    </Row>
                </MakeBgyellow>
                <MakeBgWhite>
                    <Row gutter={16}>
                        <Col span={4}></Col>

                        <Col span={10} style={{ display: "flex", alignItems: "center", justifyContent: "center", }} >

                            <p >
                                We know the difference is in the details and thats why our bike rental services,
                                in the tourism and business industry, stand out for their quality and good taste.

                                We working since 2016
                                All brand & type bike in our garage
                                1.000+ picking locations around the nepal
                            </p>

                        </Col>

                        <Col span={10} >

                            <img src="https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code_335657-2370.jpg?w=2000"
                                width={"50%"} height={"100%"} />


                        </Col>



                    </Row>
                </MakeBgWhite>



                <div className={`theme-${theme}`}>
                    <FloatButton onClick={toggleTheme} />
                </div>

            </ContentLayout>
        </>
    );
}

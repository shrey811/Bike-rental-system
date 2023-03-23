import React, { useEffect, useState } from "react";
// Import Swiper React components

// Import Swiper styles



// import required modules
import { CalendarOutlined, ContainerOutlined, DesktopOutlined, EditOutlined, EllipsisOutlined, EnvironmentOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Carousel, Col, FloatButton, Pagination, PaginationProps, Row } from "antd";
import Meta from "antd/es/card/Meta";
import ContentLayout, { MakeBgblue, MakeBggrey, MakeBgWhite, MakeBgyellow } from "../../Shared/ContentLayout";
import Textstyles from "../Components/textstyles";
import { getCards } from "../../Services/axios";
// import { CustomCard } from "../Context /Card";
import MenuList from "../Components/menu";
import { useHistory } from "react-router-dom";
import { CustomCard } from "../Context/Card";



const PAGE_SIZE = 10;


export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);


    const [cardData, setCardData] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);




    const handleRentClick = () => {
        // logic for opening rental page goes here
        console.log("Opening rental page...");
    };




    useEffect(() => {
        async function fetchCards() {
            const { data, total } = await getCards(page, PAGE_SIZE);
            // sort the cards by rating in descending order
            const sortedData = data.sort((a, b) => b.rating - a.rating);
            // display only the first 6 cards
            const slicedData = sortedData.slice(0, 3);
            setCardData(slicedData);
            setTotal(total);
        };
        fetchCards();
    }, [page]);


    function handlePageChange(page: number) {
        setPage(page);
        // default to 10 if pageSize is not specified
    }


    const itemRender = (current: number, type: string, originalElement: any) => {
        if (type === "prev") {
            return <a>Previous</a>;
        }
        if (type === "next") {
            return <a>Next</a>;
        }
        return originalElement;
    };


    // const toggleTheme = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    // };
    const contentStyle: React.CSSProperties = {
        height: '70vh',
        width: '70vw',
        color: 'white',
        // lineHeight: '160px',
        textAlign: 'center',
        background: 'white',
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: "15rem"

    };

    const history = useHistory();
    function handleNavigate() {
        history.push('/inventory');
    }
    function handleNavigation() {
        history.push('/about');
    }
    return (

        <>
            <MenuList />
            {/* <MenuList></MenuList> */}
            <ContentLayout pageTitle="" >
                <Row style={{ gap: "5rem" }}>
                    <Col xl={24} >
                        <Textstyles></Textstyles>
                    </Col>
                    <Col xl={24} >
                        <Carousel autoplay style={{ marginBottom: "2rem" }} >
                            <div className="carousel">

                                <img style={contentStyle} src="https://www.pngarts.com/files/4/Motorcycle-PNG-Transparent-Image.png" />
                                <div className="click">
                                    <Button className="dashbutton" onClick={handleNavigate}> RENT NOW </Button>

                                </div>

                            </div>
                            <div className="carousel" >
                                <img style={contentStyle} src="https://www.pngarts.com/files/4/Motorcycle-Free-PNG-Image.png" />

                                <div className="click">

                                    <Button className="dashbutton" onClick={handleNavigate}> RENT NOW </Button>
                                </div>
                            </div>
                            <div className="carousel" >
                                <img style={contentStyle} src="https://www.pngarts.com/files/1/Yamaha-Motorcycle-PNG-Photo.png" />


                                <div className="click">

                                    <Button className="dashbutton" onClick={handleNavigate}> RENT NOW </Button>
                                </div>
                            </div>
                            <div className="carousel">
                                <img style={contentStyle} src="https://www.pngarts.com/files/4/Motorcycle-PNG-Image-Background.png" />
                                <div className="click">
                                    <Button className="dashbutton" onClick={handleNavigate}> RENT NOW </Button>

                                </div>
                            </div>

                        </Carousel>
                    </Col>
                </Row>

                {/* <Row >


                    <Col xl={16} >

                        <img src="https://www.pngitem.com/pimgs/m/23-230912_motorcycle-transparent-background-bikes-png-for-picsart-png.png" style={{ width: "68vw", height: "83vh", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }} />
                    </Col>

                    <Col xl={8} style={{ backgroundColor: "rgba(246, 246, 246 )" }}>

                        <div style={{ marginTop: "20rem", display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Row style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "30px" }}>
                                <Col xl={24}>
                                    <h4>FIND A HIGH QUALITY BIKE AND RENT NOW</h4>
                                </Col>
                                <Col span={6} xl={24}>
                                    <p>Biker Choice offers repair and maintenance services to keep your motorcycle running smoothly. Their full-service garage has experienced mechanics, state-of-the-art equipment, and high-quality parts. They also rent motorcycles and offer a range of accessories and upgrades. Renters can trust that bikes are well-maintained and ready to ride. With Biker Choice, you get rental bikes and garage services in one place.</p>
                                </Col>

                                <Button className="filled_edit_button" onClick={handleNavigate}> RENT NOW </Button>
                                <Button className="filled_edit_button" onClick={handleNavigation}> ABOUT US </Button>
                            </Row>
                        </div>
                    </Col >

                    {/* <img src='https://img.freepik.com/free-vector/skeleton-rigind-motorbike_1415-115.jpg?w=826&t=st=1672655650~exp=1672656250~hmac=82ad28b19fffc37fd8c1341aaafa1a43618cbb1b162ca66686e010a1b36a1b66'
                            width={"100%"} height={"100%"} /> */}
                {/* </Row> */}

                <MakeBgblue>

                    <h4 style={{ fontFamily: "merriweather" }}> Trending Now</h4>
                    <div style={{

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>

                        {
                            cardData.map((card) => (
                                <Col  key={card.id}>
                                    <CustomCard
                                        id={card.id}
                                        name={card.name}
                                        imageUrl={card.imageUrl}
                                        rating={card.rating}
                                        kmRun={card.kmRun}
                                        milage={card.milage}
                                        numberPlate={card.numberPlate}
                                        brandId={0}
                                        // brandName={card.brandName}
                                        description={card.description}
                                        rentalStatus={card.rentalStatus}
                                        price={card.price} />
                                </Col>
                            ))
                        }

                    </div>
                    <Pagination
                        style={{ alignSelf: "end" }}
                        current={page}
                        pageSize={PAGE_SIZE}
                        total={total}
                        onChange={handlePageChange}
                        showSizeChanger
                        pageSizeOptions={["10", "20", "50"]}
                        itemRender={itemRender}

                    />

                </MakeBgblue>
                <MakeBggrey >
                    <Row >


                        <Col xl={16} >

                            <img src="https://www.pngitem.com/pimgs/m/23-230912_motorcycle-transparent-background-bikes-png-for-picsart-png.png" style={{ width: "64vw", height: "83vh", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }} />
                        </Col>

                        <Col xl={8} style={{ backgroundColor: "rgba(246, 246, 246 )" }}>

                            <div style={{ marginTop: "15rem", display: "flex", alignItems: "center", justifyContent: "center" }} >
                                <Row style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "30px" }}>
                                    <Col xl={24}>
                                        <h4>FIND A HIGH QUALITY BIKE AND RENT NOW</h4>
                                    </Col>
                                    <Col span={6} xl={24}>
                                        <p>Biker Choice offers repair and maintenance services to keep your motorcycle running smoothly. Their full-service garage has experienced mechanics, state-of-the-art equipment, and high-quality parts. They also rent motorcycles and offer a range of accessories and upgrades. Renters can trust that bikes are well-maintained and ready to ride. With Biker Choice, you get rental bikes and garage services in one place.</p>
                                    </Col>

                                    <Button className="filled_edit_button" onClick={handleNavigate}> RENT NOW </Button>
                                    <Button className="filled_edit_button" onClick={handleNavigation}> ABOUT US </Button>
                                </Row>
                            </div>
                        </Col >

                        {/* <img src='https://img.freepik.com/free-vector/skeleton-rigind-motorbike_1415-115.jpg?w=826&t=st=1672655650~exp=1672656250~hmac=82ad28b19fffc37fd8c1341aaafa1a43618cbb1b162ca66686e010a1b36a1b66'
        width={"100%"} height={"100%"} /> */}
                    </Row>
                </MakeBggrey>
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
                    <h4 style={{ fontFamily: "merriweather", display: "flex", alignItems: "center", justifyContent: "center", }}>  Why choose us ?</h4>
                    <Row>
                        <Col span={10} style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>

                            <img src="https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code_335657-2370.jpg?w=2000"
                                width={"50%"} height={"100%"} />


                        </Col>
                        <Col span={10} style={{ display: "flex", alignItems: "center", justifyContent: "center", }} >

                            <p >
                                We know the difference is in the details and thats why our bike rental services,
                                in the tourism and business industry, stand out for their quality and good taste.

                                We working since 2016
                                All brand & type bike in our garage
                                1.000+ picking locations around the nepal
                            </p>

                        </Col>
                    </Row>
                </MakeBgWhite>






            </ContentLayout>
        </>
    );
}

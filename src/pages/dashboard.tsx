import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { ContainerOutlined, DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { FloatButton, Menu, MenuProps, MenuTheme } from "antd";
import { EffectCoverflow, Pagination } from "swiper";
import Dash from "./dash";


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

const items: MenuProps['items'] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
]
export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const [theme, setTheme] = useState<MenuTheme>('dark');
    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
    };

    return (
        <>
            <Menu mode="horizontal" items={items} />
            <div className="Dashboard">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{ width: "300px", height: "300px" }}>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "300px", height: "300px" }}>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "300px", height: "300px" }}>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "300px", height: "300px" }}>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "300px", height: "300px" }}>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "300px", height: "300px" }}>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "300px", height: "300px" }}>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "300px", height: "300px" }}>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "300px", height: "300px" }}>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Dash />
            <FloatButton onClick={() => console.log('click')} />
        </>
    );
}

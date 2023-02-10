import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { ContainerOutlined, DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { FloatButton, MenuProps, MenuTheme } from "antd";
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
                    <img src="https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }} >
                    <img src="https://images.unsplash.com/photo-1617109887854-f661d37fca2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" />
                </SwiperSlide>
                <SwiperSlide defaultValue={0} style={{ width: "300px", height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1610553556003-9b2ae8ef1b8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1609174470568-ac0c96458a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1627366197691-e0d5cee520bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1609174470568-ac0c96458a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1627366197691-e0d5cee520bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpa2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" />
                </SwiperSlide>
            </Swiper>

            <Dash />
            <FloatButton onClick={() => console.log('click')} />
        </>
    );
}

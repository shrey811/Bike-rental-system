// import { DashboardOutlined, InfoCircleOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PhoneOutlined, PieChartOutlined } from '@ant-design/icons';
// import { Avatar, Badge, Col, Divider, Layout, Menu, Pagination, PaginationProps, Row, Select, Space } from 'antd';
// import { Content, Footer, Header } from 'antd/es/layout/layout';
// import Sider from 'antd/es/layout/Sider';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { getCards } from '../../Services/axios';
// import MenuList from '../Components/menu';


// import { Input } from 'antd';
// import { CustomCard } from '../Context /Card';
// interface Cards {
//     id: number;
//     title: string;
//     body: string;
//     imageUrl1: string;
//     imageUrl2: string;
//     onRent: () => void;
//     rating: number;
//     kmRun: number;
//     milage: number;
// }

// const InventoryAdmin: React.FC = () => {

//     const [cardData, setCardData] = useState<any[]>([]);
//     const [page, setPage] = useState<number>(1);
//     const [pageSize, setPageSize] = useState<number>(12);
//     const [total, setTotal] = useState<number>(0);
//     const { Search } = Input;


//     const handleRentClick = () => {
//         // logic for opening rental page goes here
//         console.log("Opening rental page...");
//     };

//     const [collapsed, setCollapsed] = useState(false);
//     useEffect(() => {
//         async function fetchCards() {
//             const { data, total } = await getCards(page, pageSize);
//             setCardData(data);
//             setTotal(total);
//         };
//         fetchCards();
//     }, [page, pageSize]);
//     function handlePageChange(page: number, pageSize?: number) {
//         setPage(page);
//         // default to 10 if pageSize is not specified
//     }

//     const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
//         if (type === 'prev') {
//             return <a>Previous</a>;
//         }
//         if (type === 'next') {
//             return <a>Next</a>;
//         }
//         return originalElement;
//     };
//     const handleChange = (value: string) => {
//         console.log(`selected ${value}`);
//     };
//     return (
//         <>

//             <Row gutter={[16, 16]} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }} >
//                 <Col xs={24} sm={26} md={24} lg={24} xl={12} style={{ display: "flex", justifyContent: "flex-start" }}>
//                     <Select
//                         dropdownMatchSelectWidth
//                         defaultValue="Price"
//                         style={{ width: "20rem" }}
//                         onChange={handleChange}
//                         options={[
//                             {
//                                 value: 'Price',
//                                 label: 'Price',
//                             },
//                             {
//                                 value: 'Rating',
//                                 label: 'Rating',
//                             },
//                             {
//                                 value: 'KM/Milage',
//                                 label: 'Disabled',
//                             },

//                         ]}
//                     />
//                 </Col>
//                 <Col xs={24} sm={26} md={24} lg={24} xl={12} style={{ display: "flex", justifyContent: "flex-end" }}>
//                     <Search
//                         style={{ width: "20rem" }} ></Search>
//                 </Col>

//                 {cardData.map((card) => (
//                     <Col xs={24} md={12} lg={6} key={card.id}>
//                         <CustomCard
//                             id={card.id}
//                             name={card.name}
//                             imageUrl={card.imageUrl}
//                             rating={card.rating}
//                             kmRun={card.kmRun}
//                             milage={card.milage} onRent={function (): void {
//                                 throw new Error('Function not implemented.');
//                             }} numberPlate={''}
//                             brandId={0}
//                             // brandName={card.brandName}
//                             description={card.description} />
//                     </Col>
//                 ))}
//             </Row>


//             <Pagination
//                 style={{ textAlign: 'end', marginTop: "20px", marginBottom: "20px" }}
//                 current={page}
//                 // pageSize={pageSize}
//                 total={total}
//                 onChange={handlePageChange}
//                 showSizeChanger
//                 // pageSizeOptions={['10', '20', '50']}
//                 itemRender={itemRender}

//             />



//         </>
//     )
// }

// export default InventoryAdmin

import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Bike } from '../../models/Inventory';
import { getCards } from '../../Services/axios';


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Number Plate',
        dataIndex: 'numberPlate',
        key: 'numberPlate',
    },
    // {
    //     title: 'Brand ID',
    //     dataIndex: 'brandId',
    //     key: 'brandId',
    // },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
    },
    {
        title: 'KM Run',
        dataIndex: 'kmRun',
        key: 'kmRun',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Mileage',
        dataIndex: 'milage',
        key: 'milage',
    },
    {
        title: 'Image URL',
        dataIndex: 'imageUrl',
        key: 'imageUrl',
    },
    {
        title: 'Rental Status',
        dataIndex: 'rentalStatus',
        key: 'rentalStatus',
    },
];

const InventoryAdmin = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Bike[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setLoading(true);
        getCards(1, 10).then((inventory) => {
            setData(inventory.data);
            setTotal(inventory.total);
            setLoading(false);
        });
    }, []);

    return (
        <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            pagination={{
                total,
                pageSize: 10,
                onChange: (page) => {
                    setLoading(true);
                    getCards(page, 10).then((inventory) => {
                        setData(inventory.data);
                        setTotal(inventory.total);
                        setLoading(false);
                    });
                },
            }}
        />
    );
};

export default InventoryAdmin;

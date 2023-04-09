import React, { useEffect, useState } from 'react';
import { Table, Switch, Button, Badge, Select, Input } from 'antd';
import { Bike } from '../../models/Inventory';
import { getCards, rentBike } from '../../Services/axios';





const InventoryAdmin = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Bike[]>([]);
    const [total, setTotal] = useState(0);
    const { Search } = Input;
    const [cardData, setCardData] = useState<Bike[]>([]);

    const handleSearch = async (value: string) => {
        const { data } = await getCards(1, 10, value);
        setCardData(data);
    };

    const handleSort = async (value: string) => {
        const { data } = await getCards(1, 10, undefined, value);
        setCardData(data);
    };

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
            render: (url: string) => <img src={url} alt="Bike" width={100} />,
        },
        {
            title: 'Rental Status',
            dataIndex: 'rentalStatus',
            key: 'rentalStatus',
            render: (status: { value: any; }, record: any) => (
                <Badge color={status.value === 'Available' ? 'green' : 'red'} text={status.value} />
            ),
        },
        {
            title: 'Change Status',
            dataIndex: 'rentalStatus',
            key: 'rentalStatus',

            render: (status: { value: any; }, record: any) => (
                <>
                    {status.value === 'Rented' && (
                        <Button onClick={async () => {
                            await rentBike(record.id);
                            window.location.reload();
                        }}>Available Now</Button>
                    )}
                </>
            ),

        }

    ];
    // useEffect(() => {
    //     setLoading(true);
    //     getCards(1, 10).then((Bike) => {
    //         setData(Bike.data);
    //         setTotal(Bike.total);
    //         setLoading(false);
    //     });
    // }, []);


    useEffect(() => {
        setLoading(true);
        getCards(1, 10).then((response) => {
            // setData(response.data);
            setTotal(response.total);
            setCardData(response.data);
            setLoading(false);
        });
    }, []);

    return (
        <>
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
            <Search
                placeholder="Search inventory"
                onSearch={handleSearch}
                enterButton
                allowClear
                style={{ width: 200, margin: '0 20px' }}

            />
            <Table
                columns={columns}
                dataSource={cardData}
                loading={loading}

                pagination={{
                    total,
                    pageSize: 10,
                    onChange: (page) => {
                        setLoading(true);
                        getCards(page, 10).then((Bike) => {
                            // setData(Bike.data);
                            setTotal(Bike.total);
                            setLoading(false);
                            setCardData(Bike.data);
                        });
                    },
                }}
            />
        </>

    );
};

export default InventoryAdmin;

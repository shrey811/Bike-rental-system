import React, { useEffect, useState } from 'react';
import { Table, Switch, Button, Badge } from 'antd';
import { Bike } from '../../models/Inventory';
import { getCards, rentBike } from '../../Services/axios';





const InventoryAdmin = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Bike[]>([]);
    const [total, setTotal] = useState(0);


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
            setData(response.data);
            setTotal(response.total);
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
                    getCards(page, 10).then((Bike) => {
                        setData(Bike.data);
                        setTotal(Bike.total);
                        setLoading(false);
                    });
                },
            }}
        />
    );
};

export default InventoryAdmin;

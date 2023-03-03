

import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Bike } from '../../models/Inventory';
import { getCards } from '../../Services/axios';


const columns = [
    {
        title: 'Bikename',
        dataIndex: 'Bikename',
        key: 'Bikename',
    },
    {
        title: 'Username',
        dataIndex: 'Username',
        key: 'username',
    },
    {
        title: 'RentedOn',
        dataIndex: 'rating',
        key: 'rating',
    },
    {
        title: 'RentedUntil',
        dataIndex: 'kmRun',
        key: 'kmRun',
    },
    {
        title: 'Rental status',
        dataIndex: 'description',
        key: 'description',
    },

    {
        title: 'Remarks',
        dataIndex: 'imageUrl',
        key: 'imageUrl',
    },

];

const Rent = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setLoading(true);
        getCards(1, 10).then((inventory) => {
            // setData(inventory.data);
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
                    // getCards(page, 10).then((inventory) => {
                    //     setData(inventory.data);
                    //     setTotal(inventory.total);
                    //     setLoading(false);

                },
            }}
        />
    );
};

export default Rent;

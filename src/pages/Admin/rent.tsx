

import { Table } from 'antd';
import { useEffect, useState } from 'react';
import {  Rental } from '../../models/Rent';

import { getCards, getRent } from '../../Services/axios';


const columns = [
    {
        title: 'Bikename',
        dataIndex: 'bikeName',
        key: 'bikeName',
    },
    {
        title: 'Username',
        dataIndex: 'user',
        key: 'user',
    },
    {
        title: 'RentedOn',
        dataIndex: 'rentedOn',
        key: 'rentedOn',
    },
    {
        title: 'RentedUntil',
        dataIndex: 'rentedUntil',
        key: 'rentedUntil',
    },
    {
        title: 'Rental status',
        dataIndex: 'rentalstatus',
        key: 'rentalstatus',
    },

    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },

];

const Rent = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Rental[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setLoading(true);
        getRent(1, 10).then((RentResponse) => {
            setData(RentResponse.data);
            setTotal(RentResponse.total);
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
                    getRent(page, 10).then((RentResponse) => {
                        setData(RentResponse.data);
                        setTotal(RentResponse.total);
                        setLoading(false);
                    });
                 
                },
            }}
        />
    );
};

export default Rent;

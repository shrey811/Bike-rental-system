import { Table, Input } from 'antd';
import { useEffect, useState } from 'react';
import { Rental } from '../../models/Rent';

import { getCards, getRent } from '../../Services/axios';

const { Search } = Input;

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
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Image URL',
        dataIndex: 'imageUrl',
        key: 'imageUrl',
        render: (url: string) => <img src={url} width={100} />,
    },
];

const Rent = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Rental[]>([]);
    const [total, setTotal] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setLoading(true);
        getRent(1, 10).then((RentResponse) => {
            setData(RentResponse.data);
            setTotal(RentResponse.total);
            setLoading(false);
        });
    }, []);

    const handleSearch = (value: string) => {
        setSearchQuery(value);
    };

    const filteredData = data.filter((rental) =>
        rental.bikeName.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Search
                placeholder="Search by bike name"
                onSearch={handleSearch}
                style={{ marginBottom: 16 }}
            />
            <Table
                columns={columns}
                dataSource={filteredData}
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
        </>
    );
};

export default Rent;

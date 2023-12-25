
import React, { useEffect, useState } from 'react';
import { Table, Input, Button, Popconfirm, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { registration } from '../../models/registration';
import { user } from '../../models/user';
import { getUsers } from '../../Services/axios';
import axios from 'axios';

const { Column } = Table;

const UserList = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<user[]>([]);
    const [total, setTotal] = useState(0);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setLoading(true);
        getUsers(1, 10).then((user) => {
            const userData = JSON.parse(localStorage.getItem('userData') || '[]');

            setData(user.data);
            setTotal(userData.length);
            setLoading(false);
        })
    }, []);

    const handleDelete = async (id: number) => {
        try {
            // Make the delete request to the API endpoint
            await axios.delete(`https://localhost:7111/deleteuser/${id}`);
            // Optionally, update the table data after successful deletion
            // You may need to fetch the updated data from the server
            message.success('Bike deleted successfully');
        } catch (error) {
            console.error(error);
            message.error('Failed to delete bike');
        }
    };

    const handleSearch = (value: string) => {
        setSearchText(value);
    };

    return (
        <>
            <Input.Search
                placeholder="Search"
                allowClear
                onSearch={handleSearch}
                style={{ width: 300, marginBottom: 16 }}
            />
            <Table
                dataSource={data.filter((record) =>
                    Object.values(record).some((value) => value.toString().toLowerCase().includes(searchText.toLowerCase()))
                )}
                loading={loading}
                pagination={{ total, pageSize: 10 }}
            >
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column
                    title="Phone number"
                    dataIndex="phoneNumber"
                    key="phoneNumber"

                />
                <Column
                    title="Action"
                    key="action"
                    render={(text: any, record: any) => (
                        <Popconfirm
                            title="Are you sure you want to delete this user?"
                            onConfirm={() => handleDelete(record.id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="primary" danger>Delete</Button>
                        </Popconfirm>
                    )
                    }
                />
            </Table>
        </>
    );
};

export default UserList;


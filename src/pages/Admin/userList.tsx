// import React, { useEffect, useState } from 'react';
// import { Table } from 'antd';

// import { getCards, getUsers } from '../../Services/axios';
// import { registration } from '../../models/registration';
// import { user } from '../../models/user';


// const columns = [
//     {
//         title: 'firstname',
//         dataIndex: 'firstName',
//         key: 'firstName',
//     },
//     {
//         title: 'lastName',
//         dataIndex: 'lastName',
//         key: 'lastName',
//     },
//     // {
//     //     title: 'Brand ID',
//     //     dataIndex: 'brandId',
//     //     key: 'brandId',
//     // },
//     {
//         title: 'email',
//         dataIndex: 'email',
//         key: 'email',
//     },
//     {
//         title: 'phone',
//         dataIndex: 'phoneNumber',
//         key: 'phoneNumber',
//     },

// ];

// const UserList = () => {
//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState<user[]>([]);
//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         setLoading(true);
//         getUsers(1, 10).then((user) => {
//             setData(user.data);
//             setTotal(user.total);
//             setLoading(false);
//         });
//     }, []);

//     return (
//         <Table
//             columns={columns}
//             dataSource={data}
//             loading={loading}
//             pagination={{
//                 total,
//                 pageSize: 10,
//                 onChange: (page) => {
//                     setLoading(true);
//                     getUsers(page, 10).then((user) => {
//                         setData(user.data);
//                         setTotal(user.total);
//                         setLoading(false);
//                     });
//                 },
//             }}
//         />
//     );
// };

// export default UserList;
import React, { useEffect, useState } from 'react';
import { Table, Input, Button, Popconfirm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { registration } from '../../models/registration';
import { user } from '../../models/user';
import { getUsers } from '../../Services/axios';

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

    const handleDelete = async (record: user) => {
        setLoading(true);
        setData((prevData) => prevData.filter((user) => user.id !== record.id));
        setTotal((prevTotal) => prevTotal - 1);
        localStorage.setItem('userData', JSON.stringify(data.filter((user) => user.id !== record.id)));
        setLoading(false);
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
                    title="Registration Date"
                    dataIndex="registrationDate"
                    key="registrationDate"
                    render={(text: string) => new Date(text).toLocaleDateString()}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(text: any, record: user) =>
                        data.length > 0 ? (
                            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record)}>
                                <Button type="primary" danger>
                                    Delete
                                </Button>
                            </Popconfirm>
                        ) : null
                    }
                />
            </Table>
        </>
    );
};

export default UserList;


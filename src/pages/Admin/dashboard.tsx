import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { API_URL } from '../../Services/ajaxservice';
import { Card, Progress, Statistic } from 'antd';
import { AuditOutlined, CarOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

const DemoLine = () => {
  const [data, setData] = useState<{ Date: number; Rentals: any; }[]>([]);
  const [totalRentals, setTotalRentals] = useState(0);
  const [totalBikes, setTotalBikes] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    asyncFetch();

  }, []);


  const asyncFetch = () => {
    fetch(`${API_URL}/Rent/rented`)
      .then((response) => response.json())
      .then((json) => {
        // Group rentals by date and count the number of rentals in each group
        const countsByDate = json.reduce((counts: any, rental: any) => {
          const date = new Date(rental.rentedOn).toDateString();
          counts[date] = (counts[date] || 0) + 1;
          return counts;
        }, {});

        // Format the data for the chart
        const formattedData = Object.keys(countsByDate).map((date) => ({
          Date: new Date(date).getTime(),
          Rentals: countsByDate[date],
        })).sort((a, b) => a.Date - b.Date); // Sort the data by Date

        setData(formattedData);
        setTotalRentals(json.length); // Set the total number of rentals

      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });

    fetch(`${API_URL}/bike`)
      .then((response) => response.json())
      .then((json) => {
        setTotalBikes(json.length); // Set the total number of bikes
      })
      .catch((error) => {
        console.log('fetch bike data failed', error);
      });

    // Fetch review data
    fetch(`${API_URL}/review`)
      .then((response) => response.json())
      .then((json) => {
        setTotalReviews(json.length); // Set the total number of reviews
      })
      .catch((error) => {
        console.log('fetch review data failed', error);
      });

    // Fetch user data
    fetch(`${API_URL}/user/users`)
      .then((response) => response.json())
      .then((json) => {
        setTotalUsers(json.length); // Set the total number of users
      })
      .catch((error) => {
        console.log('fetch user data failed', error);
      });

  };



  const config = {
    data,
    padding: [50, 30, 40, 40],

    xField: 'Date',
    yField: 'Rentals',
    xAxis: {
      type: 'time',
      tickCount: 5,
    },
  };



  return (
    <>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <Card style={{ backgroundColor: "lightsalmon", width: "20rem", marginRight: "20px" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '1.2rem', color: 'darkcyan' }}>Total Rentals</div>
              <Statistic value={totalRentals} />
              <Progress type="dashboard" percent={100} format={() => totalRentals} />
            </div>
            <ShoppingCartOutlined style={{ fontSize: '3rem', color: 'black' }} />
          </div>
        </Card>
        <Card style={{ backgroundColor: "pink", width: "20rem", marginRight: "20px" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '1.2rem', color: 'darkcyan' }}>Total Bikes</div>
              <Statistic value={totalBikes} />
              <Progress type="dashboard" percent={100} format={() => totalBikes} />
            </div>
            <CarOutlined style={{ fontSize: '3rem', color: 'black' }} />
          </div>
        </Card>
        <Card style={{ backgroundColor: "lightblue", width: "20rem", marginRight: "20px" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '1.2rem', color: 'darkcyan' }}>Total Reviews</div>
              <Statistic value={totalReviews} />
              <Progress type="dashboard" percent={100} format={() => totalReviews} />
            </div>
            <AuditOutlined style={{ fontSize: '3rem', color: 'black' }} />
          </div>
        </Card>
        <Card style={{ backgroundColor: "lightyellow", width: "20rem", marginRight: "20px" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '1.2rem', color: 'darkcyan' }}>Total Users</div>
              <Statistic value={totalUsers} />
              <Progress type="dashboard" percent={100} format={() => totalUsers} />
            </div>
            <UserOutlined style={{ fontSize: '3rem', color: 'black' }} />
          </div>
        </Card>
      </div>

      <Line style={{ height: "40rem" }} {...config} />;
    </>
  )

};

export default DemoLine;

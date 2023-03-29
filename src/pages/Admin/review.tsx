import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import { API_URL } from '../../Services/ajaxservice';
import { Bike } from '../../models/Inventory';



const ReviewTable = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [bikesData, setBikesData] = useState<Bike[]>([]);
//   useEffect(() => {
//     async function fetchReviews() {
//       try {
//         const reviewResponse = await axios.get(`${API_URL}/review`);
//         const bikeResponse = await axios.get(`${API_URL}/bike`);

//         const reviewData = reviewResponse.data.map((review :any )=> {
//           const bike = bikeResponse.data.find((bike: { id: any; }) => bike.id === review.bikeId);
//           return {
//             ...review,
//             bikeName: bike ? bike.bikeName : 'Unknown',
//           };
//         });
//         console.log();
        
//         setReviews(reviewData);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchReviews();
//   }, []);
    
useEffect(() => {
    async function fetchData() {
      const reviewsResponse = await axios.get(`${API_URL}/review`);
      const bikesResponse = await axios.get(`${API_URL}/bike`);
      setReviewsData(reviewsResponse.data);
      setBikesData(bikesResponse.data); 
    }
    fetchData();
}, []);
    
    
    
const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Bike Name',
      dataIndex: 'bikeId',
      key: 'bikeId',
      render: (bikeId: any) => {
        const bike = bikesData.find((bike) => bike.id === bikeId);
        return bike ? bike.name : 'Unknown Bike';
      },
    },
  ];

  return <Table dataSource={reviewsData} columns={columns} />;
};

export default ReviewTable;

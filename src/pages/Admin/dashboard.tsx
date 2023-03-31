// import React, { useState, useEffect } from 'react';
// import { Line } from '@ant-design/plots';
// import { render } from 'react-dom';

// export const DemoLine = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };
//   const config = {
//     data,
//     padding:  [20, 40, 50, 20],
//     xField: 'Date',
//     yField: 'scales',
//     xAxis: {
//       // type: 'timeCat',
//       tickCount: 5,
//     },
//   };

//   return( <Line {...config} />);
// };

// // render(<DemoLine />, document.getElementById('container'));

import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { API_URL } from '../../Services/ajaxservice';

const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(`${API_URL}/Rent/rented`)
      .then((response) => response.json())
      .then((json) => {
        const formattedData = json.map(({ rentedOn, rentedUntil }: any) => ({
          Date: new Date(rentedOn).getTime(),
          Price: rentedUntil,
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    padding: [70, 40, 50, 200],

    xField: 'Date',
    yField: 'Price',
    xAxis: {
      type: 'time',
      tickCount: 5,
    },
  };

  return <Line style={{ height: "40rem" }} {...config} />;
};

export default DemoLine;
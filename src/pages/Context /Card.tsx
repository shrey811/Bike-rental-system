import React from 'react';
import { Card, Button } from 'antd';

interface Cards {
  title: string;
  body: string;
  imageUrl1: string;
  imageUrl2: string;
}

const CustomCard: React.FC<Cards> = ({ title, body, imageUrl1, imageUrl2 }) => {
  return (
    <Card
      title={title}
      cover={
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginRight: 8 }}>
            <img src={imageUrl1} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <img src={imageUrl2} style={{ width: '100%' }} />
          </div>
        </div>
      }
    >
      <p>{body}</p>
          <Button className='button1' type="primary">Rent Now</Button>
    </Card>
  );
};

export default CustomCard;

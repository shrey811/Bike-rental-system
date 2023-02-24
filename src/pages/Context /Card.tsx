import React, { useState } from 'react';
import { Card, Button, Rate } from 'antd';

interface Cards {
  title: string;
  body: string;
  imageUrl1: string;
  imageUrl2: string;
}
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const CustomCard: React.FC<Cards> = ({ title, body, imageUrl1 }) => {
  const [value, setValue] = useState(3);
  return (
    <Card

      hoverable
      title={title}
      cover={
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginRight: 8 }}>
            <img src={imageUrl1} style={{ width: '100%' }} />
          </div>

        </div>
      }
    >
      <span>
        <Rate tooltips={desc} disabled defaultValue={2} value={value} />

      </span>


      <p>{body}</p>
      <Button className='button1' type="primary">Rent Now</Button>
    </Card>
  );
};

export default CustomCard;

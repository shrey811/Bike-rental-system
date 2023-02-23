import { Col, Pagination, PaginationProps, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { getCards } from '../../Services/axios';
import { FORMLAYOUT, gutterSize } from '../../Shared/constants';
import ContentLayout, { MakeBgWhite } from '../../Shared/ContentLayout';
import CustomCard from '../Context /Card';


interface CardProps {
    title: string;
    body: string;
  }

const Inventory: React.FC = () => {
   
    const [cardData, setCardData] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1);
 const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);
    

        useEffect(() => {
            async function fetchCards() {
                const { data, total } = await getCards(page, pageSize);
                setCardData(data);
                setTotal(total);
            };
            fetchCards();
        }, [page, pageSize]);
        function handlePageChange(page: number, pageSize?: number) {
            setPage(page);
            setPageSize(pageSize ?? 10); // default to 10 if pageSize is not specified
          }
        
          const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
            if (type === 'prev') {
              return <a>Previous</a>;
            }
            if (type === 'next') {
              return <a>Next</a>;
            }
            return originalElement;
          };

    return (
        <>
        <ContentLayout pageTitle='' children={undefined}></ContentLayout>
        <MakeBgWhite >
            <Select className="search_box" showSearch ></Select>
<Row gutter={[16,16]}>
              
        {cardData.map((card) => (
          <Col xs={24} md={12} lg={6} key={card.id}>
            <CustomCard
              title={card.title}
              body={card.body}
              imageUrl1="https://via.placeholder.com/300x150.png?text=Image+1"
              imageUrl2="https://via.placeholder.com/300x150.png?text=Image+2"
            />
          </Col>
        ))}
      </Row>
   
       
            <Pagination
                style={{ textAlign: 'end' }}
        current={page}
        pageSize={pageSize}
        total={total}
        onChange={handlePageChange}
        showSizeChanger
                pageSizeOptions={['10', '20', '50']}
                itemRender={itemRender} 
        
      />
            

            </MakeBgWhite>
            </>
    )
}

export default Inventory





    import { Card, Col, Row } from 'antd';
    import React, { useEffect, useState } from 'react';
    import { useParams } from 'react-router-dom';
    import { Bike } from '../../models/Inventory';
    import { getCards } from '../../Services/axios';

    export const BikeDetailsPage: React.FC<{ inventory: Bike[] }> = ({ inventory }) => {


        
    const { id } = useParams<{ id: string }>();
    const bike = inventory.find(b => b.id === parseInt(id));

    const [cardData, setCardData] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
        
    useEffect(() => {
        async function fetchCards() {
            const { data, total } = await getCards(page);
            // sort the cards by rating in descending order
            const sortedData = data.sort((a, b) => b.rating - a.rating);
            // display only the first 6 cards
            const slicedData = sortedData.slice(0, 3);
            setCardData(slicedData);
            setTotal(total);
        };
        fetchCards();
    }, [page]);
        return (
        
            <div style={{

                // display: "grid",
                // gridTemplateColumns: "repeat(3, 1fr)",
                rowGap: "20px",
                padding:"10px",
                
                // alignItems: "center",
                // justifyContent: "center",
                gap: "20px"
            }}>
                {
                                cardData.map((card) => (
                                    <Col key={card.id} style={{
                                        rowGap:"20px",
                                    }}>
                                        <Card style={{ backgroundColor: "rgba(28, 28, 28, 0.8)", color: "white",marginBottom:"20px" }} >
                                            <Row >
                                            <Col xl={12}>
                                            <img src={card?.imageUrl} alt={card?.name} style={{ width: "80%", height: "90%" }} />
                                            </Col>
                                            <Col xl={12}>
                                            <h1 style={{fontSize:"20px",color:"white",display:"flex",alignItems:"flex-start",justifyContent:"flex-start"}}>{card?.name}</h1>
                                            {/* <p>{card?.description}</p> */}
                                            <p>Price: {card?.price} NRS/Hour</p>
                                            <p>Milage: {card?.milage} kmpl</p>
                                                <p>Rating: {card?.rating}</p>
                                            <p>Km Run: {card?.kmRun}</p>
                                                {/* <p>Number Plate: {card?.numberPlate}</p> */}
                                                </Col>
                                                </Row>
                                        </Card>
                                    </Col>
                                    ))
                                    }
        </div>
    );
    };
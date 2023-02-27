import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Bike } from '../../models/Inventory';
import { getCards } from '../../Services/axios';
import { CustomCard } from '../Context /Card';




interface CardParams {
    id: string;
}



const Moreinfo: React.FC = () => {
    const [selectedCard, setSelectedCard] = useState<Bike | null>(null);
    const [inventory, setInventory] = useState<Bike[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { id } = useParams<CardParams>();
    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    };
    async function init() {
        getCards(1, 10).then((response) => {
            setInventory(response.data);
        }
        );
    }
    // Find the selected card from the inventory based on the ID in the URL params
    React.useEffect(() => {
        init();

    }, []);
    useEffect(() => {
        if (inventory.length !== 0) {
            const cardId = parseInt(id);
            const foundCard = inventory.find((card) => card.id === cardId);
            if (!foundCard) {
                setErrorMessage(`No card found with ID ${cardId}`);
            } else {
                setSelectedCard(foundCard);
            }
        }
    }, [id, inventory]);
    if (errorMessage) {
        return <div>{errorMessage}</div>;
    }

    if (!selectedCard) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <CustomCard
                id={selectedCard.id}


                rating={selectedCard.rating}
                kmRun={selectedCard.kmRun}
                milage={selectedCard.milage}
                description={selectedCard.description}
                imageUrl={selectedCard.imageUrl}
                onRent={function (): void {
                    throw new Error('Function not implemented.');
                }}
                name={selectedCard.name}
                numberPlate={selectedCard.numberPlate}
                brandId={selectedCard.brandId}
            // brandName={selectedCard.brandName}

            />

            <button onClick={handleBackClick}>Back</button>
        </div>
    );
};

export default Moreinfo;

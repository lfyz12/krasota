import React from 'react';
import Card from 'react-bootstrap/Card';
const CardService = ({item, ...props}) => {
    return (
        <div>
            <Card className='service_card me-2 mb-2' style={{ width: '18rem', backgroundColor: 'rgb(255, 234, 234)'}}>
                <img alt='s' className='card_image' src={item.image} />
                <Card.Body>
                    <Card.Title className='card_title'>{item.name}</Card.Title>
                    <Card.Text className='card_text'>
                        {item.discription}
                    </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    );
};

export default CardService;
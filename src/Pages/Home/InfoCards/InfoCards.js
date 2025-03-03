import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';


const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9:00am to 5:00pm everyday',
            icon: clock,
            bgClassColor: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Open 9:00am to 5:00pm everyday',
            icon: marker,
            bgClassColor: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us Now',
            description: 'Open 9:00am to 5:00pm everyday',
            icon: phone,
            bgClassColor: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;
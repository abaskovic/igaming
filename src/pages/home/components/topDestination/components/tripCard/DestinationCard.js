
import React from 'react';
import star from '../../assets/star.svg';
import cardBg from '../../assets/cardBg.png';
import Button from '../../../../../../components/ui/button/Button';

import './DestinationCard.css';
const DestinationCard = ({ destination }) => {
    return (
        <div className="destinationItem">
            <div className="destinationImageBlock">
                <img src={destination.imageUrl} alt={destination.city} className='image' />
                <img src={cardBg} className='bgImage' />
                <div className="destinationRating">
                    <img src={star} alt="Star Icon" />
                    <p>{destination.rating}</p>
                </div>
            </div>

            <div className="destinationInfo">
                <h4>{destination.city}</h4>
                <p>{destination.shortDescription}</p>
            </div>

            <div className="destinationPrice">
                <div>
                    <p className='destination'>{destination.city}, {destination.country}</p>
                    <div className='priceInfo'>
                        <span className="price">{destination.price.currency}{destination.price.amount}</span>
                        <span className="interest">x 12 interest free</span>
                    </div>
                </div>

                <Button text="See More" href="/" />
            </div>
        </div>
    );
}

export default DestinationCard;

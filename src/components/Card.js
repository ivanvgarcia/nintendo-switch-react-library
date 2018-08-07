import React from 'react';
import '../containers/Card.css'


const Card = ({img, title, description, releaseDate, price, id}) => {
    return (
        <div className='card'>
            <img src={img} alt='switch game' />
            <div className='card-details'>
                <div className='card-title tc'>
                    <h2>{title}</h2>
                </div>
                <p>{description}</p>
                <p>{releaseDate}</p>
                <div className='card-price'>
                    <button className='card-price--invisible'>Buy Now</button>
                    <button className='card-price--visible'>{price}</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
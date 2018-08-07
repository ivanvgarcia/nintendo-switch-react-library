import React from 'react';
import Card from './Card';

const CardList = ({ games }) => {
    return (
    <div className='container'>
        {
            games.map((user, i) => {
            return (
                <Card 
                    key={user.id} 
                    img={games[i].img}
                    id={games[i].id} 
                    title={games[i].title} 
                    description={games[i].description} 
                    price={games[i].price} 
                    releaseDate={games[i].releaseDate}/>
                )
            })
        }
    </div>
    );
}

export default CardList;
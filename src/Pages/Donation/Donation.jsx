import { useState } from 'react';
import { getCardsFromLocalStorage } from '../../Utility/localStorageUtils';
import { Link } from 'react-router-dom';

const Donation = () => {
  const [showAll, setShowAll] = useState(false);
  const cards = getCardsFromLocalStorage();

  const visibleCards = showAll ? cards : cards.slice(0, 4);

  const getWidthForCategory = (category) => {
    if (category === 'Education' || category === 'Clothing') {
        return '33.333%'; 
    }
    if (category === 'Health' || category === 'Food') {
        return '25%';   
    }
    return 'auto';    
};



  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
        {visibleCards.map((card) => (
          <Link to={`/donation-details/${card.id}`} key={card.id}>
            <div style={{ backgroundColor: card.bgColor }} className="card card-side shadow-xl h-full">
              <figure className="h-full w-1/2">
                <img src={card.image} alt={card.category} className="w-full h-full object-cover" />
              </figure>
              <div className="card-body">
                <div style={{ backgroundColor: card.categoryBoxBgColor, width: getWidthForCategory(card.category) }} className={`inline-block px-3 py-1 rounded ${card.categoryBoxWidth} items-center justify-center`}>
                  <h2 style={{ color: card.categoryTextColor }} className="card-title text-base text-center">{card.category}</h2>
                </div>
                <h3 style={{ color: card.categoryTextColor }} className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="mb-4">Amount: ${card.amount}</p>
                <div className="card-actions justify-start">
                  <button style={{ backgroundColor: card.categoryTextColor, color: 'white' }} className="btn">Show Details</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
  
      {cards.length > 4 && !showAll && (
        <div className="mt-4 text-center">
          <button onClick={() => setShowAll(true)} className="btn btn-primary">Show All</button>
        </div>
      )}
    </div>
  );
  
};

export default Donation;

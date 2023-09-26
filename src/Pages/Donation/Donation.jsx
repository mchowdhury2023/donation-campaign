import { useState } from 'react';
import { getCardsFromLocalStorage } from '../../Utility/localStorageUtils';
import { Link } from 'react-router-dom';

const Donation = () => {
  const [showAll, setShowAll] = useState(false);
  const cards = getCardsFromLocalStorage();

  const visibleCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div>
      <h2 className="text-2xl mb-6 text-center">List of Donations</h2>
      <div className="grid grid-cols-2 gap-4">
        {visibleCards.map((card) => 
        (
          <Link to={`/donation-details/${card.id}`} key={card.id}>
            <div className={`card card-side shadow-xl ${card.bgColor} h-full`}>
              <figure className="h-full w-1/2">
                <img src={card.image} alt={card.category} className="w-full h-full object-cover" />
              </figure>
              <div className="card-body">
                <div className={`inline-block px-3 py-1 rounded ${card.categoryBoxBgColor} ${card.categoryBoxWidth} items-center justify-center`}>
                  <h2 className={`card-title text-base ${card.categoryTextColor} text-center`}>{card.category}</h2>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${card.categoryTextColor}`}>{card.title}</h3>
                <p className="mb-4">Amount: ${card.amount}</p>
                <div className="card-actions justify-start">
                  <button className={`btn ${card.categoryBoxBgColor} text-white`}>Show Details</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      

      {cards.length >= 4 && !showAll && (
        <div className="mt-4 text-center">
          <button onClick={() => setShowAll(true)} className="btn btn-primary">Show All</button>
        </div>
      )}
    </div>
  );
};

export default Donation;

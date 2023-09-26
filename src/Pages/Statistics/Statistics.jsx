import React from 'react';
import { Pie } from 'react-chartjs-2';
import { getCardsFromLocalStorage } from '../../Utility/localStorageUtils';
import { useLoaderData } from 'react-router-dom';
import 'chart.js/auto';

const Statistics = () => {
  const cards = getCardsFromLocalStorage();
  const totalDonatedAmount = cards.reduce((acc, card) => acc + card.amount, 0);

  const donationData= useLoaderData();

  // Assuming you also have access to the donationData in this component.
  // If not, you may need to fetch or import it.
  const totalPossibleDonation = donationData.reduce((acc, donation) => acc + donation.amount, 0);

  const data = {
    labels: ['Donated', 'Total Possible Donation'],
    datasets: [{
      data: [totalDonatedAmount, totalPossibleDonation - totalDonatedAmount],
      backgroundColor: ['#FF6384', '#36A2EB'],
    }]
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Pie key={totalDonatedAmount} data={data} />

    </div>
  );
}

export default Statistics;

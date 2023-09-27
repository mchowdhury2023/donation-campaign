import React from 'react';
import { getCardsFromLocalStorage } from '../../Utility/localStorageUtils';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#FF8042'];

const Statistics = () => {
  const cards = getCardsFromLocalStorage();
  const totalDonatedAmount = cards.reduce((acc, card) => acc + card.amount, 0);
  const donationData = useLoaderData();
  const totalPossibleDonation = donationData.reduce((acc, donation) => acc + donation.amount, 0);

  const pieData = [
    {
      name: 'Donated',
      value: totalDonatedAmount
    },
    {
      name: 'Total Possible Donation',
      value: totalPossibleDonation - totalDonatedAmount
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const percentage = ((value / totalPossibleDonation) * 100).toFixed(2);
  
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
          <label>{`${payload[0].name} : ${percentage}%`}</label>
        </div>
      );
    }
    return null;
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <PieChart width={600} height={600}>
        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={240} fill="#8884d8">
          {
            pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
  
};

export default Statistics;
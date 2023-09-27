import React, { useState, useEffect } from 'react'
import Banner from '../../components/Header/Banner/Banner'
import DonationCategories from '../../components/DonationCategories/DonationCategories'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const [donationCategories, setDonationCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const loaderData = useLoaderData();

  useEffect(() => {
      setDonationCategories(loaderData);
      setFilteredCategories(loaderData);
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = donationCategories.filter(category => category.category.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(donationCategories);
    }
  };

  return (
      <div>
          <Banner onSearch={handleSearch} />
          <DonationCategories donationCategories={filteredCategories} />
      </div>
  );
}


export default Home;

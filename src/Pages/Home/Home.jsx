import React, { useState, useEffect } from 'react'
import Banner from '../../components/Header/Banner/Banner'
import DonationCategories from '../../components/DonationCategories/DonationCategories'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const [donationCategories, setDonationCategories] = useState([]);
  const loaderData = useLoaderData();

  useEffect(() => {
      setDonationCategories(loaderData);
  }, []);

  return (
      <div>
          <Banner />
          <DonationCategories donationCategories={donationCategories} />
      </div>
  );
}

export default Home;

import React from 'react'
import Banner from '../../components/Header/Banner/Banner'
import DonationCategories from '../../components/DonationCategories/DonationCategories'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const donationCategories = useLoaderData();
  console.log(donationCategories);

  return (
    <div>
      <Banner></Banner>
      <DonationCategories donationCategories={donationCategories}></DonationCategories>
    </div>
  )
}

export default Home
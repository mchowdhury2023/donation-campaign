import React from 'react'
import DonationCategory from '../DonationCategory/DonationCategory'
import PropTypes from 'prop-types';

const DonationCategories = ({donationCategories}) => {



   // console.log(donationCategories)
  return (
    <div>
        {/* <h2 className='text-2xl text-center'>Donation Categories</h2> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 mt-10'>
            {
                 Array.isArray(donationCategories) && donationCategories.map(donationCategory => 
                  <DonationCategory donationCategory={donationCategory}></DonationCategory>
                )
            }
        </div>
    </div>
  )
}

export default DonationCategories

DonationCategories.defaultProps = {
  donationCategories: [],
};

import { useLoaderData, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {addCardToLocalStorage, cardExistsInLocalStorage } from '../../Utility/localStorageUtils';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';


const DonationDetails = () => {

    const [donation, setDonation] = useState();
    const { id } = useParams();
    const donationData = useLoaderData();

    useEffect(() => {

      const donationCard = donationData?.find((donation) => donation.id === parseInt(id));
      setDonation(donationCard);

    },[id, donationData])
    
    
  
    if (!donation) return <div>Donation not found!</div>;

    const handleDonate = () => {
        if (!cardExistsInLocalStorage(id)) {
          addCardToLocalStorage(donation);
          toast.success(`Donated $${donation.amount}`);
        } else {
          toast.error('You already donated this card!');
        }
      };
  
    return (
      <div className="flex justify-center items-start min-h-screen bg-gray-100 pt-16">
        <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
          
          <div className="relative">
            <img
              src={`/${donation.image}`}
              alt={donation.category}
              className="w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-black bg-opacity-60"></div>
            <button onClick={handleDonate} style={{backgroundColor: donation.categoryTextColor }} className="absolute bottom-4 left-4 bg-opacity-75 text-white p-2 rounded">
              Donate ${donation.amount}
            </button>
          </div>
          <div className="mt-6">
          <h3 style={{color: donation.categoryTextColor}} className="text-lg font-semibold mb-2">{donation.title}</h3>
            <p>{donation.description}</p>
          </div>
        </div>
        <ToastContainer></ToastContainer>
        
      </div>
    );
  };
  
  export default DonationDetails;
  
  
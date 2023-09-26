
import { useLoaderData, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {addCardToLocalStorage, cardExistsInLocalStorage } from '../../Utility/localStorageUtils';
import { ToastContainer, toast } from 'react-toastify';


const DonationDetails = () => {
    const { id } = useParams();
    const donationData = useLoaderData();
    const donation = donationData.find((d) => d.id === parseInt(id));
  
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
          <h3 className="text-2xl mb-6 text-center">Donation Details</h3>
          <div className="relative">
            <img
              src={`/${donation.image}`}
              alt={donation.category}
              className="w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-black bg-opacity-60"></div>
            <button onClick={handleDonate} className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded">
              Donate ${donation.amount}
            </button>
          </div>
          <div className="mt-6">
            <p>{donation.description}</p>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default DonationDetails;
  
  
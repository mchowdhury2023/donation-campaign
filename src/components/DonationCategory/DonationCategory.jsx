import React from "react";
import { Link } from "react-router-dom";

const DonationCategory = ({ donationCategory }) => {
    const { 
        id, category, title, image, description,
        bgColor, categoryTextColor, categoryBoxBgColor, categoryBoxWidth
    } = donationCategory;

    const getWidthForCategory = (category) => {
        if (category === 'Education' || category === 'Clothing') {
            return '33.333%'; 
        }
        if (category === 'Health' || category === 'Food') {
            return '25%';   
        }
        return 'auto';    
    };
    
    
    const widthStyle = getWidthForCategory(category);

    return (
        <Link to={`/donation-details/${id}`}>
            <div className="card shadow-xl flex flex-col m-4 rounded">
                <figure className="flex-grow rounded-t">
                    <img src={image} alt={category} className="w-full h-full object-cover rounded-t"/>
                </figure>
    
                <div style={{ backgroundColor: bgColor }} className="card-body flex-shrink-0 p-4 rounded-b">
                    <div style={{ backgroundColor: categoryBoxBgColor, width: widthStyle }} className={`inline-block px-3 py-1 rounded ${categoryBoxWidth} items-center justify-center`}>
                        <h2 style={{ color: categoryTextColor }} className="card-title text-base text-center">{category}</h2>
                    </div>
                    <p style={{ color: categoryTextColor }} className="font-bold text-lg mt-2">{title}</p>
                </div>
            </div>
        </Link>
    );
    
};

export default DonationCategory;

import React from "react";
import { Link } from "react-router-dom";

const DonationCategory = ({ donationCategory }) => {
    const { 
        id, category, title, image, description,
        bgColor, categoryTextColor, categoryBoxBgColor, categoryBoxWidth
    } = donationCategory;

    // console.log(categoryBoxBgColor);

    return (
        <Link to={`/donation-details/${id}`}>
        <div className="card shadow-xl flex flex-col m-4 rounded">
            <figure className="flex-grow rounded-t">
                <img src={image} alt={category} className="w-full h-full object-cover rounded-t"/>
            </figure>

            <div className={`card-body ${bgColor} flex-shrink-0 p-4 rounded-b`}>
            <div className={`inline-block px-3 py-1 rounded ${categoryBoxBgColor} ${categoryBoxWidth} items-center justify-center`}>
                    <h2 className={`card-title text-base ${categoryTextColor} text-center`}>{category}</h2>
                </div>
                <p className={`font-bold text-lg ${categoryTextColor} mt-2`}>{title}</p>
            </div>
        </div>
        </Link>
    );
};

export default DonationCategory;

import React from "react";

const DonationCategory = ({ donationCategory }) => {
 // console.log(donationCategory);

 const bgColors = {
    Health: "bg-blue-200",    
    Education: "bg-pink-200", 
    Clothing: "bg-green-200", 
    Food: "bg-pink-100"   
  };

  const categoryColors = {
    Health: "text-blue-700",    
    Education: "text-pink-700", 
    Clothing: "text-green-700", 
    Food: "text-pink-500"  
  };

  const categoryBoxColors = {
    Health: "bg-blue-300 w-1/4",
    Education: "bg-pink-300 w-1/3",
    Clothing: "bg-green-300 w-1/3",
    Food: "bg-pink-200 w-1/4"
  };


  const { category,title, image, description } = donationCategory;
  //console.log(image);
  // Get the color class based on category
  const colorClass = bgColors[category] || "bg-base-100";

  const categoryColorClass = categoryColors[category] || "bg-base-100";

  const boxColorClass = categoryBoxColors[category] || "bg-gray-300";

  return (
    <div className="card shadow-xl flex flex-col m-4 rounded">
    <figure className="flex-grow rounded-t">
      <img src={image} alt={category} className="w-full h-full object-cover rounded-t"/>
    </figure>

    <div className={`card-body ${colorClass} flex-shrink-0 p-4 rounded-b`}>
      <div className={`inline-block px-3 py-1 rounded ${boxColorClass} items-center justify-center`}>
        <h2 className="card-title text-base text-blue-800 text-center">{category}</h2>
      </div>
      <p className={`font-bold text-lg ${categoryColorClass} mt-2`}>{title}</p>
    </div>
  </div>
  );
};

export default DonationCategory;

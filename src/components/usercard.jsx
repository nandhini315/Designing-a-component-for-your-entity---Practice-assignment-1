import React from "react";
import "../index.css"; // Ensure Tailwind CSS is included

const Usercard = () => {
  // Static user details
  const profilePhoto = "./src/assets/profile-pic.png"; // Update based on your assets folder
  const name = "Nandhini";
  const email = "nandz@gmail.com";
  const phone = "+1 234 567 890";
  const address = "sns college of technology,coimbatore";

  return (
    <div className="profile-card">
      <img  id="profile" src={profilePhoto} />
      <div className="text-center mt-4">
        <h2 >{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;

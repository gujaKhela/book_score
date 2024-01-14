import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    // Handle the case where state is not available
    return <div>Error: Details not available</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  document.title = location.state.title;

  console.log(location);

  return (
    <div>
      <button onClick={handleBack}>back</button>
      <p>Details:{location.state.title} </p>
      <p>ID: {location.state.id}</p>
      <img src={location.state.src} alt="" />
      <p>ID: {location.state.id}</p>
    </div>
  );
};

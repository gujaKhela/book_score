import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  if (!location.state) {
    // Handle the case where state is not available
    return <div>Error: Details not available</div>;
  }

  const handleBack = () => {
    navigate(-1, { state: location.state });
  };

  const { src, title, author } = location.state;

  document.title = title;
  console.log(location);

  return (
    <div>
      <button onClick={handleBack}>back</button>
      <p>Details:{title} </p>
      <p>ID: {id}</p>
      <img src={src} alt="" />
      <p>ID: {id}</p>
    </div>
  );
};

import React from "react";
import { useParams,useLocation,useNavigate } from "react-router-dom";

export const Details = () => {
 
  const location = useLocation();
  const navigate = useNavigate();
  const { id,src,title,authors } = useParams();

  if (!id || !src||!title||!authors) {
    // Handle the case where state is not available
    return <div>Error: Details not available</div>;
  }



  const handleBack = () => {
    navigate(-1, { state: location.state });
  };
  

  document.title = title;

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

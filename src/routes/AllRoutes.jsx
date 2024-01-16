import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../_404";
import { About } from "../pages/About";

import { Details } from "../pages/Details";

export const AllRoutes = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id/:src/:title/:authors" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  
  );
};

import React, { useState } from "react";
import { getBrandName } from "./utils";

const Home = () => {
  const brandName = getBrandName()
 
  return (
    <div>
      <p className="para">Home Page for FAA Application</p>
    </div>
  );
};

export default Home;

